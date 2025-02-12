//let items = document.getElementsBy
let item = document.getElementById('svg-button')
let input = document.getElementById('input2')
console.log(input.type)
let flag = true;
function viewPassword(){
    if(flag){
        item.innerHTML='<img src="svg\\eye_unvisible.svg" alt="">'
        //console.log("1")
        input.type='text'
    }else{
        item.innerHTML= '<img src="svg\\eye_visible.svg" alt="">'
        //console.log("2")
        input.type='password'
    }
    flag=!flag
    //console.log(flag)

}
