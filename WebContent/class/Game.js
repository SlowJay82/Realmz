sap.ui.define([
    "realmz/Event",
    "sap/ui/model/json/JSONModel",
    "realmz/Kingdom",
    "sap/ui/base/ManagedObject",
    "sap/ui/core/message/Message",
    "sap/m/MessageBox",
    "sap/ui/core/message/MessageManager",
    "sap/m/MessageToast",
    "realmz/Player",
    "./Random"],
    function(
    Event,
    JSONModel,
    Kingdom,
    ManagedObject,
    Message,
    MessageBox,
    MessageManager,
    MessageToast,
    Player,
    Random) {
    var date = new Date('1000-01-01');
    return ManagedObject.extend("realmz.Game", {
    metadata : {
      properties : {
        running:  { type: "boolean",        defaultValue: false                   },
        kingdom:  { type: "Realmz.Kingdom", defaultValue: new Kingdom()           },
        player:   { type: "Realmz.Player",  defaultValue: new Player()            },
        text:     { type: "string",         defaultValue: "Unknown Text"          },
        turn:     { type: "int",            defaultValue: 0                       },
        date:     { type: "date",           defaultValue: new Date('1000-01-01')  },
        messageManager: { type: "sap/ui/core/message/MessageManager", defaultValue: new MessageManager() }
      }
    },
    
    onInit : function() {
      //var model = new JSONModel({ kingdom: {} });
      event = new Event();
      //player.setModel( model );
      //this.getView().setModel( kingdom.model, 'kingdom' );
      player.setGame( this );
      player.generatePlayerName();
      kingdom.generateName();
      kingdom.setPlayer(player);
      //this.getView().setModel( this.getMessageManager().getMessageModel(), 'Messages' );
    },
    
    onNextTurn : function() {
      // Set time
      turn += 1;
      this.byId("turn").setText(turn)
      var sTurn = "Day " + turn;
      // Output time
      this.logMessage("Information", sTurn, "The game has started");
      // Event
      kingdom.onNextTurn();
      event.randomEvents(kingdom);
    },
    
    onAfterRendering : function() {
      // Generate Player
      MessageToast.show("Ruler "+player.getFirstName()+" "+player.getLastName()+" is now in charge of the kingdom!");
      this.byId("player").setText(player.getFirstName()+" "+player.getLastName());
    },
    
    onAgriculturePress : function() {
      MessageToast.show("Peasants: " + kingdom.getPeasant() + " / " + kingdom.getPopulation());
    },
    
    onEconomyPress : function() {
      MessageToast.show("Merchants: " + kingdom.getMerchant() + " / " + kingdom.getPopulation());
    },
    
    onWarfarePress : function() {
      MessageToast.show("Soldiers: " + kingdom.getSoldier() + " / " + kingdom.getPopulation());
    },
 
    onSciencePress : function() {
      MessageToast.show("Scientists: " + kingdom.getScientist() + " / " + kingdom.getPopulation());
    },
    
    onEspionagePress : function() {
      MessageToast.show("Agents: " + kingdom.getSpy() + " / " + kingdom.getPopulation());
    },
    
    wakeup: function()
    {
      
    },
    
  });

});