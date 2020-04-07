function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (i=0; i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
        if (min > arr[i]){
            min = arr[i];
        }
        sum += arr[i];
        var avg = sum/arr.length;
    }
    console.log("The minimum is " + min +", " + "the maximum is " + max + ", " + "and the average is " + avg +".")
}

maxMinAvg([1, -2, 9, 4])
