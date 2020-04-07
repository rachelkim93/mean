function bracesValid(str){
    arr = [];
    for(var i=0; i < str.length; i++){
        if(str[i] == "(" || str[i] == "[" || str[i] == "{"){
            arr.push(str[i])
        }
        else if(str[i] == ")" && arr[arr.length-1] == "("){
            arr.pop(str[i])
        }
        else if(str[i] == "]" && arr[arr.length-1] == "["){
            arr.pop(str[i])
        }
        else if(str[i] == "}" && arr[arr.length-1] == "{"){
            arr.pop(str[i])
        }
    }
    if (arr.length == 0){
        console.log("true");
    } else {
        console.log("false");
    }
}

bracesValid("{{()}}[]")