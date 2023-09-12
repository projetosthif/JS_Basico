function chama_tabuada(){

    var var1 = document.tabForm.var1.value;
    //pede o valor inicial da tabuada pelo qual sistema inicia
    var var2 = document.tabForm.var2.value;
    //pede o valor da ultima tabuada a ser executada

    for (i=var1; var1<=var2; var1++){           //laço inicia a partir do primeiro valor (i=var1)
        for(j=1;j<=10;j++){
            document.write(var1+'X'+j+'='+var1*j+'<br>');
        }
        document.write('<br>');
    }
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>