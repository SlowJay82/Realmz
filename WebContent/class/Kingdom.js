sap.ui.define([ "sap/ui/base/ManagedObject" ], function( ManagedObject )
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
        scientist: {type: "int", defaultValue: 150},
        merchant: {type: "int", defaultValue: 150},
        intelligence: {type: "int", defaultValue: 100}
      }
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