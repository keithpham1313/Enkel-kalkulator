function updateView(){
    let html = /*HTML*/`
        <h2>Enkel Kalkulator</h2>
        <input onchange="tallEnInput = Number(this.value)" type="number">
        <input onchange="operatorInput = this.value">
        <input onchange="tallToInput = Number(this.value)" type="number">
        
        <button onclick="beregnTest()">Beregn</button>
        <div>Sum: ${beregning()}</div>
    `;

    html += `
    
    `;


    appView.innerHTML = html;
}


updateView();