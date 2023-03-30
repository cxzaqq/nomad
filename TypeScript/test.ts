// type SuperPrint = {
//     (arr: number[]): void
//     (arr: boolean[]): void
//     (arr: string[]): void
// }

type SuperPrint = {
    <T>(a: T[]): T
}

const superPrint: SuperPrint = (a) => a[0];

superPrint([1,2,3,4]);
superPrint([true, true, false]);
superPrint(["a", "b"]);
