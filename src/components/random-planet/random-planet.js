import React, { Component } from 'react';
import SwapAPIService from '../../services/swapi-service';
import Loader from '../loader';
import ErrorPanel from '../error-panel';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapAPIService();
  planetImageSrc = `https://starwars-visualguide.com/assets/img/planets/`;
  planetPlaceholder = `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`;

  state = {
    planet : {},
    loading : true,
    error: false
  }

  isAvailImg = null;
  
  onError = (err) => { 
    this.setState({
      error: true,
      loading: false
    })
  }

  onPlanetLoaded = (planet) => { 
    this.setState({
      planet,
      loading : false
    });
  }

  componentDidMount() { 
    this.updatePlanetData();
    this.intervalId = setInterval(this.updatePlanetData, 3500);
  }

  componentWillUnmount() { 
    clearInterval(this.intervalId);
  }

  updatePlanetData = async () => { 
    // max id = 61
    let id = Math.floor(Math.random() * 58) + 2;
    // trace image 
    this.isAvailImg = await this.swapiService.isImageAvailable(`${this.planetImageSrc}${id}.jpg`);
    this.swapiService.getPlanet(id)
      .then((data) => { 
        this.onPlanetLoaded(data);     
      })
      .catch(this.onError);
  }

  render() {
   // console.log(`rendering`);
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMsg = error ? <ErrorPanel /> : null;

    const imgProp = { 
      isAvail: this.isAvailImg,
      placeholder: this.planetPlaceholder,
      imgUrl: this.planetImageSrc
    };

    const loader = loading ? <Loader /> : null;
    const content = hasData ? <PlanetView planet={planet} imgProp= {imgProp} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMsg}
        {loader}
        {content}
      </div>

    );
  }
}

const PlanetView = ( { planet, imgProp } ) => { 
  const { id, name, population, rotationPeriod, diameter } = planet;
  const { isAvail, placeholder, imgUrl } = imgProp;
  return <React.Fragment>
    <img className="planet-image"
      src={ isAvail ? `${imgUrl}${id}.jpg` : placeholder} />
    <div>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Population:</span>
          <span>{population}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Rotation Period:</span>
          <span>{rotationPeriod}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Diameter:</span>
          <span>{diameter}</span>
        </li>
      </ul>
    </div>
  </React.Fragment>
}