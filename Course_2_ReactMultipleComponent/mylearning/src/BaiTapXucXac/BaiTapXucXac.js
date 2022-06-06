import React, { Component } from "react";
import './style.scss';
import ThongTinGame from "./ThongTinGame";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class BaiTapXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-tittle">Bài tập game xuc xac</div>
        <div className="row game-row">
          <div className="col-4">
            <button onClick={()=>this.props.datCuoc(true)}>TÀI</button>
          </div>
          <div className="col-4 game-xucXac">
            <XucXac/>
          </div>
          <div className="col-4">
            <button onClick={()=>this.props.datCuoc(false)}>XỈU</button>
          </div>
        </div>
        <div className="game-information">
          <ThongTinGame/>
          <button className="btn btn-success game-play" onClick={()=>{this.props.playGame()}}>Play</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
    datCuoc: (taiXiu) => {
      let action = {
        type: 'DAC_CUOC',
        taiXiu
      }
      // gửi dữ liệu lên reducer
      dispatch(action);
    },
    playGame: () => {
      dispatch ({
        type: 'PLAY_GAME'
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(BaiTapXucXac);
