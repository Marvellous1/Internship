import React, { Component } from "react";

class Order extends Component {
  render() {
    const { items, restaurant, user } = this.props.data;
    let subtotal = 0;
    let totaltax = 0;
    let total = 0;
    items &&
      items.map(
        (item) => (
          (subtotal += item.price * item.quantity),
          (totaltax += (item.tax_pct * item.price) / 100),
          (total = subtotal + totaltax)
        )
      );
    return (
      <div className="container page-bg">
        {this.props.data && (
          <div className="row ">
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="h5 mb-3">Order History</div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">S/N</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => {
                        return (
                          <tr key={item.name}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td className="text-primary">
                              <b>
                                {item.currency}
                                {item.price}
                              </b>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="h5">Cart</div>
                  <p>
                    Sub-Total
                    <span className="float-right">
                      <b>INR{subtotal}.00</b>
                    </span>
                  </p>
                  <p>
                    Tax
                    <span className="float-right">
                      <b>INR{totaltax}</b>
                    </span>
                  </p>
                  <p>
                    {" "}
                    <b>
                      Gross Price
                      <span className="float-right">INR{total}</span>
                    </b>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="h5">Transaction Detail</div>

                  <h6>Restaurant- {restaurant.name}</h6>

                  <small>
                    {restaurant.street}, {restaurant.city}, {restaurant.state},{" "}
                    {restaurant.zipcode}
                  </small>

                  <h6 className="mt-4">Customer- {user.name}</h6>
                  <small> {user.address}</small>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        )}{" "}
      </div>
    );
  }
}

export default Order;
