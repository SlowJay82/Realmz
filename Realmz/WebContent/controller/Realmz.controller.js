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
	     player.helloWorld();
	     
	   },
	   
	   onAfterRendering : function() {
	     MessageToast.show("Welcome to Realmz my Lord"); 
		 
	   },
     onShowHello : function () {
       MessageToast.show("Hello World");
     },
     
     
     wakeup: function()
     {
       
     }
     
   });
});