import { isEven } from '@hc/shared/utils/isEven';

export function isOdd(n: number) {
  return isEven(n) === false;
}
