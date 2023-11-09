import { AppController } from '@hc/nest/app.controller.js';
import { AppService } from '@hc/nest/service/app.service.js';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
