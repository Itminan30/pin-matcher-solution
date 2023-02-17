function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin+"";
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function displayPin(fieldId, pin){
    document.getElementById(fieldId).value = pin;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    displayPin('display-pin', getPin());
})