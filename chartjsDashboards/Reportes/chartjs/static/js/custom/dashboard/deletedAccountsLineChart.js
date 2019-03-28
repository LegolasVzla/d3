//-------------Deleted Accounts Linechart-------------

var linechartCuentasEliminadasHeader = '{"labels" : '

//var linechartCuentasEliminadasfechas = "{{ barchartFechasCuentasEliminadas }}"
var linechartCuentasEliminadasfechas = '["2018-09-06","2016-07-23","2016-12-18","2017-01-28","2018-07-23","2016-08-13","2015-08-16"]'

var linechartCuentasEliminadasData1 = linechartCuentasEliminadasHeader.concat(linechartCuentasEliminadasfechas);

var linechartCuentasEliminadasBody = ',"datasets" : [{"label": "Cuentas Eliminadas", "data" :'

var linechartCuentasEliminadasData1 = linechartCuentasEliminadasData1.concat(linechartCuentasEliminadasBody);

// var linechartCuentasEliminadasData2 = "{{ barchartDatosCuentasEliminadas }}"
var linechartCuentasEliminadasData2 = '[172,92,109,162,78,150,125]'

var linechartCuentasEliminadasData1 = linechartCuentasEliminadasData1.concat(linechartCuentasEliminadasData2);

var linechartCuentasEliminadasEnd = ', "backgroundColor" : "#D8D8D8", "bordercolor" : "#BDBDBD"  }]}'

var linechartCuentasEliminadasData1 = linechartCuentasEliminadasData1.concat(linechartCuentasEliminadasEnd);

//console.log("JSON Final: "+ linechartCuentasEliminadasData1);
result_json_linechart_cuentas_eliminadas =JSON.parse(linechartCuentasEliminadasData1);


var linechart_cuentas_creadas_eliminadas = document.getElementById("linechartCuentasEliminadas").getContext("2d");
window.myLine = new Chart(linechart_cuentas_creadas_eliminadas,{
  type: 'line', 
  data: result_json_linechart_cuentas_eliminadas
});
