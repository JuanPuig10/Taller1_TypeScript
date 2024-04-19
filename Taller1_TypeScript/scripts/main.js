import { series } from './data.js';
var seriesTable = document.getElementById("series");
var averageTable = document.getElementById("average");
mostrarDatosSeries(series);
mostrarAverage(series);
function mostrarDatosSeries(series) {
    var tbodySerie = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td>").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        tbodySerie.appendChild(trElement);
    }
    seriesTable.append(tbodySerie);
}
function mostrarAverage(series) {
    var average = darAverage();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<tr><b> Seasons Average: </b></td><td>".concat(average, "</td>");
    averageTable.appendChild(trElement);
}
function darAverage() {
    var average = 0;
    var total = 0;
    for (var index = 0; index < series.length; index++) {
        var serie = series[index];
        total += serie.temporadas;
    }
    average = total / series.length;
    return average;
}
