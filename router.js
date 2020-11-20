//router decide quien se hace cargo
const index = require('./src/index');
module.exports = function (req, res) {
    switch (req.url) {
        case '/':
            //se van acceder al Home
            index.homePage(req, res)
            break;
        case '/en-cartelera':
            //se van acceder a la cartelera 
            index.enCartelera(res, res)
            break;
        case '/mas-votadas':
            //se van acceder a la mas-votadas
            index.masVotadas(res, res)
            break;
        case '/sucursales':
            //se van acceder a las sucursales 
            index.sucursales(res, res)
            break;
        case '/contacto':
            //se van acceder a contacto
            index.contacto(res, res)
            break;
        case '/preguntas-frecuentes':
            //se van acceder a preguntas-frecuentes
            index.preguntasFrecuentes(res, res)
            break;
        default:
            res.end('404 not found')
            break;
    }
}

