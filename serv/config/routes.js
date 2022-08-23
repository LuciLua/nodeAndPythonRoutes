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
            console.log('QUERY:', req.query)

            console.log('API FRUITS:', app.api.fruits.getFruits())
            
            const ef = `especialFruit: ${app.api.fruits.especialFruit}`
            console.log(ef)

            const p = app.api.persons.person1

            // resp enviada pra python
            const join = [req.query, ef, p]
            res.send(join)
        })
}