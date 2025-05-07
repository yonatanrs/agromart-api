
import { Controller, Get } from '@nestjs/common';
import { ReportingService } from '../../application/services/reporting.service';

@Controller('reports')
export class ReportingController {
  constructor(private readonly reportingService: ReportingService) {}

  @Get('sales')
  async getSalesReport() {
    return this.reportingService.generateSalesReport();
  }

  @Get('inventory')
  async getInventoryReport() {
    return this.reportingService.generateInventoryReport();
  }
}
