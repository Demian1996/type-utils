import { ValueOfArray } from './ValueOfArray';
import { ValueOf } from 'type-fest';
/**
遍历对象数组元素，取出对象元素给定key值的value值，返回联合类型
@example
场景描述：页面中维护了一个菜单列表，handle函数中会对key做switch条件语句处理，此时入参中需要将所有menuItem的key值作为联合类型
在不抽离为枚举类型时，可以用如下方式：
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
// 'edit'|'delete'

function handle(key: A) {
  switch(key) {...}
}
```
*/

export type ValueOfObjectArray<T extends any[], K extends keyof T[number]> = ValueOf<
  Pick<ValueOfArray<T>, K>
>;
