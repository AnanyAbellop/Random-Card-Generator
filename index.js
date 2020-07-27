window.onload = ()=>{
    //Alerta para saber si está funcionando alert("Hola estoy aqui!");
    //Lógica para los números de las tarjetas
    let num =Math.floor((Math.random()*13)+1);
      
    let pinta=Math.floor((Math.random()*4)+1);
    
    //Asignacion de la pinta y figura
    let id="";
    let dibujo="@";
        if (pinta==1){
            dibujo="❤️";
            id="#heart";
        }else if(pinta==2){
            id="#spade";
            dibujo="♠️";
        }else if (pinta==3)
        {
            id="diamonds";
            dibujo="♦️";
        }else {
             id="clubs";
             dibujo="♣";
        }
           
    
    //Cuerpo de la Carta
    let card =document.createElement("div");
    card.classList.add("d-flex","flex-nowarp","container","justify-content-center");
    card.style.width="250px";
    card.style.height="290px";
    card.style.border="solid 5px black";
    document.body.appendChild(card);
    card.innerHTML=`
            <div class="card  border-0 mb-3" style="max-width: 18rem;">
                <div class="card-header bg-transparent border-0 id="${id}" justify-content-start "> ${dibujo}</div>
                <div class="card-body border-0">
                    <h1 class="card-title ">${num}</h1>
                    
                 </div>
                <div class="card-footer bg-transparent border-0 "></div>
            </div>`

}