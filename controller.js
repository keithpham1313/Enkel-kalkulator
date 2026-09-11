function tallFunk(tall){

    if(operatorInput === ''){
        tallEnInput += tall;
    } 
    
    else {
        tallToInput += tall;
    }

    updateView();
}


function operatørFunk(operator){

    operatorInput = operator;

    updateView();
}

function beregn(){

    resultat = beregning();

    updateView();
}

function beregning(){

    if(operatorInput === "+"){
        return Number(tallEnInput) + Number(tallToInput);
    }

    else if(operatorInput === "-"){
        return Number(tallEnInput) - Number(tallToInput);
    }

    else if(operatorInput === "*"){
        return Number(tallEnInput) * Number(tallToInput);
    }

    else if(operatorInput === "/"){
        return Number(tallEnInput) / Number(tallToInput);
    }

    return 0;
}

function clearFunk(){
    
    tallEnInput = "";
    tallToInput = "";
    operatorInput = "";
    resultat = "0";

    updateView();
}

function kommaFunk(){
    if(operatorInput === ""){
        tallEnInput += ".";
    }
    else{
        tallToInput += ".";
    }
    updateView();
}

function deleteFun(){
    if(operatorInput === ""){
        tallEnInput = tallEnInput.slice(0, -1);
    }
    else{
        tallToInput = tallToInput.slice(0, -1);
    }
    updateView();
}