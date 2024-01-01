let arr = [56, 64, 77, 86, 47, 92, 89]


function bubbleSort(arr) {
    for (let i = 0 ; i < arr.length ; i++){
        
        for (let j = 0 ; j < arr.length-i; j++){
            if ( arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}


console.log(bubbleSort(arr))