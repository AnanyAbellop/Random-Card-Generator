window.onload = ()=>{
    //Alerta para saber si está funcionando alert("Hola estoy aqui!");
    //Lógica para los números de las tarjetas
    let num =Math.floor((Math.random()*13)+1);

    //Lógica si es A.J.Q.K
    if(num==1)
      {
          num="A";
      }else if(num==11){
          num="J";
      }else if(num==12){
          num="Q";
      }else if(num==13) {
          num="K";
      }

    let pinta=Math.floor((Math.random()*4)+1);
    
    //Asignacion de la pinta y figura
    let id="";
    let dibujo="@";
        if (pinta==1){
            dibujo="❤️";
            id="heart";
        }else if(pinta==2){
            id="spade";
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
    card.classList.add("d-flex","flex-nowarp","container","justify-content-center","rounded");
    card.style.width="250px";
    card.style.height="290px";
    card.style.border="solid 5px black";
    document.body.appendChild(card);
    card.innerHTML=`
            <div class="card  border-0 mb-3 carta d-flex" >
                <div class="card-header  border-0 p-2 bg-transparent ${id}" > ${dibujo}</div>
                <div class="card-body border-0  d-flex align-items-center ${id} ">
                    <h1 class="card-title ">${num}</h1>
                 </div>
                <div class="card-footer border-0 ${id}  bg-transparent ">${dibujo}</div>
            </div>`

}