
export function case1(value: boolean) {
    if (value) {
        return 1
    }
    return 2
}

export function case2(value: string) {
    if (!value) return 0
    if (value === "one") return 1
    if (value === "two") return 2
    return 3
}

export function case3(value: string) {
    if (!value) return "empty";
    return "not empty";
}

export function case4(value: string) {
    return value === "true"
}