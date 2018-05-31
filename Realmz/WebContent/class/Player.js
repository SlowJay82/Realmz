sap.ui.define([ "sap/ui/base/ManagedObject" ], function( ManagedObject )
{
	return ManagedObject.extend( "realmz.Player",
	{
		metadata: {
			properties: {
				firstName:  { type: "string", defaultValue: "Unknown Player" },
				lastName:   { type:"string", defaultValue: ""},
				score:      { type: "int",    defaultValue: 0       },
				health:     { type: "int",    defaultValue: 20      },
				world:      { type: "realmz.World" }
			}
		},
		
		generatePlayerName: function(gender) {
		  
		  var firstNameMale = ["Hagen", "Siegfried", "Leonardo", "Josef", "Pablo", "Kratos", "Harisson", "Mahatama", "Sun", "Kim", "Donald", "Vladimir","George","Özkan","Merlin","Daniel","Volker","Ernst","Adolf"];
		  var firstNameFemale = ["Larissa", "Morgaine", "Elaine", "Katharina", "Elizabeth","Hannah", "Anna", "Leah","Donna","Bonnie"];
		  var lastName = ["Forrester", "Stark", "Liedtke", "Bolton", "Holden","Trussler","Tune"];
		  
		  if (gender == true) {
		    var firstName = firstNameMale[Math.floor(Math.random()*firstNameMale.length)]
		    this.setfirstName(firstName);
		  }
		  
		  else {
		    var firstName = firstNameFemale[Math.floor(Math.random()*firstNameMale.length)]
        this.setfirstName(firstName);
		  }
		  
		},
		
		helloWorld: function()
		{
		  console.log( "Hello World from " + this.getfirstName() );
		},
		
		damage: function( amount )
		{
		  this.setHealth( this.getHealth() - amount );
		}
		
	});
	
	
});