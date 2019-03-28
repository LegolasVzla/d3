$( function() {
  var icons = {
    header: "ui-icon-circle-triangle-e",
    activeHeader: "ui-icon-circle-triangle-s"
  };
  $( "#accordion" )
    .accordion({
      header: "> div > h3",
      icons: icons,
      active: false,
      collapsible: true
    })
    .sortable({
      axis: "y",
      handle: "h3",
      stop: function( event, ui ) {
        ui.item.children( "h3" ).triggerHandler( "focusout" );

        $( this ).accordion( "refresh" );
      }
    });
    // Getter
    var collapsible = $( ".selector" ).accordion( "option", "collapsible" );
     
    // Setter
    $( ".selector" ).accordion( "option", "collapsible", true );
} );