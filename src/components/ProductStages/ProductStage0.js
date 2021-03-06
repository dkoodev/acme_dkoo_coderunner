// Modules
import React, { Component } from 'react';
import QRCode from 'qrcode.react';

// Contexts
import {withStageContext, StageContext} from '../Contexts/StageContext';
import {withAnimationsContext, AnimationsContext} from '../Contexts/AnimationsContext';
import {withQRCodeAPIContext, QRCodeAPIContext} from '../Contexts/QRCodeAPIContext';

// Components
import NextButton from '../NextButton';

class ProductStage0 extends React.Component {
  constructor(){
    super();
  }

  render() {
    let qrcodeComponentValue = this.props.qrcodeAPIContext.qrcodeInfo.message;
    return (
      <div id="ProductStage0" className={"animated "} >
        <div id="qrcode-container-wrapper" >
          <div id="qrcode-container" className="box" >
              <QRCode value={qrcodeComponentValue} style={{  width:"100%", height:"100%", margin:"auto" }} renderAs="svg" size={300} />
          </div>
          <NextButton />
        </div>
      </div>
    );
  }
}

export default  withAnimationsContext(
                withStageContext(
                withQRCodeAPIContext(
                  ProductStage0
                )));
