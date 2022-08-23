module.exports = app => {
    
    const getFruits = async (req, res) => {
        console.log("!!! [API] GET /fruits IN CONSOLE LOG FUNCTION!!!")

        return 'RETURN GET FRUITS OK!'
    }
    
    const especialFruit = 'Blackbarry' 

    console.log('API CONECTION OK')

    return { getFruits, especialFruit }
}