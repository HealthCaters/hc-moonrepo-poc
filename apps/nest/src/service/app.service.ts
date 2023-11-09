import { UserAccountModel } from '@hc/shared-models';
import { isEven, isOdd } from '@hc/shared-utils';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! even: ${isEven(10)} odd: ${isOdd(
      10,
    )} model:${UserAccountModel}`;
  }
}
