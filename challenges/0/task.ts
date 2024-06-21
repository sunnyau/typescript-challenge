
/**
 *  Task 0: Implement a generic type MyReturnType<T> that takes a function type T and returns its return type.
 * 
 *  For example:
 * 
 *  type a = MyReturnType<() => 1>  // expected to be 1
 *  type b = MyReturnType<(a: string) => number>  // expected to be number
 * 
 * * Note: If the function does not return anything, the type should be void.
 * 
 *  Once you have completed this task, run the test suite to verify your solution. Run the following command: `yarn test --challenge 1`
 * 
 *  HINT: Use 'Infer' -> https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
 * */ 

export type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;

