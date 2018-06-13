sap.ui.define([ "sap/ui/base/ManagedObject" ], function( ManagedObject )
{
  return ManagedObject.extend( "realmz.Event",
  {
    metadata: {
      properties: {
        firstName:  { type: "string", defaultValue: "Unknown Player" },
        lastName:   { type:"string", defaultValue: ""},
        gender: {type:"boolean", defaultValue: false},
        score:      { type: "int",    defaultValue: 0       },
        world:      { type: "realmz.World" }
      }
    },
    
    generatePlayerName: function(gender) {
      var firstNameMale = ["Hagen", "Siegfried", "Leonardo", "Josef", "Pablo", "Kratos", "Harisson", "Mahatama", "Sun", "Kim", "Donald", "Vladimir","George","Özkan","Merlin","Daniel","Volker","Ernst","Adolf"];
      var firstNameFemale = ["Larissa", "Morgaine", "Elaine", "Katharina", "Elizabeth","Hannah", "Anna", "Leah","Donna","Bonnie"];
      var lastName = ["Forrester", "Stark", "Liedtke", "Bolton", "Holden","Trussler","Tune"];
      var gender = Math.random() >= 0.5;
      var name = lastName[Math.floor(Math.random()*lastName.length)];
      this.setLastName(name);
      if (gender == true) {
        var firstName = firstNameMale[Math.floor(Math.random()*firstNameMale.length)];
        this.setFirstName(firstName);
      }
      
      if (gender == false) {
        var firstName = firstNameFemale[Math.floor(Math.random()*firstNameFemale.length)];
        this.setFirstName(firstName);
      }
      
    },
    
    damage: function( amount )
    {
      this.setHealth( this.getHealth() - amount );
    }
    
  });
  
  
});