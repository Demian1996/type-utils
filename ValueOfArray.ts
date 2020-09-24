/**
遍历数组元素，导出元素联合后的类型
@example
```
import { ValueOfArray } from 'type-utils';

const arr = [1, 2, 3] as const;
type ArrayItemUnion = ValueOfArray<typeof arr>;

const item: ArrayItemUnion;
// 1|2|3
```
*/

export type ValueOfArray<T extends any[]> = T[number];
