import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {

  render() {
    let memoryCardInnerClass = "MemoryCardInner";
    if (this.props.isFlipped) {
      memoryCardInnerClass += " flipped";
    }

    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={memoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img
              src="https://orig00.deviantart.net/f733/f/2018/150/0/b/panda_kopanda_folder_icon_001_by_laylachan1993-dcczxyb.png"
              alt="pandacopanda"
            />
          </div>
          <div className="MemoryCardFront">{this.props.symbol}</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
