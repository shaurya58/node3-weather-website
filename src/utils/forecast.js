const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3bba3ae10ab31be829108db59b79dc47/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to access weather service!', undefined)
        }
        else if(body.error) {
            callback('Unable to find location!', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })    
}

module.exports = forecast