
const on_off1 = (id) =>{
    if(document.getElementById(id).src.match('mesa_apagada')){
        document.getElementById(id).src = "mesa_billar.png";
        reloj(id, "inicio");
    }
    else{
        document.getElementById(id).src = "mesa_apagada.png";
        reloj(id, "fin");
    } 
    
}

const reloj = (id, i_f) => {
    momentoActual = new Date();
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds();
    
    horaImprimible = hora + " : " + minuto + " : " + segundo;
    switch(id){
        case "mesa1":
            if(i_f == "inicio"){
                document.final.reloj.value = "";
                document.getElementById("total").innerHTML = "Total:";
                document.inicio.reloj.value = horaImprimible;
                tiempo1 = new Date();
            }
            else{
                document.final.reloj.value = horaImprimible;
                tiempo2 = new Date();
                var seconds = ((tiempo2.getTime() - tiempo1.getTime())/1000);
                document.getElementById("total").innerHTML = "Total: $" + Math.floor(seconds*0.0139) + "$";
            }
            break;
        case "mesa2":
            if(i_f == "inicio"){
                document.final2.reloj.value = "";
                document.getElementById("total2").innerHTML = "Total:";
                document.inicio2.reloj.value = horaImprimible;
                tiempo3 = new Date();
            }
            else{
                document.final2.reloj.value = horaImprimible;
                tiempo4 = new Date();
                var seconds = ((tiempo4.getTime() - tiempo3.getTime())/1000);
                document.getElementById("total2").innerHTML = "Total: $" + Math.floor(seconds*0.0139) + "$";
            }
            break;
        case "mesa3":
            if(i_f == "inicio"){
                document.final3.reloj.value = "";
                document.getElementById("total3").innerHTML = "Total:";
                document.inicio3.reloj.value = horaImprimible;
                tiempo5 = new Date();
            }
            else{
                document.final3.reloj.value = horaImprimible;
                tiempo6 = new Date();
                var seconds = ((tiempo6.getTime() - tiempo5.getTime())/1000);
                document.getElementById("total3").innerHTML = "Total: $" + Math.floor(seconds*0.0139) + "$";
            }
            break;
        case "mesa4":
            if(i_f == "inicio"){
                document.final4.reloj.value = "";
                document.getElementById("total4").innerHTML = "Total:";
                document.inicio4.reloj.value = horaImprimible;
                tiempo7 = new Date();
            }
            else{
                document.final4.reloj.value = horaImprimible;
                tiempo8 = new Date();
                var seconds = ((tiempo8.getTime() - tiempo7.getTime())/1000);
                document.getElementById("total4").innerHTML = "Total: $" + Math.floor(seconds*0.0139) + "$";
            }
            break;
        case "mesa5":
            if(i_f == "inicio"){
                document.final5.reloj.value = "";
                document.getElementById("total5").innerHTML = "Total:";
                document.inicio5.reloj.value = horaImprimible;
                tiempo9 = new Date();
            }
            else{
                document.final5.reloj.value = horaImprimible;
                tiempo10 = new Date();
                var seconds = ((tiempo10.getTime() - tiempo9.getTime())/1000);
                document.getElementById("total5").innerHTML = "Total: $" + Math.floor(seconds*0.0139) + "$";
            }
            break;
        case "mesa6":
            if(i_f == "inicio"){
                document.final6.reloj.value = "";
                document.getElementById("total6").innerHTML = "Total:";
                document.inicio6.reloj.value = horaImprimible;
                tiempo11 = new Date();
            }
            else{
                document.final6.reloj.value = horaImprimible;
                tiempo12 = new Date();
                var seconds = ((tiempo12.getTime() - tiempo11.getTime())/1000);
                document.getElementById("total6").innerHTML = "Total: $" + Math.floor(seconds*0.0139) + "$";
            }
            break;
    }
}

inicializar = () =>{
    document.inicio.reloj.value = "";
    document.final.reloj.value = "";
    document.getElementById("total").innerHTML = "Total:";

    document.inicio2.reloj.value = "";
    document.final2.reloj.value = "";
    document.getElementById("total2").innerHTML = "Total:";

    document.inicio3.reloj.value = "";
    document.final3.reloj.value = "";
    document.getElementById("total3").innerHTML = "Total:";

    document.inicio4.reloj.value = "";
    document.final4.reloj.value = "";
    document.getElementById("total4").innerHTML = "Total:";

    document.inicio5.reloj.value = "";
    document.final5.reloj.value = "";
    document.getElementById("total5").innerHTML = "Total:";

    document.inicio6.reloj.value = "";
    document.final6.reloj.value = "";
    document.getElementById("total6").innerHTML = "Total:";
}