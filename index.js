import getArgs from './helpers/agrs.js'
import { getWeather } from './services/api.services.js'
import { printError, printHelp, printSucces } from './services/log.services.js'
import { saveValue, TOKEN_DISCTIONARY } from './services/storage.services.js'

const saveToken = async (token) => {
    if(!token.length) {
        printError("Token does not exist")
        return 
    }
    try {
        await saveValue(TOKEN_DISCTIONARY.token, token)
        printSucces('Token was saved')
    } catch(err){
        printError(err.message)
    }
}

const startCli = () => {
    const args = getArgs(process.argv)
    console.log(args)
    if(args.h) {
        printHelp()
    } else if(args.t) {
        return saveToken(args.t)
    }
    getWeather(process.env.CITY ?? 'Uzbekistan')
}

startCli()