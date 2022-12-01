//function that deal with the onclick event
let txtName=document.getElementById("greeting");
function inputName(){
    let name="";
    let indication="Hellow, what's your name?"
    while(name==="" || name.length < 1 || name.length>20 ){
        name=prompt(indication,"guest");
        indication="Please notices that name can not be empty. Meanwhile, it should less than 20 characters";
    }
    txtName.innerHTML="Hello, <span>"+name+"</span>";

    txtName.style.display="inline-block";
}
inputName();