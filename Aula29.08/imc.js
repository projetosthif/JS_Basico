function calcula_imc(event){


    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo = (peso/(altura*altura));

    // var resultado;

    if(calculo<18.5){
        alert("você está magro com esse índice: " + calculo)
    }   
    else if(calculo>18.5 && calculo<24.9){
        alert("você está normal com esse índice: " + calculo)
    }
    else if(calculo>25 && calculo<29.9){
        alert("você está com sobre peso com esse índice: " + calculo)
    }
    else if(calculo>30 && calculo<39.9){
        alert("você está com obesidade com esse índice: " + calculo)
    }
    else if(calculo>40 && calculo<29.9){
        alert("você está com obesidade grave com esse índice: " + calculo)
    }
    
}