// Ref: https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_JSON, GET_PRODUCT } from "../../redux/action/Action";
import { baseServices } from "../../Service/GetDataJson";
export default function MainContent() {
  const dispatch = useDispatch();
  let { navPills, tabPanes } = useSelector(state => state.DataJsonReducer.dataJson);
  let { showProduct } = useSelector(state => state.DataJsonReducer);


  useEffect(() => {
    dispatch({
      type: GET_DATA_JSON,
      dataJson: baseServices.getDataJson()
    })
  }, [])

  const handleClick = (itemChild) => {
    dispatch({
      type: GET_PRODUCT,
      showProduct: itemChild
    })
  }

  const renderNavlink = () => {
    return <ul className="nav nav-pills">
      {navPills && navPills.map((item, index) => {
        return <li className="nav-item" key={index}>
          <a className="nav-link  btn-default" data-toggle="pill" href={"#" + item.tabName}>{item.showName}</a>
        </li>
      })}
    </ul>
  }

  const renderContentTabpane = () => {
    return navPills && navPills.map((itemNav, index) => {
      let classTabPane = `tab-pane container ${itemNav.tabName === "tabTopClothes" ? "active" : ""}`
      return <div className={classTabPane} id={itemNav.tabName} key={index}>
        <div className="container">
          <div className="row">
            {tabPanes.filter(itemTab => itemTab.type === itemNav.type).map((itemChild, index) => {
              return <div className="col-md-3" key={index}>
                <div className="card text-center">
                  <img src={itemChild.imgSrc_jpg} alt={itemChild.desc} />
                  <h4><b>{itemChild.name}</b></h4>
                  <button onClick={() => handleClick(itemChild)}>Thử đồ</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    })
  }

  return <div>
    <div className="row">
      <div className="col-md-8">
        {renderNavlink()}
        <div className="well">
          {/* Tab pane */}
          <div className="tab-content">
            {renderContentTabpane()}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="contain">
          <div className="body" />  {/* Done */}
          <div className="model" /> {/* Done */}
          <div className="hairstyle" style={{background: `url(${showProduct.hairstyle})`}}/> {/* On */}
          <div className="topClothes" style={{background: `url(${showProduct.topclothes})`}} /> {/* On */}
          <div className="bottomClothes" style={{background: `url(${showProduct.botclothes})`}} /> {/* On */}
          <div className="necklace" style={{background: `url(${showProduct.necklaces})`}} /> {/* On */}
          <div className="bikinitop" /> {/* Done */}
          <div className="bikinibottom" /> {/* Done */}
          <div className="handbag" style={{background: `url(${showProduct.handbags})`}} /> {/* On */}
          <div className="feet" style={{background: `url(${showProduct.shoes})`}}/> {/* On */}
          <div className="background" style={{backgroundImage: `url(${showProduct.background})`}} /> {/* Done */}
        </div>
      </div>
    </div>
  </div>;
}
