
import { NotificationService } from '../../src/application/services/notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    service = new NotificationService();
  });

  it('should send email', async () => {
    const result = await service.sendEmailNotification('test@mail.com', 'Test Subject', 'Test Content');
    expect(result).toBe('Email sent successfully');
  });
});
