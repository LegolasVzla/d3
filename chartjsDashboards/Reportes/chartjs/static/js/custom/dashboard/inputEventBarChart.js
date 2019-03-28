//-------------Input Events Barchart-------------

var barchartEntradaHeader = '{"labels" : '

//var barchartEntradasfechas = "{{ barchartFechasEventosCreados }}"
var barchartEntradasfechas = '["2016-12-11","2015-12-04","2014-08-14","2017-01-23","2016-04-04"]'

var barchartEntradasData1 = barchartEntradaHeader.concat(barchartEntradasfechas);

var barchartEntradaBody = ',"datasets" : [{"label": "Eventos Creados", "data" :'

var barchartEntradasData1 = barchartEntradasData1.concat(barchartEntradaBody);

// var barchartEntradasData2 = "{{ barchartDatosEventosCreados }}"
var barchartEntradasData2 = '[115,192,84,81,194,100,150]'

var barchartEntradasData1 = barchartEntradasData1.concat(barchartEntradasData2);

var barchartEntradasEnd = ', "backgroundColor" : "#FF8000", "bordercolor" : "#FE642E" }]}'

var barchartEntradasData1 = barchartEntradasData1.concat(barchartEntradasEnd);

//console.log("JSON Final: "+ barchartEntradasData1);
result_json_barchart_entradas =JSON.parse(barchartEntradasData1);

  var barchart_entradas = document.getElementById("barchartEntradas").getContext("2d");
  window.myBar = new Chart(barchart_entradas,{
      type: 'bar',
      data: result_json_barchart_entradas,
    responsive : true
  });
