sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "realmz/Player"
], function (Controller,MessageToast, Player) {
   "use strict";
   var player, world;
   
   return Controller.extend("realmz.ui5.controller.Realmz",
   {
	   onInit : function() {
	     player = new Player();
	     player.generatePlayerName();
;	     var date = new Date ();
	   },
	   
	   onNextTurn : function() {
	     MessageToast.show("A new day has begun!"); 
	   },
	   
	   onAfterRendering : function() {
	     MessageToast.show("Welcome to Realmz my Lord"); 
	     setTimeout(MessageToast.show("Ruler "+player.getFirstName()+" "+player.getLastName()+" is now Ruling!"), 3000);
		 
	   },
     onShowHello : function () {
       MessageToast.show("Hello World");
     },
     
     
     wakeup: function()
     {
       
     }
     
   });
});