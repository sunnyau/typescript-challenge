
import { test } from "node:test";
import { GetUsername, GetData } from "./task";

test("GetData type is inferred correctly", () => {

    type Result = [

        Expect<Equal<GetData<{ data: string }>, string>>,

        Expect<Equal<GetData<{ data: number }>, number>>,

        Expect<Equal<GetData<{ data: boolean }>, boolean>>,

        Expect<Equal<GetData<{ data: string | number }>, string | number>>,

    ];

});

test("getUsername return type is inferred correctly", () => {

    type Result = [

        Expect<Equal<GetUsername<{ username: "red" }>, "red">>,
        
        Expect<Equal<GetUsername<{ username: 123 }>, 123>>,

        Expect<Equal<GetUsername<{ username: true }>, true>>,

        Expect<Equal<GetUsername<{ age: 21 }>, null>>,
        
    ];

});

