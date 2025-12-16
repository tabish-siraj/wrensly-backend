
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Bookmark
 * 
 */
export type Bookmark = $Result.DefaultSelection<Prisma.$BookmarkPayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>
/**
 * Model Feed
 * 
 */
export type Feed = $Result.DefaultSelection<Prisma.$FeedPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model ProfileAttachment
 * 
 */
export type ProfileAttachment = $Result.DefaultSelection<Prisma.$ProfileAttachmentPayload>
/**
 * Model PostAttachment
 * 
 */
export type PostAttachment = $Result.DefaultSelection<Prisma.$PostAttachmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PostType: {
  POST: 'POST',
  COMMENT: 'COMMENT',
  QUOTE: 'QUOTE',
  REPOST: 'REPOST'
};

export type PostType = (typeof PostType)[keyof typeof PostType]

}

export type PostType = $Enums.PostType

export const PostType: typeof $Enums.PostType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feed`: Exposes CRUD operations for the **Feed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feeds
    * const feeds = await prisma.feed.findMany()
    * ```
    */
  get feed(): Prisma.FeedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileAttachment`: Exposes CRUD operations for the **ProfileAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileAttachments
    * const profileAttachments = await prisma.profileAttachment.findMany()
    * ```
    */
  get profileAttachment(): Prisma.ProfileAttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postAttachment`: Exposes CRUD operations for the **PostAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostAttachments
    * const postAttachments = await prisma.postAttachment.findMany()
    * ```
    */
  get postAttachment(): Prisma.PostAttachmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql


  /**
   * Prisma.skip
   */
  export import skip = runtime.skip


  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Profile: 'Profile',
    Post: 'Post',
    Like: 'Like',
    Bookmark: 'Bookmark',
    Follow: 'Follow',
    Feed: 'Feed',
    Attachment: 'Attachment',
    ProfileAttachment: 'ProfileAttachment',
    PostAttachment: 'PostAttachment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "post" | "like" | "bookmark" | "follow" | "feed" | "attachment" | "profileAttachment" | "postAttachment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Bookmark: {
        payload: Prisma.$BookmarkPayload<ExtArgs>
        fields: Prisma.BookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findFirst: {
            args: Prisma.BookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findMany: {
            args: Prisma.BookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          create: {
            args: Prisma.BookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          createMany: {
            args: Prisma.BookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          delete: {
            args: Prisma.BookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          update: {
            args: Prisma.BookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          upsert: {
            args: Prisma.BookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.BookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
          }
        }
      }
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      Feed: {
        payload: Prisma.$FeedPayload<ExtArgs>
        fields: Prisma.FeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          findFirst: {
            args: Prisma.FeedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          findMany: {
            args: Prisma.FeedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>[]
          }
          create: {
            args: Prisma.FeedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          createMany: {
            args: Prisma.FeedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>[]
          }
          delete: {
            args: Prisma.FeedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          update: {
            args: Prisma.FeedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          deleteMany: {
            args: Prisma.FeedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>[]
          }
          upsert: {
            args: Prisma.FeedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          aggregate: {
            args: Prisma.FeedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeed>
          }
          groupBy: {
            args: Prisma.FeedGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedCountArgs<ExtArgs>
            result: $Utils.Optional<FeedCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      ProfileAttachment: {
        payload: Prisma.$ProfileAttachmentPayload<ExtArgs>
        fields: Prisma.ProfileAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload>
          }
          findFirst: {
            args: Prisma.ProfileAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload>
          }
          findMany: {
            args: Prisma.ProfileAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload>[]
          }
          create: {
            args: Prisma.ProfileAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload>
          }
          createMany: {
            args: Prisma.ProfileAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload>[]
          }
          delete: {
            args: Prisma.ProfileAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload>
          }
          update: {
            args: Prisma.ProfileAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.ProfileAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.ProfileAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileAttachmentPayload>
          }
          aggregate: {
            args: Prisma.ProfileAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileAttachment>
          }
          groupBy: {
            args: Prisma.ProfileAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileAttachmentCountAggregateOutputType> | number
          }
        }
      }
      PostAttachment: {
        payload: Prisma.$PostAttachmentPayload<ExtArgs>
        fields: Prisma.PostAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload>
          }
          findFirst: {
            args: Prisma.PostAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload>
          }
          findMany: {
            args: Prisma.PostAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload>[]
          }
          create: {
            args: Prisma.PostAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload>
          }
          createMany: {
            args: Prisma.PostAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload>[]
          }
          delete: {
            args: Prisma.PostAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload>
          }
          update: {
            args: Prisma.PostAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.PostAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.PostAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAttachmentPayload>
          }
          aggregate: {
            args: Prisma.PostAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostAttachment>
          }
          groupBy: {
            args: Prisma.PostAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<PostAttachmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    post?: PostOmit
    like?: LikeOmit
    bookmark?: BookmarkOmit
    follow?: FollowOmit
    feed?: FeedOmit
    attachment?: AttachmentOmit
    profileAttachment?: ProfileAttachmentOmit
    postAttachment?: PostAttachmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    likes: number
    bookmarks: number
    followers: number
    following: number
    feed: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
    followers?: boolean | UserCountOutputTypeCountFollowersArgs
    following?: boolean | UserCountOutputTypeCountFollowingArgs
    feed?: boolean | UserCountOutputTypeCountFeedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput | $Types.Skip
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedWhereInput | $Types.Skip
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    attachments: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | ProfileCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileAttachmentWhereInput | $Types.Skip
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    children: number
    attachments: number
    likes: number
    bookmarks: number
    feeds: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | PostCountOutputTypeCountChildrenArgs
    attachments?: boolean | PostCountOutputTypeCountAttachmentsArgs
    likes?: boolean | PostCountOutputTypeCountLikesArgs
    bookmarks?: boolean | PostCountOutputTypeCountBookmarksArgs
    feeds?: boolean | PostCountOutputTypeCountFeedsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput | $Types.Skip
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostAttachmentWhereInput | $Types.Skip
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput | $Types.Skip
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput | $Types.Skip
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountFeedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedWhereInput | $Types.Skip
  }


  /**
   * Count Type AttachmentCountOutputType
   */

  export type AttachmentCountOutputType = {
    postAttachments: number
    profileAttachments: number
  }

  export type AttachmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postAttachments?: boolean | AttachmentCountOutputTypeCountPostAttachmentsArgs
    profileAttachments?: boolean | AttachmentCountOutputTypeCountProfileAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * AttachmentCountOutputType without action
   */
  export type AttachmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttachmentCountOutputType
     */
    select?: AttachmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttachmentCountOutputType without action
   */
  export type AttachmentCountOutputTypeCountPostAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostAttachmentWhereInput | $Types.Skip
  }

  /**
   * AttachmentCountOutputType without action
   */
  export type AttachmentCountOutputTypeCountProfileAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileAttachmentWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    isVerified: boolean | null
    isEmailVerified: boolean | null
    isAdmin: boolean | null
    isBanned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    emailVerificationToken: string | null
    emailVerificationExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    isVerified: boolean | null
    isEmailVerified: boolean | null
    isAdmin: boolean | null
    isBanned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    emailVerificationToken: string | null
    emailVerificationExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    isActive: number
    isVerified: number
    isEmailVerified: number
    isAdmin: number
    isBanned: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    passwordResetToken: number
    passwordResetExpires: number
    emailVerificationToken: number
    emailVerificationExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true | $Types.Skip
    username?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
    isActive?: true | $Types.Skip
    isVerified?: true | $Types.Skip
    isEmailVerified?: true | $Types.Skip
    isAdmin?: true | $Types.Skip
    isBanned?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    passwordResetToken?: true | $Types.Skip
    passwordResetExpires?: true | $Types.Skip
    emailVerificationToken?: true | $Types.Skip
    emailVerificationExpires?: true | $Types.Skip
  }

  export type UserMaxAggregateInputType = {
    id?: true | $Types.Skip
    username?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
    isActive?: true | $Types.Skip
    isVerified?: true | $Types.Skip
    isEmailVerified?: true | $Types.Skip
    isAdmin?: true | $Types.Skip
    isBanned?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    passwordResetToken?: true | $Types.Skip
    passwordResetExpires?: true | $Types.Skip
    emailVerificationToken?: true | $Types.Skip
    emailVerificationExpires?: true | $Types.Skip
  }

  export type UserCountAggregateInputType = {
    id?: true | $Types.Skip
    username?: true | $Types.Skip
    email?: true | $Types.Skip
    password?: true | $Types.Skip
    isActive?: true | $Types.Skip
    isVerified?: true | $Types.Skip
    isEmailVerified?: true | $Types.Skip
    isAdmin?: true | $Types.Skip
    isBanned?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    passwordResetToken?: true | $Types.Skip
    passwordResetExpires?: true | $Types.Skip
    emailVerificationToken?: true | $Types.Skip
    emailVerificationExpires?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput | $Types.Skip
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[] | $Types.Skip
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string | null
    email: string
    password: string
    isActive: boolean
    isVerified: boolean
    isEmailVerified: boolean
    isAdmin: boolean
    isBanned: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    emailVerificationToken: string | null
    emailVerificationExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    username?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    passwordResetToken?: boolean | $Types.Skip
    passwordResetExpires?: boolean | $Types.Skip
    emailVerificationToken?: boolean | $Types.Skip
    emailVerificationExpires?: boolean | $Types.Skip
    profile?: boolean | User$profileArgs<ExtArgs> | $Types.Skip
    posts?: boolean | User$postsArgs<ExtArgs> | $Types.Skip
    likes?: boolean | User$likesArgs<ExtArgs> | $Types.Skip
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs> | $Types.Skip
    followers?: boolean | User$followersArgs<ExtArgs> | $Types.Skip
    following?: boolean | User$followingArgs<ExtArgs> | $Types.Skip
    feed?: boolean | User$feedArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    username?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    passwordResetToken?: boolean | $Types.Skip
    passwordResetExpires?: boolean | $Types.Skip
    emailVerificationToken?: boolean | $Types.Skip
    emailVerificationExpires?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    username?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    passwordResetToken?: boolean | $Types.Skip
    passwordResetExpires?: boolean | $Types.Skip
    emailVerificationToken?: boolean | $Types.Skip
    emailVerificationExpires?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean | $Types.Skip
    username?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    password?: boolean | $Types.Skip
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    passwordResetToken?: boolean | $Types.Skip
    passwordResetExpires?: boolean | $Types.Skip
    emailVerificationToken?: boolean | $Types.Skip
    emailVerificationExpires?: boolean | $Types.Skip
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "isActive" | "isVerified" | "isEmailVerified" | "isAdmin" | "isBanned" | "createdAt" | "updatedAt" | "deletedAt" | "passwordResetToken" | "passwordResetExpires" | "emailVerificationToken" | "emailVerificationExpires", ExtArgs["result"]["user"], $Types.Skip>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs> | $Types.Skip
    posts?: boolean | User$postsArgs<ExtArgs> | $Types.Skip
    likes?: boolean | User$likesArgs<ExtArgs> | $Types.Skip
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs> | $Types.Skip
    followers?: boolean | User$followersArgs<ExtArgs> | $Types.Skip
    following?: boolean | User$followingArgs<ExtArgs> | $Types.Skip
    feed?: boolean | User$feedArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
      followers: Prisma.$FollowPayload<ExtArgs>[]
      following: Prisma.$FollowPayload<ExtArgs>[]
      feed: Prisma.$FeedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string | null
      email: string
      password: string
      isActive: boolean
      isVerified: boolean
      isEmailVerified: boolean
      isAdmin: boolean
      isBanned: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      passwordResetToken: string | null
      passwordResetExpires: Date | null
      emailVerificationToken: string | null
      emailVerificationExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    followers<T extends User$followersArgs<ExtArgs> = {}>(args?: Subset<T, User$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends User$followingArgs<ExtArgs> = {}>(args?: Subset<T, User$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feed<T extends User$feedArgs<ExtArgs> = {}>(args?: Subset<T, User$feedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly isBanned: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetExpires: FieldRef<"User", 'DateTime'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput | $Types.Skip
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput | $Types.Skip
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    cursor?: PostWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput | $Types.Skip
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[] | $Types.Skip
    cursor?: LikeWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput | $Types.Skip
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[] | $Types.Skip
    cursor?: BookmarkWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.followers
   */
  export type User$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput | $Types.Skip
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[] | $Types.Skip
    cursor?: FollowWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.following
   */
  export type User$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput | $Types.Skip
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[] | $Types.Skip
    cursor?: FollowWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User.feed
   */
  export type User$feedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    where?: FeedWhereInput | $Types.Skip
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[] | $Types.Skip
    cursor?: FeedWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    bio: string | null
    avatar: string | null
    city: string | null
    state: string | null
    country: string | null
    phone: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    bio: string | null
    avatar: string | null
    city: string | null
    state: string | null
    country: string | null
    phone: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    dateOfBirth: number
    gender: number
    bio: number
    avatar: number
    city: number
    state: number
    country: number
    phone: number
    website: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    firstName?: true | $Types.Skip
    lastName?: true | $Types.Skip
    dateOfBirth?: true | $Types.Skip
    gender?: true | $Types.Skip
    bio?: true | $Types.Skip
    avatar?: true | $Types.Skip
    city?: true | $Types.Skip
    state?: true | $Types.Skip
    country?: true | $Types.Skip
    phone?: true | $Types.Skip
    website?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type ProfileMaxAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    firstName?: true | $Types.Skip
    lastName?: true | $Types.Skip
    dateOfBirth?: true | $Types.Skip
    gender?: true | $Types.Skip
    bio?: true | $Types.Skip
    avatar?: true | $Types.Skip
    city?: true | $Types.Skip
    state?: true | $Types.Skip
    country?: true | $Types.Skip
    phone?: true | $Types.Skip
    website?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type ProfileCountAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    firstName?: true | $Types.Skip
    lastName?: true | $Types.Skip
    dateOfBirth?: true | $Types.Skip
    gender?: true | $Types.Skip
    bio?: true | $Types.Skip
    avatar?: true | $Types.Skip
    city?: true | $Types.Skip
    state?: true | $Types.Skip
    country?: true | $Types.Skip
    phone?: true | $Types.Skip
    website?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput | $Types.Skip
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[] | $Types.Skip
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    bio: string | null
    avatar: string | null
    city: string | null
    state: string | null
    country: string | null
    phone: string | null
    website: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    firstName?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    dateOfBirth?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    bio?: boolean | $Types.Skip
    avatar?: boolean | $Types.Skip
    city?: boolean | $Types.Skip
    state?: boolean | $Types.Skip
    country?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    website?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    attachments?: boolean | Profile$attachmentsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    firstName?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    dateOfBirth?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    bio?: boolean | $Types.Skip
    avatar?: boolean | $Types.Skip
    city?: boolean | $Types.Skip
    state?: boolean | $Types.Skip
    country?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    website?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    firstName?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    dateOfBirth?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    bio?: boolean | $Types.Skip
    avatar?: boolean | $Types.Skip
    city?: boolean | $Types.Skip
    state?: boolean | $Types.Skip
    country?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    website?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    firstName?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    dateOfBirth?: boolean | $Types.Skip
    gender?: boolean | $Types.Skip
    bio?: boolean | $Types.Skip
    avatar?: boolean | $Types.Skip
    city?: boolean | $Types.Skip
    state?: boolean | $Types.Skip
    country?: boolean | $Types.Skip
    phone?: boolean | $Types.Skip
    website?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "dateOfBirth" | "gender" | "bio" | "avatar" | "city" | "state" | "country" | "phone" | "website" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["profile"], $Types.Skip>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    attachments?: boolean | Profile$attachmentsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      attachments: Prisma.$ProfileAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      firstName: string | null
      lastName: string | null
      dateOfBirth: Date | null
      gender: string | null
      bio: string | null
      avatar: string | null
      city: string | null
      state: string | null
      country: string | null
      phone: string | null
      website: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attachments<T extends Profile$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
    readonly dateOfBirth: FieldRef<"Profile", 'DateTime'>
    readonly gender: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly avatar: FieldRef<"Profile", 'String'>
    readonly city: FieldRef<"Profile", 'String'>
    readonly state: FieldRef<"Profile", 'String'>
    readonly country: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly website: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly deletedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number | $Types.Skip
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * Limit how many Profiles to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * Limit how many Profiles to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput | $Types.Skip
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Profile.attachments
   */
  export type Profile$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    where?: ProfileAttachmentWhereInput | $Types.Skip
    orderBy?: ProfileAttachmentOrderByWithRelationInput | ProfileAttachmentOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProfileAttachmentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProfileAttachmentScalarFieldEnum | ProfileAttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.PostType | null
    userId: string | null
    parentId: string | null
    rootId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.PostType | null
    userId: string | null
    parentId: string | null
    rootId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    content: number
    type: number
    userId: number
    parentId: number
    rootId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true | $Types.Skip
    content?: true | $Types.Skip
    type?: true | $Types.Skip
    userId?: true | $Types.Skip
    parentId?: true | $Types.Skip
    rootId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type PostMaxAggregateInputType = {
    id?: true | $Types.Skip
    content?: true | $Types.Skip
    type?: true | $Types.Skip
    userId?: true | $Types.Skip
    parentId?: true | $Types.Skip
    rootId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type PostCountAggregateInputType = {
    id?: true | $Types.Skip
    content?: true | $Types.Skip
    type?: true | $Types.Skip
    userId?: true | $Types.Skip
    parentId?: true | $Types.Skip
    rootId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput | $Types.Skip
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[] | $Types.Skip
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    content: string | null
    type: $Enums.PostType
    userId: string
    parentId: string | null
    rootId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    content?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    rootId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Post$parentArgs<ExtArgs> | $Types.Skip
    children?: boolean | Post$childrenArgs<ExtArgs> | $Types.Skip
    attachments?: boolean | Post$attachmentsArgs<ExtArgs> | $Types.Skip
    likes?: boolean | Post$likesArgs<ExtArgs> | $Types.Skip
    bookmarks?: boolean | Post$bookmarksArgs<ExtArgs> | $Types.Skip
    feeds?: boolean | Post$feedsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    content?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    rootId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Post$parentArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    content?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    rootId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Post$parentArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean | $Types.Skip
    content?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    parentId?: boolean | $Types.Skip
    rootId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "type" | "userId" | "parentId" | "rootId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["post"], $Types.Skip>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Post$parentArgs<ExtArgs> | $Types.Skip
    children?: boolean | Post$childrenArgs<ExtArgs> | $Types.Skip
    attachments?: boolean | Post$attachmentsArgs<ExtArgs> | $Types.Skip
    likes?: boolean | Post$likesArgs<ExtArgs> | $Types.Skip
    bookmarks?: boolean | Post$bookmarksArgs<ExtArgs> | $Types.Skip
    feeds?: boolean | Post$feedsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Post$parentArgs<ExtArgs> | $Types.Skip
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    parent?: boolean | Post$parentArgs<ExtArgs> | $Types.Skip
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$PostPayload<ExtArgs> | null
      children: Prisma.$PostPayload<ExtArgs>[]
      attachments: Prisma.$PostAttachmentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
      feeds: Prisma.$FeedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string | null
      type: $Enums.PostType
      userId: string
      parentId: string | null
      rootId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Post$parentArgs<ExtArgs> = {}>(args?: Subset<T, Post$parentArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Post$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Post$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Post$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Post$likesArgs<ExtArgs> = {}>(args?: Subset<T, Post$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends Post$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Post$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feeds<T extends Post$feedsArgs<ExtArgs> = {}>(args?: Subset<T, Post$feedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly type: FieldRef<"Post", 'PostType'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly parentId: FieldRef<"Post", 'String'>
    readonly rootId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly deletedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number | $Types.Skip
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * Limit how many Posts to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * Limit how many Posts to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput | $Types.Skip
    /**
     * Limit how many Posts to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Post.parent
   */
  export type Post$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput | $Types.Skip
  }

  /**
   * Post.children
   */
  export type Post$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput | $Types.Skip
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[] | $Types.Skip
    cursor?: PostWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post.attachments
   */
  export type Post$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    where?: PostAttachmentWhereInput | $Types.Skip
    orderBy?: PostAttachmentOrderByWithRelationInput | PostAttachmentOrderByWithRelationInput[] | $Types.Skip
    cursor?: PostAttachmentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: PostAttachmentScalarFieldEnum | PostAttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post.likes
   */
  export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput | $Types.Skip
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[] | $Types.Skip
    cursor?: LikeWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post.bookmarks
   */
  export type Post$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput | $Types.Skip
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[] | $Types.Skip
    cursor?: BookmarkWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post.feeds
   */
  export type Post$feedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    where?: FeedWhereInput | $Types.Skip
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[] | $Types.Skip
    cursor?: FeedWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    id?: true | $Types.Skip
    postId?: true | $Types.Skip
    userId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type LikeMaxAggregateInputType = {
    id?: true | $Types.Skip
    postId?: true | $Types.Skip
    userId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type LikeCountAggregateInputType = {
    id?: true | $Types.Skip
    postId?: true | $Types.Skip
    userId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput | $Types.Skip
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[] | $Types.Skip
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: string
    postId: string
    userId: string
    createdAt: Date
    deletedAt: Date | null
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "createdAt" | "deletedAt", ExtArgs["result"]["like"], $Types.Skip>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'String'>
    readonly postId: FieldRef<"Like", 'String'>
    readonly userId: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
    readonly deletedAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number | $Types.Skip
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput | $Types.Skip
    /**
     * Limit how many Likes to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput | $Types.Skip
    /**
     * Limit how many Likes to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput | $Types.Skip
    /**
     * Limit how many Likes to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type BookmarkMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type BookmarkCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type BookmarkMinAggregateInputType = {
    id?: true | $Types.Skip
    postId?: true | $Types.Skip
    userId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type BookmarkMaxAggregateInputType = {
    id?: true | $Types.Skip
    postId?: true | $Types.Skip
    userId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type BookmarkCountAggregateInputType = {
    id?: true | $Types.Skip
    postId?: true | $Types.Skip
    userId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput | $Types.Skip
    orderBy?: BookmarkOrderByWithAggregationInput | BookmarkOrderByWithAggregationInput[] | $Types.Skip
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: BookmarkScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: BookmarkCountAggregateInputType | true
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    id: string
    postId: string
    userId: string
    createdAt: Date
    deletedAt: Date | null
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectScalar = {
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
  }

  export type BookmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "createdAt" | "deletedAt", ExtArgs["result"]["bookmark"], $Types.Skip>
  export type BookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type BookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type BookmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $BookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmark"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }

  type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = $Result.GetResult<Prisma.$BookmarkPayload, S>

  type BookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'], meta: { name: 'Bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkFindUniqueArgs>(args: SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkFindFirstArgs>(args?: SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkFindManyArgs>(args?: SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
     */
    create<T extends BookmarkCreateArgs>(args: SelectSubset<T, BookmarkCreateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookmarks.
     * @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkCreateManyArgs>(args?: SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {BookmarkCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
     */
    delete<T extends BookmarkDeleteArgs>(args: SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkUpdateArgs>(args: SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkDeleteManyArgs>(args?: SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkUpdateManyArgs>(args: SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks and returns the data updated in the database.
     * @param {BookmarkUpdateManyAndReturnArgs} args - Arguments to update many Bookmarks.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkUpsertArgs>(args: SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmark model
   */
  readonly fields: BookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bookmark model
   */
  interface BookmarkFieldRefs {
    readonly id: FieldRef<"Bookmark", 'String'>
    readonly postId: FieldRef<"Bookmark", 'String'>
    readonly userId: FieldRef<"Bookmark", 'String'>
    readonly createdAt: FieldRef<"Bookmark", 'DateTime'>
    readonly deletedAt: FieldRef<"Bookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmark findUnique
   */
  export type BookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findFirst
   */
  export type BookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number | $Types.Skip
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }

  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Bookmark createManyAndReturn
   */
  export type BookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput | $Types.Skip
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Bookmark updateManyAndReturn
   */
  export type BookmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput | $Types.Skip
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }

  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput | $Types.Skip
    /**
     * Limit how many Bookmarks to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Bookmark without action
   */
  export type BookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
  }


  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowMinAggregateOutputType = {
    id: string | null
    followerId: string | null
    followingId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type FollowMaxAggregateOutputType = {
    id: string | null
    followerId: string | null
    followingId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type FollowCountAggregateOutputType = {
    id: number
    followerId: number
    followingId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type FollowMinAggregateInputType = {
    id?: true | $Types.Skip
    followerId?: true | $Types.Skip
    followingId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type FollowMaxAggregateInputType = {
    id?: true | $Types.Skip
    followerId?: true | $Types.Skip
    followingId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type FollowCountAggregateInputType = {
    id?: true | $Types.Skip
    followerId?: true | $Types.Skip
    followingId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput | $Types.Skip
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[] | $Types.Skip
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: FollowCountAggregateInputType | true
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    id: string
    followerId: string
    followingId: string
    createdAt: Date
    deletedAt: Date | null
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    followerId?: boolean | $Types.Skip
    followingId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    follower?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    following?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    followerId?: boolean | $Types.Skip
    followingId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    follower?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    following?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    followerId?: boolean | $Types.Skip
    followingId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    follower?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    following?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectScalar = {
    id?: boolean | $Types.Skip
    followerId?: boolean | $Types.Skip
    followingId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
  }

  export type FollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "followerId" | "followingId" | "createdAt" | "deletedAt", ExtArgs["result"]["follow"], $Types.Skip>
  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    following?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type FollowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    following?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type FollowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    following?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {
      follower: Prisma.$UserPayload<ExtArgs>
      following: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      followerId: string
      followingId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowFindManyArgs>(args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends FollowCreateArgs>(args: SelectSubset<T, FollowCreateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowCreateManyArgs>(args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends FollowDeleteArgs>(args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpdateArgs>(args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowDeleteManyArgs>(args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpdateManyArgs>(args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {FollowUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FollowUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    following<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Follow model
   */
  interface FollowFieldRefs {
    readonly id: FieldRef<"Follow", 'String'>
    readonly followerId: FieldRef<"Follow", 'String'>
    readonly followingId: FieldRef<"Follow", 'String'>
    readonly createdAt: FieldRef<"Follow", 'DateTime'>
    readonly deletedAt: FieldRef<"Follow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number | $Types.Skip
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Follow createManyAndReturn
   */
  export type FollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput | $Types.Skip
    /**
     * Limit how many Follows to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Follow updateManyAndReturn
   */
  export type FollowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput | $Types.Skip
    /**
     * Limit how many Follows to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput | $Types.Skip
    /**
     * Limit how many Follows to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null
  }


  /**
   * Model Feed
   */

  export type AggregateFeed = {
    _count: FeedCountAggregateOutputType | null
    _min: FeedMinAggregateOutputType | null
    _max: FeedMaxAggregateOutputType | null
  }

  export type FeedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type FeedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    createdAt: Date | null
  }

  export type FeedCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    createdAt: number
    _all: number
  }


  export type FeedMinAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    postId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
  }

  export type FeedMaxAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    postId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
  }

  export type FeedCountAggregateInputType = {
    id?: true | $Types.Skip
    userId?: true | $Types.Skip
    postId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type FeedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feed to aggregate.
     */
    where?: FeedWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feeds
    **/
    _count?: true | FeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedMaxAggregateInputType
  }

  export type GetFeedAggregateType<T extends FeedAggregateArgs> = {
        [P in keyof T & keyof AggregateFeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeed[P]>
      : GetScalarType<T[P], AggregateFeed[P]>
  }




  export type FeedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedWhereInput | $Types.Skip
    orderBy?: FeedOrderByWithAggregationInput | FeedOrderByWithAggregationInput[] | $Types.Skip
    by: FeedScalarFieldEnum[] | FeedScalarFieldEnum
    having?: FeedScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: FeedCountAggregateInputType | true
    _min?: FeedMinAggregateInputType
    _max?: FeedMaxAggregateInputType
  }

  export type FeedGroupByOutputType = {
    id: string
    userId: string
    postId: string
    createdAt: Date
    _count: FeedCountAggregateOutputType | null
    _min: FeedMinAggregateOutputType | null
    _max: FeedMaxAggregateOutputType | null
  }

  type GetFeedGroupByPayload<T extends FeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedGroupByOutputType[P]>
            : GetScalarType<T[P], FeedGroupByOutputType[P]>
        }
      >
    >


  export type FeedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["feed"]>

  export type FeedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["feed"]>

  export type FeedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["feed"]>

  export type FeedSelectScalar = {
    id?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
  }

  export type FeedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "createdAt", ExtArgs["result"]["feed"], $Types.Skip>
  export type FeedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type FeedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type FeedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $FeedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feed"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
      createdAt: Date
    }, ExtArgs["result"]["feed"]>
    composites: {}
  }

  type FeedGetPayload<S extends boolean | null | undefined | FeedDefaultArgs> = $Result.GetResult<Prisma.$FeedPayload, S>

  type FeedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedCountAggregateInputType | true
    }

  export interface FeedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feed'], meta: { name: 'Feed' } }
    /**
     * Find zero or one Feed that matches the filter.
     * @param {FeedFindUniqueArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedFindUniqueArgs>(args: SelectSubset<T, FeedFindUniqueArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedFindUniqueOrThrowArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindFirstArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedFindFirstArgs>(args?: SelectSubset<T, FeedFindFirstArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindFirstOrThrowArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feeds
     * const feeds = await prisma.feed.findMany()
     * 
     * // Get first 10 Feeds
     * const feeds = await prisma.feed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedWithIdOnly = await prisma.feed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedFindManyArgs>(args?: SelectSubset<T, FeedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feed.
     * @param {FeedCreateArgs} args - Arguments to create a Feed.
     * @example
     * // Create one Feed
     * const Feed = await prisma.feed.create({
     *   data: {
     *     // ... data to create a Feed
     *   }
     * })
     * 
     */
    create<T extends FeedCreateArgs>(args: SelectSubset<T, FeedCreateArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feeds.
     * @param {FeedCreateManyArgs} args - Arguments to create many Feeds.
     * @example
     * // Create many Feeds
     * const feed = await prisma.feed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedCreateManyArgs>(args?: SelectSubset<T, FeedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feeds and returns the data saved in the database.
     * @param {FeedCreateManyAndReturnArgs} args - Arguments to create many Feeds.
     * @example
     * // Create many Feeds
     * const feed = await prisma.feed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feeds and only return the `id`
     * const feedWithIdOnly = await prisma.feed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feed.
     * @param {FeedDeleteArgs} args - Arguments to delete one Feed.
     * @example
     * // Delete one Feed
     * const Feed = await prisma.feed.delete({
     *   where: {
     *     // ... filter to delete one Feed
     *   }
     * })
     * 
     */
    delete<T extends FeedDeleteArgs>(args: SelectSubset<T, FeedDeleteArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feed.
     * @param {FeedUpdateArgs} args - Arguments to update one Feed.
     * @example
     * // Update one Feed
     * const feed = await prisma.feed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedUpdateArgs>(args: SelectSubset<T, FeedUpdateArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feeds.
     * @param {FeedDeleteManyArgs} args - Arguments to filter Feeds to delete.
     * @example
     * // Delete a few Feeds
     * const { count } = await prisma.feed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedDeleteManyArgs>(args?: SelectSubset<T, FeedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feeds
     * const feed = await prisma.feed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedUpdateManyArgs>(args: SelectSubset<T, FeedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feeds and returns the data updated in the database.
     * @param {FeedUpdateManyAndReturnArgs} args - Arguments to update many Feeds.
     * @example
     * // Update many Feeds
     * const feed = await prisma.feed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feeds and only return the `id`
     * const feedWithIdOnly = await prisma.feed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feed.
     * @param {FeedUpsertArgs} args - Arguments to update or create a Feed.
     * @example
     * // Update or create a Feed
     * const feed = await prisma.feed.upsert({
     *   create: {
     *     // ... data to create a Feed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feed we want to update
     *   }
     * })
     */
    upsert<T extends FeedUpsertArgs>(args: SelectSubset<T, FeedUpsertArgs<ExtArgs>>): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCountArgs} args - Arguments to filter Feeds to count.
     * @example
     * // Count the number of Feeds
     * const count = await prisma.feed.count({
     *   where: {
     *     // ... the filter for the Feeds we want to count
     *   }
     * })
    **/
    count<T extends FeedCountArgs>(
      args?: Subset<T, FeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedAggregateArgs>(args: Subset<T, FeedAggregateArgs>): Prisma.PrismaPromise<GetFeedAggregateType<T>>

    /**
     * Group by Feed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedGroupByArgs['orderBy'] }
        : { orderBy?: FeedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feed model
   */
  readonly fields: FeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feed model
   */
  interface FeedFieldRefs {
    readonly id: FieldRef<"Feed", 'String'>
    readonly userId: FieldRef<"Feed", 'String'>
    readonly postId: FieldRef<"Feed", 'String'>
    readonly createdAt: FieldRef<"Feed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feed findUnique
   */
  export type FeedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where: FeedWhereUniqueInput
  }

  /**
   * Feed findUniqueOrThrow
   */
  export type FeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where: FeedWhereUniqueInput
  }

  /**
   * Feed findFirst
   */
  export type FeedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where?: FeedWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feeds.
     */
    cursor?: FeedWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feeds.
     */
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Feed findFirstOrThrow
   */
  export type FeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where?: FeedWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feeds.
     */
    cursor?: FeedWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feeds.
     */
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Feed findMany
   */
  export type FeedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feeds to fetch.
     */
    where?: FeedWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feeds.
     */
    cursor?: FeedWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number | $Types.Skip
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Feed create
   */
  export type FeedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * The data needed to create a Feed.
     */
    data: XOR<FeedCreateInput, FeedUncheckedCreateInput>
  }

  /**
   * Feed createMany
   */
  export type FeedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feeds.
     */
    data: FeedCreateManyInput | FeedCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Feed createManyAndReturn
   */
  export type FeedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * The data used to create many Feeds.
     */
    data: FeedCreateManyInput | FeedCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feed update
   */
  export type FeedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * The data needed to update a Feed.
     */
    data: XOR<FeedUpdateInput, FeedUncheckedUpdateInput>
    /**
     * Choose, which Feed to update.
     */
    where: FeedWhereUniqueInput
  }

  /**
   * Feed updateMany
   */
  export type FeedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feeds.
     */
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyInput>
    /**
     * Filter which Feeds to update
     */
    where?: FeedWhereInput | $Types.Skip
    /**
     * Limit how many Feeds to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Feed updateManyAndReturn
   */
  export type FeedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * The data used to update Feeds.
     */
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyInput>
    /**
     * Filter which Feeds to update
     */
    where?: FeedWhereInput | $Types.Skip
    /**
     * Limit how many Feeds to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feed upsert
   */
  export type FeedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * The filter to search for the Feed to update in case it exists.
     */
    where: FeedWhereUniqueInput
    /**
     * In case the Feed found by the `where` argument doesn't exist, create a new Feed with this data.
     */
    create: XOR<FeedCreateInput, FeedUncheckedCreateInput>
    /**
     * In case the Feed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedUpdateInput, FeedUncheckedUpdateInput>
  }

  /**
   * Feed delete
   */
  export type FeedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter which Feed to delete.
     */
    where: FeedWhereUniqueInput
  }

  /**
   * Feed deleteMany
   */
  export type FeedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feeds to delete
     */
    where?: FeedWhereInput | $Types.Skip
    /**
     * Limit how many Feeds to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Feed without action
   */
  export type FeedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feed
     */
    omit?: FeedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    url: string | null
    type: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    url: string | null
    type: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    url: number
    type: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type AttachmentMinAggregateInputType = {
    id?: true | $Types.Skip
    url?: true | $Types.Skip
    type?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true | $Types.Skip
    url?: true | $Types.Skip
    type?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type AttachmentCountAggregateInputType = {
    id?: true | $Types.Skip
    url?: true | $Types.Skip
    type?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput | $Types.Skip
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[] | $Types.Skip
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: AttachmentCountAggregateInputType | true
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: string
    url: string
    type: string
    createdAt: Date
    deletedAt: Date | null
    _count: AttachmentCountAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    url?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    postAttachments?: boolean | Attachment$postAttachmentsArgs<ExtArgs> | $Types.Skip
    profileAttachments?: boolean | Attachment$profileAttachmentsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | AttachmentCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    url?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    url?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean | $Types.Skip
    url?: boolean | $Types.Skip
    type?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "type" | "createdAt" | "deletedAt", ExtArgs["result"]["attachment"], $Types.Skip>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postAttachments?: boolean | Attachment$postAttachmentsArgs<ExtArgs> | $Types.Skip
    profileAttachments?: boolean | Attachment$profileAttachmentsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | AttachmentCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type AttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      postAttachments: Prisma.$PostAttachmentPayload<ExtArgs>[]
      profileAttachments: Prisma.$ProfileAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      type: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `id`
     * const attachmentWithIdOnly = await prisma.attachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postAttachments<T extends Attachment$postAttachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Attachment$postAttachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profileAttachments<T extends Attachment$profileAttachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Attachment$profileAttachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'String'>
    readonly url: FieldRef<"Attachment", 'String'>
    readonly type: FieldRef<"Attachment", 'String'>
    readonly createdAt: FieldRef<"Attachment", 'DateTime'>
    readonly deletedAt: FieldRef<"Attachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number | $Types.Skip
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Attachment createManyAndReturn
   */
  export type AttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput | $Types.Skip
    /**
     * Limit how many Attachments to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Attachment updateManyAndReturn
   */
  export type AttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput | $Types.Skip
    /**
     * Limit how many Attachments to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput | $Types.Skip
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Attachment.postAttachments
   */
  export type Attachment$postAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    where?: PostAttachmentWhereInput | $Types.Skip
    orderBy?: PostAttachmentOrderByWithRelationInput | PostAttachmentOrderByWithRelationInput[] | $Types.Skip
    cursor?: PostAttachmentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: PostAttachmentScalarFieldEnum | PostAttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Attachment.profileAttachments
   */
  export type Attachment$profileAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    where?: ProfileAttachmentWhereInput | $Types.Skip
    orderBy?: ProfileAttachmentOrderByWithRelationInput | ProfileAttachmentOrderByWithRelationInput[] | $Types.Skip
    cursor?: ProfileAttachmentWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ProfileAttachmentScalarFieldEnum | ProfileAttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Model ProfileAttachment
   */

  export type AggregateProfileAttachment = {
    _count: ProfileAttachmentCountAggregateOutputType | null
    _min: ProfileAttachmentMinAggregateOutputType | null
    _max: ProfileAttachmentMaxAggregateOutputType | null
  }

  export type ProfileAttachmentMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    attachmentId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileAttachmentMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    attachmentId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type ProfileAttachmentCountAggregateOutputType = {
    id: number
    profileId: number
    attachmentId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type ProfileAttachmentMinAggregateInputType = {
    id?: true | $Types.Skip
    profileId?: true | $Types.Skip
    attachmentId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type ProfileAttachmentMaxAggregateInputType = {
    id?: true | $Types.Skip
    profileId?: true | $Types.Skip
    attachmentId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type ProfileAttachmentCountAggregateInputType = {
    id?: true | $Types.Skip
    profileId?: true | $Types.Skip
    attachmentId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ProfileAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileAttachment to aggregate.
     */
    where?: ProfileAttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAttachments to fetch.
     */
    orderBy?: ProfileAttachmentOrderByWithRelationInput | ProfileAttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileAttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAttachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAttachments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileAttachments
    **/
    _count?: true | ProfileAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileAttachmentMaxAggregateInputType
  }

  export type GetProfileAttachmentAggregateType<T extends ProfileAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileAttachment[P]>
      : GetScalarType<T[P], AggregateProfileAttachment[P]>
  }




  export type ProfileAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileAttachmentWhereInput | $Types.Skip
    orderBy?: ProfileAttachmentOrderByWithAggregationInput | ProfileAttachmentOrderByWithAggregationInput[] | $Types.Skip
    by: ProfileAttachmentScalarFieldEnum[] | ProfileAttachmentScalarFieldEnum
    having?: ProfileAttachmentScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ProfileAttachmentCountAggregateInputType | true
    _min?: ProfileAttachmentMinAggregateInputType
    _max?: ProfileAttachmentMaxAggregateInputType
  }

  export type ProfileAttachmentGroupByOutputType = {
    id: string
    profileId: string
    attachmentId: string
    createdAt: Date
    deletedAt: Date | null
    _count: ProfileAttachmentCountAggregateOutputType | null
    _min: ProfileAttachmentMinAggregateOutputType | null
    _max: ProfileAttachmentMaxAggregateOutputType | null
  }

  type GetProfileAttachmentGroupByPayload<T extends ProfileAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type ProfileAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    profileId?: boolean | $Types.Skip
    attachmentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    profile?: boolean | ProfileDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["profileAttachment"]>

  export type ProfileAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    profileId?: boolean | $Types.Skip
    attachmentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    profile?: boolean | ProfileDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["profileAttachment"]>

  export type ProfileAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    profileId?: boolean | $Types.Skip
    attachmentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    profile?: boolean | ProfileDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["profileAttachment"]>

  export type ProfileAttachmentSelectScalar = {
    id?: boolean | $Types.Skip
    profileId?: boolean | $Types.Skip
    attachmentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
  }

  export type ProfileAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "attachmentId" | "createdAt" | "deletedAt", ExtArgs["result"]["profileAttachment"], $Types.Skip>
  export type ProfileAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProfileAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ProfileAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $ProfileAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileAttachment"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      attachment: Prisma.$AttachmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      attachmentId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["profileAttachment"]>
    composites: {}
  }

  type ProfileAttachmentGetPayload<S extends boolean | null | undefined | ProfileAttachmentDefaultArgs> = $Result.GetResult<Prisma.$ProfileAttachmentPayload, S>

  type ProfileAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileAttachmentCountAggregateInputType | true
    }

  export interface ProfileAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileAttachment'], meta: { name: 'ProfileAttachment' } }
    /**
     * Find zero or one ProfileAttachment that matches the filter.
     * @param {ProfileAttachmentFindUniqueArgs} args - Arguments to find a ProfileAttachment
     * @example
     * // Get one ProfileAttachment
     * const profileAttachment = await prisma.profileAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileAttachmentFindUniqueArgs>(args: SelectSubset<T, ProfileAttachmentFindUniqueArgs<ExtArgs>>): Prisma__ProfileAttachmentClient<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileAttachmentFindUniqueOrThrowArgs} args - Arguments to find a ProfileAttachment
     * @example
     * // Get one ProfileAttachment
     * const profileAttachment = await prisma.profileAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileAttachmentClient<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAttachmentFindFirstArgs} args - Arguments to find a ProfileAttachment
     * @example
     * // Get one ProfileAttachment
     * const profileAttachment = await prisma.profileAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileAttachmentFindFirstArgs>(args?: SelectSubset<T, ProfileAttachmentFindFirstArgs<ExtArgs>>): Prisma__ProfileAttachmentClient<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAttachmentFindFirstOrThrowArgs} args - Arguments to find a ProfileAttachment
     * @example
     * // Get one ProfileAttachment
     * const profileAttachment = await prisma.profileAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileAttachmentClient<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileAttachments
     * const profileAttachments = await prisma.profileAttachment.findMany()
     * 
     * // Get first 10 ProfileAttachments
     * const profileAttachments = await prisma.profileAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileAttachmentWithIdOnly = await prisma.profileAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileAttachmentFindManyArgs>(args?: SelectSubset<T, ProfileAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileAttachment.
     * @param {ProfileAttachmentCreateArgs} args - Arguments to create a ProfileAttachment.
     * @example
     * // Create one ProfileAttachment
     * const ProfileAttachment = await prisma.profileAttachment.create({
     *   data: {
     *     // ... data to create a ProfileAttachment
     *   }
     * })
     * 
     */
    create<T extends ProfileAttachmentCreateArgs>(args: SelectSubset<T, ProfileAttachmentCreateArgs<ExtArgs>>): Prisma__ProfileAttachmentClient<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileAttachments.
     * @param {ProfileAttachmentCreateManyArgs} args - Arguments to create many ProfileAttachments.
     * @example
     * // Create many ProfileAttachments
     * const profileAttachment = await prisma.profileAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileAttachmentCreateManyArgs>(args?: SelectSubset<T, ProfileAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfileAttachments and returns the data saved in the database.
     * @param {ProfileAttachmentCreateManyAndReturnArgs} args - Arguments to create many ProfileAttachments.
     * @example
     * // Create many ProfileAttachments
     * const profileAttachment = await prisma.profileAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfileAttachments and only return the `id`
     * const profileAttachmentWithIdOnly = await prisma.profileAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfileAttachment.
     * @param {ProfileAttachmentDeleteArgs} args - Arguments to delete one ProfileAttachment.
     * @example
     * // Delete one ProfileAttachment
     * const ProfileAttachment = await prisma.profileAttachment.delete({
     *   where: {
     *     // ... filter to delete one ProfileAttachment
     *   }
     * })
     * 
     */
    delete<T extends ProfileAttachmentDeleteArgs>(args: SelectSubset<T, ProfileAttachmentDeleteArgs<ExtArgs>>): Prisma__ProfileAttachmentClient<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileAttachment.
     * @param {ProfileAttachmentUpdateArgs} args - Arguments to update one ProfileAttachment.
     * @example
     * // Update one ProfileAttachment
     * const profileAttachment = await prisma.profileAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileAttachmentUpdateArgs>(args: SelectSubset<T, ProfileAttachmentUpdateArgs<ExtArgs>>): Prisma__ProfileAttachmentClient<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileAttachments.
     * @param {ProfileAttachmentDeleteManyArgs} args - Arguments to filter ProfileAttachments to delete.
     * @example
     * // Delete a few ProfileAttachments
     * const { count } = await prisma.profileAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileAttachmentDeleteManyArgs>(args?: SelectSubset<T, ProfileAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileAttachments
     * const profileAttachment = await prisma.profileAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileAttachmentUpdateManyArgs>(args: SelectSubset<T, ProfileAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileAttachments and returns the data updated in the database.
     * @param {ProfileAttachmentUpdateManyAndReturnArgs} args - Arguments to update many ProfileAttachments.
     * @example
     * // Update many ProfileAttachments
     * const profileAttachment = await prisma.profileAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfileAttachments and only return the `id`
     * const profileAttachmentWithIdOnly = await prisma.profileAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfileAttachment.
     * @param {ProfileAttachmentUpsertArgs} args - Arguments to update or create a ProfileAttachment.
     * @example
     * // Update or create a ProfileAttachment
     * const profileAttachment = await prisma.profileAttachment.upsert({
     *   create: {
     *     // ... data to create a ProfileAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileAttachment we want to update
     *   }
     * })
     */
    upsert<T extends ProfileAttachmentUpsertArgs>(args: SelectSubset<T, ProfileAttachmentUpsertArgs<ExtArgs>>): Prisma__ProfileAttachmentClient<$Result.GetResult<Prisma.$ProfileAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAttachmentCountArgs} args - Arguments to filter ProfileAttachments to count.
     * @example
     * // Count the number of ProfileAttachments
     * const count = await prisma.profileAttachment.count({
     *   where: {
     *     // ... the filter for the ProfileAttachments we want to count
     *   }
     * })
    **/
    count<T extends ProfileAttachmentCountArgs>(
      args?: Subset<T, ProfileAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAttachmentAggregateArgs>(args: Subset<T, ProfileAttachmentAggregateArgs>): Prisma.PrismaPromise<GetProfileAttachmentAggregateType<T>>

    /**
     * Group by ProfileAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: ProfileAttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileAttachment model
   */
  readonly fields: ProfileAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attachment<T extends AttachmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttachmentDefaultArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileAttachment model
   */
  interface ProfileAttachmentFieldRefs {
    readonly id: FieldRef<"ProfileAttachment", 'String'>
    readonly profileId: FieldRef<"ProfileAttachment", 'String'>
    readonly attachmentId: FieldRef<"ProfileAttachment", 'String'>
    readonly createdAt: FieldRef<"ProfileAttachment", 'DateTime'>
    readonly deletedAt: FieldRef<"ProfileAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfileAttachment findUnique
   */
  export type ProfileAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAttachment to fetch.
     */
    where: ProfileAttachmentWhereUniqueInput
  }

  /**
   * ProfileAttachment findUniqueOrThrow
   */
  export type ProfileAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAttachment to fetch.
     */
    where: ProfileAttachmentWhereUniqueInput
  }

  /**
   * ProfileAttachment findFirst
   */
  export type ProfileAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAttachment to fetch.
     */
    where?: ProfileAttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAttachments to fetch.
     */
    orderBy?: ProfileAttachmentOrderByWithRelationInput | ProfileAttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileAttachments.
     */
    cursor?: ProfileAttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAttachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAttachments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileAttachments.
     */
    distinct?: ProfileAttachmentScalarFieldEnum | ProfileAttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ProfileAttachment findFirstOrThrow
   */
  export type ProfileAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAttachment to fetch.
     */
    where?: ProfileAttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAttachments to fetch.
     */
    orderBy?: ProfileAttachmentOrderByWithRelationInput | ProfileAttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileAttachments.
     */
    cursor?: ProfileAttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAttachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAttachments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileAttachments.
     */
    distinct?: ProfileAttachmentScalarFieldEnum | ProfileAttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ProfileAttachment findMany
   */
  export type ProfileAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which ProfileAttachments to fetch.
     */
    where?: ProfileAttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileAttachments to fetch.
     */
    orderBy?: ProfileAttachmentOrderByWithRelationInput | ProfileAttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileAttachments.
     */
    cursor?: ProfileAttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileAttachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileAttachments.
     */
    skip?: number | $Types.Skip
    distinct?: ProfileAttachmentScalarFieldEnum | ProfileAttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ProfileAttachment create
   */
  export type ProfileAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileAttachment.
     */
    data: XOR<ProfileAttachmentCreateInput, ProfileAttachmentUncheckedCreateInput>
  }

  /**
   * ProfileAttachment createMany
   */
  export type ProfileAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileAttachments.
     */
    data: ProfileAttachmentCreateManyInput | ProfileAttachmentCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * ProfileAttachment createManyAndReturn
   */
  export type ProfileAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many ProfileAttachments.
     */
    data: ProfileAttachmentCreateManyInput | ProfileAttachmentCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileAttachment update
   */
  export type ProfileAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileAttachment.
     */
    data: XOR<ProfileAttachmentUpdateInput, ProfileAttachmentUncheckedUpdateInput>
    /**
     * Choose, which ProfileAttachment to update.
     */
    where: ProfileAttachmentWhereUniqueInput
  }

  /**
   * ProfileAttachment updateMany
   */
  export type ProfileAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileAttachments.
     */
    data: XOR<ProfileAttachmentUpdateManyMutationInput, ProfileAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which ProfileAttachments to update
     */
    where?: ProfileAttachmentWhereInput | $Types.Skip
    /**
     * Limit how many ProfileAttachments to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * ProfileAttachment updateManyAndReturn
   */
  export type ProfileAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update ProfileAttachments.
     */
    data: XOR<ProfileAttachmentUpdateManyMutationInput, ProfileAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which ProfileAttachments to update
     */
    where?: ProfileAttachmentWhereInput | $Types.Skip
    /**
     * Limit how many ProfileAttachments to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfileAttachment upsert
   */
  export type ProfileAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileAttachment to update in case it exists.
     */
    where: ProfileAttachmentWhereUniqueInput
    /**
     * In case the ProfileAttachment found by the `where` argument doesn't exist, create a new ProfileAttachment with this data.
     */
    create: XOR<ProfileAttachmentCreateInput, ProfileAttachmentUncheckedCreateInput>
    /**
     * In case the ProfileAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileAttachmentUpdateInput, ProfileAttachmentUncheckedUpdateInput>
  }

  /**
   * ProfileAttachment delete
   */
  export type ProfileAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
    /**
     * Filter which ProfileAttachment to delete.
     */
    where: ProfileAttachmentWhereUniqueInput
  }

  /**
   * ProfileAttachment deleteMany
   */
  export type ProfileAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileAttachments to delete
     */
    where?: ProfileAttachmentWhereInput | $Types.Skip
    /**
     * Limit how many ProfileAttachments to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * ProfileAttachment without action
   */
  export type ProfileAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileAttachment
     */
    select?: ProfileAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileAttachment
     */
    omit?: ProfileAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model PostAttachment
   */

  export type AggregatePostAttachment = {
    _count: PostAttachmentCountAggregateOutputType | null
    _min: PostAttachmentMinAggregateOutputType | null
    _max: PostAttachmentMaxAggregateOutputType | null
  }

  export type PostAttachmentMinAggregateOutputType = {
    id: string | null
    postId: string | null
    attachmentId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type PostAttachmentMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    attachmentId: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type PostAttachmentCountAggregateOutputType = {
    id: number
    postId: number
    attachmentId: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type PostAttachmentMinAggregateInputType = {
    id?: true | $Types.Skip
    postId?: true | $Types.Skip
    attachmentId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type PostAttachmentMaxAggregateInputType = {
    id?: true | $Types.Skip
    postId?: true | $Types.Skip
    attachmentId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
  }

  export type PostAttachmentCountAggregateInputType = {
    id?: true | $Types.Skip
    postId?: true | $Types.Skip
    attachmentId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    deletedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type PostAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostAttachment to aggregate.
     */
    where?: PostAttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostAttachments to fetch.
     */
    orderBy?: PostAttachmentOrderByWithRelationInput | PostAttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostAttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostAttachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostAttachments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostAttachments
    **/
    _count?: true | PostAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostAttachmentMaxAggregateInputType
  }

  export type GetPostAttachmentAggregateType<T extends PostAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregatePostAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostAttachment[P]>
      : GetScalarType<T[P], AggregatePostAttachment[P]>
  }




  export type PostAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostAttachmentWhereInput | $Types.Skip
    orderBy?: PostAttachmentOrderByWithAggregationInput | PostAttachmentOrderByWithAggregationInput[] | $Types.Skip
    by: PostAttachmentScalarFieldEnum[] | PostAttachmentScalarFieldEnum
    having?: PostAttachmentScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: PostAttachmentCountAggregateInputType | true
    _min?: PostAttachmentMinAggregateInputType
    _max?: PostAttachmentMaxAggregateInputType
  }

  export type PostAttachmentGroupByOutputType = {
    id: string
    postId: string
    attachmentId: string
    createdAt: Date
    deletedAt: Date | null
    _count: PostAttachmentCountAggregateOutputType | null
    _min: PostAttachmentMinAggregateOutputType | null
    _max: PostAttachmentMaxAggregateOutputType | null
  }

  type GetPostAttachmentGroupByPayload<T extends PostAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], PostAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type PostAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    attachmentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["postAttachment"]>

  export type PostAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    attachmentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["postAttachment"]>

  export type PostAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    attachmentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["postAttachment"]>

  export type PostAttachmentSelectScalar = {
    id?: boolean | $Types.Skip
    postId?: boolean | $Types.Skip
    attachmentId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    deletedAt?: boolean | $Types.Skip
  }

  export type PostAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "attachmentId" | "createdAt" | "deletedAt", ExtArgs["result"]["postAttachment"], $Types.Skip>
  export type PostAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PostAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type PostAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs> | $Types.Skip
    attachment?: boolean | AttachmentDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $PostAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostAttachment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      attachment: Prisma.$AttachmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      attachmentId: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["postAttachment"]>
    composites: {}
  }

  type PostAttachmentGetPayload<S extends boolean | null | undefined | PostAttachmentDefaultArgs> = $Result.GetResult<Prisma.$PostAttachmentPayload, S>

  type PostAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostAttachmentCountAggregateInputType | true
    }

  export interface PostAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostAttachment'], meta: { name: 'PostAttachment' } }
    /**
     * Find zero or one PostAttachment that matches the filter.
     * @param {PostAttachmentFindUniqueArgs} args - Arguments to find a PostAttachment
     * @example
     * // Get one PostAttachment
     * const postAttachment = await prisma.postAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostAttachmentFindUniqueArgs>(args: SelectSubset<T, PostAttachmentFindUniqueArgs<ExtArgs>>): Prisma__PostAttachmentClient<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostAttachmentFindUniqueOrThrowArgs} args - Arguments to find a PostAttachment
     * @example
     * // Get one PostAttachment
     * const postAttachment = await prisma.postAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, PostAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostAttachmentClient<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAttachmentFindFirstArgs} args - Arguments to find a PostAttachment
     * @example
     * // Get one PostAttachment
     * const postAttachment = await prisma.postAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostAttachmentFindFirstArgs>(args?: SelectSubset<T, PostAttachmentFindFirstArgs<ExtArgs>>): Prisma__PostAttachmentClient<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAttachmentFindFirstOrThrowArgs} args - Arguments to find a PostAttachment
     * @example
     * // Get one PostAttachment
     * const postAttachment = await prisma.postAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, PostAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostAttachmentClient<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostAttachments
     * const postAttachments = await prisma.postAttachment.findMany()
     * 
     * // Get first 10 PostAttachments
     * const postAttachments = await prisma.postAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postAttachmentWithIdOnly = await prisma.postAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostAttachmentFindManyArgs>(args?: SelectSubset<T, PostAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostAttachment.
     * @param {PostAttachmentCreateArgs} args - Arguments to create a PostAttachment.
     * @example
     * // Create one PostAttachment
     * const PostAttachment = await prisma.postAttachment.create({
     *   data: {
     *     // ... data to create a PostAttachment
     *   }
     * })
     * 
     */
    create<T extends PostAttachmentCreateArgs>(args: SelectSubset<T, PostAttachmentCreateArgs<ExtArgs>>): Prisma__PostAttachmentClient<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostAttachments.
     * @param {PostAttachmentCreateManyArgs} args - Arguments to create many PostAttachments.
     * @example
     * // Create many PostAttachments
     * const postAttachment = await prisma.postAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostAttachmentCreateManyArgs>(args?: SelectSubset<T, PostAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostAttachments and returns the data saved in the database.
     * @param {PostAttachmentCreateManyAndReturnArgs} args - Arguments to create many PostAttachments.
     * @example
     * // Create many PostAttachments
     * const postAttachment = await prisma.postAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostAttachments and only return the `id`
     * const postAttachmentWithIdOnly = await prisma.postAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, PostAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostAttachment.
     * @param {PostAttachmentDeleteArgs} args - Arguments to delete one PostAttachment.
     * @example
     * // Delete one PostAttachment
     * const PostAttachment = await prisma.postAttachment.delete({
     *   where: {
     *     // ... filter to delete one PostAttachment
     *   }
     * })
     * 
     */
    delete<T extends PostAttachmentDeleteArgs>(args: SelectSubset<T, PostAttachmentDeleteArgs<ExtArgs>>): Prisma__PostAttachmentClient<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostAttachment.
     * @param {PostAttachmentUpdateArgs} args - Arguments to update one PostAttachment.
     * @example
     * // Update one PostAttachment
     * const postAttachment = await prisma.postAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostAttachmentUpdateArgs>(args: SelectSubset<T, PostAttachmentUpdateArgs<ExtArgs>>): Prisma__PostAttachmentClient<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostAttachments.
     * @param {PostAttachmentDeleteManyArgs} args - Arguments to filter PostAttachments to delete.
     * @example
     * // Delete a few PostAttachments
     * const { count } = await prisma.postAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostAttachmentDeleteManyArgs>(args?: SelectSubset<T, PostAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostAttachments
     * const postAttachment = await prisma.postAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostAttachmentUpdateManyArgs>(args: SelectSubset<T, PostAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostAttachments and returns the data updated in the database.
     * @param {PostAttachmentUpdateManyAndReturnArgs} args - Arguments to update many PostAttachments.
     * @example
     * // Update many PostAttachments
     * const postAttachment = await prisma.postAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostAttachments and only return the `id`
     * const postAttachmentWithIdOnly = await prisma.postAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, PostAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostAttachment.
     * @param {PostAttachmentUpsertArgs} args - Arguments to update or create a PostAttachment.
     * @example
     * // Update or create a PostAttachment
     * const postAttachment = await prisma.postAttachment.upsert({
     *   create: {
     *     // ... data to create a PostAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostAttachment we want to update
     *   }
     * })
     */
    upsert<T extends PostAttachmentUpsertArgs>(args: SelectSubset<T, PostAttachmentUpsertArgs<ExtArgs>>): Prisma__PostAttachmentClient<$Result.GetResult<Prisma.$PostAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAttachmentCountArgs} args - Arguments to filter PostAttachments to count.
     * @example
     * // Count the number of PostAttachments
     * const count = await prisma.postAttachment.count({
     *   where: {
     *     // ... the filter for the PostAttachments we want to count
     *   }
     * })
    **/
    count<T extends PostAttachmentCountArgs>(
      args?: Subset<T, PostAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAttachmentAggregateArgs>(args: Subset<T, PostAttachmentAggregateArgs>): Prisma.PrismaPromise<GetPostAttachmentAggregateType<T>>

    /**
     * Group by PostAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: PostAttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostAttachment model
   */
  readonly fields: PostAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attachment<T extends AttachmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttachmentDefaultArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostAttachment model
   */
  interface PostAttachmentFieldRefs {
    readonly id: FieldRef<"PostAttachment", 'String'>
    readonly postId: FieldRef<"PostAttachment", 'String'>
    readonly attachmentId: FieldRef<"PostAttachment", 'String'>
    readonly createdAt: FieldRef<"PostAttachment", 'DateTime'>
    readonly deletedAt: FieldRef<"PostAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostAttachment findUnique
   */
  export type PostAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which PostAttachment to fetch.
     */
    where: PostAttachmentWhereUniqueInput
  }

  /**
   * PostAttachment findUniqueOrThrow
   */
  export type PostAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which PostAttachment to fetch.
     */
    where: PostAttachmentWhereUniqueInput
  }

  /**
   * PostAttachment findFirst
   */
  export type PostAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which PostAttachment to fetch.
     */
    where?: PostAttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostAttachments to fetch.
     */
    orderBy?: PostAttachmentOrderByWithRelationInput | PostAttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostAttachments.
     */
    cursor?: PostAttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostAttachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostAttachments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostAttachments.
     */
    distinct?: PostAttachmentScalarFieldEnum | PostAttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * PostAttachment findFirstOrThrow
   */
  export type PostAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which PostAttachment to fetch.
     */
    where?: PostAttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostAttachments to fetch.
     */
    orderBy?: PostAttachmentOrderByWithRelationInput | PostAttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostAttachments.
     */
    cursor?: PostAttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostAttachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostAttachments.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostAttachments.
     */
    distinct?: PostAttachmentScalarFieldEnum | PostAttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * PostAttachment findMany
   */
  export type PostAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which PostAttachments to fetch.
     */
    where?: PostAttachmentWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostAttachments to fetch.
     */
    orderBy?: PostAttachmentOrderByWithRelationInput | PostAttachmentOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostAttachments.
     */
    cursor?: PostAttachmentWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostAttachments from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostAttachments.
     */
    skip?: number | $Types.Skip
    distinct?: PostAttachmentScalarFieldEnum | PostAttachmentScalarFieldEnum[] | $Types.Skip
  }

  /**
   * PostAttachment create
   */
  export type PostAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a PostAttachment.
     */
    data: XOR<PostAttachmentCreateInput, PostAttachmentUncheckedCreateInput>
  }

  /**
   * PostAttachment createMany
   */
  export type PostAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostAttachments.
     */
    data: PostAttachmentCreateManyInput | PostAttachmentCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * PostAttachment createManyAndReturn
   */
  export type PostAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many PostAttachments.
     */
    data: PostAttachmentCreateManyInput | PostAttachmentCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostAttachment update
   */
  export type PostAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a PostAttachment.
     */
    data: XOR<PostAttachmentUpdateInput, PostAttachmentUncheckedUpdateInput>
    /**
     * Choose, which PostAttachment to update.
     */
    where: PostAttachmentWhereUniqueInput
  }

  /**
   * PostAttachment updateMany
   */
  export type PostAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostAttachments.
     */
    data: XOR<PostAttachmentUpdateManyMutationInput, PostAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which PostAttachments to update
     */
    where?: PostAttachmentWhereInput | $Types.Skip
    /**
     * Limit how many PostAttachments to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * PostAttachment updateManyAndReturn
   */
  export type PostAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update PostAttachments.
     */
    data: XOR<PostAttachmentUpdateManyMutationInput, PostAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which PostAttachments to update
     */
    where?: PostAttachmentWhereInput | $Types.Skip
    /**
     * Limit how many PostAttachments to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostAttachment upsert
   */
  export type PostAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the PostAttachment to update in case it exists.
     */
    where: PostAttachmentWhereUniqueInput
    /**
     * In case the PostAttachment found by the `where` argument doesn't exist, create a new PostAttachment with this data.
     */
    create: XOR<PostAttachmentCreateInput, PostAttachmentUncheckedCreateInput>
    /**
     * In case the PostAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostAttachmentUpdateInput, PostAttachmentUncheckedUpdateInput>
  }

  /**
   * PostAttachment delete
   */
  export type PostAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
    /**
     * Filter which PostAttachment to delete.
     */
    where: PostAttachmentWhereUniqueInput
  }

  /**
   * PostAttachment deleteMany
   */
  export type PostAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostAttachments to delete
     */
    where?: PostAttachmentWhereInput | $Types.Skip
    /**
     * Limit how many PostAttachments to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * PostAttachment without action
   */
  export type PostAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAttachment
     */
    select?: PostAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostAttachment
     */
    omit?: PostAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAttachmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    isActive: 'isActive',
    isVerified: 'isVerified',
    isEmailVerified: 'isEmailVerified',
    isAdmin: 'isAdmin',
    isBanned: 'isBanned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    passwordResetToken: 'passwordResetToken',
    passwordResetExpires: 'passwordResetExpires',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationExpires: 'emailVerificationExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    bio: 'bio',
    avatar: 'avatar',
    city: 'city',
    state: 'state',
    country: 'country',
    phone: 'phone',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    content: 'content',
    type: 'type',
    userId: 'userId',
    parentId: 'parentId',
    rootId: 'rootId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const BookmarkScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    id: 'id',
    followerId: 'followerId',
    followingId: 'followingId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const FeedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt'
  };

  export type FeedScalarFieldEnum = (typeof FeedScalarFieldEnum)[keyof typeof FeedScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const ProfileAttachmentScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    attachmentId: 'attachmentId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type ProfileAttachmentScalarFieldEnum = (typeof ProfileAttachmentScalarFieldEnum)[keyof typeof ProfileAttachmentScalarFieldEnum]


  export const PostAttachmentScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    attachmentId: 'attachmentId',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type PostAttachmentScalarFieldEnum = (typeof PostAttachmentScalarFieldEnum)[keyof typeof PostAttachmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PostType'
   */
  export type EnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType'>
    


  /**
   * Reference to a field of type 'PostType[]'
   */
  export type ListEnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    id?: StringFilter<"User"> | string | $Types.Skip
    username?: StringNullableFilter<"User"> | string | null | $Types.Skip
    email?: StringFilter<"User"> | string | $Types.Skip
    password?: StringFilter<"User"> | string | $Types.Skip
    isActive?: BoolFilter<"User"> | boolean | $Types.Skip
    isVerified?: BoolFilter<"User"> | boolean | $Types.Skip
    isEmailVerified?: BoolFilter<"User"> | boolean | $Types.Skip
    isAdmin?: BoolFilter<"User"> | boolean | $Types.Skip
    isBanned?: BoolFilter<"User"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null | $Types.Skip
    passwordResetToken?: StringNullableFilter<"User"> | string | null | $Types.Skip
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null | $Types.Skip
    emailVerificationToken?: StringNullableFilter<"User"> | string | null | $Types.Skip
    emailVerificationExpires?: DateTimeNullableFilter<"User"> | Date | string | null | $Types.Skip
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null | $Types.Skip
    posts?: PostListRelationFilter | $Types.Skip
    likes?: LikeListRelationFilter | $Types.Skip
    bookmarks?: BookmarkListRelationFilter | $Types.Skip
    followers?: FollowListRelationFilter | $Types.Skip
    following?: FollowListRelationFilter | $Types.Skip
    feed?: FeedListRelationFilter | $Types.Skip
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrderInput | SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    isVerified?: SortOrder | $Types.Skip
    isEmailVerified?: SortOrder | $Types.Skip
    isAdmin?: SortOrder | $Types.Skip
    isBanned?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    passwordResetToken?: SortOrderInput | SortOrder | $Types.Skip
    passwordResetExpires?: SortOrderInput | SortOrder | $Types.Skip
    emailVerificationToken?: SortOrderInput | SortOrder | $Types.Skip
    emailVerificationExpires?: SortOrderInput | SortOrder | $Types.Skip
    profile?: ProfileOrderByWithRelationInput | $Types.Skip
    posts?: PostOrderByRelationAggregateInput | $Types.Skip
    likes?: LikeOrderByRelationAggregateInput | $Types.Skip
    bookmarks?: BookmarkOrderByRelationAggregateInput | $Types.Skip
    followers?: FollowOrderByRelationAggregateInput | $Types.Skip
    following?: FollowOrderByRelationAggregateInput | $Types.Skip
    feed?: FeedOrderByRelationAggregateInput | $Types.Skip
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    username?: string | $Types.Skip
    email?: string | $Types.Skip
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    password?: StringFilter<"User"> | string | $Types.Skip
    isActive?: BoolFilter<"User"> | boolean | $Types.Skip
    isVerified?: BoolFilter<"User"> | boolean | $Types.Skip
    isEmailVerified?: BoolFilter<"User"> | boolean | $Types.Skip
    isAdmin?: BoolFilter<"User"> | boolean | $Types.Skip
    isBanned?: BoolFilter<"User"> | boolean | $Types.Skip
    createdAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null | $Types.Skip
    passwordResetToken?: StringNullableFilter<"User"> | string | null | $Types.Skip
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null | $Types.Skip
    emailVerificationToken?: StringNullableFilter<"User"> | string | null | $Types.Skip
    emailVerificationExpires?: DateTimeNullableFilter<"User"> | Date | string | null | $Types.Skip
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null | $Types.Skip
    posts?: PostListRelationFilter | $Types.Skip
    likes?: LikeListRelationFilter | $Types.Skip
    bookmarks?: BookmarkListRelationFilter | $Types.Skip
    followers?: FollowListRelationFilter | $Types.Skip
    following?: FollowListRelationFilter | $Types.Skip
    feed?: FeedListRelationFilter | $Types.Skip
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrderInput | SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    isVerified?: SortOrder | $Types.Skip
    isEmailVerified?: SortOrder | $Types.Skip
    isAdmin?: SortOrder | $Types.Skip
    isBanned?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    passwordResetToken?: SortOrderInput | SortOrder | $Types.Skip
    passwordResetExpires?: SortOrderInput | SortOrder | $Types.Skip
    emailVerificationToken?: SortOrderInput | SortOrder | $Types.Skip
    emailVerificationExpires?: SortOrderInput | SortOrder | $Types.Skip
    _count?: UserCountOrderByAggregateInput | $Types.Skip
    _max?: UserMaxOrderByAggregateInput | $Types.Skip
    _min?: UserMinOrderByAggregateInput | $Types.Skip
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: UserScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    username?: StringNullableWithAggregatesFilter<"User"> | string | null | $Types.Skip
    email?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    password?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    isActive?: BoolWithAggregatesFilter<"User"> | boolean | $Types.Skip
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean | $Types.Skip
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean | $Types.Skip
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean | $Types.Skip
    isBanned?: BoolWithAggregatesFilter<"User"> | boolean | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null | $Types.Skip
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null | $Types.Skip
    passwordResetExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null | $Types.Skip
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null | $Types.Skip
    emailVerificationExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null | $Types.Skip
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[] | $Types.Skip
    OR?: ProfileWhereInput[] | $Types.Skip
    NOT?: ProfileWhereInput | ProfileWhereInput[] | $Types.Skip
    id?: StringFilter<"Profile"> | string | $Types.Skip
    userId?: StringFilter<"Profile"> | string | $Types.Skip
    firstName?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    lastName?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    dateOfBirth?: DateTimeNullableFilter<"Profile"> | Date | string | null | $Types.Skip
    gender?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    bio?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    avatar?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    city?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    state?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    country?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    phone?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    website?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Profile"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Profile"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    attachments?: ProfileAttachmentListRelationFilter | $Types.Skip
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    firstName?: SortOrderInput | SortOrder | $Types.Skip
    lastName?: SortOrderInput | SortOrder | $Types.Skip
    dateOfBirth?: SortOrderInput | SortOrder | $Types.Skip
    gender?: SortOrderInput | SortOrder | $Types.Skip
    bio?: SortOrderInput | SortOrder | $Types.Skip
    avatar?: SortOrderInput | SortOrder | $Types.Skip
    city?: SortOrderInput | SortOrder | $Types.Skip
    state?: SortOrderInput | SortOrder | $Types.Skip
    country?: SortOrderInput | SortOrder | $Types.Skip
    phone?: SortOrderInput | SortOrder | $Types.Skip
    website?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
    attachments?: ProfileAttachmentOrderByRelationAggregateInput | $Types.Skip
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    userId?: string | $Types.Skip
    AND?: ProfileWhereInput | ProfileWhereInput[] | $Types.Skip
    OR?: ProfileWhereInput[] | $Types.Skip
    NOT?: ProfileWhereInput | ProfileWhereInput[] | $Types.Skip
    firstName?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    lastName?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    dateOfBirth?: DateTimeNullableFilter<"Profile"> | Date | string | null | $Types.Skip
    gender?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    bio?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    avatar?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    city?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    state?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    country?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    phone?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    website?: StringNullableFilter<"Profile"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Profile"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Profile"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    attachments?: ProfileAttachmentListRelationFilter | $Types.Skip
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    firstName?: SortOrderInput | SortOrder | $Types.Skip
    lastName?: SortOrderInput | SortOrder | $Types.Skip
    dateOfBirth?: SortOrderInput | SortOrder | $Types.Skip
    gender?: SortOrderInput | SortOrder | $Types.Skip
    bio?: SortOrderInput | SortOrder | $Types.Skip
    avatar?: SortOrderInput | SortOrder | $Types.Skip
    city?: SortOrderInput | SortOrder | $Types.Skip
    state?: SortOrderInput | SortOrder | $Types.Skip
    country?: SortOrderInput | SortOrder | $Types.Skip
    phone?: SortOrderInput | SortOrder | $Types.Skip
    website?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: ProfileCountOrderByAggregateInput | $Types.Skip
    _max?: ProfileMaxOrderByAggregateInput | $Types.Skip
    _min?: ProfileMinOrderByAggregateInput | $Types.Skip
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ProfileScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Profile"> | string | $Types.Skip
    userId?: StringWithAggregatesFilter<"Profile"> | string | $Types.Skip
    firstName?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    lastName?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null | $Types.Skip
    gender?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    avatar?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    city?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    state?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    country?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    website?: StringNullableWithAggregatesFilter<"Profile"> | string | null | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null | $Types.Skip
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[] | $Types.Skip
    OR?: PostWhereInput[] | $Types.Skip
    NOT?: PostWhereInput | PostWhereInput[] | $Types.Skip
    id?: StringFilter<"Post"> | string | $Types.Skip
    content?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType | $Types.Skip
    userId?: StringFilter<"Post"> | string | $Types.Skip
    parentId?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    rootId?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    parent?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null | $Types.Skip
    children?: PostListRelationFilter | $Types.Skip
    attachments?: PostAttachmentListRelationFilter | $Types.Skip
    likes?: LikeListRelationFilter | $Types.Skip
    bookmarks?: BookmarkListRelationFilter | $Types.Skip
    feeds?: FeedListRelationFilter | $Types.Skip
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    content?: SortOrderInput | SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    parentId?: SortOrderInput | SortOrder | $Types.Skip
    rootId?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
    parent?: PostOrderByWithRelationInput | $Types.Skip
    children?: PostOrderByRelationAggregateInput | $Types.Skip
    attachments?: PostAttachmentOrderByRelationAggregateInput | $Types.Skip
    likes?: LikeOrderByRelationAggregateInput | $Types.Skip
    bookmarks?: BookmarkOrderByRelationAggregateInput | $Types.Skip
    feeds?: FeedOrderByRelationAggregateInput | $Types.Skip
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: PostWhereInput | PostWhereInput[] | $Types.Skip
    OR?: PostWhereInput[] | $Types.Skip
    NOT?: PostWhereInput | PostWhereInput[] | $Types.Skip
    content?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType | $Types.Skip
    userId?: StringFilter<"Post"> | string | $Types.Skip
    parentId?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    rootId?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    parent?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null | $Types.Skip
    children?: PostListRelationFilter | $Types.Skip
    attachments?: PostAttachmentListRelationFilter | $Types.Skip
    likes?: LikeListRelationFilter | $Types.Skip
    bookmarks?: BookmarkListRelationFilter | $Types.Skip
    feeds?: FeedListRelationFilter | $Types.Skip
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    content?: SortOrderInput | SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    parentId?: SortOrderInput | SortOrder | $Types.Skip
    rootId?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: PostCountOrderByAggregateInput | $Types.Skip
    _max?: PostMaxOrderByAggregateInput | $Types.Skip
    _min?: PostMinOrderByAggregateInput | $Types.Skip
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: PostScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Post"> | string | $Types.Skip
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null | $Types.Skip
    type?: EnumPostTypeWithAggregatesFilter<"Post"> | $Enums.PostType | $Types.Skip
    userId?: StringWithAggregatesFilter<"Post"> | string | $Types.Skip
    parentId?: StringNullableWithAggregatesFilter<"Post"> | string | null | $Types.Skip
    rootId?: StringNullableWithAggregatesFilter<"Post"> | string | null | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null | $Types.Skip
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[] | $Types.Skip
    OR?: LikeWhereInput[] | $Types.Skip
    NOT?: LikeWhereInput | LikeWhereInput[] | $Types.Skip
    id?: StringFilter<"Like"> | string | $Types.Skip
    postId?: StringFilter<"Like"> | string | $Types.Skip
    userId?: StringFilter<"Like"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Like"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Like"> | Date | string | null | $Types.Skip
    post?: XOR<PostScalarRelationFilter, PostWhereInput> | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    post?: PostOrderByWithRelationInput | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    userId_postId?: LikeUserIdPostIdCompoundUniqueInput | $Types.Skip
    AND?: LikeWhereInput | LikeWhereInput[] | $Types.Skip
    OR?: LikeWhereInput[] | $Types.Skip
    NOT?: LikeWhereInput | LikeWhereInput[] | $Types.Skip
    postId?: StringFilter<"Like"> | string | $Types.Skip
    userId?: StringFilter<"Like"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Like"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Like"> | Date | string | null | $Types.Skip
    post?: XOR<PostScalarRelationFilter, PostWhereInput> | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }, "id" | "userId_postId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: LikeCountOrderByAggregateInput | $Types.Skip
    _max?: LikeMaxOrderByAggregateInput | $Types.Skip
    _min?: LikeMinOrderByAggregateInput | $Types.Skip
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: LikeScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Like"> | string | $Types.Skip
    postId?: StringWithAggregatesFilter<"Like"> | string | $Types.Skip
    userId?: StringWithAggregatesFilter<"Like"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Like"> | Date | string | null | $Types.Skip
  }

  export type BookmarkWhereInput = {
    AND?: BookmarkWhereInput | BookmarkWhereInput[] | $Types.Skip
    OR?: BookmarkWhereInput[] | $Types.Skip
    NOT?: BookmarkWhereInput | BookmarkWhereInput[] | $Types.Skip
    id?: StringFilter<"Bookmark"> | string | $Types.Skip
    postId?: StringFilter<"Bookmark"> | string | $Types.Skip
    userId?: StringFilter<"Bookmark"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Bookmark"> | Date | string | null | $Types.Skip
    post?: XOR<PostScalarRelationFilter, PostWhereInput> | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }

  export type BookmarkOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    post?: PostOrderByWithRelationInput | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
  }

  export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    userId_postId?: BookmarkUserIdPostIdCompoundUniqueInput | $Types.Skip
    AND?: BookmarkWhereInput | BookmarkWhereInput[] | $Types.Skip
    OR?: BookmarkWhereInput[] | $Types.Skip
    NOT?: BookmarkWhereInput | BookmarkWhereInput[] | $Types.Skip
    postId?: StringFilter<"Bookmark"> | string | $Types.Skip
    userId?: StringFilter<"Bookmark"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Bookmark"> | Date | string | null | $Types.Skip
    post?: XOR<PostScalarRelationFilter, PostWhereInput> | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }, "id" | "userId_postId">

  export type BookmarkOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: BookmarkCountOrderByAggregateInput | $Types.Skip
    _max?: BookmarkMaxOrderByAggregateInput | $Types.Skip
    _min?: BookmarkMinOrderByAggregateInput | $Types.Skip
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: BookmarkScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Bookmark"> | string | $Types.Skip
    postId?: StringWithAggregatesFilter<"Bookmark"> | string | $Types.Skip
    userId?: StringWithAggregatesFilter<"Bookmark"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Bookmark"> | Date | string | null | $Types.Skip
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[] | $Types.Skip
    OR?: FollowWhereInput[] | $Types.Skip
    NOT?: FollowWhereInput | FollowWhereInput[] | $Types.Skip
    id?: StringFilter<"Follow"> | string | $Types.Skip
    followerId?: StringFilter<"Follow"> | string | $Types.Skip
    followingId?: StringFilter<"Follow"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Follow"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Follow"> | Date | string | null | $Types.Skip
    follower?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    following?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    followerId?: SortOrder | $Types.Skip
    followingId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    follower?: UserOrderByWithRelationInput | $Types.Skip
    following?: UserOrderByWithRelationInput | $Types.Skip
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    followerId_followingId?: FollowFollowerIdFollowingIdCompoundUniqueInput | $Types.Skip
    AND?: FollowWhereInput | FollowWhereInput[] | $Types.Skip
    OR?: FollowWhereInput[] | $Types.Skip
    NOT?: FollowWhereInput | FollowWhereInput[] | $Types.Skip
    followerId?: StringFilter<"Follow"> | string | $Types.Skip
    followingId?: StringFilter<"Follow"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Follow"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Follow"> | Date | string | null | $Types.Skip
    follower?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    following?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }, "id" | "followerId_followingId">

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    followerId?: SortOrder | $Types.Skip
    followingId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: FollowCountOrderByAggregateInput | $Types.Skip
    _max?: FollowMaxOrderByAggregateInput | $Types.Skip
    _min?: FollowMinOrderByAggregateInput | $Types.Skip
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: FollowScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Follow"> | string | $Types.Skip
    followerId?: StringWithAggregatesFilter<"Follow"> | string | $Types.Skip
    followingId?: StringWithAggregatesFilter<"Follow"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Follow"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Follow"> | Date | string | null | $Types.Skip
  }

  export type FeedWhereInput = {
    AND?: FeedWhereInput | FeedWhereInput[] | $Types.Skip
    OR?: FeedWhereInput[] | $Types.Skip
    NOT?: FeedWhereInput | FeedWhereInput[] | $Types.Skip
    id?: StringFilter<"Feed"> | string | $Types.Skip
    userId?: StringFilter<"Feed"> | string | $Types.Skip
    postId?: StringFilter<"Feed"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Feed"> | Date | string | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    post?: XOR<PostScalarRelationFilter, PostWhereInput> | $Types.Skip
  }

  export type FeedOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
    post?: PostOrderByWithRelationInput | $Types.Skip
  }

  export type FeedWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: FeedWhereInput | FeedWhereInput[] | $Types.Skip
    OR?: FeedWhereInput[] | $Types.Skip
    NOT?: FeedWhereInput | FeedWhereInput[] | $Types.Skip
    userId?: StringFilter<"Feed"> | string | $Types.Skip
    postId?: StringFilter<"Feed"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Feed"> | Date | string | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
    post?: XOR<PostScalarRelationFilter, PostWhereInput> | $Types.Skip
  }, "id">

  export type FeedOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    _count?: FeedCountOrderByAggregateInput | $Types.Skip
    _max?: FeedMaxOrderByAggregateInput | $Types.Skip
    _min?: FeedMinOrderByAggregateInput | $Types.Skip
  }

  export type FeedScalarWhereWithAggregatesInput = {
    AND?: FeedScalarWhereWithAggregatesInput | FeedScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: FeedScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: FeedScalarWhereWithAggregatesInput | FeedScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Feed"> | string | $Types.Skip
    userId?: StringWithAggregatesFilter<"Feed"> | string | $Types.Skip
    postId?: StringWithAggregatesFilter<"Feed"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Feed"> | Date | string | $Types.Skip
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[] | $Types.Skip
    OR?: AttachmentWhereInput[] | $Types.Skip
    NOT?: AttachmentWhereInput | AttachmentWhereInput[] | $Types.Skip
    id?: StringFilter<"Attachment"> | string | $Types.Skip
    url?: StringFilter<"Attachment"> | string | $Types.Skip
    type?: StringFilter<"Attachment"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Attachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null | $Types.Skip
    postAttachments?: PostAttachmentListRelationFilter | $Types.Skip
    profileAttachments?: ProfileAttachmentListRelationFilter | $Types.Skip
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    url?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    postAttachments?: PostAttachmentOrderByRelationAggregateInput | $Types.Skip
    profileAttachments?: ProfileAttachmentOrderByRelationAggregateInput | $Types.Skip
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: AttachmentWhereInput | AttachmentWhereInput[] | $Types.Skip
    OR?: AttachmentWhereInput[] | $Types.Skip
    NOT?: AttachmentWhereInput | AttachmentWhereInput[] | $Types.Skip
    url?: StringFilter<"Attachment"> | string | $Types.Skip
    type?: StringFilter<"Attachment"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Attachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Attachment"> | Date | string | null | $Types.Skip
    postAttachments?: PostAttachmentListRelationFilter | $Types.Skip
    profileAttachments?: ProfileAttachmentListRelationFilter | $Types.Skip
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    url?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: AttachmentCountOrderByAggregateInput | $Types.Skip
    _max?: AttachmentMaxOrderByAggregateInput | $Types.Skip
    _min?: AttachmentMinOrderByAggregateInput | $Types.Skip
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: AttachmentScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Attachment"> | string | $Types.Skip
    url?: StringWithAggregatesFilter<"Attachment"> | string | $Types.Skip
    type?: StringWithAggregatesFilter<"Attachment"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Attachment"> | Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentWhereInput = {
    AND?: ProfileAttachmentWhereInput | ProfileAttachmentWhereInput[] | $Types.Skip
    OR?: ProfileAttachmentWhereInput[] | $Types.Skip
    NOT?: ProfileAttachmentWhereInput | ProfileAttachmentWhereInput[] | $Types.Skip
    id?: StringFilter<"ProfileAttachment"> | string | $Types.Skip
    profileId?: StringFilter<"ProfileAttachment"> | string | $Types.Skip
    attachmentId?: StringFilter<"ProfileAttachment"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"ProfileAttachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"ProfileAttachment"> | Date | string | null | $Types.Skip
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput> | $Types.Skip
    attachment?: XOR<AttachmentScalarRelationFilter, AttachmentWhereInput> | $Types.Skip
  }

  export type ProfileAttachmentOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    profileId?: SortOrder | $Types.Skip
    attachmentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    profile?: ProfileOrderByWithRelationInput | $Types.Skip
    attachment?: AttachmentOrderByWithRelationInput | $Types.Skip
  }

  export type ProfileAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: ProfileAttachmentWhereInput | ProfileAttachmentWhereInput[] | $Types.Skip
    OR?: ProfileAttachmentWhereInput[] | $Types.Skip
    NOT?: ProfileAttachmentWhereInput | ProfileAttachmentWhereInput[] | $Types.Skip
    profileId?: StringFilter<"ProfileAttachment"> | string | $Types.Skip
    attachmentId?: StringFilter<"ProfileAttachment"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"ProfileAttachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"ProfileAttachment"> | Date | string | null | $Types.Skip
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput> | $Types.Skip
    attachment?: XOR<AttachmentScalarRelationFilter, AttachmentWhereInput> | $Types.Skip
  }, "id">

  export type ProfileAttachmentOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    profileId?: SortOrder | $Types.Skip
    attachmentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: ProfileAttachmentCountOrderByAggregateInput | $Types.Skip
    _max?: ProfileAttachmentMaxOrderByAggregateInput | $Types.Skip
    _min?: ProfileAttachmentMinOrderByAggregateInput | $Types.Skip
  }

  export type ProfileAttachmentScalarWhereWithAggregatesInput = {
    AND?: ProfileAttachmentScalarWhereWithAggregatesInput | ProfileAttachmentScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ProfileAttachmentScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ProfileAttachmentScalarWhereWithAggregatesInput | ProfileAttachmentScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"ProfileAttachment"> | string | $Types.Skip
    profileId?: StringWithAggregatesFilter<"ProfileAttachment"> | string | $Types.Skip
    attachmentId?: StringWithAggregatesFilter<"ProfileAttachment"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"ProfileAttachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ProfileAttachment"> | Date | string | null | $Types.Skip
  }

  export type PostAttachmentWhereInput = {
    AND?: PostAttachmentWhereInput | PostAttachmentWhereInput[] | $Types.Skip
    OR?: PostAttachmentWhereInput[] | $Types.Skip
    NOT?: PostAttachmentWhereInput | PostAttachmentWhereInput[] | $Types.Skip
    id?: StringFilter<"PostAttachment"> | string | $Types.Skip
    postId?: StringFilter<"PostAttachment"> | string | $Types.Skip
    attachmentId?: StringFilter<"PostAttachment"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"PostAttachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"PostAttachment"> | Date | string | null | $Types.Skip
    post?: XOR<PostScalarRelationFilter, PostWhereInput> | $Types.Skip
    attachment?: XOR<AttachmentScalarRelationFilter, AttachmentWhereInput> | $Types.Skip
  }

  export type PostAttachmentOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    attachmentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    post?: PostOrderByWithRelationInput | $Types.Skip
    attachment?: AttachmentOrderByWithRelationInput | $Types.Skip
  }

  export type PostAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    AND?: PostAttachmentWhereInput | PostAttachmentWhereInput[] | $Types.Skip
    OR?: PostAttachmentWhereInput[] | $Types.Skip
    NOT?: PostAttachmentWhereInput | PostAttachmentWhereInput[] | $Types.Skip
    postId?: StringFilter<"PostAttachment"> | string | $Types.Skip
    attachmentId?: StringFilter<"PostAttachment"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"PostAttachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"PostAttachment"> | Date | string | null | $Types.Skip
    post?: XOR<PostScalarRelationFilter, PostWhereInput> | $Types.Skip
    attachment?: XOR<AttachmentScalarRelationFilter, AttachmentWhereInput> | $Types.Skip
  }, "id">

  export type PostAttachmentOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    attachmentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrderInput | SortOrder | $Types.Skip
    _count?: PostAttachmentCountOrderByAggregateInput | $Types.Skip
    _max?: PostAttachmentMaxOrderByAggregateInput | $Types.Skip
    _min?: PostAttachmentMinOrderByAggregateInput | $Types.Skip
  }

  export type PostAttachmentScalarWhereWithAggregatesInput = {
    AND?: PostAttachmentScalarWhereWithAggregatesInput | PostAttachmentScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: PostAttachmentScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: PostAttachmentScalarWhereWithAggregatesInput | PostAttachmentScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"PostAttachment"> | string | $Types.Skip
    postId?: StringWithAggregatesFilter<"PostAttachment"> | string | $Types.Skip
    attachmentId?: StringWithAggregatesFilter<"PostAttachment"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"PostAttachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableWithAggregatesFilter<"PostAttachment"> | Date | string | null | $Types.Skip
  }

  export type UserCreateInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserCreateManyInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type ProfileCreateInput = {
    id?: string | $Types.Skip
    firstName?: string | null | $Types.Skip
    lastName?: string | null | $Types.Skip
    dateOfBirth?: Date | string | null | $Types.Skip
    gender?: string | null | $Types.Skip
    bio?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    city?: string | null | $Types.Skip
    state?: string | null | $Types.Skip
    country?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    website?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutProfileInput
    attachments?: ProfileAttachmentCreateNestedManyWithoutProfileInput | $Types.Skip
  }

  export type ProfileUncheckedCreateInput = {
    id?: string | $Types.Skip
    userId: string
    firstName?: string | null | $Types.Skip
    lastName?: string | null | $Types.Skip
    dateOfBirth?: Date | string | null | $Types.Skip
    gender?: string | null | $Types.Skip
    bio?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    city?: string | null | $Types.Skip
    state?: string | null | $Types.Skip
    country?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    website?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    attachments?: ProfileAttachmentUncheckedCreateNestedManyWithoutProfileInput | $Types.Skip
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    firstName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    gender?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bio?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    state?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    country?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutProfileNestedInput | $Types.Skip
    attachments?: ProfileAttachmentUpdateManyWithoutProfileNestedInput | $Types.Skip
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    firstName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    gender?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bio?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    state?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    country?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    attachments?: ProfileAttachmentUncheckedUpdateManyWithoutProfileNestedInput | $Types.Skip
  }

  export type ProfileCreateManyInput = {
    id?: string | $Types.Skip
    userId: string
    firstName?: string | null | $Types.Skip
    lastName?: string | null | $Types.Skip
    dateOfBirth?: Date | string | null | $Types.Skip
    gender?: string | null | $Types.Skip
    bio?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    city?: string | null | $Types.Skip
    state?: string | null | $Types.Skip
    country?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    website?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    firstName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    gender?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bio?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    state?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    country?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    firstName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    gender?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bio?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    state?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    country?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type PostCreateInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutPostsInput
    parent?: PostCreateNestedOneWithoutChildrenInput | $Types.Skip
    children?: PostCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    userId: string
    parentId?: string | null | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    children?: PostUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    parent?: PostUpdateOneWithoutChildrenNestedInput | $Types.Skip
    children?: PostUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    children?: PostUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostCreateManyInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    userId: string
    parentId?: string | null | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type LikeCreateInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    post: PostCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: string | $Types.Skip
    postId: string
    userId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type LikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    post?: PostUpdateOneRequiredWithoutLikesNestedInput | $Types.Skip
    user?: UserUpdateOneRequiredWithoutLikesNestedInput | $Types.Skip
  }

  export type LikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type LikeCreateManyInput = {
    id?: string | $Types.Skip
    postId: string
    userId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type LikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type BookmarkCreateInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    post: PostCreateNestedOneWithoutBookmarksInput
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateInput = {
    id?: string | $Types.Skip
    postId: string
    userId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type BookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    post?: PostUpdateOneRequiredWithoutBookmarksNestedInput | $Types.Skip
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput | $Types.Skip
  }

  export type BookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type BookmarkCreateManyInput = {
    id?: string | $Types.Skip
    postId: string
    userId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type BookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type BookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type FollowCreateInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    follower: UserCreateNestedOneWithoutFollowersInput
    following: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowUncheckedCreateInput = {
    id?: string | $Types.Skip
    followerId: string
    followingId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type FollowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput | $Types.Skip
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput | $Types.Skip
  }

  export type FollowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    followerId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    followingId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type FollowCreateManyInput = {
    id?: string | $Types.Skip
    followerId: string
    followingId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type FollowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type FollowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    followerId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    followingId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type FeedCreateInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutFeedInput
    post: PostCreateNestedOneWithoutFeedsInput
  }

  export type FeedUncheckedCreateInput = {
    id?: string | $Types.Skip
    userId: string
    postId: string
    createdAt?: Date | string | $Types.Skip
  }

  export type FeedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutFeedNestedInput | $Types.Skip
    post?: PostUpdateOneRequiredWithoutFeedsNestedInput | $Types.Skip
  }

  export type FeedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FeedCreateManyInput = {
    id?: string | $Types.Skip
    userId: string
    postId: string
    createdAt?: Date | string | $Types.Skip
  }

  export type FeedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FeedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type AttachmentCreateInput = {
    id?: string | $Types.Skip
    url: string
    type: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    postAttachments?: PostAttachmentCreateNestedManyWithoutAttachmentInput | $Types.Skip
    profileAttachments?: ProfileAttachmentCreateNestedManyWithoutAttachmentInput | $Types.Skip
  }

  export type AttachmentUncheckedCreateInput = {
    id?: string | $Types.Skip
    url: string
    type: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    postAttachments?: PostAttachmentUncheckedCreateNestedManyWithoutAttachmentInput | $Types.Skip
    profileAttachments?: ProfileAttachmentUncheckedCreateNestedManyWithoutAttachmentInput | $Types.Skip
  }

  export type AttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    postAttachments?: PostAttachmentUpdateManyWithoutAttachmentNestedInput | $Types.Skip
    profileAttachments?: ProfileAttachmentUpdateManyWithoutAttachmentNestedInput | $Types.Skip
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    postAttachments?: PostAttachmentUncheckedUpdateManyWithoutAttachmentNestedInput | $Types.Skip
    profileAttachments?: ProfileAttachmentUncheckedUpdateManyWithoutAttachmentNestedInput | $Types.Skip
  }

  export type AttachmentCreateManyInput = {
    id?: string | $Types.Skip
    url: string
    type: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type AttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentCreateInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    profile: ProfileCreateNestedOneWithoutAttachmentsInput
    attachment: AttachmentCreateNestedOneWithoutProfileAttachmentsInput
  }

  export type ProfileAttachmentUncheckedCreateInput = {
    id?: string | $Types.Skip
    profileId: string
    attachmentId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUpdateOneRequiredWithoutAttachmentsNestedInput | $Types.Skip
    attachment?: AttachmentUpdateOneRequiredWithoutProfileAttachmentsNestedInput | $Types.Skip
  }

  export type ProfileAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    profileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    attachmentId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentCreateManyInput = {
    id?: string | $Types.Skip
    profileId: string
    attachmentId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    profileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    attachmentId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type PostAttachmentCreateInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    post: PostCreateNestedOneWithoutAttachmentsInput
    attachment: AttachmentCreateNestedOneWithoutPostAttachmentsInput
  }

  export type PostAttachmentUncheckedCreateInput = {
    id?: string | $Types.Skip
    postId: string
    attachmentId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type PostAttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    post?: PostUpdateOneRequiredWithoutAttachmentsNestedInput | $Types.Skip
    attachment?: AttachmentUpdateOneRequiredWithoutPostAttachmentsNestedInput | $Types.Skip
  }

  export type PostAttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    attachmentId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type PostAttachmentCreateManyInput = {
    id?: string | $Types.Skip
    postId: string
    attachmentId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type PostAttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type PostAttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    attachmentId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null | $Types.Skip
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null | $Types.Skip
    isNot?: ProfileWhereInput | null | $Types.Skip
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput | $Types.Skip
    some?: PostWhereInput | $Types.Skip
    none?: PostWhereInput | $Types.Skip
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput | $Types.Skip
    some?: LikeWhereInput | $Types.Skip
    none?: LikeWhereInput | $Types.Skip
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput | $Types.Skip
    some?: BookmarkWhereInput | $Types.Skip
    none?: BookmarkWhereInput | $Types.Skip
  }

  export type FollowListRelationFilter = {
    every?: FollowWhereInput | $Types.Skip
    some?: FollowWhereInput | $Types.Skip
    none?: FollowWhereInput | $Types.Skip
  }

  export type FeedListRelationFilter = {
    every?: FeedWhereInput | $Types.Skip
    some?: FeedWhereInput | $Types.Skip
    none?: FeedWhereInput | $Types.Skip
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder | $Types.Skip
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type FeedOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    isVerified?: SortOrder | $Types.Skip
    isEmailVerified?: SortOrder | $Types.Skip
    isAdmin?: SortOrder | $Types.Skip
    isBanned?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
    passwordResetToken?: SortOrder | $Types.Skip
    passwordResetExpires?: SortOrder | $Types.Skip
    emailVerificationToken?: SortOrder | $Types.Skip
    emailVerificationExpires?: SortOrder | $Types.Skip
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    isVerified?: SortOrder | $Types.Skip
    isEmailVerified?: SortOrder | $Types.Skip
    isAdmin?: SortOrder | $Types.Skip
    isBanned?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
    passwordResetToken?: SortOrder | $Types.Skip
    passwordResetExpires?: SortOrder | $Types.Skip
    emailVerificationToken?: SortOrder | $Types.Skip
    emailVerificationExpires?: SortOrder | $Types.Skip
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    username?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    password?: SortOrder | $Types.Skip
    isActive?: SortOrder | $Types.Skip
    isVerified?: SortOrder | $Types.Skip
    isEmailVerified?: SortOrder | $Types.Skip
    isAdmin?: SortOrder | $Types.Skip
    isBanned?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
    passwordResetToken?: SortOrder | $Types.Skip
    passwordResetExpires?: SortOrder | $Types.Skip
    emailVerificationToken?: SortOrder | $Types.Skip
    emailVerificationExpires?: SortOrder | $Types.Skip
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput | $Types.Skip
    isNot?: UserWhereInput | $Types.Skip
  }

  export type ProfileAttachmentListRelationFilter = {
    every?: ProfileAttachmentWhereInput | $Types.Skip
    some?: ProfileAttachmentWhereInput | $Types.Skip
    none?: ProfileAttachmentWhereInput | $Types.Skip
  }

  export type ProfileAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    firstName?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    dateOfBirth?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    bio?: SortOrder | $Types.Skip
    avatar?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    state?: SortOrder | $Types.Skip
    country?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    website?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    firstName?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    dateOfBirth?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    bio?: SortOrder | $Types.Skip
    avatar?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    state?: SortOrder | $Types.Skip
    country?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    website?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    firstName?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    dateOfBirth?: SortOrder | $Types.Skip
    gender?: SortOrder | $Types.Skip
    bio?: SortOrder | $Types.Skip
    avatar?: SortOrder | $Types.Skip
    city?: SortOrder | $Types.Skip
    state?: SortOrder | $Types.Skip
    country?: SortOrder | $Types.Skip
    phone?: SortOrder | $Types.Skip
    website?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type EnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType | $Types.Skip
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null | $Types.Skip
    isNot?: PostWhereInput | null | $Types.Skip
  }

  export type PostAttachmentListRelationFilter = {
    every?: PostAttachmentWhereInput | $Types.Skip
    some?: PostAttachmentWhereInput | $Types.Skip
    none?: PostAttachmentWhereInput | $Types.Skip
  }

  export type PostAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    content?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    rootId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    content?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    rootId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    content?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    parentId?: SortOrder | $Types.Skip
    rootId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type EnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumPostTypeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumPostTypeFilter<$PrismaModel> | $Types.Skip
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput | $Types.Skip
    isNot?: PostWhereInput | $Types.Skip
  }

  export type LikeUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type BookmarkUserIdPostIdCompoundUniqueInput = {
    userId: string
    postId: string
  }

  export type BookmarkCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type BookmarkMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type BookmarkMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type FollowFollowerIdFollowingIdCompoundUniqueInput = {
    followerId: string
    followingId: string
  }

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    followerId?: SortOrder | $Types.Skip
    followingId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    followerId?: SortOrder | $Types.Skip
    followingId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    followerId?: SortOrder | $Types.Skip
    followingId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type FeedCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type FeedMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type FeedMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    url?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    url?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    url?: SortOrder | $Types.Skip
    type?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput | $Types.Skip
    isNot?: ProfileWhereInput | $Types.Skip
  }

  export type AttachmentScalarRelationFilter = {
    is?: AttachmentWhereInput | $Types.Skip
    isNot?: AttachmentWhereInput | $Types.Skip
  }

  export type ProfileAttachmentCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    profileId?: SortOrder | $Types.Skip
    attachmentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type ProfileAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    profileId?: SortOrder | $Types.Skip
    attachmentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type ProfileAttachmentMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    profileId?: SortOrder | $Types.Skip
    attachmentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type PostAttachmentCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    attachmentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type PostAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    attachmentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type PostAttachmentMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    postId?: SortOrder | $Types.Skip
    attachmentId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    deletedAt?: SortOrder | $Types.Skip
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | $Types.Skip
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | $Types.Skip
    connect?: ProfileWhereUniqueInput | $Types.Skip
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: PostCreateManyUserInputEnvelope | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: LikeCreateManyUserInputEnvelope | $Types.Skip
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
  }

  export type BookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: BookmarkCreateManyUserInputEnvelope | $Types.Skip
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
  }

  export type FollowCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[] | $Types.Skip
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[] | $Types.Skip
    createMany?: FollowCreateManyFollowerInputEnvelope | $Types.Skip
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
  }

  export type FollowCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[] | $Types.Skip
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[] | $Types.Skip
    createMany?: FollowCreateManyFollowingInputEnvelope | $Types.Skip
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
  }

  export type FeedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput> | FeedCreateWithoutUserInput[] | FeedUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: FeedCreateOrConnectWithoutUserInput | FeedCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: FeedCreateManyUserInputEnvelope | $Types.Skip
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | $Types.Skip
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | $Types.Skip
    connect?: ProfileWhereUniqueInput | $Types.Skip
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: PostCreateManyUserInputEnvelope | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: LikeCreateManyUserInputEnvelope | $Types.Skip
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
  }

  export type BookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: BookmarkCreateManyUserInputEnvelope | $Types.Skip
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[] | $Types.Skip
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[] | $Types.Skip
    createMany?: FollowCreateManyFollowerInputEnvelope | $Types.Skip
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[] | $Types.Skip
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[] | $Types.Skip
    createMany?: FollowCreateManyFollowingInputEnvelope | $Types.Skip
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
  }

  export type FeedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput> | FeedCreateWithoutUserInput[] | FeedUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: FeedCreateOrConnectWithoutUserInput | FeedCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: FeedCreateManyUserInputEnvelope | $Types.Skip
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null | $Types.Skip
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean | $Types.Skip
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string | $Types.Skip
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null | $Types.Skip
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | $Types.Skip
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | $Types.Skip
    upsert?: ProfileUpsertWithoutUserInput | $Types.Skip
    disconnect?: ProfileWhereInput | boolean | $Types.Skip
    delete?: ProfileWhereInput | boolean | $Types.Skip
    connect?: ProfileWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput> | $Types.Skip
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: PostCreateManyUserInputEnvelope | $Types.Skip
    set?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: LikeCreateManyUserInputEnvelope | $Types.Skip
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[] | $Types.Skip
  }

  export type BookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: BookmarkCreateManyUserInputEnvelope | $Types.Skip
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[] | $Types.Skip
  }

  export type FollowUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[] | $Types.Skip
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[] | $Types.Skip
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[] | $Types.Skip
    createMany?: FollowCreateManyFollowerInputEnvelope | $Types.Skip
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[] | $Types.Skip
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[] | $Types.Skip
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[] | $Types.Skip
  }

  export type FollowUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[] | $Types.Skip
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[] | $Types.Skip
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowingInput | FollowUpsertWithWhereUniqueWithoutFollowingInput[] | $Types.Skip
    createMany?: FollowCreateManyFollowingInputEnvelope | $Types.Skip
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    update?: FollowUpdateWithWhereUniqueWithoutFollowingInput | FollowUpdateWithWhereUniqueWithoutFollowingInput[] | $Types.Skip
    updateMany?: FollowUpdateManyWithWhereWithoutFollowingInput | FollowUpdateManyWithWhereWithoutFollowingInput[] | $Types.Skip
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[] | $Types.Skip
  }

  export type FeedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput> | FeedCreateWithoutUserInput[] | FeedUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: FeedCreateOrConnectWithoutUserInput | FeedCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: FeedUpsertWithWhereUniqueWithoutUserInput | FeedUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: FeedCreateManyUserInputEnvelope | $Types.Skip
    set?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    disconnect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    delete?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    update?: FeedUpdateWithWhereUniqueWithoutUserInput | FeedUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: FeedUpdateManyWithWhereWithoutUserInput | FeedUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: FeedScalarWhereInput | FeedScalarWhereInput[] | $Types.Skip
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput> | $Types.Skip
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput | $Types.Skip
    upsert?: ProfileUpsertWithoutUserInput | $Types.Skip
    disconnect?: ProfileWhereInput | boolean | $Types.Skip
    delete?: ProfileWhereInput | boolean | $Types.Skip
    connect?: ProfileWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput> | $Types.Skip
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: PostCreateManyUserInputEnvelope | $Types.Skip
    set?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: LikeCreateManyUserInputEnvelope | $Types.Skip
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[] | $Types.Skip
  }

  export type BookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: BookmarkCreateManyUserInputEnvelope | $Types.Skip
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[] | $Types.Skip
  }

  export type FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[] | $Types.Skip
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[] | $Types.Skip
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[] | $Types.Skip
    createMany?: FollowCreateManyFollowerInputEnvelope | $Types.Skip
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[] | $Types.Skip
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[] | $Types.Skip
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[] | $Types.Skip
  }

  export type FollowUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[] | $Types.Skip
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[] | $Types.Skip
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowingInput | FollowUpsertWithWhereUniqueWithoutFollowingInput[] | $Types.Skip
    createMany?: FollowCreateManyFollowingInputEnvelope | $Types.Skip
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[] | $Types.Skip
    update?: FollowUpdateWithWhereUniqueWithoutFollowingInput | FollowUpdateWithWhereUniqueWithoutFollowingInput[] | $Types.Skip
    updateMany?: FollowUpdateManyWithWhereWithoutFollowingInput | FollowUpdateManyWithWhereWithoutFollowingInput[] | $Types.Skip
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[] | $Types.Skip
  }

  export type FeedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput> | FeedCreateWithoutUserInput[] | FeedUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: FeedCreateOrConnectWithoutUserInput | FeedCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: FeedUpsertWithWhereUniqueWithoutUserInput | FeedUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: FeedCreateManyUserInputEnvelope | $Types.Skip
    set?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    disconnect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    delete?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    update?: FeedUpdateWithWhereUniqueWithoutUserInput | FeedUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: FeedUpdateManyWithWhereWithoutUserInput | FeedUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: FeedScalarWhereInput | FeedScalarWhereInput[] | $Types.Skip
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type ProfileAttachmentCreateNestedManyWithoutProfileInput = {
    create?: XOR<ProfileAttachmentCreateWithoutProfileInput, ProfileAttachmentUncheckedCreateWithoutProfileInput> | ProfileAttachmentCreateWithoutProfileInput[] | ProfileAttachmentUncheckedCreateWithoutProfileInput[] | $Types.Skip
    connectOrCreate?: ProfileAttachmentCreateOrConnectWithoutProfileInput | ProfileAttachmentCreateOrConnectWithoutProfileInput[] | $Types.Skip
    createMany?: ProfileAttachmentCreateManyProfileInputEnvelope | $Types.Skip
    connect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
  }

  export type ProfileAttachmentUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ProfileAttachmentCreateWithoutProfileInput, ProfileAttachmentUncheckedCreateWithoutProfileInput> | ProfileAttachmentCreateWithoutProfileInput[] | ProfileAttachmentUncheckedCreateWithoutProfileInput[] | $Types.Skip
    connectOrCreate?: ProfileAttachmentCreateOrConnectWithoutProfileInput | ProfileAttachmentCreateOrConnectWithoutProfileInput[] | $Types.Skip
    createMany?: ProfileAttachmentCreateManyProfileInputEnvelope | $Types.Skip
    connect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput | $Types.Skip
    upsert?: UserUpsertWithoutProfileInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput> | $Types.Skip
  }

  export type ProfileAttachmentUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ProfileAttachmentCreateWithoutProfileInput, ProfileAttachmentUncheckedCreateWithoutProfileInput> | ProfileAttachmentCreateWithoutProfileInput[] | ProfileAttachmentUncheckedCreateWithoutProfileInput[] | $Types.Skip
    connectOrCreate?: ProfileAttachmentCreateOrConnectWithoutProfileInput | ProfileAttachmentCreateOrConnectWithoutProfileInput[] | $Types.Skip
    upsert?: ProfileAttachmentUpsertWithWhereUniqueWithoutProfileInput | ProfileAttachmentUpsertWithWhereUniqueWithoutProfileInput[] | $Types.Skip
    createMany?: ProfileAttachmentCreateManyProfileInputEnvelope | $Types.Skip
    set?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    disconnect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    delete?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    connect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    update?: ProfileAttachmentUpdateWithWhereUniqueWithoutProfileInput | ProfileAttachmentUpdateWithWhereUniqueWithoutProfileInput[] | $Types.Skip
    updateMany?: ProfileAttachmentUpdateManyWithWhereWithoutProfileInput | ProfileAttachmentUpdateManyWithWhereWithoutProfileInput[] | $Types.Skip
    deleteMany?: ProfileAttachmentScalarWhereInput | ProfileAttachmentScalarWhereInput[] | $Types.Skip
  }

  export type ProfileAttachmentUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ProfileAttachmentCreateWithoutProfileInput, ProfileAttachmentUncheckedCreateWithoutProfileInput> | ProfileAttachmentCreateWithoutProfileInput[] | ProfileAttachmentUncheckedCreateWithoutProfileInput[] | $Types.Skip
    connectOrCreate?: ProfileAttachmentCreateOrConnectWithoutProfileInput | ProfileAttachmentCreateOrConnectWithoutProfileInput[] | $Types.Skip
    upsert?: ProfileAttachmentUpsertWithWhereUniqueWithoutProfileInput | ProfileAttachmentUpsertWithWhereUniqueWithoutProfileInput[] | $Types.Skip
    createMany?: ProfileAttachmentCreateManyProfileInputEnvelope | $Types.Skip
    set?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    disconnect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    delete?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    connect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    update?: ProfileAttachmentUpdateWithWhereUniqueWithoutProfileInput | ProfileAttachmentUpdateWithWhereUniqueWithoutProfileInput[] | $Types.Skip
    updateMany?: ProfileAttachmentUpdateManyWithWhereWithoutProfileInput | ProfileAttachmentUpdateManyWithWhereWithoutProfileInput[] | $Types.Skip
    deleteMany?: ProfileAttachmentScalarWhereInput | ProfileAttachmentScalarWhereInput[] | $Types.Skip
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type PostCreateNestedOneWithoutChildrenInput = {
    create?: XOR<PostCreateWithoutChildrenInput, PostUncheckedCreateWithoutChildrenInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutChildrenInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
  }

  export type PostCreateNestedManyWithoutParentInput = {
    create?: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput> | PostCreateWithoutParentInput[] | PostUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutParentInput | PostCreateOrConnectWithoutParentInput[] | $Types.Skip
    createMany?: PostCreateManyParentInputEnvelope | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
  }

  export type PostAttachmentCreateNestedManyWithoutPostInput = {
    create?: XOR<PostAttachmentCreateWithoutPostInput, PostAttachmentUncheckedCreateWithoutPostInput> | PostAttachmentCreateWithoutPostInput[] | PostAttachmentUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: PostAttachmentCreateOrConnectWithoutPostInput | PostAttachmentCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: PostAttachmentCreateManyPostInputEnvelope | $Types.Skip
    connect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
  }

  export type LikeCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: LikeCreateManyPostInputEnvelope | $Types.Skip
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
  }

  export type BookmarkCreateNestedManyWithoutPostInput = {
    create?: XOR<BookmarkCreateWithoutPostInput, BookmarkUncheckedCreateWithoutPostInput> | BookmarkCreateWithoutPostInput[] | BookmarkUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: BookmarkCreateOrConnectWithoutPostInput | BookmarkCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: BookmarkCreateManyPostInputEnvelope | $Types.Skip
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
  }

  export type FeedCreateNestedManyWithoutPostInput = {
    create?: XOR<FeedCreateWithoutPostInput, FeedUncheckedCreateWithoutPostInput> | FeedCreateWithoutPostInput[] | FeedUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: FeedCreateOrConnectWithoutPostInput | FeedCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: FeedCreateManyPostInputEnvelope | $Types.Skip
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
  }

  export type PostUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput> | PostCreateWithoutParentInput[] | PostUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutParentInput | PostCreateOrConnectWithoutParentInput[] | $Types.Skip
    createMany?: PostCreateManyParentInputEnvelope | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
  }

  export type PostAttachmentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostAttachmentCreateWithoutPostInput, PostAttachmentUncheckedCreateWithoutPostInput> | PostAttachmentCreateWithoutPostInput[] | PostAttachmentUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: PostAttachmentCreateOrConnectWithoutPostInput | PostAttachmentCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: PostAttachmentCreateManyPostInputEnvelope | $Types.Skip
    connect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
  }

  export type LikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: LikeCreateManyPostInputEnvelope | $Types.Skip
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
  }

  export type BookmarkUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<BookmarkCreateWithoutPostInput, BookmarkUncheckedCreateWithoutPostInput> | BookmarkCreateWithoutPostInput[] | BookmarkUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: BookmarkCreateOrConnectWithoutPostInput | BookmarkCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: BookmarkCreateManyPostInputEnvelope | $Types.Skip
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
  }

  export type FeedUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<FeedCreateWithoutPostInput, FeedUncheckedCreateWithoutPostInput> | FeedCreateWithoutPostInput[] | FeedUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: FeedCreateOrConnectWithoutPostInput | FeedCreateOrConnectWithoutPostInput[] | $Types.Skip
    createMany?: FeedCreateManyPostInputEnvelope | $Types.Skip
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
  }

  export type EnumPostTypeFieldUpdateOperationsInput = {
    set?: $Enums.PostType | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput | $Types.Skip
    upsert?: UserUpsertWithoutPostsInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput> | $Types.Skip
  }

  export type PostUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<PostCreateWithoutChildrenInput, PostUncheckedCreateWithoutChildrenInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutChildrenInput | $Types.Skip
    upsert?: PostUpsertWithoutChildrenInput | $Types.Skip
    disconnect?: PostWhereInput | boolean | $Types.Skip
    delete?: PostWhereInput | boolean | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutChildrenInput, PostUpdateWithoutChildrenInput>, PostUncheckedUpdateWithoutChildrenInput> | $Types.Skip
  }

  export type PostUpdateManyWithoutParentNestedInput = {
    create?: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput> | PostCreateWithoutParentInput[] | PostUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutParentInput | PostCreateOrConnectWithoutParentInput[] | $Types.Skip
    upsert?: PostUpsertWithWhereUniqueWithoutParentInput | PostUpsertWithWhereUniqueWithoutParentInput[] | $Types.Skip
    createMany?: PostCreateManyParentInputEnvelope | $Types.Skip
    set?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    update?: PostUpdateWithWhereUniqueWithoutParentInput | PostUpdateWithWhereUniqueWithoutParentInput[] | $Types.Skip
    updateMany?: PostUpdateManyWithWhereWithoutParentInput | PostUpdateManyWithWhereWithoutParentInput[] | $Types.Skip
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
  }

  export type PostAttachmentUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostAttachmentCreateWithoutPostInput, PostAttachmentUncheckedCreateWithoutPostInput> | PostAttachmentCreateWithoutPostInput[] | PostAttachmentUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: PostAttachmentCreateOrConnectWithoutPostInput | PostAttachmentCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: PostAttachmentUpsertWithWhereUniqueWithoutPostInput | PostAttachmentUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: PostAttachmentCreateManyPostInputEnvelope | $Types.Skip
    set?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    disconnect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    delete?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    connect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    update?: PostAttachmentUpdateWithWhereUniqueWithoutPostInput | PostAttachmentUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: PostAttachmentUpdateManyWithWhereWithoutPostInput | PostAttachmentUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: PostAttachmentScalarWhereInput | PostAttachmentScalarWhereInput[] | $Types.Skip
  }

  export type LikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: LikeUpsertWithWhereUniqueWithoutPostInput | LikeUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: LikeCreateManyPostInputEnvelope | $Types.Skip
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    update?: LikeUpdateWithWhereUniqueWithoutPostInput | LikeUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: LikeUpdateManyWithWhereWithoutPostInput | LikeUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[] | $Types.Skip
  }

  export type BookmarkUpdateManyWithoutPostNestedInput = {
    create?: XOR<BookmarkCreateWithoutPostInput, BookmarkUncheckedCreateWithoutPostInput> | BookmarkCreateWithoutPostInput[] | BookmarkUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: BookmarkCreateOrConnectWithoutPostInput | BookmarkCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: BookmarkUpsertWithWhereUniqueWithoutPostInput | BookmarkUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: BookmarkCreateManyPostInputEnvelope | $Types.Skip
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    update?: BookmarkUpdateWithWhereUniqueWithoutPostInput | BookmarkUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: BookmarkUpdateManyWithWhereWithoutPostInput | BookmarkUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[] | $Types.Skip
  }

  export type FeedUpdateManyWithoutPostNestedInput = {
    create?: XOR<FeedCreateWithoutPostInput, FeedUncheckedCreateWithoutPostInput> | FeedCreateWithoutPostInput[] | FeedUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: FeedCreateOrConnectWithoutPostInput | FeedCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: FeedUpsertWithWhereUniqueWithoutPostInput | FeedUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: FeedCreateManyPostInputEnvelope | $Types.Skip
    set?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    disconnect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    delete?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    update?: FeedUpdateWithWhereUniqueWithoutPostInput | FeedUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: FeedUpdateManyWithWhereWithoutPostInput | FeedUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: FeedScalarWhereInput | FeedScalarWhereInput[] | $Types.Skip
  }

  export type PostUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput> | PostCreateWithoutParentInput[] | PostUncheckedCreateWithoutParentInput[] | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutParentInput | PostCreateOrConnectWithoutParentInput[] | $Types.Skip
    upsert?: PostUpsertWithWhereUniqueWithoutParentInput | PostUpsertWithWhereUniqueWithoutParentInput[] | $Types.Skip
    createMany?: PostCreateManyParentInputEnvelope | $Types.Skip
    set?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[] | $Types.Skip
    update?: PostUpdateWithWhereUniqueWithoutParentInput | PostUpdateWithWhereUniqueWithoutParentInput[] | $Types.Skip
    updateMany?: PostUpdateManyWithWhereWithoutParentInput | PostUpdateManyWithWhereWithoutParentInput[] | $Types.Skip
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
  }

  export type PostAttachmentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostAttachmentCreateWithoutPostInput, PostAttachmentUncheckedCreateWithoutPostInput> | PostAttachmentCreateWithoutPostInput[] | PostAttachmentUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: PostAttachmentCreateOrConnectWithoutPostInput | PostAttachmentCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: PostAttachmentUpsertWithWhereUniqueWithoutPostInput | PostAttachmentUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: PostAttachmentCreateManyPostInputEnvelope | $Types.Skip
    set?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    disconnect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    delete?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    connect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    update?: PostAttachmentUpdateWithWhereUniqueWithoutPostInput | PostAttachmentUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: PostAttachmentUpdateManyWithWhereWithoutPostInput | PostAttachmentUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: PostAttachmentScalarWhereInput | PostAttachmentScalarWhereInput[] | $Types.Skip
  }

  export type LikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput> | LikeCreateWithoutPostInput[] | LikeUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: LikeCreateOrConnectWithoutPostInput | LikeCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: LikeUpsertWithWhereUniqueWithoutPostInput | LikeUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: LikeCreateManyPostInputEnvelope | $Types.Skip
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[] | $Types.Skip
    update?: LikeUpdateWithWhereUniqueWithoutPostInput | LikeUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: LikeUpdateManyWithWhereWithoutPostInput | LikeUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[] | $Types.Skip
  }

  export type BookmarkUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<BookmarkCreateWithoutPostInput, BookmarkUncheckedCreateWithoutPostInput> | BookmarkCreateWithoutPostInput[] | BookmarkUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: BookmarkCreateOrConnectWithoutPostInput | BookmarkCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: BookmarkUpsertWithWhereUniqueWithoutPostInput | BookmarkUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: BookmarkCreateManyPostInputEnvelope | $Types.Skip
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[] | $Types.Skip
    update?: BookmarkUpdateWithWhereUniqueWithoutPostInput | BookmarkUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: BookmarkUpdateManyWithWhereWithoutPostInput | BookmarkUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[] | $Types.Skip
  }

  export type FeedUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<FeedCreateWithoutPostInput, FeedUncheckedCreateWithoutPostInput> | FeedCreateWithoutPostInput[] | FeedUncheckedCreateWithoutPostInput[] | $Types.Skip
    connectOrCreate?: FeedCreateOrConnectWithoutPostInput | FeedCreateOrConnectWithoutPostInput[] | $Types.Skip
    upsert?: FeedUpsertWithWhereUniqueWithoutPostInput | FeedUpsertWithWhereUniqueWithoutPostInput[] | $Types.Skip
    createMany?: FeedCreateManyPostInputEnvelope | $Types.Skip
    set?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    disconnect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    delete?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[] | $Types.Skip
    update?: FeedUpdateWithWhereUniqueWithoutPostInput | FeedUpdateWithWhereUniqueWithoutPostInput[] | $Types.Skip
    updateMany?: FeedUpdateManyWithWhereWithoutPostInput | FeedUpdateManyWithWhereWithoutPostInput[] | $Types.Skip
    deleteMany?: FeedScalarWhereInput | FeedScalarWhereInput[] | $Types.Skip
  }

  export type PostCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type PostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput | $Types.Skip
    upsert?: PostUpsertWithoutLikesInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLikesInput, PostUpdateWithoutLikesInput>, PostUncheckedUpdateWithoutLikesInput> | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput | $Types.Skip
    upsert?: UserUpsertWithoutLikesInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput> | $Types.Skip
  }

  export type PostCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<PostCreateWithoutBookmarksInput, PostUncheckedCreateWithoutBookmarksInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutBookmarksInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type PostUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<PostCreateWithoutBookmarksInput, PostUncheckedCreateWithoutBookmarksInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutBookmarksInput | $Types.Skip
    upsert?: PostUpsertWithoutBookmarksInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutBookmarksInput, PostUpdateWithoutBookmarksInput>, PostUncheckedUpdateWithoutBookmarksInput> | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput | $Types.Skip
    upsert?: UserUpsertWithoutBookmarksInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput> | $Types.Skip
  }

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput | $Types.Skip
    upsert?: UserUpsertWithoutFollowersInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowersInput, UserUpdateWithoutFollowersInput>, UserUncheckedUpdateWithoutFollowersInput> | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput | $Types.Skip
    upsert?: UserUpsertWithoutFollowingInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowingInput, UserUpdateWithoutFollowingInput>, UserUncheckedUpdateWithoutFollowingInput> | $Types.Skip
  }

  export type UserCreateNestedOneWithoutFeedInput = {
    create?: XOR<UserCreateWithoutFeedInput, UserUncheckedCreateWithoutFeedInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutFeedInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type PostCreateNestedOneWithoutFeedsInput = {
    create?: XOR<PostCreateWithoutFeedsInput, PostUncheckedCreateWithoutFeedsInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutFeedsInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutFeedNestedInput = {
    create?: XOR<UserCreateWithoutFeedInput, UserUncheckedCreateWithoutFeedInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutFeedInput | $Types.Skip
    upsert?: UserUpsertWithoutFeedInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedInput, UserUpdateWithoutFeedInput>, UserUncheckedUpdateWithoutFeedInput> | $Types.Skip
  }

  export type PostUpdateOneRequiredWithoutFeedsNestedInput = {
    create?: XOR<PostCreateWithoutFeedsInput, PostUncheckedCreateWithoutFeedsInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutFeedsInput | $Types.Skip
    upsert?: PostUpsertWithoutFeedsInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutFeedsInput, PostUpdateWithoutFeedsInput>, PostUncheckedUpdateWithoutFeedsInput> | $Types.Skip
  }

  export type PostAttachmentCreateNestedManyWithoutAttachmentInput = {
    create?: XOR<PostAttachmentCreateWithoutAttachmentInput, PostAttachmentUncheckedCreateWithoutAttachmentInput> | PostAttachmentCreateWithoutAttachmentInput[] | PostAttachmentUncheckedCreateWithoutAttachmentInput[] | $Types.Skip
    connectOrCreate?: PostAttachmentCreateOrConnectWithoutAttachmentInput | PostAttachmentCreateOrConnectWithoutAttachmentInput[] | $Types.Skip
    createMany?: PostAttachmentCreateManyAttachmentInputEnvelope | $Types.Skip
    connect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
  }

  export type ProfileAttachmentCreateNestedManyWithoutAttachmentInput = {
    create?: XOR<ProfileAttachmentCreateWithoutAttachmentInput, ProfileAttachmentUncheckedCreateWithoutAttachmentInput> | ProfileAttachmentCreateWithoutAttachmentInput[] | ProfileAttachmentUncheckedCreateWithoutAttachmentInput[] | $Types.Skip
    connectOrCreate?: ProfileAttachmentCreateOrConnectWithoutAttachmentInput | ProfileAttachmentCreateOrConnectWithoutAttachmentInput[] | $Types.Skip
    createMany?: ProfileAttachmentCreateManyAttachmentInputEnvelope | $Types.Skip
    connect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
  }

  export type PostAttachmentUncheckedCreateNestedManyWithoutAttachmentInput = {
    create?: XOR<PostAttachmentCreateWithoutAttachmentInput, PostAttachmentUncheckedCreateWithoutAttachmentInput> | PostAttachmentCreateWithoutAttachmentInput[] | PostAttachmentUncheckedCreateWithoutAttachmentInput[] | $Types.Skip
    connectOrCreate?: PostAttachmentCreateOrConnectWithoutAttachmentInput | PostAttachmentCreateOrConnectWithoutAttachmentInput[] | $Types.Skip
    createMany?: PostAttachmentCreateManyAttachmentInputEnvelope | $Types.Skip
    connect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
  }

  export type ProfileAttachmentUncheckedCreateNestedManyWithoutAttachmentInput = {
    create?: XOR<ProfileAttachmentCreateWithoutAttachmentInput, ProfileAttachmentUncheckedCreateWithoutAttachmentInput> | ProfileAttachmentCreateWithoutAttachmentInput[] | ProfileAttachmentUncheckedCreateWithoutAttachmentInput[] | $Types.Skip
    connectOrCreate?: ProfileAttachmentCreateOrConnectWithoutAttachmentInput | ProfileAttachmentCreateOrConnectWithoutAttachmentInput[] | $Types.Skip
    createMany?: ProfileAttachmentCreateManyAttachmentInputEnvelope | $Types.Skip
    connect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
  }

  export type PostAttachmentUpdateManyWithoutAttachmentNestedInput = {
    create?: XOR<PostAttachmentCreateWithoutAttachmentInput, PostAttachmentUncheckedCreateWithoutAttachmentInput> | PostAttachmentCreateWithoutAttachmentInput[] | PostAttachmentUncheckedCreateWithoutAttachmentInput[] | $Types.Skip
    connectOrCreate?: PostAttachmentCreateOrConnectWithoutAttachmentInput | PostAttachmentCreateOrConnectWithoutAttachmentInput[] | $Types.Skip
    upsert?: PostAttachmentUpsertWithWhereUniqueWithoutAttachmentInput | PostAttachmentUpsertWithWhereUniqueWithoutAttachmentInput[] | $Types.Skip
    createMany?: PostAttachmentCreateManyAttachmentInputEnvelope | $Types.Skip
    set?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    disconnect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    delete?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    connect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    update?: PostAttachmentUpdateWithWhereUniqueWithoutAttachmentInput | PostAttachmentUpdateWithWhereUniqueWithoutAttachmentInput[] | $Types.Skip
    updateMany?: PostAttachmentUpdateManyWithWhereWithoutAttachmentInput | PostAttachmentUpdateManyWithWhereWithoutAttachmentInput[] | $Types.Skip
    deleteMany?: PostAttachmentScalarWhereInput | PostAttachmentScalarWhereInput[] | $Types.Skip
  }

  export type ProfileAttachmentUpdateManyWithoutAttachmentNestedInput = {
    create?: XOR<ProfileAttachmentCreateWithoutAttachmentInput, ProfileAttachmentUncheckedCreateWithoutAttachmentInput> | ProfileAttachmentCreateWithoutAttachmentInput[] | ProfileAttachmentUncheckedCreateWithoutAttachmentInput[] | $Types.Skip
    connectOrCreate?: ProfileAttachmentCreateOrConnectWithoutAttachmentInput | ProfileAttachmentCreateOrConnectWithoutAttachmentInput[] | $Types.Skip
    upsert?: ProfileAttachmentUpsertWithWhereUniqueWithoutAttachmentInput | ProfileAttachmentUpsertWithWhereUniqueWithoutAttachmentInput[] | $Types.Skip
    createMany?: ProfileAttachmentCreateManyAttachmentInputEnvelope | $Types.Skip
    set?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    disconnect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    delete?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    connect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    update?: ProfileAttachmentUpdateWithWhereUniqueWithoutAttachmentInput | ProfileAttachmentUpdateWithWhereUniqueWithoutAttachmentInput[] | $Types.Skip
    updateMany?: ProfileAttachmentUpdateManyWithWhereWithoutAttachmentInput | ProfileAttachmentUpdateManyWithWhereWithoutAttachmentInput[] | $Types.Skip
    deleteMany?: ProfileAttachmentScalarWhereInput | ProfileAttachmentScalarWhereInput[] | $Types.Skip
  }

  export type PostAttachmentUncheckedUpdateManyWithoutAttachmentNestedInput = {
    create?: XOR<PostAttachmentCreateWithoutAttachmentInput, PostAttachmentUncheckedCreateWithoutAttachmentInput> | PostAttachmentCreateWithoutAttachmentInput[] | PostAttachmentUncheckedCreateWithoutAttachmentInput[] | $Types.Skip
    connectOrCreate?: PostAttachmentCreateOrConnectWithoutAttachmentInput | PostAttachmentCreateOrConnectWithoutAttachmentInput[] | $Types.Skip
    upsert?: PostAttachmentUpsertWithWhereUniqueWithoutAttachmentInput | PostAttachmentUpsertWithWhereUniqueWithoutAttachmentInput[] | $Types.Skip
    createMany?: PostAttachmentCreateManyAttachmentInputEnvelope | $Types.Skip
    set?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    disconnect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    delete?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    connect?: PostAttachmentWhereUniqueInput | PostAttachmentWhereUniqueInput[] | $Types.Skip
    update?: PostAttachmentUpdateWithWhereUniqueWithoutAttachmentInput | PostAttachmentUpdateWithWhereUniqueWithoutAttachmentInput[] | $Types.Skip
    updateMany?: PostAttachmentUpdateManyWithWhereWithoutAttachmentInput | PostAttachmentUpdateManyWithWhereWithoutAttachmentInput[] | $Types.Skip
    deleteMany?: PostAttachmentScalarWhereInput | PostAttachmentScalarWhereInput[] | $Types.Skip
  }

  export type ProfileAttachmentUncheckedUpdateManyWithoutAttachmentNestedInput = {
    create?: XOR<ProfileAttachmentCreateWithoutAttachmentInput, ProfileAttachmentUncheckedCreateWithoutAttachmentInput> | ProfileAttachmentCreateWithoutAttachmentInput[] | ProfileAttachmentUncheckedCreateWithoutAttachmentInput[] | $Types.Skip
    connectOrCreate?: ProfileAttachmentCreateOrConnectWithoutAttachmentInput | ProfileAttachmentCreateOrConnectWithoutAttachmentInput[] | $Types.Skip
    upsert?: ProfileAttachmentUpsertWithWhereUniqueWithoutAttachmentInput | ProfileAttachmentUpsertWithWhereUniqueWithoutAttachmentInput[] | $Types.Skip
    createMany?: ProfileAttachmentCreateManyAttachmentInputEnvelope | $Types.Skip
    set?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    disconnect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    delete?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    connect?: ProfileAttachmentWhereUniqueInput | ProfileAttachmentWhereUniqueInput[] | $Types.Skip
    update?: ProfileAttachmentUpdateWithWhereUniqueWithoutAttachmentInput | ProfileAttachmentUpdateWithWhereUniqueWithoutAttachmentInput[] | $Types.Skip
    updateMany?: ProfileAttachmentUpdateManyWithWhereWithoutAttachmentInput | ProfileAttachmentUpdateManyWithWhereWithoutAttachmentInput[] | $Types.Skip
    deleteMany?: ProfileAttachmentScalarWhereInput | ProfileAttachmentScalarWhereInput[] | $Types.Skip
  }

  export type ProfileCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<ProfileCreateWithoutAttachmentsInput, ProfileUncheckedCreateWithoutAttachmentsInput> | $Types.Skip
    connectOrCreate?: ProfileCreateOrConnectWithoutAttachmentsInput | $Types.Skip
    connect?: ProfileWhereUniqueInput | $Types.Skip
  }

  export type AttachmentCreateNestedOneWithoutProfileAttachmentsInput = {
    create?: XOR<AttachmentCreateWithoutProfileAttachmentsInput, AttachmentUncheckedCreateWithoutProfileAttachmentsInput> | $Types.Skip
    connectOrCreate?: AttachmentCreateOrConnectWithoutProfileAttachmentsInput | $Types.Skip
    connect?: AttachmentWhereUniqueInput | $Types.Skip
  }

  export type ProfileUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<ProfileCreateWithoutAttachmentsInput, ProfileUncheckedCreateWithoutAttachmentsInput> | $Types.Skip
    connectOrCreate?: ProfileCreateOrConnectWithoutAttachmentsInput | $Types.Skip
    upsert?: ProfileUpsertWithoutAttachmentsInput | $Types.Skip
    connect?: ProfileWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAttachmentsInput, ProfileUpdateWithoutAttachmentsInput>, ProfileUncheckedUpdateWithoutAttachmentsInput> | $Types.Skip
  }

  export type AttachmentUpdateOneRequiredWithoutProfileAttachmentsNestedInput = {
    create?: XOR<AttachmentCreateWithoutProfileAttachmentsInput, AttachmentUncheckedCreateWithoutProfileAttachmentsInput> | $Types.Skip
    connectOrCreate?: AttachmentCreateOrConnectWithoutProfileAttachmentsInput | $Types.Skip
    upsert?: AttachmentUpsertWithoutProfileAttachmentsInput | $Types.Skip
    connect?: AttachmentWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<AttachmentUpdateToOneWithWhereWithoutProfileAttachmentsInput, AttachmentUpdateWithoutProfileAttachmentsInput>, AttachmentUncheckedUpdateWithoutProfileAttachmentsInput> | $Types.Skip
  }

  export type PostCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<PostCreateWithoutAttachmentsInput, PostUncheckedCreateWithoutAttachmentsInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutAttachmentsInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
  }

  export type AttachmentCreateNestedOneWithoutPostAttachmentsInput = {
    create?: XOR<AttachmentCreateWithoutPostAttachmentsInput, AttachmentUncheckedCreateWithoutPostAttachmentsInput> | $Types.Skip
    connectOrCreate?: AttachmentCreateOrConnectWithoutPostAttachmentsInput | $Types.Skip
    connect?: AttachmentWhereUniqueInput | $Types.Skip
  }

  export type PostUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<PostCreateWithoutAttachmentsInput, PostUncheckedCreateWithoutAttachmentsInput> | $Types.Skip
    connectOrCreate?: PostCreateOrConnectWithoutAttachmentsInput | $Types.Skip
    upsert?: PostUpsertWithoutAttachmentsInput | $Types.Skip
    connect?: PostWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutAttachmentsInput, PostUpdateWithoutAttachmentsInput>, PostUncheckedUpdateWithoutAttachmentsInput> | $Types.Skip
  }

  export type AttachmentUpdateOneRequiredWithoutPostAttachmentsNestedInput = {
    create?: XOR<AttachmentCreateWithoutPostAttachmentsInput, AttachmentUncheckedCreateWithoutPostAttachmentsInput> | $Types.Skip
    connectOrCreate?: AttachmentCreateOrConnectWithoutPostAttachmentsInput | $Types.Skip
    upsert?: AttachmentUpsertWithoutPostAttachmentsInput | $Types.Skip
    connect?: AttachmentWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<AttachmentUpdateToOneWithWhereWithoutPostAttachmentsInput, AttachmentUpdateWithoutPostAttachmentsInput>, AttachmentUncheckedUpdateWithoutPostAttachmentsInput> | $Types.Skip
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null | $Types.Skip
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType | $Types.Skip
  }

  export type NestedEnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.PostType[] | ListEnumPostTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumPostTypeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumPostTypeFilter<$PrismaModel> | $Types.Skip
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string | $Types.Skip
    firstName?: string | null | $Types.Skip
    lastName?: string | null | $Types.Skip
    dateOfBirth?: Date | string | null | $Types.Skip
    gender?: string | null | $Types.Skip
    bio?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    city?: string | null | $Types.Skip
    state?: string | null | $Types.Skip
    country?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    website?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    attachments?: ProfileAttachmentCreateNestedManyWithoutProfileInput | $Types.Skip
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    firstName?: string | null | $Types.Skip
    lastName?: string | null | $Types.Skip
    dateOfBirth?: Date | string | null | $Types.Skip
    gender?: string | null | $Types.Skip
    bio?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    city?: string | null | $Types.Skip
    state?: string | null | $Types.Skip
    country?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    website?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    attachments?: ProfileAttachmentUncheckedCreateNestedManyWithoutProfileInput | $Types.Skip
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type PostCreateWithoutUserInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    parent?: PostCreateNestedOneWithoutChildrenInput | $Types.Skip
    children?: PostCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    parentId?: string | null | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    children?: PostUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type LikeCreateWithoutUserInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    post: PostCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    postId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type BookmarkCreateWithoutUserInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    post: PostCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    postId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type BookmarkCreateOrConnectWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCreateManyUserInputEnvelope = {
    data: BookmarkCreateManyUserInput | BookmarkCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type FollowCreateWithoutFollowerInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    following: UserCreateNestedOneWithoutFollowingInput
  }

  export type FollowUncheckedCreateWithoutFollowerInput = {
    id?: string | $Types.Skip
    followingId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type FollowCreateOrConnectWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowCreateManyFollowerInputEnvelope = {
    data: FollowCreateManyFollowerInput | FollowCreateManyFollowerInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type FollowCreateWithoutFollowingInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    follower: UserCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateWithoutFollowingInput = {
    id?: string | $Types.Skip
    followerId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type FollowCreateOrConnectWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput>
  }

  export type FollowCreateManyFollowingInputEnvelope = {
    data: FollowCreateManyFollowingInput | FollowCreateManyFollowingInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type FeedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    post: PostCreateNestedOneWithoutFeedsInput
  }

  export type FeedUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    postId: string
    createdAt?: Date | string | $Types.Skip
  }

  export type FeedCreateOrConnectWithoutUserInput = {
    where: FeedWhereUniqueInput
    create: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput>
  }

  export type FeedCreateManyUserInputEnvelope = {
    data: FeedCreateManyUserInput | FeedCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput | $Types.Skip
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput | $Types.Skip
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    firstName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    gender?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bio?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    state?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    country?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    attachments?: ProfileAttachmentUpdateManyWithoutProfileNestedInput | $Types.Skip
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    firstName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    gender?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bio?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    state?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    country?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    attachments?: ProfileAttachmentUncheckedUpdateManyWithoutProfileNestedInput | $Types.Skip
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
    OR?: PostScalarWhereInput[] | $Types.Skip
    NOT?: PostScalarWhereInput | PostScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Post"> | string | $Types.Skip
    content?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType | $Types.Skip
    userId?: StringFilter<"Post"> | string | $Types.Skip
    parentId?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    rootId?: StringNullableFilter<"Post"> | string | null | $Types.Skip
    createdAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Post"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Post"> | Date | string | null | $Types.Skip
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[] | $Types.Skip
    OR?: LikeScalarWhereInput[] | $Types.Skip
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Like"> | string | $Types.Skip
    postId?: StringFilter<"Like"> | string | $Types.Skip
    userId?: StringFilter<"Like"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Like"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Like"> | Date | string | null | $Types.Skip
  }

  export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[] | $Types.Skip
    OR?: BookmarkScalarWhereInput[] | $Types.Skip
    NOT?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Bookmark"> | string | $Types.Skip
    postId?: StringFilter<"Bookmark"> | string | $Types.Skip
    userId?: StringFilter<"Bookmark"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Bookmark"> | Date | string | null | $Types.Skip
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowerInput>
  }

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[] | $Types.Skip
    OR?: FollowScalarWhereInput[] | $Types.Skip
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Follow"> | string | $Types.Skip
    followerId?: StringFilter<"Follow"> | string | $Types.Skip
    followingId?: StringFilter<"Follow"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Follow"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"Follow"> | Date | string | null | $Types.Skip
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowingInput, FollowUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowingInput, FollowUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowingInput>
  }

  export type FeedUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedWhereUniqueInput
    update: XOR<FeedUpdateWithoutUserInput, FeedUncheckedUpdateWithoutUserInput>
    create: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput>
  }

  export type FeedUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedWhereUniqueInput
    data: XOR<FeedUpdateWithoutUserInput, FeedUncheckedUpdateWithoutUserInput>
  }

  export type FeedUpdateManyWithWhereWithoutUserInput = {
    where: FeedScalarWhereInput
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedScalarWhereInput = {
    AND?: FeedScalarWhereInput | FeedScalarWhereInput[] | $Types.Skip
    OR?: FeedScalarWhereInput[] | $Types.Skip
    NOT?: FeedScalarWhereInput | FeedScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Feed"> | string | $Types.Skip
    userId?: StringFilter<"Feed"> | string | $Types.Skip
    postId?: StringFilter<"Feed"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Feed"> | Date | string | $Types.Skip
  }

  export type UserCreateWithoutProfileInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    posts?: PostCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type ProfileAttachmentCreateWithoutProfileInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    attachment: AttachmentCreateNestedOneWithoutProfileAttachmentsInput
  }

  export type ProfileAttachmentUncheckedCreateWithoutProfileInput = {
    id?: string | $Types.Skip
    attachmentId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentCreateOrConnectWithoutProfileInput = {
    where: ProfileAttachmentWhereUniqueInput
    create: XOR<ProfileAttachmentCreateWithoutProfileInput, ProfileAttachmentUncheckedCreateWithoutProfileInput>
  }

  export type ProfileAttachmentCreateManyProfileInputEnvelope = {
    data: ProfileAttachmentCreateManyProfileInput | ProfileAttachmentCreateManyProfileInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    posts?: PostUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type ProfileAttachmentUpsertWithWhereUniqueWithoutProfileInput = {
    where: ProfileAttachmentWhereUniqueInput
    update: XOR<ProfileAttachmentUpdateWithoutProfileInput, ProfileAttachmentUncheckedUpdateWithoutProfileInput>
    create: XOR<ProfileAttachmentCreateWithoutProfileInput, ProfileAttachmentUncheckedCreateWithoutProfileInput>
  }

  export type ProfileAttachmentUpdateWithWhereUniqueWithoutProfileInput = {
    where: ProfileAttachmentWhereUniqueInput
    data: XOR<ProfileAttachmentUpdateWithoutProfileInput, ProfileAttachmentUncheckedUpdateWithoutProfileInput>
  }

  export type ProfileAttachmentUpdateManyWithWhereWithoutProfileInput = {
    where: ProfileAttachmentScalarWhereInput
    data: XOR<ProfileAttachmentUpdateManyMutationInput, ProfileAttachmentUncheckedUpdateManyWithoutProfileInput>
  }

  export type ProfileAttachmentScalarWhereInput = {
    AND?: ProfileAttachmentScalarWhereInput | ProfileAttachmentScalarWhereInput[] | $Types.Skip
    OR?: ProfileAttachmentScalarWhereInput[] | $Types.Skip
    NOT?: ProfileAttachmentScalarWhereInput | ProfileAttachmentScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"ProfileAttachment"> | string | $Types.Skip
    profileId?: StringFilter<"ProfileAttachment"> | string | $Types.Skip
    attachmentId?: StringFilter<"ProfileAttachment"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"ProfileAttachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"ProfileAttachment"> | Date | string | null | $Types.Skip
  }

  export type UserCreateWithoutPostsInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileCreateNestedOneWithoutUserInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type PostCreateWithoutChildrenInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutPostsInput
    parent?: PostCreateNestedOneWithoutChildrenInput | $Types.Skip
    attachments?: PostAttachmentCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutChildrenInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    userId: string
    parentId?: string | null | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    attachments?: PostAttachmentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutChildrenInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutChildrenInput, PostUncheckedCreateWithoutChildrenInput>
  }

  export type PostCreateWithoutParentInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutPostsInput
    children?: PostCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutParentInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    userId: string
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    children?: PostUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutParentInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput>
  }

  export type PostCreateManyParentInputEnvelope = {
    data: PostCreateManyParentInput | PostCreateManyParentInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type PostAttachmentCreateWithoutPostInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    attachment: AttachmentCreateNestedOneWithoutPostAttachmentsInput
  }

  export type PostAttachmentUncheckedCreateWithoutPostInput = {
    id?: string | $Types.Skip
    attachmentId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type PostAttachmentCreateOrConnectWithoutPostInput = {
    where: PostAttachmentWhereUniqueInput
    create: XOR<PostAttachmentCreateWithoutPostInput, PostAttachmentUncheckedCreateWithoutPostInput>
  }

  export type PostAttachmentCreateManyPostInputEnvelope = {
    data: PostAttachmentCreateManyPostInput | PostAttachmentCreateManyPostInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type LikeCreateWithoutPostInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutPostInput = {
    id?: string | $Types.Skip
    userId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type LikeCreateOrConnectWithoutPostInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
  }

  export type LikeCreateManyPostInputEnvelope = {
    data: LikeCreateManyPostInput | LikeCreateManyPostInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type BookmarkCreateWithoutPostInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutPostInput = {
    id?: string | $Types.Skip
    userId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type BookmarkCreateOrConnectWithoutPostInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutPostInput, BookmarkUncheckedCreateWithoutPostInput>
  }

  export type BookmarkCreateManyPostInputEnvelope = {
    data: BookmarkCreateManyPostInput | BookmarkCreateManyPostInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type FeedCreateWithoutPostInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    user: UserCreateNestedOneWithoutFeedInput
  }

  export type FeedUncheckedCreateWithoutPostInput = {
    id?: string | $Types.Skip
    userId: string
    createdAt?: Date | string | $Types.Skip
  }

  export type FeedCreateOrConnectWithoutPostInput = {
    where: FeedWhereUniqueInput
    create: XOR<FeedCreateWithoutPostInput, FeedUncheckedCreateWithoutPostInput>
  }

  export type FeedCreateManyPostInputEnvelope = {
    data: FeedCreateManyPostInput | FeedCreateManyPostInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUpdateOneWithoutUserNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type PostUpsertWithoutChildrenInput = {
    update: XOR<PostUpdateWithoutChildrenInput, PostUncheckedUpdateWithoutChildrenInput>
    create: XOR<PostCreateWithoutChildrenInput, PostUncheckedCreateWithoutChildrenInput>
    where?: PostWhereInput | $Types.Skip
  }

  export type PostUpdateToOneWithWhereWithoutChildrenInput = {
    where?: PostWhereInput | $Types.Skip
    data: XOR<PostUpdateWithoutChildrenInput, PostUncheckedUpdateWithoutChildrenInput>
  }

  export type PostUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    parent?: PostUpdateOneWithoutChildrenNestedInput | $Types.Skip
    attachments?: PostAttachmentUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    attachments?: PostAttachmentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUpsertWithWhereUniqueWithoutParentInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutParentInput, PostUncheckedUpdateWithoutParentInput>
    create: XOR<PostCreateWithoutParentInput, PostUncheckedCreateWithoutParentInput>
  }

  export type PostUpdateWithWhereUniqueWithoutParentInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutParentInput, PostUncheckedUpdateWithoutParentInput>
  }

  export type PostUpdateManyWithWhereWithoutParentInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutParentInput>
  }

  export type PostAttachmentUpsertWithWhereUniqueWithoutPostInput = {
    where: PostAttachmentWhereUniqueInput
    update: XOR<PostAttachmentUpdateWithoutPostInput, PostAttachmentUncheckedUpdateWithoutPostInput>
    create: XOR<PostAttachmentCreateWithoutPostInput, PostAttachmentUncheckedCreateWithoutPostInput>
  }

  export type PostAttachmentUpdateWithWhereUniqueWithoutPostInput = {
    where: PostAttachmentWhereUniqueInput
    data: XOR<PostAttachmentUpdateWithoutPostInput, PostAttachmentUncheckedUpdateWithoutPostInput>
  }

  export type PostAttachmentUpdateManyWithWhereWithoutPostInput = {
    where: PostAttachmentScalarWhereInput
    data: XOR<PostAttachmentUpdateManyMutationInput, PostAttachmentUncheckedUpdateManyWithoutPostInput>
  }

  export type PostAttachmentScalarWhereInput = {
    AND?: PostAttachmentScalarWhereInput | PostAttachmentScalarWhereInput[] | $Types.Skip
    OR?: PostAttachmentScalarWhereInput[] | $Types.Skip
    NOT?: PostAttachmentScalarWhereInput | PostAttachmentScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"PostAttachment"> | string | $Types.Skip
    postId?: StringFilter<"PostAttachment"> | string | $Types.Skip
    attachmentId?: StringFilter<"PostAttachment"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"PostAttachment"> | Date | string | $Types.Skip
    deletedAt?: DateTimeNullableFilter<"PostAttachment"> | Date | string | null | $Types.Skip
  }

  export type LikeUpsertWithWhereUniqueWithoutPostInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutPostInput, LikeUncheckedUpdateWithoutPostInput>
    create: XOR<LikeCreateWithoutPostInput, LikeUncheckedCreateWithoutPostInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutPostInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutPostInput, LikeUncheckedUpdateWithoutPostInput>
  }

  export type LikeUpdateManyWithWhereWithoutPostInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutPostInput>
  }

  export type BookmarkUpsertWithWhereUniqueWithoutPostInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutPostInput, BookmarkUncheckedUpdateWithoutPostInput>
    create: XOR<BookmarkCreateWithoutPostInput, BookmarkUncheckedCreateWithoutPostInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutPostInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutPostInput, BookmarkUncheckedUpdateWithoutPostInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutPostInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutPostInput>
  }

  export type FeedUpsertWithWhereUniqueWithoutPostInput = {
    where: FeedWhereUniqueInput
    update: XOR<FeedUpdateWithoutPostInput, FeedUncheckedUpdateWithoutPostInput>
    create: XOR<FeedCreateWithoutPostInput, FeedUncheckedCreateWithoutPostInput>
  }

  export type FeedUpdateWithWhereUniqueWithoutPostInput = {
    where: FeedWhereUniqueInput
    data: XOR<FeedUpdateWithoutPostInput, FeedUncheckedUpdateWithoutPostInput>
  }

  export type FeedUpdateManyWithWhereWithoutPostInput = {
    where: FeedScalarWhereInput
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutLikesInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutPostsInput
    parent?: PostCreateNestedOneWithoutChildrenInput | $Types.Skip
    children?: PostCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutLikesInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    userId: string
    parentId?: string | null | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    children?: PostUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type PostUpsertWithoutLikesInput = {
    update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    where?: PostWhereInput | $Types.Skip
  }

  export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostWhereInput | $Types.Skip
    data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    parent?: PostUpdateOneWithoutChildrenNestedInput | $Types.Skip
    children?: PostUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    children?: PostUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type PostCreateWithoutBookmarksInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutPostsInput
    parent?: PostCreateNestedOneWithoutChildrenInput | $Types.Skip
    children?: PostCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutBookmarksInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    userId: string
    parentId?: string | null | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    children?: PostUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutBookmarksInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutBookmarksInput, PostUncheckedCreateWithoutBookmarksInput>
  }

  export type UserCreateWithoutBookmarksInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type PostUpsertWithoutBookmarksInput = {
    update: XOR<PostUpdateWithoutBookmarksInput, PostUncheckedUpdateWithoutBookmarksInput>
    create: XOR<PostCreateWithoutBookmarksInput, PostUncheckedCreateWithoutBookmarksInput>
    where?: PostWhereInput | $Types.Skip
  }

  export type PostUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: PostWhereInput | $Types.Skip
    data: XOR<PostUpdateWithoutBookmarksInput, PostUncheckedUpdateWithoutBookmarksInput>
  }

  export type PostUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    parent?: PostUpdateOneWithoutChildrenNestedInput | $Types.Skip
    children?: PostUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    children?: PostUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserCreateWithoutFollowersInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput | $Types.Skip
    following?: FollowCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput | $Types.Skip
    feed?: FeedUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowCreateNestedManyWithoutFollowerInput | $Types.Skip
    feed?: FeedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput | $Types.Skip
    feed?: FeedUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
  }

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput | $Types.Skip
    following?: FollowUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput | $Types.Skip
    feed?: FeedUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>
  }

  export type UserUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUpdateManyWithoutFollowerNestedInput | $Types.Skip
    feed?: FeedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput | $Types.Skip
    feed?: FeedUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserCreateWithoutFeedInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowCreateNestedManyWithoutFollowingInput | $Types.Skip
  }

  export type UserUncheckedCreateWithoutFeedInput = {
    id?: string | $Types.Skip
    username?: string | null | $Types.Skip
    email: string
    password: string
    isActive?: boolean | $Types.Skip
    isVerified?: boolean | $Types.Skip
    isEmailVerified?: boolean | $Types.Skip
    isAdmin?: boolean | $Types.Skip
    isBanned?: boolean | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    passwordResetToken?: string | null | $Types.Skip
    passwordResetExpires?: Date | string | null | $Types.Skip
    emailVerificationToken?: string | null | $Types.Skip
    emailVerificationExpires?: Date | string | null | $Types.Skip
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput | $Types.Skip
    posts?: PostUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput | $Types.Skip
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput | $Types.Skip
  }

  export type UserCreateOrConnectWithoutFeedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedInput, UserUncheckedCreateWithoutFeedInput>
  }

  export type PostCreateWithoutFeedsInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutPostsInput
    parent?: PostCreateNestedOneWithoutChildrenInput | $Types.Skip
    children?: PostCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutFeedsInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    userId: string
    parentId?: string | null | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    children?: PostUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
    attachments?: PostAttachmentUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutFeedsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutFeedsInput, PostUncheckedCreateWithoutFeedsInput>
  }

  export type UserUpsertWithoutFeedInput = {
    update: XOR<UserUpdateWithoutFeedInput, UserUncheckedUpdateWithoutFeedInput>
    create: XOR<UserCreateWithoutFeedInput, UserUncheckedCreateWithoutFeedInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutFeedInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutFeedInput, UserUncheckedUpdateWithoutFeedInput>
  }

  export type UserUpdateWithoutFeedInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUpdateManyWithoutFollowingNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutFeedInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    username?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    password?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isActive?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isAdmin?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    isBanned?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    emailVerificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput | $Types.Skip
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput | $Types.Skip
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput | $Types.Skip
  }

  export type PostUpsertWithoutFeedsInput = {
    update: XOR<PostUpdateWithoutFeedsInput, PostUncheckedUpdateWithoutFeedsInput>
    create: XOR<PostCreateWithoutFeedsInput, PostUncheckedCreateWithoutFeedsInput>
    where?: PostWhereInput | $Types.Skip
  }

  export type PostUpdateToOneWithWhereWithoutFeedsInput = {
    where?: PostWhereInput | $Types.Skip
    data: XOR<PostUpdateWithoutFeedsInput, PostUncheckedUpdateWithoutFeedsInput>
  }

  export type PostUpdateWithoutFeedsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    parent?: PostUpdateOneWithoutChildrenNestedInput | $Types.Skip
    children?: PostUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutFeedsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    children?: PostUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostAttachmentCreateWithoutAttachmentInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    post: PostCreateNestedOneWithoutAttachmentsInput
  }

  export type PostAttachmentUncheckedCreateWithoutAttachmentInput = {
    id?: string | $Types.Skip
    postId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type PostAttachmentCreateOrConnectWithoutAttachmentInput = {
    where: PostAttachmentWhereUniqueInput
    create: XOR<PostAttachmentCreateWithoutAttachmentInput, PostAttachmentUncheckedCreateWithoutAttachmentInput>
  }

  export type PostAttachmentCreateManyAttachmentInputEnvelope = {
    data: PostAttachmentCreateManyAttachmentInput | PostAttachmentCreateManyAttachmentInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ProfileAttachmentCreateWithoutAttachmentInput = {
    id?: string | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    profile: ProfileCreateNestedOneWithoutAttachmentsInput
  }

  export type ProfileAttachmentUncheckedCreateWithoutAttachmentInput = {
    id?: string | $Types.Skip
    profileId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentCreateOrConnectWithoutAttachmentInput = {
    where: ProfileAttachmentWhereUniqueInput
    create: XOR<ProfileAttachmentCreateWithoutAttachmentInput, ProfileAttachmentUncheckedCreateWithoutAttachmentInput>
  }

  export type ProfileAttachmentCreateManyAttachmentInputEnvelope = {
    data: ProfileAttachmentCreateManyAttachmentInput | ProfileAttachmentCreateManyAttachmentInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type PostAttachmentUpsertWithWhereUniqueWithoutAttachmentInput = {
    where: PostAttachmentWhereUniqueInput
    update: XOR<PostAttachmentUpdateWithoutAttachmentInput, PostAttachmentUncheckedUpdateWithoutAttachmentInput>
    create: XOR<PostAttachmentCreateWithoutAttachmentInput, PostAttachmentUncheckedCreateWithoutAttachmentInput>
  }

  export type PostAttachmentUpdateWithWhereUniqueWithoutAttachmentInput = {
    where: PostAttachmentWhereUniqueInput
    data: XOR<PostAttachmentUpdateWithoutAttachmentInput, PostAttachmentUncheckedUpdateWithoutAttachmentInput>
  }

  export type PostAttachmentUpdateManyWithWhereWithoutAttachmentInput = {
    where: PostAttachmentScalarWhereInput
    data: XOR<PostAttachmentUpdateManyMutationInput, PostAttachmentUncheckedUpdateManyWithoutAttachmentInput>
  }

  export type ProfileAttachmentUpsertWithWhereUniqueWithoutAttachmentInput = {
    where: ProfileAttachmentWhereUniqueInput
    update: XOR<ProfileAttachmentUpdateWithoutAttachmentInput, ProfileAttachmentUncheckedUpdateWithoutAttachmentInput>
    create: XOR<ProfileAttachmentCreateWithoutAttachmentInput, ProfileAttachmentUncheckedCreateWithoutAttachmentInput>
  }

  export type ProfileAttachmentUpdateWithWhereUniqueWithoutAttachmentInput = {
    where: ProfileAttachmentWhereUniqueInput
    data: XOR<ProfileAttachmentUpdateWithoutAttachmentInput, ProfileAttachmentUncheckedUpdateWithoutAttachmentInput>
  }

  export type ProfileAttachmentUpdateManyWithWhereWithoutAttachmentInput = {
    where: ProfileAttachmentScalarWhereInput
    data: XOR<ProfileAttachmentUpdateManyMutationInput, ProfileAttachmentUncheckedUpdateManyWithoutAttachmentInput>
  }

  export type ProfileCreateWithoutAttachmentsInput = {
    id?: string | $Types.Skip
    firstName?: string | null | $Types.Skip
    lastName?: string | null | $Types.Skip
    dateOfBirth?: Date | string | null | $Types.Skip
    gender?: string | null | $Types.Skip
    bio?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    city?: string | null | $Types.Skip
    state?: string | null | $Types.Skip
    country?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    website?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutAttachmentsInput = {
    id?: string | $Types.Skip
    userId: string
    firstName?: string | null | $Types.Skip
    lastName?: string | null | $Types.Skip
    dateOfBirth?: Date | string | null | $Types.Skip
    gender?: string | null | $Types.Skip
    bio?: string | null | $Types.Skip
    avatar?: string | null | $Types.Skip
    city?: string | null | $Types.Skip
    state?: string | null | $Types.Skip
    country?: string | null | $Types.Skip
    phone?: string | null | $Types.Skip
    website?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type ProfileCreateOrConnectWithoutAttachmentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAttachmentsInput, ProfileUncheckedCreateWithoutAttachmentsInput>
  }

  export type AttachmentCreateWithoutProfileAttachmentsInput = {
    id?: string | $Types.Skip
    url: string
    type: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    postAttachments?: PostAttachmentCreateNestedManyWithoutAttachmentInput | $Types.Skip
  }

  export type AttachmentUncheckedCreateWithoutProfileAttachmentsInput = {
    id?: string | $Types.Skip
    url: string
    type: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    postAttachments?: PostAttachmentUncheckedCreateNestedManyWithoutAttachmentInput | $Types.Skip
  }

  export type AttachmentCreateOrConnectWithoutProfileAttachmentsInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutProfileAttachmentsInput, AttachmentUncheckedCreateWithoutProfileAttachmentsInput>
  }

  export type ProfileUpsertWithoutAttachmentsInput = {
    update: XOR<ProfileUpdateWithoutAttachmentsInput, ProfileUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<ProfileCreateWithoutAttachmentsInput, ProfileUncheckedCreateWithoutAttachmentsInput>
    where?: ProfileWhereInput | $Types.Skip
  }

  export type ProfileUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: ProfileWhereInput | $Types.Skip
    data: XOR<ProfileUpdateWithoutAttachmentsInput, ProfileUncheckedUpdateWithoutAttachmentsInput>
  }

  export type ProfileUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    firstName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    gender?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bio?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    state?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    country?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutProfileNestedInput | $Types.Skip
  }

  export type ProfileUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    firstName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    lastName?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    gender?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bio?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    avatar?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    city?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    state?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    country?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    phone?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    website?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type AttachmentUpsertWithoutProfileAttachmentsInput = {
    update: XOR<AttachmentUpdateWithoutProfileAttachmentsInput, AttachmentUncheckedUpdateWithoutProfileAttachmentsInput>
    create: XOR<AttachmentCreateWithoutProfileAttachmentsInput, AttachmentUncheckedCreateWithoutProfileAttachmentsInput>
    where?: AttachmentWhereInput | $Types.Skip
  }

  export type AttachmentUpdateToOneWithWhereWithoutProfileAttachmentsInput = {
    where?: AttachmentWhereInput | $Types.Skip
    data: XOR<AttachmentUpdateWithoutProfileAttachmentsInput, AttachmentUncheckedUpdateWithoutProfileAttachmentsInput>
  }

  export type AttachmentUpdateWithoutProfileAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    postAttachments?: PostAttachmentUpdateManyWithoutAttachmentNestedInput | $Types.Skip
  }

  export type AttachmentUncheckedUpdateWithoutProfileAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    postAttachments?: PostAttachmentUncheckedUpdateManyWithoutAttachmentNestedInput | $Types.Skip
  }

  export type PostCreateWithoutAttachmentsInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    user: UserCreateNestedOneWithoutPostsInput
    parent?: PostCreateNestedOneWithoutChildrenInput | $Types.Skip
    children?: PostCreateNestedManyWithoutParentInput | $Types.Skip
    likes?: LikeCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostUncheckedCreateWithoutAttachmentsInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    userId: string
    parentId?: string | null | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    children?: PostUncheckedCreateNestedManyWithoutParentInput | $Types.Skip
    likes?: LikeUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
    feeds?: FeedUncheckedCreateNestedManyWithoutPostInput | $Types.Skip
  }

  export type PostCreateOrConnectWithoutAttachmentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAttachmentsInput, PostUncheckedCreateWithoutAttachmentsInput>
  }

  export type AttachmentCreateWithoutPostAttachmentsInput = {
    id?: string | $Types.Skip
    url: string
    type: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    profileAttachments?: ProfileAttachmentCreateNestedManyWithoutAttachmentInput | $Types.Skip
  }

  export type AttachmentUncheckedCreateWithoutPostAttachmentsInput = {
    id?: string | $Types.Skip
    url: string
    type: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
    profileAttachments?: ProfileAttachmentUncheckedCreateNestedManyWithoutAttachmentInput | $Types.Skip
  }

  export type AttachmentCreateOrConnectWithoutPostAttachmentsInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutPostAttachmentsInput, AttachmentUncheckedCreateWithoutPostAttachmentsInput>
  }

  export type PostUpsertWithoutAttachmentsInput = {
    update: XOR<PostUpdateWithoutAttachmentsInput, PostUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<PostCreateWithoutAttachmentsInput, PostUncheckedCreateWithoutAttachmentsInput>
    where?: PostWhereInput | $Types.Skip
  }

  export type PostUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: PostWhereInput | $Types.Skip
    data: XOR<PostUpdateWithoutAttachmentsInput, PostUncheckedUpdateWithoutAttachmentsInput>
  }

  export type PostUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    parent?: PostUpdateOneWithoutChildrenNestedInput | $Types.Skip
    children?: PostUpdateManyWithoutParentNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    children?: PostUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type AttachmentUpsertWithoutPostAttachmentsInput = {
    update: XOR<AttachmentUpdateWithoutPostAttachmentsInput, AttachmentUncheckedUpdateWithoutPostAttachmentsInput>
    create: XOR<AttachmentCreateWithoutPostAttachmentsInput, AttachmentUncheckedCreateWithoutPostAttachmentsInput>
    where?: AttachmentWhereInput | $Types.Skip
  }

  export type AttachmentUpdateToOneWithWhereWithoutPostAttachmentsInput = {
    where?: AttachmentWhereInput | $Types.Skip
    data: XOR<AttachmentUpdateWithoutPostAttachmentsInput, AttachmentUncheckedUpdateWithoutPostAttachmentsInput>
  }

  export type AttachmentUpdateWithoutPostAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profileAttachments?: ProfileAttachmentUpdateManyWithoutAttachmentNestedInput | $Types.Skip
  }

  export type AttachmentUncheckedUpdateWithoutPostAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    url?: StringFieldUpdateOperationsInput | string | $Types.Skip
    type?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profileAttachments?: ProfileAttachmentUncheckedUpdateManyWithoutAttachmentNestedInput | $Types.Skip
  }

  export type PostCreateManyUserInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    parentId?: string | null | $Types.Skip
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type LikeCreateManyUserInput = {
    id?: string | $Types.Skip
    postId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type BookmarkCreateManyUserInput = {
    id?: string | $Types.Skip
    postId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type FollowCreateManyFollowerInput = {
    id?: string | $Types.Skip
    followingId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type FollowCreateManyFollowingInput = {
    id?: string | $Types.Skip
    followerId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type FeedCreateManyUserInput = {
    id?: string | $Types.Skip
    postId: string
    createdAt?: Date | string | $Types.Skip
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    parent?: PostUpdateOneWithoutChildrenNestedInput | $Types.Skip
    children?: PostUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    children?: PostUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    parentId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type LikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    post?: PostUpdateOneRequiredWithoutLikesNestedInput | $Types.Skip
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type BookmarkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    post?: PostUpdateOneRequiredWithoutBookmarksNestedInput | $Types.Skip
  }

  export type BookmarkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type BookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type FollowUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    following?: UserUpdateOneRequiredWithoutFollowingNestedInput | $Types.Skip
  }

  export type FollowUncheckedUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    followingId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type FollowUncheckedUpdateManyWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    followingId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type FollowUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput | $Types.Skip
  }

  export type FollowUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    followerId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type FollowUncheckedUpdateManyWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    followerId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type FeedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    post?: PostUpdateOneRequiredWithoutFeedsNestedInput | $Types.Skip
  }

  export type FeedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FeedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ProfileAttachmentCreateManyProfileInput = {
    id?: string | $Types.Skip
    attachmentId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    attachment?: AttachmentUpdateOneRequiredWithoutProfileAttachmentsNestedInput | $Types.Skip
  }

  export type ProfileAttachmentUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    attachmentId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    attachmentId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type PostCreateManyParentInput = {
    id?: string | $Types.Skip
    content?: string | null | $Types.Skip
    type?: $Enums.PostType | $Types.Skip
    userId: string
    rootId?: string | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type PostAttachmentCreateManyPostInput = {
    id?: string | $Types.Skip
    attachmentId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type LikeCreateManyPostInput = {
    id?: string | $Types.Skip
    userId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type BookmarkCreateManyPostInput = {
    id?: string | $Types.Skip
    userId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type FeedCreateManyPostInput = {
    id?: string | $Types.Skip
    userId: string
    createdAt?: Date | string | $Types.Skip
  }

  export type PostUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutPostsNestedInput | $Types.Skip
    children?: PostUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    children?: PostUncheckedUpdateManyWithoutParentNestedInput | $Types.Skip
    attachments?: PostAttachmentUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    likes?: LikeUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    bookmarks?: BookmarkUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
    feeds?: FeedUncheckedUpdateManyWithoutPostNestedInput | $Types.Skip
  }

  export type PostUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    content?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    rootId?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type PostAttachmentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    attachment?: AttachmentUpdateOneRequiredWithoutPostAttachmentsNestedInput | $Types.Skip
  }

  export type PostAttachmentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    attachmentId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type PostAttachmentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    attachmentId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type LikeUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutLikesNestedInput | $Types.Skip
  }

  export type LikeUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type LikeUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type BookmarkUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput | $Types.Skip
  }

  export type BookmarkUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type BookmarkUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type FeedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    user?: UserUpdateOneRequiredWithoutFeedNestedInput | $Types.Skip
  }

  export type FeedUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type FeedUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type PostAttachmentCreateManyAttachmentInput = {
    id?: string | $Types.Skip
    postId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentCreateManyAttachmentInput = {
    id?: string | $Types.Skip
    profileId: string
    createdAt?: Date | string | $Types.Skip
    deletedAt?: Date | string | null | $Types.Skip
  }

  export type PostAttachmentUpdateWithoutAttachmentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    post?: PostUpdateOneRequiredWithoutAttachmentsNestedInput | $Types.Skip
  }

  export type PostAttachmentUncheckedUpdateWithoutAttachmentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type PostAttachmentUncheckedUpdateManyWithoutAttachmentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    postId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentUpdateWithoutAttachmentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    profile?: ProfileUpdateOneRequiredWithoutAttachmentsNestedInput | $Types.Skip
  }

  export type ProfileAttachmentUncheckedUpdateWithoutAttachmentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    profileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }

  export type ProfileAttachmentUncheckedUpdateManyWithoutAttachmentInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    profileId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}