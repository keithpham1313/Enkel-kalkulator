function tallFunk(tall){

    if(operatorInput === ''){

        tallEnInput += tall;

    } else {

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