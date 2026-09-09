function updateView(){
    let html = /*HTML*/`
        <input onchange="tallEnInput = Number(this.value)" type="number">
        <input onchange="operatorInput = this.value">
        <input onchange="tallToInput = Number(this.value)" type="number">
        
        <button onclick="beregnFunk()">Beregn</button>
    `;

    appView.innerHTML = html;

}

updateView();