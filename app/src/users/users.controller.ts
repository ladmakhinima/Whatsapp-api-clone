import { Controller, Get, Inject, NotFoundException } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Controller('/users')
export class UsersController {
  @Inject(I18nService)
  private readonly i18nService: I18nService;
  @Get()
  getTransalationCo() {
    throw new NotFoundException('username');
    // return this.i18nService.translate('username', { lang: 'fa' });
  }
}
