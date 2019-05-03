# My Random TS Stuff

<p align="center"><img src="assets/ts-banner.png" width="95%"/></p>

## Misc
### known-keys
[typescript-remove-index-signature-using-mapped-types-remove-index-signature-using-mapped-types](https://stackoverflow.com/questions/51465182/typescript-remove-index-signature-using-mapped-types-remove-index-signature-using-mapped-types)
```typescript
export type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K
} extends { [_ in keyof T]: infer U } ? U : never;

interface Options {
  key: string;
  title: string;
  [dataProperty: string]: string | number;
}
type KnownKeysOfOptions = KnownKeys<Options>; // 'key' | 'title';
// (vs. type KeysOfOptions = keyof Options // string | number;)
```
### Cast
Type cast an argument. If no type is provided it will default to any
```typescript

export const Cast = <T = any>(arg: any): T => arg;

```
### Overloading a private function
Example on overloading private functions
```typescript

export function someFunction(arg1: string, arg2 = false) {
  return someFunction;

  function someFunction(arg3: undefined): undefined;
  function someFunction(arg3: string | number): string;
  function someFunction(arg3: string | number | undefined) {
    return typeof arg3 == "undefined"
      ? undefined
      : (arg2 && !Number.isNaN(Number(arg3))) || typeof arg3 == "number"
      ? arg1 + "something"
      : arg3;
  }
}

```

## References

### Collections
* [dzharii/awesome-typescript](https://github.com/dzharii/awesome-typescript) A collection of awesome TypeScript resources for client-side and server-side development. Write your awesome JavaScript in TypeScript
  
### Articles/Discussions
#### Releases
* [Announcing TypeScript 3.4 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-3-4-rc/)
  *  Propagated generic type arguments, `globalThis`, `const` assertions (`let x = 10 as const`) ,`--incremental flag`
#### Conditionals
  * [From [BUG] union extend behavior not the same into a type](https://github.com/Microsoft/TypeScript/issues/30960#issuecomment-489067693)
    * [conditional-types-in-typescript](https://artsy.github.io/blog/2018/11/21/conditional-types-in-typescript/)
    *  [TypeScript 2.8: Conditional Types](https://mariusschulz.com/blog/typescript-2-8-conditional-types)
        *  > Since `NonNullable<T>` checks a naked type parameter, it is distributed over a union type `A | B`. This means that `NonNullable<A | B>` is resolved as `NonNullable<A> | NonNullable<B>`
#### React Related
  * [10++ TypeScript Pro tips/patterns with (or without) React](https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680)
  
  * [Writing better Reducers with React and Typescript 3.4](https://blog.usejournal.com/writing-better-reducers-with-react-and-typescript-3-4-30697b926ada)
  * [Typescript & React: Manipulating Prop Types](https://medium.com/@rossbulat/typescript-react-manipulating-prop-types-ec13f841a550)

#### Functional
* [Learn how to create types for curry and Ramda](https://medium.freecodecamp.org/typescript-curry-ramda-types-f747e99744ab)
### Tracking Issue

### Gerneral Utility Types
* [@meta-utils/types](https://github.com/meta-utils/types/tree/master)-A package containing useful TypeScript types
* [types used in aurelia](https://github.com/aurelia/aurelia/blob/master/packages/kernel/src/interfaces.ts)
* [simplytyped](https://github.com/andnp/SimplyTyped) - Yet another typing library. This differs by aiming to be less experimental than others, driven by industry use cases.
* [typepark](https://github.com/kgtkr/typepark) - a new type collection offering tuple manipulation and `Pipe`
* [type-zoo](https://github.com/pelotom/type-zoo) - A menagerie of useful type operators for TypeScript
* [utility-types](https://github.com/piotrwitek/utility-types) - Utility Types for TypeScript (provide compatibility with Flow's Utility Types)
* [ts-essentials](https://github.com/krzkaczor/ts-essentials) - All essential TypeScript types in one place
* [typescript-conditional-types](https://github.com/LeDDGroup/typescript-conditional-types) - Helpers for typescript generic types
* [ts-types-utils](https://github.com/LeDDGroup/ts-types-utils) - Type utilities for typescript 
 * [typescript-test-utils](https://github.com/LeDDGroup/typescript-test-utils) - Helper types for testing your package exported types
 * [@ktb/type-compare](https://github.com/KonTrax/type-compare) - A collection of comparison utility types for Typescript.
  
###  React Related Utility Types
* [rex-tils](https://github.com/Hotell/rex-tils#readme) - Type safe utils for redux actions, epics, effects, react/preact default props, various type guards and TypeScript utils, React util components



### Typescript Function Utilities
* [runtypes](https://github.com/pelotom/runtypes)-Runtime validation for static types
* [@cadre/ts-utils](https://github.com/siggame/Cadre-TS-Utils) - A set of utilities shared between my projects


### Mix of Functions & Types
* [alcalzone-shared](https://github.com/AlCalzone/shared-utils/tree/master) - A set of utilities shared between my projects


### CSS Related
* [mocoolka-css](https://github.com/mocoolka/mocoolka-css) - Mocoolka-css define Css Component with orginal css property and predefine property.
* [csx](https://github.com/typestyle/csx) - Utility functions for TypeStyle
* [csstype](https://github.com/frenic/csstype) - Strict TypeScript and Flow types for style based on MDN data
* [@johanneslumpe/css-types](https://github.com/johanneslumpe/css-types) -TypeScript CSS types and value helpers generated from MDN data
  
### Misc
* [uom-ts](https://github.com/mindbrave/uom-ts) - Units of measure type safety, with no runtime overhead, supporting multiplication and division


## Issues

## Issues with WorkArounds
* [Microsoft/TypeScript-LiteralString Union Autocomplete #29729](https://github.com/Microsoft/TypeScript/issues/29729) 
### WorkAround:
```ts
type LiteralUnion<T extends U, U = string> = T | (U & { zz_IGNORE_ME?: never })
```
Example:
```ts
type Color = LiteralUnion<'red' | 'black'>

var c: Color = 'red'                    // Has intellisense
var d: Color = 'any-string'             // Any string is OK
var d: Color = { zz_IGNORE_ME: '' }     // { zz_IGNORE_ME } placeholder is at the bottom of intellisense list and errors because of never 

type N = LiteralUnion<1 | 2, number> // Works with numbers too
```