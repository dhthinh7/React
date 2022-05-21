import React, { Component } from 'react'
import './styleGlasses.css'
import dataGlasses from '../Data/dataGlasses.json';

export default class TryGlassesOn extends Component {
  renderGlassesList = () => {
    return dataGlasses.map((glassesItem, index) => {
      return <img onClick={()=>{this.changGlasses(glassesItem)}} className='ml-2 p-2 border border-width-1' key={index} style={{ width: '100px', cursor: 'pointer' }} src={glassesItem.url} alt="img"/>
    })
  }

  // Define state 
  state = {
    glassesCurrent: {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with another of pearl effect tip. "
    }
  }

  // state is changed when 
  changGlasses = (newGlasses)=>{
    this.setState({
      glassesCurrent: newGlasses
    })
  }


  render() {
    /* Define animation */
    const keyframesUpdown = `@keyframes updownanimation${Date.now()} {
      from{
        transform: translateY(-100px) rotate(360deg);
      }
      to {
        transform: translateY(0);
      }
    }`

    const keyframes = `@keyframes animationGlasses${Date.now()} {
      from {
        // width: 0;
        transform: translateY(-100px) rotate(560deg);
      }
      to {
        // width: 150px;
        transform: translateY(0) rotate(0);
      }`
      

    const styleGlasses = {
      width: '150px',
      top: '66px',
      right: '69px',
      opacity: '0.8',
      animation: `animationGlasses${Date.now()} 1s`
    }

    const infoGlasses = {
      width: '250px',
      top: '200px',
      left: '270px',
      paddingLeft: '15px',
      backgroundColor: 'rgba(255,127,0,.5)',
      textAlign: 'left',
      height: '105px',
      animation: `updownanimation${Date.now()} 1s`
    }

    
    return (
      <div>
        <style>
          {[keyframesUpdown, keyframes]}
        </style>
        <h3 className='name text-center'>Doan Hoang Thinh</h3>
        {/* <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: '2000px', minHeight: '2000px' }}> */}
        <div className='background'>
          <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '2000px' }}>
            <h3 style={{ backgroundColor: 'rgba(0, 0 ,0,.3)' }} className="text-center text-light p-3">TRY GLASSES APP ONLINE</h3>
            <div className="container">
              <div className="row mt-5 text-center">
                <div className="col-6">
                  <div className="position-relative">
                    <img className="position-absolute" style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />
                    <img style={styleGlasses} className="position-absolute" src={this.state.glassesCurrent.url} alt='v1' />
                    <div style={infoGlasses} className="position-relative">
                      <span style={{ color: '#AB82FF', fontSize: '17px'}} className="font-weight-bold">{this.state.glassesCurrent.name}</span> <br />
                      <span style={{ fontSize: '14px', paddingRight: '5px', fontWeight: '400' }}>{this.state.glassesCurrent.desc}</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt='model.jpg' />

                </div>
              </div>
            </div>
            {/* Div chứa các kính được chọn */}
            <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
              {this.renderGlassesList()}
            </div>
          </div>
        </div >
      </div>
    )
  }
}

