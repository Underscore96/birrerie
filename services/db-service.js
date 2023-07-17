class DBService{

    static getBreweries(pageNumber){

        const url = 'https://api.openbrewerydb.org/v1/breweries?per_page=10&page=' + pageNumber;

        console.log(url);

        return fetch(url)
        .then(resp => resp.json())

    }



    static getSingleBrewery(id){

        const url = 'https://api.openbrewerydb.org/v1/breweries/' + id;

        console.log(url);

        return fetch(url)
        .then(resp => resp.json())

    }





}