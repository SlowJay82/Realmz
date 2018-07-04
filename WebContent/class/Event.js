sap.ui.define([ "sap/ui/base/ManagedObject",
  "./Random"], function( ManagedObject, Random )
{
  return ManagedObject.extend( "realmz.Event",
  {
    metadata: {
      properties: {
      }
    },
    
    throwRandomInt(max) {
      var rnd= Math.floor((Math.random() * max) + 1);
      alert(rnd);
    },
    
    handleEvent: function(kingdom) {
        var rnd = this.throwRandomInt(100);
      }
  });
  
  
});