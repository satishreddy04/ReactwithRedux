// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/components/_cryptoApp.scss';

// IMPORT PROJECT REFERENCES
import CryptoDetails from '../CryptoCurrecyFiles/cryptoDetails';
import CryptoInbox from '../CryptoCurrecyFiles/CryptoInbox';
import { fetchCryptoCurrencyData,fetchDataByID } from '../../components/state/actions/CryptoAppActions';

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
	}
getIdFromChild = (dataFromCryptoInbox) =>{
				 console.log(dataFromCryptoInbox);

				  this.props.fetchDataByID(dataFromCryptoInbox);
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
						{this.props.cryptodata.fetched && <CryptoInbox crypto={this.props.cryptodata.cryptoData}
						getId={this.getIdFromChild} />}
					</div>
					<div className="col-sm-7 col-md-8 inbox-details">
						<CryptoDetails crypto={this.props.cryptodata.Detailpage} />
					</div>
				</div>
			</div>
		);
	}
};

CryptoMainContainer.propTypes = {
	// fetchZipCodes: PropTypes.func.isRequired,
	fetched: PropTypes.bool.isRequired,
	Fetching: PropTypes.bool.isRequired,
	failed: PropTypes.bool,
	cryptoData: PropTypes.array.isRequired
};


// CONFIGURE REACT REDUX
const mapStateToProps = state => {
	console.log(state);
	return {
		cryptodata: state.crytpodata
	};
};
const mapDispatchToProps = dispatch => bindActionCreators({ fetchCryptoCurrencyData,fetchDataByID }, dispatch);

const hoc = connect(mapStateToProps, mapDispatchToProps)(CryptoMainContainer);

// EXPORT COMPONENT
export { hoc as CryptoMainContainer };

// export default connect(mapDispatchToProps,{fetchCryptoCurrencyData})(CryptoMainContainer);
