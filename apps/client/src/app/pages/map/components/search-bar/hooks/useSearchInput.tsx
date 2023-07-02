import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import { ChangeEvent, RefObject, useRef, useState } from 'react';
import {
  convertCoordinatesToFeat,
  convertRegexToCoordinates,
  fetchMapBoxPlaces
} from '../services/SearchBarService';

function useSearchInput({
  setFilterData,
  setIsOpen,
  isOpen,
  createMarker,
  setIsContextOpen
}: UseSearchInputProps) {
  const { userCoordinates } = useCoordinates();

  const [search, setSearch] = useState<string>('');
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);

    if (value === '') {
      setFilterData([]);
      return;
    }

    if (!isOpen) setIsOpen(true);

    const coordinatesSearch = convertRegexToCoordinates({
      coordinates: value
    });

    if (coordinatesSearch) {
      const newFeat = convertCoordinatesToFeat({
        coordinates: coordinatesSearch
      });
      setFilterData([newFeat]);
      return;
    }

    fetchMapBoxPlaces({
      query: value,
      coordinates: userCoordinates,
      setFilterData
    });
  };

  const clearInput = () => {
    setSearch('');
    setFilterData([]);
    ref.current?.focus();
  };

  const handleSearch = ({ coordinates }: HandleSearchProps) => {
    setSearch('');
    setFilterData([]);
    createMarker(coordinates);
    setIsContextOpen(true);
    setIsOpen(false);
  };

  return { search, onInputChange, ref, clearInput, handleSearch };
}

export default useSearchInput;
