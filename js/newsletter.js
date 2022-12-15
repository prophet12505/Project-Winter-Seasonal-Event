//function that deal with the onclick event
// let txtName=$("#greeting");
// let button=$("#enter-name-button");
// button.click(inputName);

// function inputName(){
  
//     let name="";
//     let indication="Hellow, what's your name?"
//     while(name==="" || name.length < 1 || name.length>20 ){
//         name=prompt(indication,"guest");
//         indication="Please notices that name can not be empty. Meanwhile, it should less than 20 characters";
//     }
//     txtName.html("Hello, <span>"+name+"</span>");

//     txtName.style("display:inline-block");
// }


btnName = document.getElementById("enterName");
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

