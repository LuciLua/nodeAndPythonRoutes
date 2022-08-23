module.exports = (app) => {
    app.route('/')
        .get((req, res) => {
            console.log('[GET] /')


            // resp enviada pra python
            res.send('GET /')
        })
        .post((req, res) => {
            console.log('[POST] /')


            // resp enviada pra python
            res.send('POST /')
        })


    app.route('/fruits')
        .get((req, res) => {
            console.log('[GET] /fruits')

            // resp enviada pra python
            res.send('GET /fruits')
        })
        .post((req, res) => {
            console.log('[POST] /fruits')
            console.log(req.query)

            // resp enviada pra python
            res.send(req.query)
        })
}