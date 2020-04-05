import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ items }) => {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    </div>

  );
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
