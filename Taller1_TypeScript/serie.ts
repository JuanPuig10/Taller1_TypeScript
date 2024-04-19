export enum Canales{
    NETFLIX = "Netflix",
    HBO = "HBO",
    AMC = "AMC",
    CBS = "CBS",
    BBC = "BBC"

}

export class Serie {

    constructor(public id:number, public nombre:string, public canal:Canales, public temporadas:number)
    {

    }
}