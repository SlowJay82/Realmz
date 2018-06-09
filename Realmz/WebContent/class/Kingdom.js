sap.ui.define([ "sap/ui/base/ManagedObject" ], function( ManagedObject )
{
  return ManagedObject.extend( "realmz.Kingdom",
  {
    metadata: {
      properties: {
        player: {type: "Realmz.Player"},
        name:  { type: "string", defaultValue: "Unknown Kingdom" },
        population:   { type:"int", defaultValue: 500},
        food:      { type: "int",    defaultValue: 1000       },
        gold:      { type: "int" , defaultValue: 1000}
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