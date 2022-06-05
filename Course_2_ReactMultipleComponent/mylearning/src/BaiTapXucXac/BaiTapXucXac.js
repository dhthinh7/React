import React, { Component } from "react";
import './style.scss';
import ThongTinGame from "./ThongTinGame";
import XucXac from "./XucXac";

export default class BaiTapXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-tittle">Bài tập game xuc xac</div>
        <div className="row game-row">
          <div className="col-4">
            <button>TÀI</button>
          </div>
          <div className="col-4 game-xucXac">
            <XucXac/>
          </div>
          <div className="col-4">
            <button>XỈU</button>
          </div>
        </div>
        <div className="game-information">
          <ThongTinGame/>
          <button className="btn btn-success game-play">Play</button>
        </div>
      </div>
    );
  }
}
