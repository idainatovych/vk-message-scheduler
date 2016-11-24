import React from 'react';
import { connect } from 'react-redux';

import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ActionInfo from 'material-ui/svg-icons/action/info';

const iconButton = <IconButton><ActionInfo color="white"/></IconButton>

class TaskCollection extends React.Component {
  renderSchedule() {
    if (this.props.tasks.length > 0) {
      return this.props.tasks.map((event, i) => (
        <GridTile title={event.title}
                  key={i}
                  actionIcon={iconButton}
                  subtitle='John Doe at 12.45 pm'>
          <img src="http://lorempixel.com/300/300/cats"/>
        </GridTile>
      ));
    } else {
      return <p>Empty, click action button to create.</p>
    }
  }

  render() {
    const mocks = this.renderSchedule();
    return (
      <div className="task-collection">
        <GridList>
          {mocks}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCollection);
