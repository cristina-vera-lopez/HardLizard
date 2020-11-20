//index es quien va a mostrar, pero no procesa informacion
const homePage = require('./homePage');
let movies = homePage.peliculas()  //se ordena alfabeticamente
const enCartelera = require('./enCartelera');
const masVotadas = require('./masVotadas');
const salas = require('./sucursales');
const contacto = require("./contacto")
const preguntas = require('./preguntasFrecuentes');

module.exports = {
    homePage : function(req,res){
        res.write('​   >>> Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​ <<< \n')
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n')
        res.write('Total de Películas: ' + movies.length + '\n')
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n')
        res.write('Listados de películas: \n\n')
        movies.forEach(movie => {
        res.write(' * ' + movie +'\n')
        });
        res.write('\n\n\nRecordá que podés visitar las secciones:\n>_ En cartelera\n>_ Más votadas\n>_ Sucursales\n>_ Contacto\n>_ Preguntas Frecuentes');
        res.end()
    },

    enCartelera: function(req,res){
        let cartelera = enCartelera.enCartelera();
        res.write(' >> EN CARTELERA <<< \n');
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n')    
        res.write('Total de películas: ' + cartelera.length + '\n'); 
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n')
        res.write('Listados de películas:  ')
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n')   
        cartelera.forEach(movie => {
            res.write('>_ Título: ' + movie.title + '\n');
            res.write('Reseña: ' + movie.overview +'\n\n')
            });
        res.end()
    },

    masVotadas: function(req,res){
        let votadas = masVotadas.masVotadas()   
        res.write(' >>> MAS VOTADAS <<< \n');
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n')
        res.write('Total de películas más votadas: ' + votadas.length + '\n'); 
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n')
        res.write('Rating promedio: ' + masVotadas.promedioRating() + '\n')
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n')
        res.write('Listados de películas:  ')
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n') 
        votadas.forEach(movie => {
            res.write('>_Título: ' + movie.title + '\n');
            res.write('>_Rating: ' + movie.vote_average + '\n');
            res.write('>_Reseña: ' + movie.overview + '\n\n');
            });
        res.end()
    },

    sucursales: function(req,res){
        let sucursales = salas.sucursales().theaters;
        res.write(' >>> NUESTRAS SALAS <<< \n');
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n')
        res.write('Total de salas: ' + salas.sucursales().total_theaters +'\n')
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n')
        res.write('Listados de salas:  ')
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n') 
        sucursales.forEach(sucursal => {
            res.write('>_ Nombre: ' + sucursal.name + '\n')
            res.write('>_ Dirección: ' + sucursal.address + '\n')
            res.write('>_ Descripción: ' + sucursal.description + '\n\n')
            });
        res.end()
    },

    contacto: function(req,res){
        res.write(contacto.contacto())
        res.end()
    },

    preguntasFrecuentes: function(req,res){
        let faqs = preguntas.faqsJSON().faqs
        res.write(' >>> PREGUNTAS FRECUENTES <<<  \n');
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n') 
        res.write('Total de preguntas: ' + preguntas.faqsJSON().total_faqs + '\n')
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n') 
        res.write('Listados de preguntas:  ')
        res.write('_________________________________________________________________________________________________________________________________________________________________________________________\n\n') 
        faqs.forEach(answer => {
        res.write('> Pregunta: ' + answer.faq_title + '\n')
        res.write('Respuesta: ' + answer.faq_answer + '\n\n')
        });
        res.end()
    }
}