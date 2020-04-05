import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = ({ deleteLastItem, noItemsFound }) => {

  return (
    <button onClick={deleteLastItem} disabled={noItemsFound}>
      Delete Last Item
    </button>
  )
}

DeleteItem.propTypes = {
  deleteLastItem: PropTypes.func.isRequired,
  noItemsFound: PropTypes.bool.isRequired
};


export default DeleteItem;
