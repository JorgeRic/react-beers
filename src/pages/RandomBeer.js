
import React, { Component } from 'react'
import beerService from '../services/beerService'

class BeerDetail extends Component {
  state={
    beer: null,
  }
  componentDidMount(){
    beerService.getOneRandomBeer()
    .then((response)=>{
      const beer = response.data
      this.setState({
        beer
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  goBack =()=>{
    this.props.history.goBack()
  }

  render() {
    const { beer } = this.state
    return (
      <div>
        <h2>Random Beer</h2>
        {beer ?
        (
            <article className=""> 
            <div className="contenedor">
                <img src ={beer.image_url} alt = {beer.name} />
                <div className="cuadro-centro">
                  <h3>{beer.name}</h3>
                </div>
                {/* <div className="cuadro-centro">
                  <p>{beer.tagline}</p>
                  <p>{beer.first_brewed}</p>
                  <p>{beer.attenuation_level}</p>
                </div> */}
            </div>
            <div className="cuadro-abajo">
              <p>{beer.description}</p>
              <p>{beer.contributed_by}</p>  
            </div>
            </article> 
          ) :<p>Loading ...</p>}    
          <div className="center">
            <button className='' onClick={this.goBack}>Go to previous Page</button>
          </div>    
      </div>
    )
  }
}
export default  BeerDetail
