import { describe, expect, test } from '@jest/globals';
import { main } from '../src/main';

describe('Main test', () => {
    test('test to get number', () => {
        expect(main(2)).toBe(2);
    });
});