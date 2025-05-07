
import { ReportService } from '../../src/application/services/report.service';
import * as fs from 'fs';

describe('ReportService', () => {
  let service: ReportService;

  beforeEach(() => {
    service = new ReportService();
  });

  it('should generate CSV file', () => {
    const filePath = service.generateSalesCSV();
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it('should generate PDF file', () => {
    const filePath = service.generateInventoryPDF();
    expect(fs.existsSync(filePath)).toBe(true);
  });
});
