let arr = [27, 64, 54, 77, 86, 86, 92, 89]
// 0  1   2   3   4   5   6   7
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

        for (let j = i - 1; j > 0 && (current < arr[j]); j--) {

            arr[j + 1] = arr[j]
            arr[j] = current

        }
    }
    return arr
}





function insertionSort44(arr) {

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i] 
        let j = i  
        while (j > 0) {

            if (arr[j-1] > current) {
                arr[j] = arr[j - 1]
                j--
            } else {
                break
            }
        }
        arr[j] = current
    }
    return arr
}

function insertionSortThree(arr) {

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i] 
        let j = i - 1 
        while (j >= 0) {
  
            if (arr[j] > current) {
                arr[j + 1] = arr[j]
                j--
            } else {
                break
            }
        }
        arr[j + 1] = current
    }
    return arr
}


function insertionSort55(arr) {

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i] 
        let j = i - 1 
        while (j >= 0 && (arr[j] > current)) {
  
                arr[j + 1] = arr[j]
                j--
           
        }
        arr[j + 1] = current
    }
    return arr
}

console.log(insertionSort55(arr))
