import React from 'react';
import PropTypes from 'prop-types';
import SizeItem from './SizeItem';

const SizeList = props => {
  const { sizes } = props;
  return sizes.map((size, i) => <SizeItem key={i} size={size} />);
};

SizeList.propTypes = {
  sizes: PropTypes.array.isRequired,
};

export default SizeList;
