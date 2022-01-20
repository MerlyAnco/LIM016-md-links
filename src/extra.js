import figlet from 'figlet'
import chalk from 'chalk';

const title = () => {
    
    return console.log(chalk.magenta(figlet.textSync('Md-Links',{
        font: 'basic',
    })));
}

const help = () => {
    const helpTable = `
     ____________________ _________________________________________________________
    |      Options       |                         Result                          |       
    |____________________|_________________________________________________________|
    | --validate         | Print href, text, file, message(ok or fail) and status. |
    |____________________|_________________________________________________________|
    | --stats            | Print total and unique links .                          |
    |____________________|_________________________________________________________|
    | --validate --stats | Print total, unique and broken links.                   |
    |____________________|_________________________________________________________|
    `
    return console.log(chalk.cyan(helpTable))
}

export {
    title,
    help
}
