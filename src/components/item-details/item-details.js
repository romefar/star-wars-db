import React, { Component } from 'react';
import Loader from '../loader';

import './item-details.css';

export default class ItemDetails extends Component {

  state = {
    itemData : null,
    loading : true,
    image : null
  };

  componentDidMount() { 
    this.updatePerson();
  }
  
  componentDidUpdate(prevProps, prevState) { 
    if(prevProps.itemId !== this.props.itemId) { 
      this.setState({loading : true}); // ????????????????????????????????????????????
      this.updatePerson();
    }
  }

  updatePerson = () => { 
    const { itemId, getData, getImageUrl } = this.props;
    
    if(!itemId) { 
      return;
    }

    getData(itemId)
        .then((itemData) => { 
          this.setState({
            itemData,
            loading : false,
            image : getImageUrl(itemData)
        });
      });
  }

  render() {

    if(!this.state.itemData) { 
      return <span>Please, select a person!</span>;
    }

    if(this.state.loading) { 
      return (
        <div className="loader-container">
          <Loader />
        </div>
      );
    }
    const { itemData, image } = this.state;  
    const { name } = itemData;
  
    return (
      <div className="item-details card">
        <img className="item-image"
          src={ image } alt={name} title={name}/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
           {
             React.Children.map(this.props.children, (item) => React.cloneElement(item, { itemData }))
           }
          </ul>
        </div>
      </div>
    )
  }
}