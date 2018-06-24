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
        // Products generated by kingdom
        food:      { type: "int",    defaultValue: 1000       },
        science: { type:"int", defaultValue: 0},
        gold:      { type: "int" , defaultValue: 1000},
        intel:      { type: "int" , defaultValue: 0},
        // Adjustable jobs for kingdom population
        peasant: {type: "int", defaultValue: 500},
        scientist: {type: "int", defaultValue: 150, bindable: true},
        merchant: {type: "int", defaultValue: 150},
        spy: {type: "int", defaultValue: 100},
        // Army generates no products
        soldier: {type: "int", defaultValue: 100}
      }
    },
    
    manageFood: function() {
      var income = this.getPeasant;
      var needs = (this.getPopulation * 0.5);
      var outcome = income - needs;
      this.setFood(this.getFood += outcome)
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
    }
    
  });
  
  
});