
// const arr = [1,2,3,4,5];


// let squares = arr.map(num =>num*num);
// console.log(squares);


const parent=(n)=>{
    const num = n;
    return function(num){
        return num;
    }
}


console.log(parent()(10));