import getArgs from './helpers/agrs.js'
import { printError, printHelp, printSucces } from './services/log.services.js'

const startCli = () => {
    const args = getArgs(process.argv)
    console.log(args)
    printError('error')
    printSucces('ok')
    if(args.h) {
        printHelp()
    }
}

startCli()