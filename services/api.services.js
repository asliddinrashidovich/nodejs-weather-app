// import https from 'https'
import { getKeyValue, TOKEN_DISCTIONARY } from './storage.services.js'
import axios from 'axios'

const getWeather = async city => {
    const token = await getKeyValue(TOKEN_DISCTIONARY.token)

    console.log(token)
    if(!token) {
        throw new Error('Api Dosnt exist,')
    }

    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    })

    console.log(response.data)
    // console.log(process.env)
    // const url = new URL('https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=cd894f226099e03bd00257ed781081da')
    // url.searchParams.append('q', city)
    // url.searchParams.append('appid', token)
    // url.searchParams.append('lang', 'en')
    // url.searchParams.append('units', 'metric')

    // https.get(url, (res) => {
    //     let response = ''
    //     res.on('data', (chunk) => {
    //         response += chunk
    //     })
    //     res.on('end', () => {
    //         console.log(response)
    //     })
    // })
}

export {getWeather}