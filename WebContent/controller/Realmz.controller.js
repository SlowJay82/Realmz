sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "realmz/Player",
   "realmz/Kingdom",
   "realmz/Event",
   "sap/ui/model/json/JSONModel"
], function (Controller,MessageToast, Player, Kingdom, Event, JSONModel ) {
   "use strict";
   var player, kingdom, event, world;
   var gameRunning = false;
   var turn = 1;
   var date = new Date('1000-01-01');
   
   return Controller.extend("realmz.ui5.controller.Realmz",
   {
	   onInit : function() {
	     var model = new JSONModel({ kingdom: {} });
	     
	     player = new Player();
	     player.setModel( model );
	     kingdom = new Kingdom();
       this.getView().setModel( kingdom.model, 'kingdom' );
	     event = new Event();
	     player.generatePlayerName();
	     kingdom.generateName();
	     kingdom.setPlayer(player);
	   },
	   
	   onNextTurn : function() {
	     // Set time
	     turn += 1;
	     this.byId("turn").setText(turn);
	     // Output time
	     MessageToast.show("Day " + turn + " has begun!");
	     // Event
	   },
	   
	   onAfterRendering : function() {
	     // Generate Player
	     MessageToast.show("Ruler "+player.getFirstName()+" "+player.getLastName()+" is now in charge of the kingdom!");
	     this.byId("player").setText(player.getFirstName()+" "+player.getLastName());
	   },
  
     wakeup: function()
     {
       
     }
     
   });
});