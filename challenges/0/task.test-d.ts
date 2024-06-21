
import { test } from "node:test";
import { case1, case2, case3, case4 } from "./setup";
import type { MyReturnType } from "./task";

type Expected1 = 1 | 2
type Expected2 = 0 | 1 | 2 | 3
type Expected3 = "empty" | "not empty"
type Expected4 = boolean


// ===================
// Test

test("MyReturnType correctly extracts the return type - numbers", () => {

    type a = Assert< Equal< MyReturnType<typeof case1>, Expected1 > >;
    type b = Assert< Equal< MyReturnType<typeof case2>, Expected2 > >;

});

test("MyReturnType correctly extracts the return type - string", () => {

    type a = Assert< Equal< MyReturnType<typeof case3>, Expected3 > >;

});

test("MyReturnType correctly extracts the return type - boolean", () => {

    type a = Assert< Equal< MyReturnType<typeof case4>, Expected4 > >;

});