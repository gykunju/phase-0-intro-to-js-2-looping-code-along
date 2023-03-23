// Code your solutions in this file
const names = ["Alvin","James","Bancy","Kate"]
function writeCards(names){
    const messages = []
    for(let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful gift!`);
    }
    return messages;
}
console.log(writeCards(names))

function countDown(number){
    for(let p = number; p >= 0; p--){
        console.log(p)
    }
    return number
}
console.log(countDown(5))

