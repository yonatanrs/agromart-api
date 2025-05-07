
import { ReportingService } from '../../src/application/services/reporting.service';
import * as fs from 'fs';

describe('ReportingService', () => {
  let service: ReportingService;

  beforeEach(() => {
    service = new ReportingService();
  });

  it('should generate sales report CSV', async () => {
    const filePath = await service.generateSalesReport();
    expect(fs.existsSync(filePath)).toBe(true);
  });
});
