import colors from 'colors';

import mdLinks from './md-links.js'

import {
    totalLinks,
    unique,
    broken} from './stats.js'

import {tableValidate, basicTable} from './extra.js'


//Envio de un path y una opcion

export const cli = (arg) =>{
    if(arg.length===1){
        mdLinks(arg[0],{validate:false}).then((res)=>{
            basicTable(res)
        })
        .catch((err)=>{console.log(err)})
    }else if(arg.length===2){
        if(arg[1]==='--v'){
            mdLinks(arg[0],{validate:true}).then((res)=>{
                tableValidate(res)
            }).catch(console.error)
        } else if(arg[1]==='--s'){
            mdLinks(arg[0],{validate:true}).then((res)=>{
                console.log(totalLinks(res));
                console.log(unique(res))
            })
            .catch(console.error)
        }
        else{
            console.log(colors.red.bold('La ruta o la opción ingresada no es valida'))
        }
    } else if(arg.length===3){ //Envio de un path y 2 opciones
        if((arg[1]==='--v' && arg[2]==='--s')||(arg[1]==='--s' && arg[2]==='--v')){
            mdLinks(arg[0],{validate:true}).then((res)=>{
                console.log(totalLinks(res));
                console.log(unique(res))
                console.log(broken(res))
            })
            .catch(console.error)
        } else{
            console.log(colors.red.bold('La ruta o la opción ingresada no es valida'))
        }
    } else{
        console.log(colors.red('Por favor ingrese una ruta valida'))
    }

}

