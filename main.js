
var text = "Qobl Sobr Mamarayim Eshmat Toshmat";

function LongWord(letters) {
    var newArr = letters.split(" ");
    var longsWord = "";
    
    for (var i = 0; i < newArr.length; i++) {
        
        if (newArr[i].length > longsWord.length) {
            longsWord = newArr[i];
        }
    }
    return longsWord;
}
console.log(LongWord(text));