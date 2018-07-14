/**
 * Pokemon.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    numeroPokemon:{
      type:'number',
      required: true
    },
    nombrePokemon:{
      type:'string',
      required: true
    },
    poderUno:{
      type:'string',
      required: true
    },
    poderDos:{
      type:'string',
      required: true
    },
    fechaCaptura:{
      type:'string',
      required: true
    },
    nivel:{
      type:'number',
      required: true
    },
    pokemonIdFK:{
      model: 'Maestro'
    }

  }

};

