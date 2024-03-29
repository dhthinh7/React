import React, { Component } from 'react'
import _ from 'lodash'
export default class ChildComponent extends Component {

    //Được gọi khi component này được sử dụng trên DOM (giao diện của app)
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps_child')
        return null;
    }

    shouldComponentUpdate(newProps, newState) {

        console.log('newProps',newProps);
        console.log('this.props',this.props)

        if (!_.isEqual(newProps, this.props)) {
            return true;
        }
        return false;
    }

    render() {
        console.log('renderChildComponent');
        return (
            <div>
                <h3>new Product child: {this.props.product.name}</h3>

                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount_child')
    }

    
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}
