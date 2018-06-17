sap.ui.define([
  "sap/ui/base/ManagedObject",
  "sap/ui/model/json/JSONModel"
], function( ManagedObject, JSONModel )
{
  return ManagedObject.extend( "realmz.Kingdom",
  {
    metadata: {
      properties: {
        player: {type: "Realmz.Player"},
        name:  { type: "string", defaultValue: "Unknown Kingdom" },
        population:   { type:"int", defaultValue: 1000},
        food:      { type: "int",    defaultValue: 1000       },
        gold:      { type: "int" , defaultValue: 1000},
        // Adjustable jobs
        peasant: {type: "int", defaultValue: 500},
        soldier: {type: "int", defaultValue: 100},
        scientist: {type: "int", defaultValue: 150, bindable: true},
        merchant: {type: "int", defaultValue: 150},
        intelligence: {type: "int", defaultValue: 100}
      }
    },
    
    init: function()
    {
      this.model = new JSONModel({});
    },
    
    setProperty: function( key, value )
    {
      ManagedObject.prototype.setProperty.apply( this, arguments );
      this.model.setProperty( '/' + key, value );
    },
    
    generateName: function() {
      var nameArray = ["Middle Earth", "Eden", "Wessex"];
      var name = nameArray[Math.floor(Math.random()*nameArray.length)] 
      this.setName(name);
    },
    
    damage: function( amount )
    {
      this.setHealth( this.getHealth() - amount );
    }
    
  });
  
  
});