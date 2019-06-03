export default class SwapAPIService { 
    
    // private field
    _apiBase = `https://swapi.co/api`;
    _imgBase = `https://starwars-visualguide.com/assets/img`;

    getData = async (url) => { 
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) { 
            throw new Error(`Could not fetch data from the server. Response status : ${res.status}`);
        }
        const data = await res.json();
        return data; 
    }

    getAllPeople = async () => { 
        const res = await this.getData(`/people/`);
        return res.results.map(item => this._transformPersonData(item));
    }

    isImageAvailable = async (url) => { 
        const res = await fetch(url);
        if(res.status !== 404) return true;
        return false;
    }

    getPerson = async (id) => { 
        const res = await this.getData(`/people/${id}`);
        return this._transformPersonData(res);
    }
    
    getAllPlanets = async () => { 
        const res = await this.getData(`/planets/`);
        return res.results.map(item => this._transformPlanetData(item));
    }

    getPlanet = async (id) => { 
        const planet = await this.getData(`/planets/${id}`);
        return this._transformPlanetData(planet);
    }

    getPersonImage = ({id}) => {
        return `${this._imgBase}/characters/${id}.jpg`
    }
  
    getStarshipImage = ({id}) => {
        return `${this._imgBase}/starships/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._imgBase}/planets/${id}.jpg`
    }
    _getIdFromUrl = (url) => { 
        return url.match(/\/([0-9]*)\/$/)[1];
    }

    _transformPlanetData = (planet) => { 
        return {
            id: this._getIdFromUrl(planet.url),
            name: planet.name,
            population : planet.population,
            rotationPeriod : planet.rotation_period,
            diameter : planet.diameter
          }
    }

    _transformPersonData = (person) => { 
        return {
            id: this._getIdFromUrl(person.url),
            name: person.name,
            gender : person.gender,
            birthYear : person.birth_year,
            eyeColor : person.eye_color
          }
    }

    _transformStarshipData = (starship) => { 
        return {
            id: this._getIdFromUrl(starship.url),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            population : starship.population,
            crew : starship.crew,
            passengers : starship.passengers,
            cargoCapacity : starship.cargoCapacity
          }
    }

    getAllStarships = async () => { 
        const res = await this.getData(`/starships/`);
        return res.results.map(item => this._transformStarshipData(item));
    }

    getStarship = async (id) => { 
        const res = await this.getData(`/starships/${id}`);
        return this._transformStarshipData(res);
    }
}
