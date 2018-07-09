sap.ui.define([ "sap/ui/base/ManagedObject", "./Random", "sap/m/MessageBox" ], function(
    ManagedObject, Random, MessageBox) {
  return ManagedObject.extend("realmz.Event", {
    metadata : {
      properties : {}
    },

    // Random Events
    randomEvents : function(kingdom) {
      this.randomEventPlague(kingdom);
      // Barbarian
    },
    // Kingdom dependant Events
    kingdomEvents : function() {
      // Civil Riot

      // Espionage
    },

    randomEventPlague : function(kingdom) {
      
      var plagues = [ "frogs", "lices", "fleas","rats","termites","Hippies","pigeons" ];
      var plague = "";
      var rnd = new Random();
      var res = rnd.nextInt(0, 100);
      if (res > 50) {
        var type = plagues[rnd.nextInt(0,plagues.length)];
        var losses = parseInt(kingdom.getFood() * 0.1);
        kingdom.substractFood(losses);
        MessageBox.warning("My Lord!" + "\n" + "A terrible plague of " + type + " has destroyed some of our crops."+ "\n"+ losses + " units of food have become unusable.");

      }
    },
    randomEventDisease : function() {
      var diseases = [];
    }
  });

});