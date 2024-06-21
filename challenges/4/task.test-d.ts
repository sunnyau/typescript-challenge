
import { test } from "node:test";
import { getSize, WithID } from "./task";
import { Collection } from "./setup";

test("Return type of getSize is number", () => {
    
    type Returned = ReturnType<typeof getSize>;

    type Result = [

        Assert<NotEqual<Returned, any>>,

        Assert<Equal<Returned, number>>

    ]

});

test("getSize supports arrays", () => {

    const result = getSize([1, 2, 3]);

    type Result = Assert<NotEqual<typeof result, undefined>>;

});

test("getSize supports strings", () => {

    const result = getSize("hello");

    type Result = Assert<NotEqual<typeof result, undefined>>;

});

test("getSize supports objects with length property", () => {

    const result = getSize({ length: 5 });

    type Result = Assert<NotEqual<typeof result, undefined>>;

});

test("WithID is defined", () => {

    type Result = Assert<IsNotEmptyObject<WithID<any>>>;

});

test("Add a generic parameter to the WithID type so that it can be used with any type", () => {

    type Test = WithID<number>;

});

test("Ensure the value of WithID is an object with an id property", () => {

    type Product = {
        name: string,
        price: number,
        manufacturer: string
    };

    type Result = [

        Assert<HasProperty< WithID<Product> , "id">>,

        Assert<NotHasProperty< Product , "id">>,

    ];

});

test("Ensure the value of WithID<G> has properties of G without manually specifying the properties", () => {

    type Product = {
        name: string,
        price: number,
        manufacturer: string
    };

    type Result = [

        Assert<HasProperty< WithID<Product> , "name">>,

        Assert<HasProperty< WithID<Product> , "price">>,

        Assert<HasProperty< WithID<Product> , "manufacturer">>,

        Assert<NotHasProperty< Product , "id">>

    ];
    

})