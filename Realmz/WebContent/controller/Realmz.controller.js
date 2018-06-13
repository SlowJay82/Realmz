sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "realmz/Player",
   "realmz/Kingdom"
], function (Controller,MessageToast, Player, Kingdom) {
   "use strict";
   var player, kingdom, world;
   var gameRunning = false;
   var turn = 1;
   var date = new Date('1000-01-01');
   
   return Controller.extend("realmz.ui5.controller.Realmz",
   {
	     onInit : function() {
	     player = new Player();
	     kingdom = new Kingdom();
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