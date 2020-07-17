import { equal } from 'assert';
import { sum } from './calc.mjs';

try {
  equal(sum(1, 2), 3);
  console.log('Tests OK');
} catch (error) {
  console.log('Tests KO');
}
