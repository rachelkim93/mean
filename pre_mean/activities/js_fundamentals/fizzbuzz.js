function fizzbuzz(n){
    var str = "";
    if(n<0){
        console.log("Number must be positive.")
    } else {
        for (var i=1; i<=n; i++){
            if( i<n){
                if(i%3==0 && i%5==0){
                    str += ("FizzBuzz"+ ", ");
                } else if(i%3==0 && i%5 != 0){
                    str += ("Fizz"+ ", ");
                } else if(i%3 != 0 && i%5==0){
                    str += ("Buzz"+ ", ");
                } else {
                    str += (i + ", ")
                }
            }
        }
    }
    console.log(str)
}

fizzbuzz(-1)
