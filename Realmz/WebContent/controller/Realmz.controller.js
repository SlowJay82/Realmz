sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "realmz/Player",
   "realmz/Kingdom"
], function (Controller,MessageToast, Player, Kingdom) {
   "use strict";
   var player, kingdom, world;
   
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
	     // Init Date
	     if (!date) {
	       var date = new Date('1000-01-01T00:00:00');
	     }; 
	     // Set day
	     this.byId("date").setText(date);
	     // Output
	     MessageToast.show("A new day has begun!"); 
	   },
	   
	   onAfterRendering : function() {
	     MessageToast.show("Welcome to Realmz my Lord"); 
	     setTimeout(MessageToast.show("Ruler "+player.getFirstName()+" "+player.getLastName()+" is now Ruling!"), 3000);
	     
	   },
  
     wakeup: function()
     {
       
     }
     
   });
});