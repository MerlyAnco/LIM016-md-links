import figlet from 'figlet'
import colors from 'colors';
import { table } from 'table';

const tableValidate = (res) => {
    const links = res.map(element => Object.values(element))
    const keys = [['HREF'.magenta, 'TEXT'.magenta, 'FILE'.magenta, 'STATUS'.magenta, 'MESSAGE'.magenta]]
    const arr2 = keys.concat(links)
    const config = {
        columns: {
            0: { width: 30 },
            2: { width: 30 }
        }
    }
    return console.log(colors.white(table(arr2,config)))
}

const basicTable = (res) => {
    const links = res.map(element => Object.values(element))
    const keys = [['HREF'.cyan, 'TEXT'.cyan, 'FILE'.cyan]]
    const arr2 = keys.concat(links)
    const config = {
        columns: {
            0: { width: 40 },
            2: { width: 55 }
        }
    }
    return console.log(table(arr2,config))
}

const title = () => {
    
    return console.log(colors.rainbow(figlet.textSync('Md-Links')));
}

const help = () => {
    const helpTable =  [
        ['OPTIONS'.bold.red, 'RESULT'.bold.red],
        ['--validate'.brightBlue, 'Print href, text, file, message(ok or fail) and status.'.white],
        ['--stats'.brightBlue, 'Print total and unique links.'.white],
        ['--validate --stats'.brightBlue, 'Print total, unique and broken links.'.white],
        ['--help'.brightBlue, 'Show all the options.'.white]
    ]

    const config = {
        columns: {
          1: { width: 60 }
        }
      }
    return console.log(colors.magenta(table(helpTable, config)))
} 
export {
    title,
    help,
    tableValidate,
    basicTable
}
