import { AppController } from '@hc/nest/app.controller';
import { AppService } from '@hc/nest/service/app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
