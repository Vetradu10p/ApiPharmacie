const mongoose = require('mongoose');

const PharmacieSchema = new mongoose.Schema({
    nom: String,
    adresse: String,
    location: {
        type: Array,
        coordinates: []
    },
    nombres_de_masque: Number,
    image: String,
},
    { collection: "pharmacies",
    usePushEach: true
}
);

const Pharmacie = mongoose.model('Pharmacie', PharmacieSchema);

module.exports = Pharmacie;



/* location: {
        t
        Longitude PUIS latitude

        Quand le client voudra rajouter les coordonnées





const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Scrawl', scrawlSchema);

Ne pas oublié de remplacer "scrawls" par "pharmacie"

Ne pas oublié de mettre "react navigation"
*/