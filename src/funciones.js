import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import fetch from 'node-fetch';

// validar si la ruta existe
const pathValido = (ruta) =>{
    const isValido = fs.existsSync(ruta)
    return isValido
} 
// convertir la ruta a absoluta en caso de ser relativa
const absolutePath = (ruta) => {
    if(!path.isAbsolute(ruta)){
        const newPath = path.resolve(ruta)
        return newPath
    } else {
        return ruta
    }
}


// comprobar si la ruta es archivo o directorio
const comprovePath = (route) => {
    const isFilePath = fs.lstatSync(route).isFile()
    return isFilePath
    
}
// array de los path de archivos de un directorio
const readDirectory = (route) => {
    let arrFiles = [];
    if(fs.lstatSync(route).isFile()){
        arrFiles.push(route)
    } else {
        const arrFilesDirectory = fs.readdirSync(route,'utf-8', (err, files) => {
            if (err) throw err;
            throw files
        })
        arrFilesDirectory.forEach(file => {
            const pathRelative = path.join(route, file);
            arrFiles = arrFiles.concat(readDirectory(pathRelative))
        } )
        
    }
    return arrFiles
}
// console.log(readDirectory('prueba'))

// buscar archivos md
const arrFilesMd = (arr) => {
    const newArrMD = arr.filter( file => path.extname(file)==='.md')
    return newArrMD
}

/*arrFilesMd(['prueba\\carpeta-prueba2\\link2.md',
'prueba\\carpeta-prueba2\\texto.text',
'prueba\\links.md',
'prueba\\solo-texto.md',
'prueba\\texto.text']) */

// leer archivos md
const readArrFile = (arrFile) => {
    const arrFileContent = []
    arrFile.forEach((content) =>{    
        arrFileContent.push(fs.readFileSync(content,'utf8'))
    })
    return arrFileContent
}

// console.log(readArrFile('prueba/links.md'));

// convertir archivos md a html 

const arrFileHtml = (arrFileContent) => {
    const arrFileConvert = [];

    arrFileContent.forEach((fileRead)=>{
        let fileHtml =  marked.parse(fileRead)
        let dom = new JSDOM(fileHtml)
        arrFileConvert.push(dom)
    })

    return arrFileConvert
}

const getLinks = (arrfileHtml, ruta) =>{
    const links = []; 
    arrfileHtml.forEach((fileHtml)=>{
    let arrTagA = fileHtml.window.document.querySelectorAll('a')
    arrTagA.forEach((a) => {
        links.push({
            href: a.href,
            text: a.textContent,
            file: ruta
        })
    })
    })
    return links
}

// conseguir status de los links
const linksStatus = (arrayLinks) => {
    const arrNew = []
    arrayLinks.forEach((contentLinks) => {
        console.log(contentLinks.href)
        fetch(contentLinks.href).then((response) => {
            if(response.status===200){
                console.log(Object.assign(contentLinks, {status:response.status , ok: 'ok'}))
                return Object.assign(contentLinks, {status:response.status , ok: 'ok'});
            } else if (response.status===404){
                console.log(Object.assign(contentLinks, {status:response.status , ok: 'fail'}))
                return Object.assign(contentLinks, {status:response.status , ok: 'fail'});
            }
        })
    })
    return arrNew
}

// console.log(linksStatus( [
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise',
//     text: 'Promesas',
//     file: 'C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\prueba\\links.md'
//   },
//   {
//     href: 'https://nodejs.org/api/pafdhth.html',
//     text: 'Path',
//     file: 'C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\prueba\\links.md'
//   }
// ]))
// console.log(getLinks(ruta1));

export{
    absolutePath,
    comprovePath,
    readDirectory,
    arrFilesMd,
    readArrFile,
    arrFileHtml,
    getLinks,
    pathValido,
    linksStatus
}