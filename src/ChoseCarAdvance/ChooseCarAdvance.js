import React, { Component } from "react";
import './ChooseCarAdvance.css';
// Import data 
import dataFeature from '../Data/arrayFeatures.json';
import dataWhell from '../Data/wheels.json';


export default class ChooseCarAdvance extends Component {
  render() {
    return (
      <div>
        <div className="myname text-center p-1 mb-1">Đoàn Hoàng Thịnh</div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-6">
              <div className="model">
                {/* <img src={this.state.carCurrent.img} alt="img" /> */}
                <div className="cloudimage-360" 
                id="gurkha-suv" 
                data-folder={"images/" + this.state.carCurrent.srcImg} 
                data-filename-x="civic-{index}.jpg" 
                data-amount-x={8} 
                data-speed={100}
                // data-lazyload
                data-lazyload-selector={this.state.lozad} 
                >
                </div>
              </div>
              <div className="card text-left">
                <div className="card-header card-header-manual">Exterior color</div>
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Body</p>
                </div>
              </div>
              <table className="table table-manual">
                <tbody>
                  <tr>
                    <th>Color</th>
                    <th>Black</th>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>$10.000</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>Inline-line-4-cylinder</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <div className="card text-left">
                <h5 className="card-header">Exterior color</h5>
                <div className="container-fluid">
                  {this.renderIcon()}
                </div>
              </div>
              <div className="card text-left">
                <h5 className="card-header">Wheel</h5>
                <div className="container-fluid">
                  {this.renderWheel()}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* This div is contain script src from lib */}
        <div className="appendScript appendScriptLozad ScriptText"></div>
      </div>
    )
  }

  // Create state
  state = {
    carCurrent: {
      "id": 1,
      "title": "Crystal Black",
      "type": "Pearl",
      "img": "./images/icons/icon-black.jpg",
      "srcImg": "images-black/images-black-1/",
      "color": "Black",
      "price": "19,550",
      "engineType": "In-Line 4-Cylinder",
      "displacement": "1996 cc",
      "horsepower": "158 @ 6500 rpm",
      "torque": "138 lb-ft @ 4200 rpm",
      "redline": "6700 rpm",
      "wheels": [
        {
          "idWheel": 1,
          "srcImg": "images-black/images-black-1/"
        },
        {
          "idWheel": 2,
          "srcImg": "images-black/images-black-2/"
        },
        {
          "idWheel": 3,
          "srcImg": "images-black/images-black-3/"
        }
      ]
    },
    lozad:"lozad"
  }

  // This function exist in component that is automatically run only 1 time after render is invoked in the first time
  componentDidMount = () => {
    let tagScript = document.createElement('script');
    tagScript.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/3.0.3/js-cloudimage-360-view.min.js"
    document.querySelector('.appendScript').appendChild(tagScript);

  }

  // This function is automatically run after this.setState is invoked
  // Note: Do not setState at this method due to cause infinite loop
  componentDidUpdate = () => {

    document.querySelector('.appendScript').innerHTML = "";
    let tagScript = document.createElement('script');
    let tagScriptLozad = document.createElement('script');
    let script = document.createElement('script');
    // tagScript.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/3.0.3/js-cloudimage-360-view.min.js"
    tagScript.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js";
    tagScriptLozad.src = "https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js?v1.9.0";
    script.innerHTML = "const observer = lozad();observer.observe();";
    // <script src="https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js?v1.9.0"></script>
    document.querySelector('.appendScript').appendChild(tagScript);
    document.querySelector('.appendScriptLozad').appendChild(tagScriptLozad);
    document.querySelector('.ScriptText').appendChild(script);

  }

  changeCar = (newCar) => {
    this.setState({
      carCurrent: newCar,
      lozad:"lozad"
    })
  }

  // Render Icon
  renderIcon = () => {
    return (
      dataFeature.map((item, index) => {
        return <div className="row border m-3 border" key={index}>
          <div className="col-2">
            <img style={{ width: "100%" }} className="p-3" src={item.img} onClick={()=>this.changeCar(item)} alt="img item" />
          </div>
          <div className="col-10">
            <h3 className="p-3">{item.title}</h3>
            <span className="p-3 pt-0 mt-0">{item.type}</span>
          </div>
        </div>
      })
    )
  }

  // Render Wheel
  renderWheel = () => {
    return (
      dataWhell.map((item, index) => {
        return <div className="row border m-3 border" key={index}>
          <div className="col-2">
            <img style={{ width: "100%" }} className="p-3" src={item.img} alt="img item" />
          </div>
          <div className="col-10 d-flex align-items-center">
            <h4 className="p-3">{item.title}</h4>
          </div>
        </div>
      })
    )
  }
}