import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less';

const propTypes = {};

class Temp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="temp-main">
        这里是扩展组件
      </div>
    );
  }
}

export default Temp;
