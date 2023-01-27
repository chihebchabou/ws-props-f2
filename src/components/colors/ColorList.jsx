import React from 'react';
import PropTypes from 'prop-types';
import ColorItem from './ColorItem';

const ColorList = props => {
  const { colors } = props;
  const colorList = Object.entries(colors);
  return colorList.map(([color, value], i) => (
    <ColorItem key={i} color={color} value={value} />
  ));
};

ColorList.propType = {
  colors: PropTypes.object.isRequired,
};

export default ColorList;
