var str = "Hello, World! My name is Morgan.";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ghost_type() {
    var max = 300;
    var min = 100;
    var elem = document.getElementById("scripted-text");
    elem.textContent = null;
    for(char of str) {
        elem.textContent += char;
        if(char != ' ') {
            await sleep(Math.floor(Math.random() * (max - min) + min));
        }
    }
}

ghost_type();