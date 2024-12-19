const totalComanda = document.querySelector('#total-comanda');
export const apagarBtn = document.querySelector('#apagar')

export const listaPratos = [];

apagarBtn.onclick = () => {
    zerarPedidos()
    totalComanda.innerText = 0 ;
};


function zerarPedidos(){
    for ( let prato of listaPratos){
        prato.qtd = 0
        prato.qtdElem.innerText = 0
    }
}

export function valorComanda() {
    let total = 0;
    for (let prato of listaPratos) {
        total += prato.subtotal;
    }
    totalComanda.innerText = total.toLocaleString('pt-BR',{currency:"BRL",style:"currency"})

}

