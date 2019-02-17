import React from 'react';
import PropTypes from 'prop-types';

const style = {
  height: '100px',
  width: '100px',
};

const tile = type => {
  switch (type) {
    case 'H':
      return <img style={style} alt="House" src="tiles/House_r4_300.jpg" />;
    case 'F':
      return <img style={style} alt="Factory" src="tiles/Industry_r4_300.jpg" />;
    case 'O':
      return <img style={style} alt="Office" src="tiles/Office_r6_300.jpg" />;
    case 'P':
      return <img style={style} alt="Park" src="tiles/Park_r3_300.jpg" />;
    case 'S':
      return <img style={style} alt="Shop" src="tiles/Shop_r1_300.jpg" />;
    case 'Ta':
      return <img style={style} alt="Bar" src="tiles/Taverns_r2_300_pub.jpg" />;
    case 'Tb':
      return <img style={style} alt="Dinner" src="tiles/Taverns_r2_300_Dinner.jpg" />;
    case 'Tc':
      return <img style={style} alt="Music" src="tiles/Taverns_r2_300_Music.jpg" />;
    case 'Td':
      return <img style={style} alt="Inn" src="tiles/Taverns_r2_300_Inn.jpg" />;
    default:
      return <span>?</span>;
  }
};

const Tile = ({ type }) => (
  <div style={{ display: 'inline-block' }}>
    {tile(type)}
    <br />
    <button>select</button>
  </div>
);
Tile.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Tile;
