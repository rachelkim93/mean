function binarySearch(arr, x){
    var left = 0;
    var right = arr.length-1;
    var middle = Math.floor((left + right)/2)

    while (arr[middle] !== x && left < right){
        if (x < arr[middle]){
            right = middle - 1
        } else {
            left = middle + 1
        }

        middle = Math.floor((left + right)/2)
    }
    
    return(arr[middle] !== x) ? -1 : middle
}

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15))
console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93))