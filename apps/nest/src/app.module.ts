import { Module } from '@nestjs/common';

import { AppController } from '@hc/nest/app.controller';
import { AppService } from '@hc/nest/service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
