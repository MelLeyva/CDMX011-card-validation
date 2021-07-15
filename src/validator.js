const validator = { 
    "isValid":function (showCardNumber){
        let cardArray= Array.from(showCardNumber).reverse().map(Number)//defino mivariable del arreglo, aplicandole la reversa y map(Number) el cual me regres el arreglo invertido y con valores numéricos
        //console.log(cardArray)
        let total = 0//comienzo a realizar las operaciones y condicionales del algoritmo, comenzando de la posicion {0] al penultimo lugar o ultimo lugar (-1) y recorriendo de uno en uno
        for(let i=0; i<cardArray.length; i++){//inicia en la posición cero, lo que realice va a aplicarlo en todo el arreglo, de uno en uno
            if(i %2===1){//Si..el módulo (residuo) de la posicion de cada arreglo es =1 
                let dobleNumber=cardArray[i]*2;//defino una varibale que tome el valor de esa posición y lo duplique
                //console.log(dubleNumber)
                if (dobleNumber>=10){//si..ese valor en igual o mayor a 10
                    let finalNumber= dobleNumber-9//entonces...suma sus dos valores (9 es el número magico)
                    total += finalNumber;//a mi variable total le sumo los numeor que cumplen esta condición
                } else {
                total += dobleNumber;//si no es >=10 entonces y esta en posición pas, entonces solo duplicalo y sumalo a la variable total
                } 
            }else{
                total += cardArray[i];//si.. el módulo es diferente a 1 suma sus valores a la variable total
                //console.log(total)
            }
        }  
        let resultado= total%10//ya que tengo la suma total, entonces obten el módulo entre 10
        //console.log(resultado)
        if (resultado==0){//si es =0 es true=valida
            return true
        }else{
            return false//si no es 0 entonces es false
        }
    },//el isValid y maskafy son dos objetos que estoy obteniendo para validator, se separan con , 
    "maskify": function (hideCardNumber) {
        let longitud= hideCardNumber.length//definir una variable con la longitud de mi STRING ORIGINAL
        if(longitud<=4){//si..las longitudes iguales o menores a 4 de motraran completas
            return hideCardNumber //retorna el valor obtenido a index.js para ser usado 
        } else {//pero si...es mayor a 4 entonces...
            let listado= Array.from(hideCardNumber)//obtengo el ARRAY ORIGINAL (SIN INVERTIR) y defino una variable
            for (let i=0; i<hideCardNumber.length-4; i++){//realizo un loop que inciia desde la posiciión [0] y para en cual sea la logintus mayor a 4 antes del 4to valor de atras a adelante y va de uno en uno
                listado[i]="#"//...entonces sustituyo ESOS valores de mi arrray por #
            }
            let final= listado.join("")//.JOIN UNE DE NUEVO A TODOS LOS ELEMENOS DE Array, convirtiendolo en un string
            return final //retorna el valor obtenido a index.js para ser usado 
        }
    }  
}
export default validator;
