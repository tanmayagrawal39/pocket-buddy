

import React, { Component } from 'react';

class ShowBill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cheapestDeal, nearestStore, displayCheapestDeal, displayNearestStore } = this.props;

    let items = [];
    let totalPrice = 0;

    if (displayCheapestDeal) {
      items = cheapestDeal.items;
      totalPrice = cheapestDeal.price;
    } else if (displayNearestStore) {
      items = nearestStore.items;
      totalPrice = nearestStore.price;
    } else {
      items = [...cheapestDeal.items, ...nearestStore.items];
      totalPrice = cheapestDeal.price + nearestStore.price;
    }

    return (
      <div style={{ marginLeft: 20 }}>
        <h2>Bill Details</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th style={{paddingLeft:30}}>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td style={{paddingLeft:30}}>{item.price} $</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total Price: {totalPrice} $</h3>
      </div>
    );
  }
}

export default ShowBill;
