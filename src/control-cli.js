#!/usr/bin/env node
import inquirer from 'inquirer'

import mdLinks from './md-links.js'

import {title, help, tableValidate, basicTable} from './extra.js'

import {cli} from './cli.js'

import {
    totalLinks,
    unique,
    broken} from './stats.js'

// Grab provided args.
const[,, ... arg] = process.argv
title()

if(arg[0]==='' || arg[0]===undefined){
    inquirer.prompt([{
    name:'path',
    type:'input',
    message:'Puth a path of file or directory'
},{
    type:'list',
    name:'option',
    message: 'Please choice an option',
    choices:[
        'Nothing',
        '--validate',
        '--stats',
        '--validate --stats',
        '--help'
    ],
}]).then(answer =>{

    if(answer.option==='Nothing'){
        mdLinks(answer.path, {validate:false}).then((res)=>{basicTable(res)})
    }
    if(answer.option==='--validate'){
        mdLinks(answer.path,{validate:true}).then((res)=>{
            tableValidate(res)
        }).catch(console.error)
    }
    if(answer.option==='--stats'){
        mdLinks(answer.path,{validate:false}).then((res)=>{
            console.log(totalLinks(res));
            console.log(unique(res))
        })
        .catch(console.error)
    }
    if(answer.option==='--validate --stats'){
        mdLinks(answer.path,{validate:true}).then((res)=>{
            console.log(totalLinks(res));
            console.log(unique(res))
            console.log(broken(res))
        })
        .catch(console.error)
    }
    if(answer.option === '--help'){
        help()
    }
})
} 
else{
    cli(arg)
}

