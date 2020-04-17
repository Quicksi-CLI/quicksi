import PropTypes from 'prop-types';
import React from 'react';

const Footer = (props) => {
	return (
		<footer>
			<div>
				<p>
					<a target="_blank" rel="noopener noreferrer" href={props.href}>{props.title}</a>
				</p>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	href: PropTypes.string,
	title: PropTypes.string
};

export default Footer;
