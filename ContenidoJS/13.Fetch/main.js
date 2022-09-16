fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((json) => {
        //console.log(console.results);
        for (let p of json.results){
            console.log(p.name);
        }
    })
    .catch((error) => console.error("Se ha generado un error" + error))
    .finally(console.info("Ha finalizado la peticion"));

    //No utilizar RickyMorthy, JSONPlaceholder, Pokemon. NOOOOO