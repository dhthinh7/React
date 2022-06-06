import React, { Component } from 'react'
import {connect} from 'react-redux';
class XucXac extends Component {
    
    renderXucXac = ()=> {
        let {mangXucXac} = this.props;
        //Lấy props từ reducer về
        return mangXucXac.map((xucXac,index)=>{
            return  <img key={index} className="ml-2" style={{width:70,height:70}} src={xucXac.hinhAnh} alt={xucXac.hinhAnh}/>
        })
    }

    demNut = () => {
        let {mangXucXac} = this.props;
        let nutCount = 0;
        mangXucXac.map((xucXac, index)=>{
            nutCount += xucXac.ma
        })
        console.log(nutCount);

        return nutCount;
    }
    render() {

        return (
            <div>
               {this.renderXucXac()}
               <div>Số nút: {this.demNut()}</div>
            </div>
        )
    }
}

//Hàm lấy state từ redux về thành props của component
const mapStateToProps = state => {
    return {
        mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac)