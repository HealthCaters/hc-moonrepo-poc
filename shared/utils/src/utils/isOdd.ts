import { isEven } from '@hc/shared-utils/utils/isEven.js';

export function isOdd(n: number) {
  return isEven(n) === false;
}
