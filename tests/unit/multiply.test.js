import { test } from 'node:test';
import assert from 'node:assert/strict';
import { multiply } from '../../src/utils/multiply.js';

test('multiply — happy path', () => {
  assert.equal(multiply(2, 3), 6);
  assert.equal(multiply(0, 5), 0);
});
