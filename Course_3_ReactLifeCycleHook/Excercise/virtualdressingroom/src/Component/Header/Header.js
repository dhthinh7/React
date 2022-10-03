import React from "react";

export default function Header() {
  return <div>
    <div className="row">
      <div className="header col-sm-12">
        <div className="card">
          <div className="text-center">
            <img src={'assets/images/cybersoft.png'} alt="Card images" />
          </div>
          <div className="card-body">
            <h4 className="card-title text-center">
              CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến - Virtual Dressing Room
            </h4>
            <h5 style={{color: 'red'}}>Hỏi: Phần React class component: Khi dispatch handlePush (nhấn nút) thì có this.props.showProduct nhận được giá trị từ reducer mà sao hàm render không tự động render lại thế? Mentor check giúp em với. Thank you!
            </h5>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>;
}
