function updateView(){
    let html = /*HTML*/`
        <h2>Enkel Kalkulator</h2>
        <input onchange="tallEnInput = Number(this.value)" type="number">
        <input onchange="operatorInput = this.value">
        <input onchange="tallToInput = Number(this.value)" type="number">
        
        <button onclick="beregnTest()">Beregn</button>
        <div>Sum: ${beregning()}</div>
        
        ${visKnappOperatør()}
    `;



    appView.innerHTML = html;
}

function visKnappOperatør(){
    let operatørHTML = "";

    for(let i = 0; i < operatører.length; i++){

        operatørHTML += /*HTML*/`
            <button onclick="operatørFunk(${operatører[i]})">${operatører[i]}</button>

        `;
    };

    for(let t = 0; t < 10; t++){
        operatørHTML += /*HTML*/ `
            <button onclick="tallFunk()">${[t]}</button>
        `;
    }
    return operatørHTML;

}


function beregning(){
    let sum = 0;

    if(operatorInput === "+"){
        return sum = tallEnInput + tallToInput;
    }
    else if(operatorInput === "-"){
        return sum = tallEnInput - tallToInput;
    }
    else if(operatorInput === "*"){
        return sum = tallEnInput * tallToInput;
    }
    else if(operatorInput === "/"){
        return sum = tallEnInput / tallToInput;
    }
}


updateView();