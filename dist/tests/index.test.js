"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
test('merge two sorted arrays', () => {
    expect((0, index_1.merge)([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect((0, index_1.merge)([0, 2, 4], [1, 3, 5])).toEqual([0, 1, 2, 3, 4, 5]);
    expect((0, index_1.merge)([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect((0, index_1.merge)([1, 2, 3], [])).toEqual([1, 2, 3]);
    expect((0, index_1.merge)([1, 3, 5], [2])).toEqual([1, 2, 3, 5]);
    expect((0, index_1.merge)([1], [2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect((0, index_1.merge)([1, 1, 1, 1], [2, 2, 2, 2])).toEqual([1, 1, 1, 1, 2, 2, 2, 2]);
});
