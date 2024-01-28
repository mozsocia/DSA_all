function heapSort(marr) {

    function sorted(arr) {
        // Build a max heap from the input array
        buildMaxHeap(arr);

        // Perform heap sort
        for (let i = arr.length - 1; i > 0; i--) {
            // Swap the root (maximum element) with the last element
            swap(arr, 0, i);

            // Heapify the reduced heap
            heapify(arr, 0, i);
        }
        return arr
    }

    function buildMaxHeap(arr) {
        // Starting from the last non-leaf node and heapify each node
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            heapify(arr, i, arr.length);
        }
    }

    function heapify(arr, index, heapSize) {
        let largest = index; // Assume the current index is the largest

        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;

        // Compare with left child
        if (leftChild < heapSize && arr[leftChild] > arr[largest]) {
            largest = leftChild;
        }

        // Compare with right child
        if (rightChild < heapSize && arr[rightChild] > arr[largest]) {
            largest = rightChild;
        }

        // If the largest is not the current index, swap and recursively heapify
        if (largest !== index) {
            swap(arr, index, largest);
            heapify(arr, largest, heapSize);
        }
    }

    function swap(arr, i, j) {
        // Swap elements at indices i and j in the array
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }




    return sorted(marr);
}


// Example usage:
const arrayToSort = [4, 10, 3, 5, 1];
const sortedArray = heapSort(arrayToSort);
console.log("Sorted Array:", sortedArray);
