/**
将readonly去除
@example
```
import { Mutable } from 'type-utils';

interface Person {
  readonly age: number;
}
const abc: Mutable<Person> = {
  age: 1
}
abc.age = 2 // OK
```
*/

export type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
