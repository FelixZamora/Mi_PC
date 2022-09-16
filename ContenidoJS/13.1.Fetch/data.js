class DataApi{

    constructor(){
        this.infoCompleta = [];
        this.url = "https://jsonplaceholder.typicode.com/todos";
        this.data = [];
        this.getApi();
    }

    getInfoCompleta(){
        return this.infoCompleta;
    }

    getData (){
        return this.data;
    }
    
    async getApi(){
        this.data = await fetch (this.url)
            .then((response) => response.json())
            .then((info) => {
                for (let i of info){
                    this.data.push(i.title);
                    //console.log(data);
                    //let cad = `${i.userId} - ${i.title}`;
                    //let cad = `Id: ${i.userId} titulo: ${i.title} completado: ${i.completed}`;
                    //this.infoCompleta.push(cad);
                }
                return this.data;
            })
            .catch((error) => console.error(error))
            .finally(console.info("Ha finalizado la peticion"))
    };
}
export { DataApi };

/** Todas clases tienen atributos que vendrian siendo variables. Los metodos son las funciones. Los constructores cuando hacemos inicializacion a las variables
 * 
 * Clases: Es una plantilla de un objeto. Estan compuestas de atributos, metodos, metodo constructor
 * 
 * Generalmente las clases tienen un Metodo constructor 
 * 
 * Dentro del metodo si usar let
 * 
 * this significa pertenzco a esta clase
*/