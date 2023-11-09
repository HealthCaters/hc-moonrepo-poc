import { UserAccountModel } from '@hc/shared-models/models/userAccount';
import { isEven } from '@hc/shared-utils/utils/isEven';
import { isOdd } from '@hc/shared-utils/utils/isOdd';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! even: ${isEven(10)} odd: ${isOdd(
      10,
    )} model:${UserAccountModel}`;
  }
}
