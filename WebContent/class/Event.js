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
      
      var plagues = [ "frog", "lice", "flea" ];
      var plague = "";
      var rnd = new Random();
      var res = rnd.nextInt(0, 100);
      //MessageBox.confirm("Test");
      if (res > 90) {
        kingdom.setGold(100);
        // alert("Plague");
      }
    },
    randomEventDisease : function() {
      var diseases = [];
    }
  });

});