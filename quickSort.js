let marr = [10, 80, 30, 90, 40, 50, 70]

function quickSortSimple(arr){
    if (arr.length < 2) return arr


    let left = []
    let right = []

    let pivot = arr[arr.length-1]

    for (let i = 0; i < arr.length-1; i++){
        if( arr[i] < pivot ) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }


    return [...quickSortSimple(left), pivot , ...quickSortSimple(right)]
}

function quickSort(arr) {
    // this algo animation -> https://www.youtube.com/watch?v=PgBzjlCcFvc

    function sort(arr) {

        if (arr.length < 2) return arr

        let i = -1
        let j = 0

        let pivot = arr[arr.length - 1]

        while (j < arr.length) {
            if (arr[j] < pivot) {
                i++

                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
            j++
        }

        let temp = arr[i + 1]
        arr[i + 1] = arr[arr.length - 1]
        arr[arr.length - 1] = temp

        let left = sort(arr.slice(0, i + 1))
        let right = sort(arr.slice(i + 2))



        return [...left, pivot, ...right]
    }

    return sort(arr)

}



console.log(quickSortSimple(marr))


