import React from 'react';
import PropTypes from 'prop-types';


class CreateNewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  handleSubmit = event => {
    this.props.addItem(event, this.state.value);
    this.setState({ value: '' });
  }


  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}

CreateNewItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default CreateNewItem; 