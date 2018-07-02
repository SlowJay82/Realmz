sap.ui.define([
  'sap/ui/base/ManagedObject'
], function( Base )
{
  var Random = ManagedObject.extend("realmz.Random",
  {
    metadata: {
      properties: {
        alphabet: { type: "string[]", defaultValue: 'abcdefghijklmnopqrstuvwxyz'.split('') }
      }
    },
    
    nextInt: function( min, max )
    {
      if ( !max ) {
        max = min;
        min = 0;
      }
      return 0|(Math.random()*(max-min)+min);
    },
    
    nextFloat: function( min, max )
    {
      if ( !max ) {
        max = min;
        min = 0;
      }
      return Math.random()*(max-min)+min;
    },
    
    nextLetter: function( alphabet )
    {
      alphabet = alphabet || this.getAlphabet();
      return alphabet[ this.nextInt( 0, alphabet.length ) ];
    },
    
    nextElementOf: function( elements )
    {
      return elements[ this.nextInt( 0, elements.length ) ];
    },
    
    nextByPattern: function( pattern )
    {
      return pattern.split('').map( letter => {
        switch( letter ) {
        case 'd': return this.nextInt( 0, 9 );
        case 'l': return this.nextLetter();
        default: return letter;
        }
      }).join('');
    }
  })
  
  return Random;
})