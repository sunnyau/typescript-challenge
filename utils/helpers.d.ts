
type Collapsed<T> = {
    [K in keyof (T) & string]: T[K];
}
