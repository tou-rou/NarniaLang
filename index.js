const isUpperCase = str => str === str.toUpperCase();
const isLowerCase = str => str === str.toLowerCase();
const isHiragana = str => str === toHiragana(str);
const isKatakana = str => str === toKatakana(str);
const toHiragana = str => str.replace(/[ァ-ヴ]/g, s => String.fromCharCode(s.charCodeAt(0) - 0x60));
const toKatakana = str => str.replace(/[ぁ-ゔ]/g, s => String.fromCharCode(s.charCodeAt(0) + 0x60));
const isAlphabet = str => !(str.match(/[^A-z]/g));
const isKana = str => !(str.match(/[^ぁ-ヴ]/g));
const convert = (str) => {
    let m = [];
    for (let i = 0; i < str.length; i++) {
        console.log(str);
        if (isAlphabet(str[i])) {
            if (isUpperCase(str[i])) {
                m.push(str[i].toLowerCase());
            } else if (isLowerCase(str[i])) {
                m.push(str[i].toUpperCase());
            }
        } else if (isKana(str[i])) {
            if (isHiragana(str[i])) {
                m.push(toKatakana(str[i]));
            } else if (isKatakana(str[i])) {
                m.push(toHiragana(str[i]));
            }
        } else {
            m.push(str[i])
        }
    }
    return m.join("");
}
let input = document.getElementById("input")
document.getElementById("go").addEventListener("click", () => {
    document.getElementById("main").innerHTML = convert(input.value);
});
document.getElementById("input").onkeydown = () => {
    document.getElementById("main").innerHTML = convert(input.value);
};