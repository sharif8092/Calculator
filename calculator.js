let result = document.getElementById('inputext');


let calculate =(number) =>{
    result.value +=number;

}

let Result =() =>{
    try {
        result.value= eval(result.value)
    } catch (error) {
        result.value = "0";
    }
}

function clr(){
    result.value ="";
}

function del(){
    result.value = result.value.slice(0, -1);
}
