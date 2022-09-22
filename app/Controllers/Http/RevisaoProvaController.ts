// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RevisaoProvaController {
    
    ex1({request}){
        //numero que eu vou escreve 
        const dados = request.body()
        //calculo do reajuste 
        if(dados.principal<2000){
            const reajuste= 0.5
            const valor_principal= (reajuste*dados.principal+dados.principal)
            return{valor_principal}
        }
        //calculor reajuste maior
        else{
            const reajuste_maior=0.3
            const valor_secundario=(reajuste_maior*dados.principal+dados.principal)
            return{valor_secundario}

        }
    }
    ex2({request}){
            const dados = request.body();
            const maior=Math.max(dados.num1, dados.num2 , dados.num3)
             
        return{maior}
    }
    ex3({request}){
        const dados =request.body();
        const valchopp = 4.80;
        const valpizza = 17.00;
        const valadicional = 1.50;
        const garçom= 1.1

        //calculo
        const choop= valchopp* dados.choop
        const pizza = valpizza* dados.pizza
        const adicional= dados.adicional* valadicional
        const resultado=  (choop + pizza+ adicional) *garçom
        let resultado2 = resultado /dados.pessoas 

        const resposta = {
            resultado: resultado2.toFixed(2)
        } 

        return resposta
    }
    ex4({request}){
        const dados = request.body()
        const Htrabalhada= 1/5
        const dependente =35

        const ponto1= Htrabalhada * dados.salariomin
        const ponto2= dados.horastrab* ponto1
        const ponto4= ponto2 / 1.5
        const ponto5 = ponto1 + ponto4 +dependente

let imposto
if ( ponto5<2000) {
    imposto=0
}
else if(ponto5<=5000){
    imposto= ponto5* 0.1
}
else{
    imposto= 0.2* ponto5
}

        const salarioliq= ponto5- imposto

let gratificaçao
if (salarioliq <= 3500){
    gratificaçao= salarioliq+ 1000
}
else{
    gratificaçao= salarioliq+ 500
    
}
return {gratificaçao}        
}
}



