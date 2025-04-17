const getArgs = require('./helpers/agrs')

const startCli = () => {
    const args = getArgs(process.argv)
    console.log(args)
}

startCli()