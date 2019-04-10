
### Ref: [flowup/ngx-common](https://github.com/flowup/ngx-common/blob/28ed31877042a3f74ea57d1b8312786e87bbad39/projects/ngx-common-lib/src/lib/types.d.ts) 
```ts
/**
 * Drop keys `K` from `T` if they are present.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
 */
export type Omit<T, K extends keyof any> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;

/**
 * Drop keys `K` from `T`, where `K` must exist in `T`.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
 */
export type OmitStrict<T, K extends keyof T> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;

/**
 * Like `T & U`, but where there are overlapping properties using the
 * type from U only.
 *
 * @see Old: https://github.com/pelotom/type-zoo/issues/2
 * @see Old: https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 * @see New: https://github.com/pelotom/type-zoo/pull/14#discussion_r183527882
 */
export type Overwrite<T, U> = Omit<T, keyof T & keyof U> & U;

/**
 * Use to prevent a usage of type `T` from being inferred in other generics.
 *
 * Example:
 * declare function assertEqual<T>(actual: T, expected: NoInfer<T>): boolean;
 *
 * Type `T` will now only be inferred based on the type of the `actual` param, and
 * the `expected` param is required to be assignable to the type of `actual`.
 * This allows you to give one particular usage of type `T` full control over how the
 * compiler infers type `T`.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/14829#issuecomment-322267089
 */
export type NoInfer<T> = T & { [K in keyof T]: T[K] };

/**
 * Forgets contextual knowledge of partiality of keys.
 */
export type Purify<T extends string> = { [P in T]: T }[T];

/**
 * Get the public interface of a type. This is useful for working with classes that have private members.
 *
 * export class Foo {
 *   private privateProp: string;
 *
 *   bar(): number {
 *     // ...
 *   }
 * }
 *
 * export type IFoo = Public<Foo>;
 *
 * // Can mock or fake
 * const fakeFoo: IFoo = {
 *   bar(): { return 1;}
 * }
 */
export type Public<T> = { [P in keyof T]: T[P] };
```