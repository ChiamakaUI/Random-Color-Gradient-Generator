let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let firstColor = ''
let secondColor = ''

function colorChange() {

    let firstColor = "";
    let secondColor = "";

    for (let index = 0; index < 6; index++) {
        
        const element = Math.floor(Math.random() * hex.length)
        firstColor += hex[element]

        const random_index = Math.floor(Math.random() * hex.length)
        secondColor += hex[random_index];
        
    }
    document.body.style.background = `linear-gradient(to right, #${firstColor}, #${secondColor})`;
    document.getElementById("hexcode1").innerHTML = `${firstColor}`
    document.getElementById("hexcode2").innerHTML = `${secondColor}`


}