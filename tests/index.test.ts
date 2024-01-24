import { merge } from '../src/index';

test('merge two sorted arrays', () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([0, 2, 4], [1, 3, 5])).toEqual([0, 1, 2, 3, 4, 5]);
    expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(merge([1, 3, 5], [2])).toEqual([1, 2, 3, 5]);
    expect(merge([1], [2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([1, 1, 1, 1], [2, 2, 2, 2])).toEqual([1, 1, 1, 1, 2, 2, 2, 2]);
});