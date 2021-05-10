const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7232c821674c82c5b6435db5373c0a57&query=' + latitude + ',' + '&units=f'
     
     request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
             callback('Unable to find location', undefined)
        } else {
             callback(undefined,body.current.weather_descriptions[0] + ". It is currently " +body.current.temperature + " degrees out. It feels like "  +body.current.feelslike + ' degrees out.')
        }
     })
}

module.exports = forecast