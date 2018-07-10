sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "realmz/Player",
   "realmz/Kingdom",
   "realmz/Event",
   "sap/ui/model/json/JSONModel",
   "sap/m/MessageBox",
   "sap/ui/core/message/MessageManager",
   "sap/ui/core/message/Message"
], function (Controller,MessageToast, Player, Kingdom, Event, JSONModel, MessageBox, MessageManager, Message ) {
   "use strict";
   var player, kingdom, event, world;
   var gameRunning = false;
   var turn = 1;
   var date = new Date('1000-01-01');
   
   return Controller.extend("realmz.ui5.controller.Realmz",
   {
	   onInit : function() {
	     var model = new JSONModel({ kingdom: {} });
       event = new Event();
	     player = new Player();
	     player.setModel( model );
	     kingdom = new Kingdom();
       this.getView().setModel( kingdom.model, 'kingdom' );
	     player.generatePlayerName();
	     kingdom.generateName();
	     kingdom.setPlayer(player);
	     this.messageManager = new MessageManager();
	     this.getView().setModel( this.messageManager.getMessageModel(), 'Messages' );
	     this.logMessage("Information", "Game started", "The game has started");
	   },
	   
	   onNextTurn : function() {
	     // Set time
	     turn += 1;
	     this.byId("turn").setText(turn);
	     // Output time
	     MessageBox.information("Day " + turn + " has begun!");
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
     
     logMessage: function( type, message, desc, toast, box )
     {
       if ( toast )
         MessageToast.show( message );
       if ( box )
         MessageBox[ type.toLowerCase() ]( message );
       console.log( message );
       this.messageManager.addMessages( new Message({
         type: type === 'Information' ? 'None' : type,
         message: message,
         description: desc
       }) );
       return this;
     }
     
   });
});