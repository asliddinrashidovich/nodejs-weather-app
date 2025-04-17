import chalk from "chalk"
import dedent from "dedent-js"

export const printError = (err) => {
    console.log(chalk.bgRed('ERROR'), err)
}

export const printSucces = (success) => {
    console.log(chalk.bgGreen('SUCCESS'), success)
}

export const printHelp = () => {
    console.log(dedent`
        ${chalk.bgCyan('HELP')}
        -s [CITY] for install city
        -h for help
        -t [API_KEY] for saving token
        `)
}
