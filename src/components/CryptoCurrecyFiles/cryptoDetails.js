import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class CryptoDetails extends Component {
    constructor(props, context) {
        super(props, context);
     const detailsData = this.props.crypto;  
    }
    
    render() {
        const detailsData = this.props.crypto; 

        if(detailsData.length>0){
        return (
            <div>
                <div>
                    <h1>crypto Details</h1>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <strong>Hi, Please select a crypto coin from inbox  to dispaly the details</strong> 
            </div>
        )
    }
    }
}

export default CryptoDetails;