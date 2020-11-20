const homePage = require("./homepage")
module.exports = {
    enCartelera : function (){
        let info = homePage.leerJSON();
        let movies = info.movies
        return movies.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
    }
}


