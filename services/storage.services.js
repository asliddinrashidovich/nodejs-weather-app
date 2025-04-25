import path from 'path'
import os from 'os'
import fs from 'fs'

const filePath = path.join(os.homedir(), 'weather-data.json')

const TOKEN_DISCTIONARY = {
    token : '189c6d85c1fb4a0b888ca3ad0abc62bb',
    city : 'city'
}


const saveValue = async (key, value) => {
    let data  = {}
    
    if(await isExist(filePath)) {
        const file = await fs.promises.readFile(filePath)
        data = JSON.parse(file)
    }
    
    data[key] = value
    await fs.promises.writeFile(filePath, JSON.stringify(data))
}

const getKeyValue = async key =>{
    if (await isExist(filePath)) {
        const file = await fs.promises.readFile(filePath)
        const data = JSON.parse(file)
        return data[key]
    }
    return undefined
}

const isExist = async path => {
    try {
        await fs.promises.stat(path)
        return true
    }
    catch(err) {
        return false
    }
}

export {saveValue, getKeyValue, TOKEN_DISCTIONARY}