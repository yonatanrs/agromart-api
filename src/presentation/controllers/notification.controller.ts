
import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from '../../application/services/notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('email')
  async sendEmail(@Body() body: { to: string; subject: string; content: string }) {
    return this.notificationService.sendEmailNotification(body.to, body.subject, body.content);
  }

  @Post('push')
  async sendPush(@Body() body: { token: string; message: string }) {
    return this.notificationService.sendPushNotification(body.token, body.message);
  }
}
