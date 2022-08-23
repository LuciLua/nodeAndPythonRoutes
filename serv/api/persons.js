module.exports = app => {
    
    const person1 = {
        name: 'luci',
        age: 21,
        ocupation: 'Student',
        favoriteFruit: app.api.fruits.especialFruit
    }

    return { person1 }
}