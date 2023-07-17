const dataString = sessionStorage.getItem('selectedBrewery');
if(dataString){
    const data = JSON.parse(dataString);
    render(data);
    console.log(data);

}

const queryParams = new URLSearchParams(window.location.search);

console.log(queryParams);

const id = queryParams.get('id');


if(id){
    DBService.getSingleBrewery(id).then(brewery => render (brewery));
}

function render(brewery){
    const breweryContainer = document.getElementById('brewery-container');
    breweryContainer.appendChild(createElementWithString('span', brewery.name));
    breweryContainer.appendChild(createElementWithString('span', brewery.city));
    breweryContainer.appendChild(createElementWithString('span', brewery.state));
    breweryContainer.appendChild(createElementWithString('span', brewery.brewery_type));
    breweryContainer.appendChild(createElementWithString('span', brewery.link));
    breweryContainer.appendChild(createElementWithString('span', brewery.address_1));
    breweryContainer.appendChild(createElementWithString('span', brewery.website_url));
}