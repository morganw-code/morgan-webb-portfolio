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
    to_type = ""
    current_doc = window.location.pathname.split("/").slice(-1)[0]
    var elem = document.getElementById("scripted-text");
    elem.textContent = null;

    switch(current_doc) {
        case "index.html":
            to_type = "Hello, World! My name is Morgan.";
            break;
        case "projects.html":
            to_type = "Here are some of my projects!";
            break;
        case "about.html":
            to_type = "You can learn about me here.";
            break;
        case "contact.html":
            to_type = "You can find my contact information here.";
            break;
    }

    for(char of to_type) {
        elem.textContent += char;
        if(char != ' ') {
            await sleep(50);
        } else { // when char is space, generate random text color
            new_color = random_hex_color_rgb();
            // prevent text from becoming invisible due to background-color conflict
            if(new_color == '#240090') {
                elem.style.color = "#FFF";
            } else {
                elem.style.color = new_color;
            }
        }

        if(elem.textContent == "Hello, World!") {
            // give it a little... anticipation
            await sleep(500);
        }
    }
    elem.style.color = "#FFF";
}

ghost_type();