const categorias = document.querySelector(".Categorias");

function crearMaceta(nombre,modelo,precio){
    img = `<img class='maceta-img' src='https://img.freepik.com/foto-gratis/planta-nido-pajaros-maceta-beige_53876-134284.jpg?w=740&t=st=1678307227~exp=1678307827~hmac=dfb9cb9374e1eec722cbe578e279df6aa8630020ab1df1ed32a33812756b413d'>`;
    nombre = `<p class="maceta-texto">${nombre}</p>`;
    modelo = `<p class="maceta-texto">${modelo}</p>`;
    precio = `<p class="maceta-texto precio">${precio}</p>`;
    return [img,nombre,modelo,precio];
}

let fragmento = document.createDocumentFragment();

for(var i = 1;i <= 12; i++){
    const modelorandom = Math.round(Math.random()*100);
    const preciorandom = Math.round(Math.random()*10 + 100);
    const maceta =crearMaceta(`Maceta ${i}`,`Modelo M-${modelorandom}`,`$${preciorandom}`);
    const item = document.createElement("DIV");
    item.classList.add(`flex-muestras`); //Agrego una clase al ítem
    item.innerHTML = maceta[0] + maceta[1] + maceta[2] + maceta[3];
    fragmento.appendChild(item);
}

categorias.appendChild(fragmento);