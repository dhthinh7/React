import React, { Component } from 'react'
import Banner from './Banner'
import ItemBody from './ItemBody'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <div>
          <ItemBody/>
        </div>
      </div>
    )
  }
}
