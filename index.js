const isUpperCase = str => str === str.toUpperCase();
const isLowerCase = str => str === str.toLowerCase();
const isHiragana = str => str === toHiragana(str);
const isKatakana = str => str === toKatakana(str);
const toHiragana = str => str.replace(/[ァ-ヴ]/g, s => String.fromCharCode(s.charCodeAt(0) + 0x60));
const toKatakana = str => str.replace(/[ぁ-ゔ]/g, s => String.fromCharCode(s.charCodeAt(0) - 0x60));
let input = document.getElementById("input").value;
let main = document.getElementById("main").innerHTML
const convert = () => {
    for (let i = 0; i < input.length; i++) {
        if (isUpperCase(input[i])) {
            input[i] = input[i].toLowerCase();
        } else if (isLowerCase(input[i])) {
            input[i] = input[i].toUpperCase();
        } else if (isHiragana(input[i])) {
            input[i] = toKatakana(input[i]);
        } else if (isKatakana(input[i])) {
            input[i] = toHiragana(input[i]);
        }
    }
}
document.getElementById("go").addEventListener("click", () => { main = convert(input); });
document.onkeydown= (e) => {
    if(e.key === "enter"){
        main = convert(input);
    }
};