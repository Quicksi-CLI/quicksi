import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string
};

export default Header;
