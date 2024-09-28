import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      name: "Chandkaurati",
      count: 0,
      products: [],
      loading : true,
      error : ""
    };
    this.timerId = null
    this.increment = this.increment.bind(this);
    this.getProducts = this.getProducts.bind(this)
  }

  increment() {
    this.setState((prevstate) => ({
      count: prevstate.count + 1,
    }));
  }

  componentDidMount() {
    console.log("compoanant mounted");
    // this.getData();
  //  this.timerId =  setInterval(() => {
  //     console.log("hi")
  //   }, 1000);
    
    this.getProducts()
  }

  componentDidUpdate() {
    console.log("componnant updaated");
  }

  componentWillUnmount() {
    console.log("componant has been unmounted");
    clearInterval(this.timerId)
  }


  async getProducts() {

       try {
         const responce = await fetch("https://dummyjson.com/products/categories")
         const data = await responce.json()
         this.setState({
          products : data,
          loading: false
         })
       } catch (error) {
        this.setState({
          error: error?.message,
          loading : false
        })
       }
  }

  render() {
    return (
      <div>
        {console.log("render")}
        <p>hi {this.state.name}</p>
        <p>count : {this.state.count}</p>
        <p>{this.state.loading ? "loading...." : "products loaded "}</p>
        <button onClick={this.increment}>incremnt</button>
      </div>
    );
  }
}
