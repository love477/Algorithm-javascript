export const exch = (arr: number[], i: number, min: number) => {
    const ai = arr[i];
    arr[i] = arr[min];
    arr[min] = ai;
}