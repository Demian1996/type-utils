import { ValueOfArray } from './ValueOfArray';
import { ValueOf } from 'type-fest';
/**
遍历对象数组元素，取出对象元素给定key值的value值，返回联合类型
@example
```
import { Mutable } from './Mutable';

const menu = [
  {
    name: '编辑',
    key: 'edit',
  },
  {
    name: '删除',
    key: 'delete',
  },
] as const;


type A = ValueOfObjectArray<Mutable<typeof menu>, 'key'>;
```
*/

export type ValueOfObjectArray<T extends any[], K extends keyof T[number]> = ValueOf<
  Pick<ValueOfArray<T>, K>
>;
