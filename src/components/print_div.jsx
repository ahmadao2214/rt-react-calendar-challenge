import React, { Component } from 'react';

class PrintDiv extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e =>{
    alert(e.currentTarget.textContent.substring(0,4));
  };

  render(){
    return(
      <div>
        <PrintDivItem
          className="print-div print-div-1"
          onClick={this.handleClick}
        >
          Div1
          <PrintDivItem
            className="print-div print-div-2"
            onClick={this.handleClick}
          >
            Div2
            <PrintDivItem
              className="print-div print-div-3"
              onClick={this.handleClick}
            >
              Div3
            </PrintDivItem>
          </PrintDivItem>
        </PrintDivItem>
      </div>
    );
  }
}

class PrintDivItem extends Component {
  constructor(){
        super();
        this.state = {
             color_selected: true
        }
   }

  handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({color_selected: !this.state.color_selected})
    this.props.onClick(e);
  }

  render(){
    let bgColor = this.state.color_selected ? "#ccc" : "orange"

    return(
      <div
        style={{backgroundColor: bgColor}}
        className={this.props.className}
        onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}

export default PrintDiv;
