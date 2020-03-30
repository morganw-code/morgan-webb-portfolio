var str = "Hello, World! My name is Morgan.";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function random_hex_color_rgb() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function ghost_type() {
    var elem = document.getElementById("scripted-text");
    elem.textContent = null;
    for(char of str) {
        elem.textContent += char;
        if(char != ' ') {
            await sleep(50);
        } else {
            elem.style.color = random_hex_color_rgb();
        }

        if(elem.textContent == "Hello, World!") {
            // give it a little... anticipation
            await sleep(500);
        }
    }
    elem.style.color = "#FFF";
}

ghost_type();