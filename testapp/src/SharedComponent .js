import React from 'react';

const SharedComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.render()}
      </div>
    );
  }
}

export default SharedComponent;