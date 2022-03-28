
function timeConverter(req, res){
    const {time} = req.params
    // unix pattern has only numbers
    if(time.match(/^[0-9]+$/) != null){
        const date = new Date(Number(time))
        res.status(200).json({
            unix:date.getTime(),
            utc:date.toUTCString()
        })
    } else {
        const date = new Date(time)
        res.status(200).json({
            unix:date.getTime(),
            utc:date.toUTCString()
        })
    }
}

module.exports = app => {

    app.get('/', (req, res) => res.send('You came to your destiny').end())

    app.get('/api/:time', timeConverter)
}