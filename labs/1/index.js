function map(array,callback){
    let result = []
    for(let index=0; index<array.length;index++){
        result.push(callback(array[index],index,array))
    }
    return result
}

let a = [1,2,3,4,5]

let b = map(a,(item)=>item*2)

console.log(a)
console.log(b)

let c = a.map((item)=> 1)

console.log(c)
