import React, { Component } from "react";
import Slider from "@material-ui/lab/Slider";
import Icon from '@material-ui/core/Icon';

class ManualDeskControls extends Component {
  state = {
    standing: 0,
    sitting: 0,
  }
  handleChange = (type, value) => {
    this.setState({
        [type]: value
    })
  }
  onDragEnd = () => {

  }
  render() {
    const { handleChange } = this;
    const { onDeskPress, togglePower,onDeskRelease, toggleDoNotDistrub, settings = { power: "on" } } = this.props;
    const { power } = settings;
    const toggle = power === "on" ? "off" : "on";

    return (
      <div className="root">
        <section className="time-intervals">
          <div className="standing">
            <div className="another">
                <Slider value={this.state.standing} step={15} min={0} max={1440} vertical={true} onChange={(e, value) => handleChange("standing", value)} onDragEnd={() => this.onDragEnd("standing")}/>
            </div>
            <Icon className="material-icons slider-icon standing-icon">accessibility_new</Icon>
          </div>
          <div className="sitting">
            <div className="another">
                <Slider value={this.state.sitting} step={5} min={0} max={1440} vertical={true} onChange={(e, value) => handleChange("sitting", value)} onDragEnd={() => this.onDragEnd("sitting")} />
            </div>
            <Icon className="material-icons slider-icon chair"><img src="images/chair.svg"/></Icon>
          </div>
        </section>
        <section className="buttons">
          <button className="up" onMouseDown={() => onDeskPress("up")} onMouseUp={onDeskRelease}>
            <Icon>keyboard_arrow_up</Icon>
          </button>
          <button className="down" onMouseDown={() => onDeskPress("down")} onMouseUp={onDeskRelease}>
            <Icon>keyboard_arrow_down</Icon>
          </button>
          <button className="power" onClick={() => togglePower(toggle)}>
            <Icon>power</Icon>
          </button>
        </section>
        <style jsx>{`
          .root {
            width: 100%;
            display: flex;
            justify-content: space-around;
          }
          .buttons {
            display: flex;
            flex-direction: column;
            width: 50%;
          }
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            outline: none;
            border-radius: 50%;
            margin: 5px 0;
            padding: 0;
            width: 40px;
            height: 40px;
          }
          .time-intervals {
            display: flex;
            justify-content: space-evenly;
            width: 50%;
          }
          .standing,
          .sitting {
            height: 200px;
            position: relative;
            width: 0px;
          }
          .another {
              height: 100%;
          }
          .slider-icon {
            position: absolute;
            bottom: -50px;
            left: -19px;
            width: 35px;
            height: 35px;
          }
          .standing-icon {
              font-size: 40px;
          }
          .sitting :global(.material-icons),.standing :global(.material-icons){
            position: absolute;
            bottom: -35px;
            left: -11px;
          }
        `}</style>
      </div>
    );
  }
}

export default ManualDeskControls;
