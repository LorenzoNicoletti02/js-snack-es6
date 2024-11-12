function includedNumbers(a, b, array){
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const curArray = array[i];
        if(curArray >= a && curArray <= b){
            newArray.push(curArray);
        }       
    }
    return newArray
}

const numArray = [12,24,55,62,20,15,15,98]
const a = 2
const b = 35

console.log(includedNumbers(a,b,numArray));

