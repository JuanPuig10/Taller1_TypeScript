import {series} from './data.js';
import {Serie} from './serie.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let averageTable: HTMLElement = document.getElementById("average")!;

mostrarDatosSeries(series);
mostrarAverage(series);

function mostrarDatosSeries(series: Serie[]): void{
    let tbodySerie = document.createElement("tbody");
    for(let serie of series){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<td>${serie.id}</td>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`
        tbodySerie.appendChild(trElement);
    }
    seriesTable.append(tbodySerie)
}

function mostrarAverage(series: Serie[]): void{
    let average:number = darAverage();
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML=`<tr><b> Seasons Average: </b></td><td>${average}</td>`;
    averageTable.appendChild(trElement);
}

function darAverage():number{
    let average: number=0;
    let total: number=0;
    for(let index=0; index< series.length; index++){
        let serie: Serie= series[index]
        total+=serie.temporadas;
    }
    average=total/series.length
    return average;
  }