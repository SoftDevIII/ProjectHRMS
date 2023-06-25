function useMenuActions() {
  function goProfile() {}

  function goHome() {}

  function goSettings() {}

  function goHelp() {}

  const actions: MarkerMenuActions = {
    goHome,
    goProfile,
    goSettings,
    goHelp
  };

  const handleActionSelected = (action: string) => {
    const selectedAction = actions[action];
    if (selectedAction) {
      selectedAction();
    }
  };

  return { handleActionSelected };
}

export default useMenuActions;