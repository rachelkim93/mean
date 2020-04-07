users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
        
    }
]

function userLanguages(arr){
    var str = ''
    for (var i = 0; i < arr.length; i++){
        str += arr[i].fname + " " + arr[i].lname + " knows "
        for(var x = 0; x < arr[i].languages.length; x++){
            str += arr[i].languages[x] + ', '
            // if (i=arr[i].length-1){
            //     str += "."
            // }
        }
    }
    // for (var i = 0; i < arr.length; i++){
    //     str += arr[i].fname + " is also interested in "
    //     for (var x = 0; x < arr[i].interests.length; x++){
    //         str += arr[i].interests[x]
    //     }
    // }
    console.log(str)
}
// console.log(Object.values(users[2].interests)[0][0])
userLanguages(users)