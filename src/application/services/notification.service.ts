
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendEmailNotification(to: string, subject: string, content: string): Promise<string> {
    // Simulasi kirim email
    console.log(\`Sending email to \${to}: \${subject} - \${content}\`);
    return 'Email sent successfully';
  }

  async sendPushNotification(token: string, message: string): Promise<string> {
    // Simulasi push notification
    console.log(\`Push sent to \${token}: \${message}\`);
    return 'Push notification sent';
  }
}
