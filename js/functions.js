const example = () => {
    const fromInput = document.getElementById("example").value;
    document.getElementById("text").innerText = fromInput;
}
document.getElementById("btn").addEventListener("click", example)

const sum = (a,b) => {
   let c = a + b
    return c
}
module.exports = {
    sum
}