/**
 * type User = { name: string; age: number; }
 * type NullableUser = Nullable<User>; { name: string | null; age: number | null; }
 */
type Nullable<T> = { [K in keyof T]: T[K] | null };
