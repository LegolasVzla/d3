//-------------Created Accounts Linechart-------------

var linechartCuentasCreadasHeader = '{"labels" : '

//var linechartCuentasCreadasfechas = "{{ barchartFechasCuentasCreadas }}"
var linechartCuentasCreadasfechas = '["2016-02-18","2017-12-12","2015-08-27","2018-03-21","2017-11-07","2015-12-02","2015-09-07"]'

var linechartCuentasCreadasData1 = linechartCuentasCreadasHeader.concat(linechartCuentasCreadasfechas);

var linechartCuentasCreadasBody = ',"datasets" : [{"label": "Cuentas Creadas", "data" :'

var linechartCuentasCreadasData1 = linechartCuentasCreadasData1.concat(linechartCuentasCreadasBody);

// var linechartCuentasCreadasData2 = "{{ barchartDatosCuentasCreadas }}"
var linechartCuentasCreadasData2 = '[84,118,165,187,107,100,150]'

var linechartCuentasCreadasData1 = linechartCuentasCreadasData1.concat(linechartCuentasCreadasData2);

var linechartCuentasCreadasEnd = ', "backgroundColor" : "#E7E7E7", "bordercolor" : "#000000" }]}'

var linechartCuentasCreadasData1 = linechartCuentasCreadasData1.concat(linechartCuentasCreadasEnd);

//console.log("JSON Final: "+ linechartCuentasCreadasData1);
result_json_linechart_cuentas_creadas =JSON.parse(linechartCuentasCreadasData1);

var linechart_cuentas_creadas = document.getElementById("linechartCuentasCreadas").getContext("2d");
window.myLine = new Chart(linechart_cuentas_creadas,{
  type: 'line', 
  data: result_json_linechart_cuentas_creadas
});
