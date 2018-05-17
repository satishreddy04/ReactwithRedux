// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/components/_cryptoApp.scss';

// IMPORT PROJECT REFERENCES
import CryptoDetails from '../CryptoCurrecyFiles/cryptoDetails';
import CryptoInbox from '../CryptoCurrecyFiles/CryptoInbox';
import { fetchCryptoCurrencyData } from '../../components/state/actions/CryptoAppActions';

import { fetchZipCodes } from '../state/actions/ZipCodeActions';
// import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
//import { Error } from '../shared/Error/Error';

// COMPONENT
const LoadingIndicator = props => (
	<div>
		{props.busy && (
			<div>
				<i className="fa fa-spinner fa-spin fa-4x fa-fw" />
			</div>
		)}
	</div>
);
class CryptoMainContainer extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.cryptodata.fetched);
	}

	componentDidMount() {
		this.props.fetchCryptoCurrencyData();
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-sm-5 col-md-4 inbox">
						<LoadingIndicator busy={this.props.cryptodata.Fetching} />
						{this.props.cryptodata.fetched && <CryptoInbox crypto={this.props.cryptodata.cryptoData} />}
					</div>
					<div className="col-sm-7 col-md-8 inbox-details">
						<CryptoDetails />
						{this.props.fetched}
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
	Fetching: PropTypes.bool.isRequired,
	failed: PropTypes.bool,
	cryptoData: PropTypes.array.isRequired
};

// function mapStateToProps(state){
//     return {
//         crypto:state.crypto
//     }
// }

// CONFIGURE REACT REDUX
const mapStateToProps = state => {
	console.log(state);
	return {
		cryptodata: state.crytpodata
	};
};

// const mapStateToProps = state => {
//      const { Fetching, fetched, failed, cryptoData } = state.cryptodata;

//      return { Fetching, fetched, failed, cryptoData };
// };

const mapDispatchToProps = dispatch => bindActionCreators({ fetchCryptoCurrencyData }, dispatch);

const hoc = connect(mapStateToProps, mapDispatchToProps)(CryptoMainContainer);

// EXPORT COMPONENT
export { hoc as CryptoMainContainer };

// export default connect(mapDispatchToProps,{fetchCryptoCurrencyData})(CryptoMainContainer);
