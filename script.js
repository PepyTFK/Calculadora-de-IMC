const first = document.querySelector(".first");
const second = document.querySelector(".second");
const three = document.querySelector(".three");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado")
function go(currentStep, nextStep){

    let dnone, dblock;
    if(currentStep == 1){
        dnone = first
    } else if (currentStep == 2){
        dnone = second
    } else{
        dnone = three
    }

    dnone.style.display = 'none'

    if(nextStep == 1){
        dblock = first
    } else if (nextStep == 2){
        dblock = second
    } else{
        dblock = three
    }

    dblock.style.display = 'block'
}

function validate(){
    peso.style.border = "none";
    altura.style.border = "none";
    if(!peso.value || !altura.value){
        
        if(!peso.value && !altura.value){
            peso.style.border = "1px solid red";
            altura.style.border = "1px solid red";
            alert("Todos os campos devem ser preenchidos corretamente");
        } else if(!peso.value){
            peso.style.border = "1px solid red";
            alert('Preencha o campo "Peso" corretamente')
        } else {
            altura.style.border = "1px solid red"
            alert('Preencha o campo "Altura" corretamente')
        }
    }else{
       let IMC = peso.value / (altura.value * altura.value)
        if(IMC < 18.5){
            resultado.innerHTML = "Classificação: Magro <br><br> Grau de Obesidade: 0"
    } else if(IMC >= 18.5 && IMC < 25){
        resultado.innerHTML = "Classificação: Normal <br><br> Grau de Obesidade: 0"
    } else if(IMC >=25 && IMC < 30){
        resultado.innerHTML ="Classificação: Sobrepeso <br><br> Grau de Obesidade: I"
    } else if (IMC >=30 && IMC < 40 ){
        resultado.innerHTML ="Classificação: Obesidade <br><br> Grau de Obesidade: II"
    } else {
        resultado.innerHTML = "Classificação: Obesidade grave <br><br> Grau de Obesidade: III"
    } go(2,3);
    } 
        
    
}