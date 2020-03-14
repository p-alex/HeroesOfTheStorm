import React, { Component } from "react";
import "./HeroCard.css";

class HeroCard extends Component {
  state = {
    difficulty: ""
  };
  componentDidMount() {
    console.log(this.props);
    if (
      this.props.complexity === "10%" ||
      this.props.complexity === "20%" ||
      this.props.complexity === "30%" ||
      this.props.complexity === "40%"
    ) {
      this.setState({ difficulty: "Easy" });
    } else if (
      this.props.complexity === "50%" ||
      this.props.complexity === "60%" ||
      this.props.complexity === "70%"
    ) {
      this.setState({ difficulty: "Medium" });
    } else if (
      this.props.complexity === "80%" ||
      this.props.complexity === "90%" ||
      this.props.complexity === "100%"
    ) {
      this.setState({ difficulty: "Hard" });
    }
  }
  render() {
    return (
      <div
        className="HeroCard"
        style={{
          backgroundImage: "/images/HeroesCards/" + `${this.props.imgURL}`
        }}
      >
        <div className="HeroCard-imgname">
          <img src={"/images/HeroesCards/" + this.props.imgURL} />
          <h1>{this.props.name}</h1>
        </div>

        <div className="HeroCard-panel">
          <p>Role</p>
          <p className="panel-stat">{this.props.type}</p>
        </div>
        <div className="HeroCard-panel">
          <p>Difficulty</p>
          <p className="panel-stat">{this.state.difficulty}</p>
        </div>
        <div className="HeroCard-panel">
          <p>Universe</p>
          <p className="panel-stat">{this.props.universe}</p>
        </div>
      </div>
    );
  }
}

export default HeroCard;
