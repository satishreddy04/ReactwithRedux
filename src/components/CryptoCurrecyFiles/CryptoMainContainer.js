// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import  CryptoDetails  from '../CryptoCurrecyFiles/cryptoDetails';
import  CryptoInbox  from '../CryptoCurrecyFiles/CryptoInbox';
import {fetchCryptoCurrencyData} from '../../components/state/actions/CryptoAppActions'

import { fetchZipCodes } from '../state/actions/ZipCodeActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';


// COMPONENT

class CryptoMainContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCryptoCurrencyData();
       
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 col-md-2">
                       <CryptoInbox />
                    </div>
                    <div className="col-sm-9 col-md-10">
                    <CryptoDetails />
                    </div>


                </div>

               
            </div>
        );
    }
}
// CryptoMainContainer.propTypes = {
//     fetchCryptoCurrencyData: PropTypes.func.isRequired,
//     isFetching: PropTypes.bool.isRequired,
//     hasError: PropTypes.bool.isRequired,
//     errorMessae: PropTypes.bool,
//     cryptoData: PropTypes.array.isRequired
// };


CryptoMainContainer.propTypes = {
    // fetchZipCodes: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    cryptoData: PropTypes.array.isRequired
};

// function mapStateToProps(state){
//     return {
//         crypto:state.crypto
//     }
// }

// CONFIGURE REACT REDUX
const mapStateToProps = (state) => {
    console.log(state.crytpodata)
    return {
     
    };
}

// const mapStateToProps = state => {
//      const { Fetching, fetched, failed, cryptoData } = state.cryptodata;

//      return { Fetching, fetched, failed, cryptoData };
// };

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchCryptoCurrencyData }, dispatch)
);

 const hoc = connect(mapStateToProps, mapDispatchToProps)(CryptoMainContainer);


// EXPORT COMPONENT
export { hoc as CryptoMainContainer };

// export default connect(mapDispatchToProps,{fetchCryptoCurrencyData})(CryptoMainContainer);