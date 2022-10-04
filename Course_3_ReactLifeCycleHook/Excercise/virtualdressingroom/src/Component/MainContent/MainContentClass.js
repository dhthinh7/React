import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_DATA_JSON, GET_PRODUCT } from "../../redux/action/Action";
import { baseServices } from "../../Service/GetDataJson";

class MainContentClass extends Component {

  componentDidMount(prevProps, prevState) {
    this.props.getData(baseServices.getDataJson())
  }

  handleClick = (itemChild) => {
    this.props.handlePush(itemChild);

    // idenRef.current = idenRef.current !== itemChild.id ? itemChild.id : idenRef.current;
    let idenRef = 1;

    let effect1 = `@keyframes animation${idenRef.current} {
      0% {
        border-radius: 100%;
        transform: translateY(-50%);
        opacity: 0;
      }
      30% {
        border-radius: 100%;
      }
      50% {
        opacity: 0;
        border-radius: 60%;
      }
      85% {
        opacity: 0.2;
        border-radius: 80%;
      }
      100% {
        opacity: 1;
      }
    }`

    let keyAnimation = ''
    switch (itemChild.type) {
      case 'topclothes':
        keyAnimation = `0% {
          transform: translateY(-50%) scale(0.05) rotate(0deg);
        }
  
        100% {
          transform: translateY(0) scale(0.5) rotate(360deg);
        }`
        break;
      case 'botclothes':
        keyAnimation = `0% {
          transform: translateY(10%) scale(0.5);
            opacity: 0;
          }
          25% {
            opacity: 0.7;
          }
          50% {
            transform: translateY(-1%) scale(0.5);
            opacity: 0.5;
          }
    
          100% {
            transform: translateY(0) scale(0.5);
            opacity: 1;
          }`
        break;
      case 'handbags':
        keyAnimation = `0% {
            transform: translateY(10%) scale(0.5);
              opacity: 0;
            }
            25% {
              transform: translateY(-3%) scale(0.5);
              opacity: 1;
            }
      
            100% {
              opacity: 1;
            }`
        break;
      default:
        keyAnimation = `0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }`
        break;
    }

    let effect2 = `@keyframes animation${this.props.showProduct[itemChild.type]?.id}${this.props.showProduct[itemChild.type]?.type} {${keyAnimation}}`

    // this.keyframe.current = { effect1: effect1, effect2: effect2 }
  }

  renderNavlink = () => {
    let { navPills } = this.props.dataJson;
    return <ul className="nav nav-pills">
      {navPills && navPills.map((item, index) => {
        return <li className="nav-item" key={index}>
          <a className="nav-link  btn-default" data-toggle="pill" href={"#" + item.tabName}>{item.showName}</a>
        </li>
      })}
    </ul>
  }
  renderContentTabpane = () => {
    let { navPills, tabPanes } = this.props.dataJson;
    console.log("navPills", navPills)
    return navPills && navPills.map((itemNav, index) => {
      let classTabPane = `tab-pane container ${itemNav.tabName === "tabTopClothes" ? "active" : ""}`
      return <div className={classTabPane} id={itemNav.tabName} key={index}>
        <div className="container">
          <div className="row">
            {tabPanes.filter(itemTab => itemTab.type === itemNav.type).map((itemChild, index) => {
              return <div className="col-md-3" key={index}>
                <div className="card text-center">
                  <img src={itemChild.imgSrc_jpg} alt={itemChild.desc} style={{ animation: `${this.props.idenRef === itemChild.id ? `animation${this.props.idenRef.current}` : ''} .7s cubic-bezier(0.02, 0.31, 0.24, 0.78)` }} />
                  <h4><b>{itemChild.name}</b></h4>
                  <button onClick={() => this.handleClick(itemChild)}>Thử đồ</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    })
  }
  render() {
    let {showProduct} = this.props
    console.log("showProduct render", showProduct);
    return <div>
      {/* <style>{this.keyframe.effect1}</style>
      <style>{this.keyframe.effect2}</style> */}
      <div className="row">
        <div className="col-md-8">
          {this.renderNavlink()}
          <div className="well">
            {/* Tab pane */}
            <div className="tab-content">
              {this.renderContentTabpane()}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contain" >
            <div className="body" />  {/* Done */}
            <div className="model" /> {/* Done */}
            <div className="hairstyle" style={{ background: `url(${showProduct.hairstyle?.imgSrc_png})`, animation: `animation${showProduct.hairstyle?.id}${showProduct.hairstyle?.type} .2s 3` }} /> {/* On */}
            <div className="topClothes" style={{ background: `url(${this.props.showProduct.topclothes?.imgSrc_png})`, animation: `animation${showProduct.topclothes?.id}${showProduct.topclothes?.type} 1s cubic-bezier(0.73, -0.11, 0.73, 0.66)` }} /> {/* On */}
            <div className="botclothes" style={{ background: `url(${showProduct.botclothes?.imgSrc_png})`, animation: `animation${showProduct.botclothes?.id}${showProduct.botclothes?.type} 1s` }} /> {/* On */}
            <div className="necklace" style={{ background: `url(${showProduct.necklaces?.imgSrc_png})`, animation: `animation${showProduct.necklaces?.id}${showProduct.necklaces?.type} .5s 3` }} /> {/* On */}
            <div className="bikinitop" /> {/* Done */}
            <div className="bikinibottom" /> {/* Done */}
            <div className="handbags" style={{ background: `url(${showProduct.handbags?.imgSrc_png})`, animation: `animation${showProduct.handbags?.id}${showProduct.handbags?.type} 1s` }} /> {/* On */}
            <div className="feet" style={{ background: `url(${showProduct.shoes?.imgSrc_png})` }} />
            <div className="background" style={{ backgroundImage: `url(${showProduct.background.imgSrc_png})`, animation: `animation${showProduct.background?.id}${showProduct.background?.type} .7s cubic-bezier(0.42, 0, 0.34, 1.7)` }} /> {/* Done */}
          </div>
        </div>
      </div>
    </div>;
  }
}

const mapStateToProps = state => {
  console.log("showProduct", state.DataJsonReducer.showProduct)
  return {
    dataJson : state.DataJsonReducer.dataJson,
    showProduct: state.DataJsonReducer.showProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
    handlePush: (showProduct) => {
      let action = {
        type: GET_PRODUCT, 
        showProduct
      }
      // gửi dữ liệu lên reducer
      dispatch(action);
    },
    getData: (dataJson) => {
      dispatch ({
        type: GET_DATA_JSON,
        dataJson
      })
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentClass);
