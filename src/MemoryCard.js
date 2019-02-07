import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component{
    constructor(){
        super();
        this.state = {isFlipped:false};
    }

    clickHandler(){
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    render(){
        let memoryCardInnerClass = "MemoryCardInner";
        if(this.state.isFlipped){
            memoryCardInnerClass += ' flipped';
        }

        return (
            <div className='MemoryCard' onClick={this.clickHandler.bind(this)}>
                <div className = {memoryCardInnerClass}>
                    <div className='MemoryCardBack'>
                        <img src="https://orig00.deviantart.net/f733/f/2018/150/0/b/panda_kopanda_folder_icon_001_by_laylachan1993-dcczxyb.png" alt='pandacopanda'/>
                    </div>
                    <div className='MemoryCardFront'>
                    ∆
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;