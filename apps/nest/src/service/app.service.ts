import { UserAccountModel } from '@hc/shared/models/userAccount';
import { isEven } from '@hc/shared/utils/isEven';
import { isOdd } from '@hc/shared/utils/isOdd';
import { Injectable } from '@nestjs/common';

import { getNanoId } from '@hc/nest/nanoutils';

@Injectable()
export class AppService {
  async getHello() {
    return `Hello World! even: ${isEven(10)} odd: ${isOdd(
      10,
    )} model:${UserAccountModel}, nano: ${await getNanoId()}`;
  }
}
