// Write your solution below:

// let makeUnique = word => {
//     let uniqueWord = '';
//         for(let i = 0; i < word.length; i++){
//             if(!(uniqueWord.includes(word[i]))){
//                 uniqueWord += word[i];
//             };
//         };
//         return uniqueWord;
// };

// console.log(makeUnique('iwanttoclimbamountain'));

let makeUnique2 = word => {
    let uniqueWord = '';

    for(let i = 0; i < word.length; i++){
        let isUnique = true;
        for(let j = 0; j < uniqueWord.length; j++){
            if (word[i] === word[j]) {
                isUnique = false;
            }
        }
        if(isUnique){
            uniqueWord += word[i];
        }
    }
    console.log(uniqueWord);
    return uniqueWord;
}
console.log(makeUnique2('hello'));