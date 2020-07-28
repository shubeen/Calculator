// document.getElementById('screen-input').value = '';
// function btnClick(number){
//     var screen = document.getElementById('screen-input');
//     screen.value += number;
//     if(number == ''){
//         screen.value = number;
//     }
// }

// function spaceBack(){
//     var screen = document.getElementById('screen-input').value;
//     var spaceBack = screen.slice (0, screen.length -1);
//     document.getElementById('screen-input').value = spaceBack;
// }

document.getElementById('screen-input').value = '';

function btnClick (number){
    var inputScreen = document.getElementById('screen-input');
    inputScreen.value += number;
    if ( number == ''){
        inputScreen.value = number;
    }
}
 function spaceBack(){
     var inputScreen= document.getElementById('screen-input').value;
     var spaceBack = inputScreen.slice(0, inputScreen.length -1);
     document.getElementById('screen-input').value = spaceBack;
     
 }
function equalTo(){
    var inputScreen = document.getElementById('screen-input');
    inputScreen.value = eval(inputScreen.value);
}