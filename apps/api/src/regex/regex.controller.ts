import { Body, Controller, Post } from '@nestjs/common';
import CreateRegexDto from './dto/create-regex.dto';
import RegexService from './regex.service';

@Controller('regex')
class RegexController {
  constructor(private readonly regexService: RegexService) {}

  @Post()
  inputValidation(@Body() regex: CreateRegexDto): string {
    this.regexService.regexValidation(
      regex.customer_name,
      regex.customer_last_name,
      regex.password,
      regex.email,
      regex.customer_country
    );
    return 'The data are valid';
  }
}

export default RegexController;
