

function calcula_imc(event){

    event.preventDefault(); //Evita o envio do formulário

    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo = peso / (altura*altura);

    if(calculo<18.5){
        resultado = "você está magro com esse índice: " + calculo
    }   
    else if(calculo>18.5 && calculo<24.9){
        resultado = "você está normal com esse índice: " + calculo
    }
    else if(calculo>25 && calculo<29.9){
        resultado = "você está com sobre peso com esse índice: " + calculo
    }
    else if(calculo>30 && calculo<39.9){
        resultado = "você está com obesidade com esse índice: " + calculo
    }
    else if(calculo>40 && calculo<29.9){
        resultado = "você está com obesidade grave com esse índice: " + calculo
    }
    
    document.getElementById('resul').innerHTML = resultado;
}