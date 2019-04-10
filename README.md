# My Typescript Scratch Pad



## References

### TypeScript Resource Collections
* [dzharii/awesome-typescript](https://github.com/dzharii/awesome-typescript) A collection of awesome TypeScript resources for client-side and server-side development. Write your awesome JavaScript in TypeScript
  
### Articles
* [10++ TypeScript Pro tips/patterns with (or without) React](https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680)

### Gerneral Utility Types
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

## Issues with Hacks
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