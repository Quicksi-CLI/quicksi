import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getSample} from '../../store/actions/samples'
import './sample.css';

class Samples extends Component {

  static propTypes = {
    getSamples: PropTypes.func.isRequired,
    samples: PropTypes.array.isRequired
  }

  static defaultProps = {
    samples: []
  }

  componentWillMount() {
    this.props.getSamples();
  }

  render() {

    return (
      <div>
        <h2>Sample</h2>
        <ul>
        {this.props.sample.map(sample =>
          <li key={sample.id}>{sample.firstName} {sample.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sample: state.sample
})

const dispatchToProps = (dispatch) => ({
   getSample: () => dispatch(getSample())
})

export default connect(mapStateToProps, dispatchToProps)(Samples);
