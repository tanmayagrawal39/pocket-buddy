



import React, { Component } from 'react';
import ShowBill from './ShowBill';
import Map from "./Map";


class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cheapestDeal: {
        items: [
          { name: 'Item 1', price: 5 },
          { name: 'Item 2', price: 3 },
          { name: 'Item 3', price: 2 },
        ],
        price: 10,
      },
      nearestStore: {
        items: [
          { name: 'Item 1', price: 6 },
          { name: 'Item 2', price: 4 },
          { name: 'Item 3', price: 2 },
        ],
        price: 12,
      },
      displayCheapestDeal: false,
      displayNearestStore: false,
    };
  }

  handleCheapestDealClick = () => {
    this.setState({ displayCheapestDeal: true, displayNearestStore: false });
  };

  handleNearestStoreClick = () => {
    this.setState({ displayCheapestDeal: false, displayNearestStore: true });
  };

  render() {
    const { cheapestDeal, nearestStore, displayCheapestDeal, displayNearestStore } = this.state;
  
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'lightcyan', height: 100 }}>
            <h1>Checkout screen</h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 50, border: '1px solid #ddd',width:'50%' }}>
            <h2 style={{ marginLeft: 20, marginRight: 20 }}>Cheapest Deal</h2>
            <p style={{ fontSize: 18, marginLeft: 20, marginRight: 20 }}>Store A</p>
            <p style={{ fontSize: 18, marginLeft: 20, marginRight: 50 }}>Price 10 $</p>
            <button style={{ marginTop: 15, height: 40, width: 100 }} onClick={this.handleCheapestDealClick}>
              View bill
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: 50, border: '1px solid #ddd',width:'50%' }}>
            <h2 style={{ marginLeft: 20, marginRight: 20 }}>Nearest Store</h2>
            <p style={{ fontSize: 18, marginLeft: 20, marginRight: 20 }}>Store B</p>
            <p style={{ fontSize: 18, marginLeft: 20, marginRight: 50 }}>Price 12 $</p>
            <button style={{ marginTop: 15, height: 40, width: 100 }} onClick={this.handleNearestStoreClick}>
              View bill
            </button>
          </div>
        </div>
        <div>
      <Map />
    </div>
        {displayCheapestDeal && <div style={{ position: 'absolute', top: 150, left: 800,border: '1px solid #ddd',width:'50%' }}> <ShowBill cheapestDeal={cheapestDeal} nearestStore={nearestStore} displayCheapestDeal /> </div>}
        {displayNearestStore && <div style={{ position: 'absolute', top: 150, left: 800,border: '1px solid #ddd',width:'50%' }}> <ShowBill cheapestDeal={cheapestDeal} nearestStore={nearestStore} displayNearestStore /> </div>}
      </div>
    );
  }
  
}

export default Checkout;
