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
}


