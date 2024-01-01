let arr = [64, 54, 77, 86, 47, 92, 89]

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {

        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex != i) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }

    return arr
}





console.log(selectionSort(arr))