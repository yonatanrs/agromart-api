
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ReportService } from '../../application/services/report.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('sales')
  getSalesReport(@Res() res: Response) {
    const filePath = this.reportService.generateSalesCSV();
    res.download(filePath);
  }

  @Get('inventory')
  getInventoryReport(@Res() res: Response) {
    const filePath = this.reportService.generateInventoryPDF();
    res.download(filePath);
  }
}
