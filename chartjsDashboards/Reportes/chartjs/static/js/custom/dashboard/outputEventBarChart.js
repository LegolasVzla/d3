//-------------Output Events Barchart-------------

var barchartSalidaHeader = '{"labels" : '

//var barchartSalidasfechas = "{{ barchartFechasEventosSalida }}"
var barchartSalidasfechas = '["2018-11-17","2018-12-07","2018-08-12","2017-12-01","2015-03-11","2014-07-07","2016-02-18"]'

var barchartSalidasData1 = barchartSalidaHeader.concat(barchartSalidasfechas);

var barchartSalidaBody = ',"datasets" : [{"label": "Eventos de Salida", "data" :'

var barchartSalidasData1 = barchartSalidasData1.concat(barchartSalidaBody);

// var barchartSalidasData2 = "{{ barchartDatosEventosSalida }}"
var barchartSalidasData2 = '[98,135,185,112,90,180,115]'

var barchartSalidasData1 = barchartSalidasData1.concat(barchartSalidasData2);

var barchartSalidasEnd = ', "backgroundColor" : "#088A29", "bordercolor" : "#04B431" }]}'

var barchartSalidasData1 = barchartSalidasData1.concat(barchartSalidasEnd);

//console.log("JSON Final: "+ barchartSalidasData1);
result_json_barchart_salidas =JSON.parse(barchartSalidasData1);

  var barchart_salidas = document.getElementById("barchartSalidas").getContext("2d");
  window.myBar = new Chart(barchart_salidas,{
      type: 'bar',
      data: result_json_barchart_salidas,
    responsive : true
  }); 
