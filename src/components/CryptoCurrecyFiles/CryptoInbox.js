import React, { Component } from 'react';
import '../../styles/components/_cryptoApp.scss';
import { images } from '../../utils/coinIcons';
class CryptoInbox extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		var data = this.props.crypto;
		var listItems = data.map(function(data) {
			return (
				<li class="list-group-item list-group-item-action" key={data.id} data-key={data.id}>
					<div data-key={data.id} className="listDiv">
						{data.name} <span>({data.symbol})</span>
					</div>
				</li>
			);
		});

		return (
			<div class="list-items">
				<ul className="list-group">{listItems}</ul>
			</div>
		);
	}
}

export default CryptoInbox;
