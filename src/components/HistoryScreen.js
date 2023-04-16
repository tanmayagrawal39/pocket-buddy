



import React from "react";

class Historyscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastOrders: [
        {
          orderid: 1,
          itemsOrdered: [
            {
              name: "product1",
              quantity: 2,
            },
            {
              name: "product2",
              quantity: 3,
            },
            {
              name: "product3",
              quantity: 3,
            },
          ],
        },
        {
          orderid: 2,
          itemsOrdered: [
            {
              name: "product 4",
              quantity: 2,
            },
            {
              name: "product 5",
              quantity: 3,
            },
            {
              name: "product 6",
              quantity: 3,
            },
          ],
        },
      ],
    };
  }

  handleReorder(order) {
    // handle reorder action
    console.log("Reordering:", order);
  }

  render() {
    const cardStyle = {
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    };

    const buttonStyle = {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "5px 10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "150px",
      height: "40px",

    };

    return (
      <div>
        <h2 style={{marginBottom:50}}>History page</h2>
        {this.state.pastOrders.map((order) => (
          <div key={order.orderid} style={cardStyle}>
            <h3>Order #{order.orderid}</h3>
            <ul>
              {order.itemsOrdered.map((item) => (
                <li key={item.name}>
                  {item.name} - {item.quantity}
                </li>
              ))}
            </ul>
            <button
              onClick={() => this.handleReorder(order)}
              style={{ ...buttonStyle, alignSelf: "center" }}
            >
              Reorder
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Historyscreen;
