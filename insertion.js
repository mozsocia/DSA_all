let arr = [64, 54, 77, 86, 47, 92, 89]

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        for (let j = i; j > 0; j--) {

            if (arr[j] < arr[j - 1]) {

                let temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp

            } else {
                break
            }
        }
    }
    return arr
}

function insertionSortOne(arr) {

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i]

        for (let j = i; j > 0 && (current < arr[j - 1]); j--) {

            arr[j] = arr[j - 1]
            arr[j - 1] = current

        }
    }
    return arr
}

function insertionSortTwo(arr) {

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i]

        for (let j = i-1; j > 0 && (current < arr[j]); j--) {

            arr[j+1] = arr[j]
            arr[j] = current

        }
    }
    return arr
}

console.log(insertionSortTwo(arr))