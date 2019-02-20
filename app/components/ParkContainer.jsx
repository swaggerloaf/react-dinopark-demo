import { connect } from 'react-redux';
import Park from './Park.jsx';

const mapStateToProps = state => {
  return {
    value: state
  };
};

//const mapDispatchToProps = {};

const TodoContainer = connect(
  mapStateToProps
  // mapDispatchToProps
)(Park);

export default ParkContainer;
