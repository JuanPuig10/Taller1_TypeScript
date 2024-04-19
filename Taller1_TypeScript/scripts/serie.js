export var Canales;
(function (Canales) {
    Canales["NETFLIX"] = "Netflix";
    Canales["HBO"] = "HBO";
    Canales["AMC"] = "AMC";
    Canales["CBS"] = "CBS";
    Canales["BBC"] = "BBC";
})(Canales || (Canales = {}));
var Serie = /** @class */ (function () {
    function Serie(id, nombre, canal, temporadas) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
    }
    return Serie;
}());
export { Serie };
