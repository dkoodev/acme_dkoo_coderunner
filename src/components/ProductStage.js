// CSS
import '../assets/css/styles.css';

// Modules
import React, { Component } from 'react';
import QRCode from 'qrcode.react';

// Components
import * as ProductStages from './ProductStages/';

// Contexts
import {withStageContext, StageContext} from './Contexts/StageContext';
import {withAnimationsContext, AnimationsContext} from './Contexts/AnimationsContext';
import {withQRCodeAPIContext, QRCodeAPIContext} from './Contexts/QRCodeAPIContext';


class ProductStage extends React.Component {
  constructor(){
    super();
  }


  render() {
    let ProductStageForCurrentStage;
    switch (this.props.stage) {
      case 0:
        ProductStageForCurrentStage = ProductStages.ProductStage0;
        break;
      case 1:
        ProductStageForCurrentStage = ProductStages.ProductStage1;
        break;
      default:
        ProductStageForCurrentStage = ProductStages.ProductStage0;
    }
    ProductStageForCurrentStage = withAnimationsContext(
                                  withStageContext(
                                  withQRCodeAPIContext(
                                    ProductStageForCurrentStage
                                  )));
    return (
      <div id="ProductStage" className={ "stage" + this.props.stage} >
        {this.props.stage == 0 && <ProductStages.ProductStage0 /> }
        {this.props.stage == 1 && <ProductStages.ProductStage1 />}

      </div>
    );
  }
}

export default  withAnimationsContext(
                withStageContext(
                withQRCodeAPIContext(
                  ProductStage
                )));
