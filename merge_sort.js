let myarr = [64, 54, 77, 86, 47, 92, 89]


function mergeSort(arr){

    function sort(arr) {
        if (arr.length == 1 ) return arr

        let mid = parseInt(arr.length/2)

        let left = arr.slice(0,mid)
        let right = arr.slice(mid)

        return merge(sort(left),sort(right))

    }

    function merge(left, right) {
        let result = []

        let i = 0
        let j = 0

        while (left[i] && right[j] ){
            if (left[i] < right[j]){
                result.push(left[i])
                i++
            } else {
                result.push(right[j])
                j++
            }
        }

        if(left[i]){
            result.push(...left.slice(i))
        } else if(right[j]) {
            result.push(...right.slice(j))
        }
        return result
    }

    return sort(arr)

}

console.log(mergeSort(myarr))
