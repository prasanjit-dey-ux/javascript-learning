/*foreach loop
some loops are directly added in array property


*/

const lang = ["js", "ts", "C", "rust", "java"]

lang.forEach((val) => {
    //console.log(val);
})

// we can do it with function also
const food = ["momos", "pizza", "burger",]

function print(val) {
    //console.log(val);
}

food.forEach(print)

// this foreach has more than one parameter which is item,index and array list

food.forEach((item, index, arr)=> {
    //console.log(item, index, arr);
    
}) 

// [{}, {}, {}]

const myCoding = [
    {
        languageName:"javascript",
        languageFilename: "js"
    },
    {
        languageName:"typescript",
        languageFilename: "ts"
    },
    {
        languageName:"Rust",
        languageFilename: "rs"
    }
]


myCoding.forEach((item) => {
    console.log(item.languageName);
})