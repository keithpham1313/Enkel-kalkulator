function updateView(){

    let html = /*HTML*/`
        <div class="calculator">

            <h2>Enkel Kalkulator</h2>

            <div class="display">
                <div class="calc-input">${tallEnInput + operatorInput + tallToInput}</div>
            </div>

            <div class="result">
                <span>${resultat}</span>
            </div>

            <div class="button-grid">
                ${visKnappOperatør()}
            </div>

        </div>
    `;

    appView.innerHTML = html;
}


function visKnappOperatør(){

    let operatørHTML = ``;

    // Knapper for operatører
    for(let i = 0; i < operatører.length; i++){

        operatørHTML += /*HTML*/`
            <button 
                class="btn-operator"
                onclick="operatørFunk('${operatører[i]}')">
                ${operatører[i]}
            </button>
        `;
    }

    // Knapper for tall
    for(let t = 0; t < 10; t++){

        operatørHTML += /*HTML*/`
            <button 
                class="btn-number"
                onclick="tallFunk(${t})">
                ${t}
            </button>
        `;
    }

    // Clear-knapp
        operatørHTML += /*HTML*/`
            <button
                class="btn-number"
                onclick="clearFunk()">
                C
            </button>
        `;

    // ","-knapp
        operatørHTML += /*HTML*/`
            <button
                class="btn-number"
                onclick="kommaFunk()">
                ,
            </button>
        `;
    
    //Delete knapp
    operatørHTML += /*HTML*/`
        <button
            class="btn-number"    
            onclick="deleteFun()">
            <
        </button>
    `;

    // "="-knapp
        operatørHTML += /*HTML*/`
            <button 
                class="btn-equal"
                onclick="beregn()">
                =
            </button>
        `;

    return operatørHTML;
}

updateView();
