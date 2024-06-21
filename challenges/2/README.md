# Unions and Intersection Types

## Unions

This is a union type alias called _MyUnion_. It's value can be either a string or a number.
```typescript
type MyUnion = string | number;
```

When a variable is declared with a union type, it can be assigned a value of any of the types in the union.
```typescript
let myVar: MyUnion = "Hello";
```

`myVar` can be assigned a string

```typescript
myVar = "World";
```

`myVar` can also be assigned a number
```typescript
myVar = 42;
```

But it cannot be assigned a value of any other type
```typescript
myVar = true; // This line will cause a type error
```

Type aliases can also be used to define unions of other types, type aliases, and interfaces
```typescript
type MyObject = { a: number } | { b: string };

interface MyInterface {
    c: boolean;
}

type MyComplexUnion = MyObject | MyInterface;
```

When a variable is declared with type `MyComplexUnion`, it can be assigned a value of any of the types in the union.

```typescript
let myComplexVar: MyComplexUnion = { a: 42 };

myComplexVar = { b: "Hello" };

myComplexVar = { c: true };
```

But it cannot be assigned a value of any other type

```typescript
myComplexVar = 42; // This line will cause a type error
```

## Intersection Types

This is an intersection type alias called _MyIntersection_. It's value is an object that has properties of both _MyObject_ and _MyInterface_.

```typescript
type MyObject = { count: number };

interface MyInterface {
    id: string;
}

type MyIntersection = MyObject & MyInterface;
```

When a variable is declared with an intersection type, it must have properties of both types in the intersection.

```typescript
let myVar: MyIntersection = { count: 42, id: "fakeId" };
```

`myVar` can be assigned an object that has properties of both _MyObject_ and _MyInterface_.

```typescript
myVar = { count: 42, id: "fakeId" };
```

Intersecting incompatible types will result in type `never`. This is because the intersection of incompatible types is an empty set.

Never is a type that represents the absence of a value. It is used to represent a value that never occurs. For example, a function that never returns, or a variable that is never assigned a value.

```typescript
type SomeType = string & number; // SomeType is never
```

A variable with type `never` cannot be assigned a value of any type. Not even `undefined` or `null`.

```typescript
let myNeverVar: never = undefined; // This line will cause a type error
```


## Example Uses
Here are some ways in which we are using unions in our codebase.

### Accepting multiple types

You can use unions to define a type that can be one of several types. This is useful when you want to accept multiple types for a parameter or return value. This is recommended over using `any` because it provides type safety and better documentation.

```typescript
type JSONValue = 
    string | 
    number | 
    boolean | 
    null | 
    JSONValue[] | 
    { 
        [key: string]: JSONValue 
    };

function parseJSON(rawJsonString: string): JSONValue {
    // ...
}
```

Here, `parseJSON` can accept a string and return a `JSONValue`, which can be a string, number, boolean, null, an array of JSONValues, or an object with string keys and JSONValue values.

Read more about unions [here](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#unions)

### Making results predictable

You can use unions to define a type that can be one of several types. This is useful when you want to make the result of a function predictable. This is recommended over using `any` because it provides type safety and better documentation.

```typescript
type StringResult = 
    { success: true, value: string } | 
    { success: false, error: Error };

function doSomething(): Result {
    // ...
}
```

Here, `doSomething` can return a `StringResult`, which can be an object with a `success` property set to `true` and a `value` property set to a string, or an object with a `success` property set to `false` and an `error` property set to an Error.

Note that the `success` property is a boolean, but the existence of the `value` or `error` properties depends on the value of `success`. Here we used the `success` property to discriminate between the two types of results. This is a common pattern in TypeScript, and it's called a discriminated union. It's useful for modeling results of operations, where the result can be either a success or a failure, and the type of the result depends on the value of a property.

In order to use a discriminated union, the property that discriminates between the types must be a literal type. In this case, `success` is a boolean, but it's a literal type because it can only be `true` or `false`. This is what allows TypeScript to discriminate between the two types of results.

To discriminate between the two types of results, you can use a conditional statement to check the value of the `success` property.

```typescript
const result = doSomething();

if (result.success) {
    /* here value is a string. Accessing error will cause a type error as it doesnt exist when success is true */
    console.log(result.value);
} else {
    /* here error is an Error. Accessing value will cause a type error as it doesnt exist when success is false */
    console.error(result.error);
}
```

Using type guards, you can also use the `success` property to narrow the type of the result.

```typescript
type Success = { success: true, value: string };

function isStringResult(result: StringResult): result is Success {
    return result.success;
}

// Use the type guard to narrow the type of the result
const result = doSomething();

if (isStringResult(result)) {
    /* here value is a string. Accessing error will cause a type error as it doesnt exist when success is true */
    console.log(result.value);
} else {
    /* here error is an Error. Accessing value will cause a type error as it doesnt exist when success is false */
    console.error(result.error);
}
```

Realise how the type of `result` is narrowed to `Success` when `isStringResult` returns `true`. This is because the type guard `result is Success` narrows the type of `result` to `Success` when it returns `true`. It does this without changing the type of `result` in the code, but TypeScript knows that `result` is of type `Success` inside the `if` block.

Read more about type guards [here](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)