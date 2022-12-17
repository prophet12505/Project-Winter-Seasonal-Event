
btnName = document.getElementById("enter-name-button");
userName = document.getElementById("name")
secretMsg = document.getElementById("secretMessage");
btnName.onclick = namePrompt;

function namePrompt()
    {
        let name = prompt("Please enter your name below and click ok.", "Guest");

        while (name === "" || name.length <2)
            {
            name = prompt ("Go on, you can do this! Nothing dubious here. Please enter your name.", "Guest");
            }

        userName.style.display = "inline-block";
        userName.innerHTML = name + "!";
        secretMsg.style.display = "block";
        secretMsg.innerHTML = "Salutations, " + name +"!" + " Welcome aboard the SS Winter Fest Newsletter! By signing up, you will receive notifications on the latest announcements, events, merchandise, and other fun SS Winter Fest stuff!";
    }

