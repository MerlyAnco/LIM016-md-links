import {
  jest
} from '@jest/globals';

jest.mock('node-fetch', () => ({
  fetch: (content) => {
    console.log(content);
  }
}))

import {
    absolutePath,
    comprovePath,
    readDirectory,
    arrFilesMd,
    readArrFile,
    getLinks,
    pathValido,
    linksStatus,
} from '../src/funciones.js'

const rutaValida = 'test/prueba-test';
const rutaInvalida = 'test/prueba';
const rutaAbsoluta = "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test"
const ruta = "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\carpeta-prueba2"
const arrFiles = ["C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\carpeta-prueba2\\link2.md", 
"C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\carpeta-prueba2\\texto.text"]
const arrFileMD = ["C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\carpeta-prueba2\\link2.md"]
const contentFile = [{"content": "[Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)", "path": "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\carpeta-prueba2\\link2.md"}];
const obj =  [{"content": "[Generalidades del protocolo HTTP - MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Overview)", "path": "test\\prueba-test\\carpeta-prueba2\\link2.md"}];
const arrLinks = [
  {"file": "test\\prueba-test\\carpeta-prueba2\\link2.md", 
  "href": "https://developer.mozilla.org/es/docs/Web/HTTP/Overview", 
  "text": "Generalidades del protocolo HTTP - MDN".blue},
  {"file": "test\\prueba-test\\carpeta-prueba2\\link2.md", 
  "href": "https://developer.mozirtylla.org/es/docs/Web/HTTP/Overview", 
  "text": "Generalidades del protocolo HTTP - MDN".blue}]

describe('pathValido', () => {
  it('pathValido is a function', () => {
    expect(typeof absolutePath).toBe('function');
  });
  it('should be true', () => {
    expect(pathValido(rutaValida)).toBe(true);
  });
  it('should be false', () => {
    expect(pathValido(rutaInvalida)).toBe(false);
  });
});

describe('absolutePath', () => {
  it('absolutePath is a function', () => {
    expect(typeof absolutePath).toBe('function');
  });
  it('should be "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test"', () => {
    expect(absolutePath(rutaValida)).toBe(rutaAbsoluta);
  });
  it('should be "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test"', () => {
    expect(absolutePath("C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test")).toBe("C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test");
  });
});

describe('comprovePath', () => {
  it('comprovePath is a function', () => {
    expect(typeof comprovePath).toBe('function');
  });

  it('should be a file', () => {
    expect(comprovePath("C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\carpeta-prueba2\\link2.md")).toBe(true);
  });
  it('should be directory', () => {
    expect(comprovePath("C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\carpeta-prueba2")).toBe(false);
  });
});

describe('readDirectory', () => {
  it('readDirectory is a function', () => {
    expect(typeof readDirectory).toBe('function');
  });
  it('readDirectory should contain the files ', () => {
    expect(readDirectory(ruta)).toStrictEqual(arrFiles);
  });
  it('readDirectory should contain the files ', () => {
    expect(readDirectory(ruta)).toStrictEqual(arrFiles);
  });
});

describe('arrFilesMd', () => {
  it('arrFilesMd is a function', () => {
    expect(typeof arrFilesMd).toBe('function');
  });
  it('arrFilesMd should contain the .md files ', () => {
    expect(arrFilesMd(arrFiles)).toStrictEqual(arrFileMD);
  });
});

describe('readArrFile', () => {
  it('readArrFile is a function', () => {
    expect(typeof readArrFile).toBe('function');
  });
  it('should be a object of files', () => {
    expect(typeof readArrFile(arrFileMD)).toBe("object");
});
  it('should content the read files', () => {
    expect(readArrFile(arrFileMD)).toStrictEqual(contentFile);
  });
});


describe('getLinks', () => {
  it('getLinks is a function', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('should contain an array of links ', () => {
    expect(getLinks(obj)).toStrictEqual([{"file": "test\\prueba-test\\carpeta-prueba2\\link2.md", "href": "https://developer.mozilla.org/es/docs/Web/HTTP/Overview", "text": "Generalidades del protocolo HTTP - MDN".blue}]);
})
});


describe('linksStatus', () => {
  it('linksStatus is a function', () => {
    expect(typeof linksStatus).toBe('function');
  });
  it('linkStatus should return link states', () =>{
    expect(linksStatus(arrLinks)).resolves.toStrictEqual([{"file": "test\\prueba-test\\carpeta-prueba2\\link2.md", "href": "https://developer.mozilla.org/es/docs/Web/HTTP/Overview", "message": "OK".green, "status": 200, "text": "Generalidades del protocolo HTTP - MDN".blue}, {"file": "test\\prueba-test\\carpeta-prueba2\\link2.md", "href": "https://developer.mozirtylla.org/es/docs/Web/HTTP/Overview", "message": "Fail".red, "status": "Did't answer".red, "text": "Generalidades del protocolo HTTP - MDN".blue}])
  })
});

describe('linksStatus  is a function', () => {
  test("status: 200 - message: 'OK'", () => {
    const recieveObject = [
      {
        file: "test\\prueba-test\\carpeta-prueba2\\link2.md", 
        href: "https://developer.mozilla.org/es/docs/Web/HTTP/Overview", 
        text: "Generalidades del protocolo HTTP - MDN".blue,
      },
    ];
    const resultObject = [
      {
        file: "test\\prueba-test\\carpeta-prueba2\\link2.md", 
        href: "https://developer.mozilla.org/es/docs/Web/HTTP/Overview", 
        text: "Generalidades del protocolo HTTP - MDN".blue,
        status: 200,
        message: 'OK'.green
      },
    ];
    return linksStatus(recieveObject)
    .then((result) => {
      expect(result).toEqual(resultObject);
    })
  });

  test("status: 400 - message: 'Fail'", () => {
    const recieveObject = [
      {
        file: "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md", 
        href: "https://nodejs.org/api/pfdghath.html", 
        text: "Path".blue,
      },
    ];
    const resultObject = [
      {
        file: "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md",
        href: "https://nodejs.org/api/pfdghath.html",
        text: "Path".blue,
        status: 404,
        message: "Fail".red,
      },
    ];
    return linksStatus(recieveObject)
    .then((result) => {
      expect(result).toEqual(resultObject);
    })
  });

  test("status: `Did't answer` - message: 'Fail'", () => {
    const recieveObject = [
      {
        file: "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md", 
        href: "https://ndfodejs.org/api/pfdghath.html", 
        text: "Path".blue,
      },
    ];
    const resultObject = [
      {
        file: "C:\\Users\\N24\\Desktop\\proyecto 4\\LIM016-md-links\\test\\prueba-test\\links.md", 
        href: "https://ndfodejs.org/api/pfdghath.html", 
        text: "Path".blue,
        status: "Did't answer".red,
        message: "Fail".red,
      },
    ];
    return linksStatus(recieveObject)
    .then((result) => {
      expect(result).toEqual(resultObject);
    })
  });
});

