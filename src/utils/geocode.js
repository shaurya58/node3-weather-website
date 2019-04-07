const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hhdXJ5YTU4IiwiYSI6ImNqdTFodDZteTAxc3c0NGxrMXU4N3A3cWEifQ.8vs1stwvhEMFTX5Iy3YshA'
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            // console.log('Unable to connect to location services!')
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.features.length === 0) {
            // console.log('No results found for the searched location. Try checking the search key!')
            callback('No results found for the searched location. Try checking the search key!', undefined)
        }
        else {
            const coordinates = {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            }
            callback(undefined, coordinates)
        }
    })
}

module.exports = geocode