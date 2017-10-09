// function rot13(message) {
//     var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var phrase = '';
//     var i = 0;
//     return createPhrase();
//     function createPhrase() {
//         if (i === message.length) {
//             return phrase;
//         } else {
//             var index_of_letter = alphabet.indexOf(message[i]);
//             var alphabet_count = alphabet.length;
//             if (index_of_letter === -1) {
//                 phrase += message[i];
//             } else if (message[i] != message[i].toUpperCase()) {
//                 if (index_of_letter < alphabet_count - 39) {
//                     phrase += alphabet[index_of_letter + 13];
//                 } else {
//                     phrase += alphabet[index_of_letter + 39 - alphabet_count];
//                 }
//             } else if (index_of_letter < alphabet_count - 13){
//                 phrase += alphabet[index_of_letter + 13];
//             } else {
//                 phrase += alphabet[index_of_letter + 39 - alphabet_count];
//             }
//             i++;
//             return createPhrase();
//         }
//     }
// }


function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

console.log(rot13('test'));
console.log(rot13('Test'));