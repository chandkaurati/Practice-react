import React, { Component } from "react";

const students = [
  {
    id: "12",
    name: "chand",
    email: "chandkaurati@gmal.com",
  },
  {
    id: "32",
    name: "rohit",
    email: "rohitr@gmal.com",
  },
  {
    id: "43",
    name: "aarav",
    email: "aaraA@gmal.com",
  },
  {
    id: "15",
    name: "rohan",
    email: "rohanr@gmal.com",
  },
];
export default class MuFirstClassComponant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classStudents: students,
      marks: [76, 67, 90, , 98],
      name: "",
      isShow: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumit = this.handleSumit.bind(this);
    this.handleSohow = this.handleSohow.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSumit() {
    alert("your form has been submited" + "  " + this.state.name);
  }

  handleSohow() {
    this.setState({ isShow: !this.state.isShow });
  }

  componentDidMount() {
    console.log("compoant has been mounted");
  }

  componentDidUpdate(){
     console.log("updated")
  }
  render() {
    return (
      <div>
        MuFirstClassComponant
        <div>
          <p>studendta</p>
          {this.state.classStudents.map((stu, i) => {
            return (
              <div key={stu.id}>
                <p>{stu.name}</p>
                <p>marks {this.state.marks[0]}</p>
                <p>{stu.email}</p>
              </div>
            );
          })}
        </div>
        <p>{this.props.name} k</p>
        <input
          type="text"
          placeholder="enter a value"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button style={{ margin: "5px" }} onClick={this.handleSumit}>
          submit
        </button>
        <p>{this.state.isShow ? "hey this is rednerd" : "false"}</p>
        {<button onClick={this.handleSohow}>show</button>}
      </div>
    );
  }
}
