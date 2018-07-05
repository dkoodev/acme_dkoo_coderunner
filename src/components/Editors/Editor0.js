import React, { Component } from 'react';

// import '../assets/css/styles.css';
// import {StageContext, withStageContext} from './Contexts/StageContext';

class Editor0 extends React.Component {
  constructor(){
    super();
    this.state = {
      iconRightClasses: "is-hidden",
      titleAnimations: "animated",
      spacingAnimations: "spacing ",
      inputControlClasses: "",
      inputStatusClasses: "",
      nextButtonDisplay: "is-hidden",
      textAreaInputValue: "",
    }
  }

  spacingDisappear(){
    this.setState({
      spacingAnimations:  "spacing squish",
    });
  }

  spacingAppear(){
    this.setState({
      spacingAnimations:  "spacing" ,
    });
  }

  loadingWheelAppear(){
    this.setState({
      inputControlClasses: "is-loading" ,
    });
  }

  loadingWheelDisappear(){
    this.setState({
      inputControlClasses: "" ,
    });
  }

  checkIconRightAppear(){
    this.setState({
      iconRightClasses: "",
    });
  }

  checkIconRightDisappear(){
    this.setState({
      iconRightClasses: "is-hidden",
    });
  }

  textAreaGreenAppear(){
    this.setState({
      inputStatusClasses: "is-success",
    });
  }

  textAreaGreenDisappear(){
    this.setState({
      inputStatusClasses: "",
    });
  }

  stage1ButtonAppear(){ this.props.stage1ButtonAppear(); }

  stage1ButtonDisappear(){ this.props.stage1ButtonDisappear(); }

  inputChangeHandler(e){
    let inputValue = e.target.value;

    this.setState({
      textAreaInputValue: inputValue
    });

    this.props.textToConvertJS(inputValue);

    if(inputValue == ""){
      this.spacingAppear();
    }else{
      this.spacingDisappear();
    }

    this.loadingWheelAppear();
    this.checkIconRightDisappear();
    this.textAreaGreenDisappear();
    this.stage1ButtonDisappear();

    // Check if typing stopped for at least 1.5 seconds
    setTimeout(()=>{
      if(inputValue == this.state.textAreaInputValue){
        // Asking for QRcode only when user stops typing for 1.5 seconds
        // this.props.textToConvertAPI(inputValue);
        if(this.state.textAreaInputValue == ""){
          this.checkIconRightDisappear();
          this.textAreaGreenDisappear();
        }else {
          this.checkIconRightAppear();
          this.textAreaGreenAppear();
        }
        this.loadingWheelDisappear();
        this.stage1ButtonAppear();
      }
    }, 1500);
  }

  componentDidMount(){
    let animate = ()=>{
      this.setState((prevState,props)=> {return {
        titleAnimations: prevState.titleAnimations + " bounce",
      }});
    }
    setTimeout(animate, 1000);
  }

  render() {
    return (
      <div>
        <canvas className={this.state.spacingAnimations}></canvas>
        <div className="field" >
            <div className={"title is-2 has-text-grey-dark has-text-centered " + this.state.titleAnimations} >
              Encode a message or a website
            </div>
          <div className={"editor0-textarea control has-icons-left has-icons-right is-large " + this.state.inputControlClasses} >
            <input className={"input is-large is-rounded " + this.state.inputStatusClasses} maxLength="2953" onChange={this.inputChangeHandler.bind(this)} type="text" placeholder="https:// " />
            <span className="icon is-medium is-left">
              <i className="fas fa-qrcode"></i>
            </span>
            <span className={"icon is-medium is-right " + this.state.iconRightClasses}>
              <i className="fas fa-check "></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor0;
