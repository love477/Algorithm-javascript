import { exch } from './utils';

export default (arr: number[]) => {
    if (!arr || arr.length < 2) {
        console.log('arr is illegal or arr.length < 2');
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        exch(arr, i, minIndex);
        
    }
    return arr;
}
