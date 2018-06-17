sap.ui.define([ "sap/ui/base/ManagedObject" ], function( ManagedObject )
{
  return ManagedObject.extend( "realmz.Event",
  {
    metadata: {
      properties: {
      }
    },
    
    throwRandomInt(max) {
      Math.floor((Math.random() * max) + 1);
    },
    
    handleEvent: function(kingdom) {
        
      }
  });
  
  
});