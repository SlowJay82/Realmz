sap.ui.define([ "./Personality", "./Random" ], function( Personality, Random )
{
  var firstNameMale = ["Sid","Johnny","Hagen", "Siegfried", "Leonardo", "Josef", "Pablo", "Kratos", "Harisson", "Mahatama", "Sun", "Kim", "Donald", "Vladimir","George","Özkan","Merlin","Daniel","Volker","Ernst","Adolf"];
  var firstNameFemale = ["Larissa", "Morgaine", "Elaine", "Katharina", "Elizabeth","Hannah", "Anna", "Leah","Donna","Bonnie"];
  var lastName = ["Hetler","Vicious","Rotten","Forrester", "Stark", "Liedtke", "Bolton", "Holden","Trussler","Tune","Dexter", "Williams","Evans","Simpson"];
  var rand = new Random();
  
  
	return Personality.extend( "realmz.Player",
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
		  gender = gender || rand.nextElementOf(["male","female"]);
		  this.setLastName( rand.nextElementOf(lastName) );
		  this.setFirstName( gender === "male" ?
		    rand.nextElementOf(firstNameMale) :
		    rand.nextElementOf(firstNameFemale)
		  );
		},
		
		damage: function( amount )
		{
		  this.setHealth( this.getHealth() - amount );
		}
		
	});
	
	
});