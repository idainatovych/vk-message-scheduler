import React from 'react';
import {connect} from 'react-redux';

import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ActionInfo from 'material-ui/svg-icons/action/info';

let tasks = new Array(6).fill('');

const iconButton = <IconButton><ActionInfo color="white"/></IconButton>

let mocks;

if (tasks.length > 0) {
  mocks = tasks.map((el, i) => (
    <GridTile title="Lorem"
              key={i}
              actionIcon={iconButton}
              subtitle="John Doe at 12.45 pm">
      <img src="http://lorempixel.com/300/300/cats"/>
    </GridTile>
  ));
} else {
  mocks = <p>Empty, click action button to create.</p>
}

class TaskCollection extends React.Component {
  render() {
    return (
      <div className="task-collection">
        <GridList>
          {mocks}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCollection);
