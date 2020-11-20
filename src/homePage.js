const fs = require('fs')
module.exports = {
    leerJSON: function () {
        /*let moviesJSON = fs.readFileSync('./data/movies.json','utf-8');
        let moviesParseado = JSON.parse(moviesJSON);
        return moviesParseado*/
        return JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));
    },
    peliculas:function(){
        let arrayCompleto= this.leerJSON()
        let titulos=[]
        arrayCompleto.movies.forEach(peliculas => {
            titulos.push(peliculas.title)
        });
        titulos.sort()
        return titulos
    },
}


    
    
