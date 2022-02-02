# Markdown Links 📂📌📚

## Índice

* [1. Descripción](#1-descripción)
* [3. Flujogramas de desarrollo](#3-flujogramas-de-desarrollo)
* [3. Instalación](#4-consideraciones-generales)
* [4. Modo de Uso](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Checklist](#6-checklist)
* [6. Fuente](#7-hacker-edition)
* [7. Autores](#8-pistas-tips-y-lecturas-complementarias)

***
<div align=center><img src="https://raw.githubusercontent.com/MerlyAnco/LIM016-md-links/main/img/logo.PNG" width=50%> </div>

## 1. Descripción
  
  Markdown Links 📁 es una libreria que te permitira leer y analizar los archivos 📑 en formato Markdown,
  se podra realizar inspección de los links que contengan y vaalidar si funcionan o ya no.
  
  Tambien brinda estadisticas del total de links encontrados, los unicos y los rotos en cada archivo 📊. 
***
## 2. Flujogramas de desarrollo 

### 2.1 Desarrollo de API 📋

<div align=center><img src="https://github.com/MerlyAnco/LIM016-md-links/blob/main/img/Flujograma%20API.png?raw=true" width=90%> </div>

### 2.2 Desarrollo de CLI (Command Line Interface - Interfaz de Línea de Comando) 📋

<div align=center><img src="https://github.com/MerlyAnco/LIM016-md-links/blob/main/img/Flujograma%20CLI.png?raw=true" width=89%> </div>

***
## 3. Instalación ✅

Para instalar la librería md-links, se necesitará escribir el siguiente comando en la terminal.

``` js
npm i npm i md-links-merly
```
***
## 4. Modo de uso 🖥
Para usar la libreria se hara uso de la terminal bash o cmd

### Comando CLI ✅

Ejecutar el comando:

``` js
$ md-links
```
* Despues de ello le pedira que coloque una ruta, esta puede ser relativa o absoluta
* Elegir una opción (--nothing, --validate, -- stats, --validate --stats)

### 📚 Opciones: 

### ❓ --help:

>   Brinda informacion sobre las acciones de las opciones.


<div><img src="https://raw.githubusercontent.com/MerlyAnco/LIM016-md-links/main/img/help.gif" > </div>

### ✏️ --nothing:

>  Muestra una informacion basica de los archivos.


<div><img src="https://raw.githubusercontent.com/MerlyAnco/LIM016-md-links/main/img/nothing.gif" > </div>

### ✏️ --validate:

>   Muestra información general por cada enlace encontrada, ademas de ello analiza el estado
>   de los links que contiene el archivo ".md".


<div><img src="https://raw.githubusercontent.com/MerlyAnco/LIM016-md-links/main/img/validate.gif" > </div>

### ✏️ --stats:

>   Brinda información acerca del número total de links y links únicos que se encuentran en el ruta 
>   que se ha analizado.


<div><img src="https://raw.githubusercontent.com/MerlyAnco/LIM016-md-links/main/img/stats.gif" > </div>

### ✏️ --validate --stats:

>   Brinda información acerca del número total de links, links únicos y links rotos que se encuentran en 
>   el ruta que se ha analizado.


<div><img src="https://raw.githubusercontent.com/MerlyAnco/LIM016-md-links/main/img/validate%20y%20stats.gif" > </div>

***

## 5. Tests 📊

![tests](https://user-images.githubusercontent.com/91748510/152252789-33f844eb-c0b0-4aa6-be6d-76d2d31ada49.PNG)

## 6. Checklist

### General

### API `mdLinks(path, opts)`

* ✅ El módulo exporta una función con la interfaz (API) esperada.
* ✅ Implementa soporte para archivo individual
* ✅ Implementa soporte para directorios
* ✅ Implementa `options.validate`

### CLI

* ✅ Expone ejecutable `md-links` en el path (configurado en `package.json`)
* ✅ Se ejecuta sin errores / output esperado
* ✅ Implementa `--validate`
* ✅ Implementa `--stats`

### Pruebas / tests

* ✅ Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* ✅ Pasa tests (y linters) (`npm test`).

***
## 6. Fuente

Markdown Links del [Repositorio de Laboratoria](https://github.com/Laboratoria/LIM016-md-links) <img src="https://scontent.flim14-1.fna.fbcdn.net/v/t1.6435-9/130980793_1690922481082152_7942209969687939916_n.png?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFFDsavO8fBBY62GsNsF_IsYehI860yPFhh6EjzrTI8WNi08hyHHv66WO3DZVHiJKe0OfHMVx75hdTyIhUJrKWj&_nc_ohc=tu2wv_3wOzkAX9TVZ5m&_nc_ht=scontent.flim14-1.fna&oh=00_AT-jr3sRGBUJeBi77mmrrSAaBbmvieCALw7YXqmB45O7Xg&oe=6202A8F2" width=20px>
*** 

## 7. Autora

- [Merly Anco](https://github.com/MerlyAnco) <img src="https://cdn-icons-png.flaticon.com/512/2570/2570280.png" width=20px>

***
