import { isEven } from './isEven.js';

export function isOdd(n: number) {
  return isEven(n) === false;
}
