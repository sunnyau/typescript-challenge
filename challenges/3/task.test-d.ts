
import { test } from "node:test";
import type { Device, Laptop, Monitor } from "./task";

test("Monitor has expected properties", () => {
    
    type Result = [
        Expect<HasProperty<Monitor, "make">>,

        Expect<HasProperty<Monitor, "model">>,

        Expect<HasProperty<Monitor, "displaySize">>,
        
        Expect<HasProperty<Monitor, "id">>,
    ];
    
});

test("Laptop has properties from Monitor and Keyboard", () => {
    
    type Result = [
        Expect<HasProperty<Laptop, "speakerType">>,

        Expect<HasProperty<Laptop, "keyboardLayout">>,

        Expect<HasProperty<Laptop, "displaySize">>,

        Expect<HasProperty<Laptop, "id">>,

        Expect<HasProperty<Laptop, "make">>,

        Expect<HasProperty<Laptop, "model">>,
    ];
    
});

test("Device has expected property", () => {
    
    type Result = [
        Expect<HasProperty<Device, "id">>,

        Expect<HasProperty<Device, "make">>,

        Expect<HasProperty<Device, "model">>,
    ];
    
});