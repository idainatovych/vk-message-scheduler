import React from 'react';
import { connect } from 'react-redux';

import {
  GridList,
  GridTile
} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ActionInfo from 'material-ui/svg-icons/action/info';

import EditTaskDialog from './edit_task_dialog';
import { actions, app } from '../../app';
import { helpers } from '../../utils';

const DAYS_OF_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

class TaskCollection extends React.Component {

  _renderSchedule() {
    if (this.props.tasks.length > 0) {
      let tasks = this.props.tasks.sort((a, b) => a.date > b.date);
      return this._getTileCollection(tasks);
    } else {
      return <p>Empty, click action button to create.</p>
    }
  }

  _getTileCollection(tasks) {
    let date;

    return tasks.reduce((acc, task) => {
      if (!date || helpers.compareDatesWithoutTime(date, task.date) !== 0) {
        date = task.date;

        let month = MONTHS[date.getMonth()];
        let dayOfWeek = DAYS_OF_WEEK[date.getDay()];
        let day = date.getDate();
        let year = date.getFullYear();

        let text = `${ dayOfWeek }, ${ month } ${ day }, ${ year }`;
        acc.push(<Subheader key={ helpers.generateId() }>{ text }</Subheader>);
      }

      acc.push(this._renderTile(task));
      return acc;
    }, []);
  }

  _renderTile(task) {
    let {
      id,
      title,
      date,
      recipient
    } = task;

    let formattedDate = helpers.formatDate(date);
    let subtitle = `${recipient} at ${formattedDate}`;


    return (
      <GridTile key={ id } title={ title }
                actionIcon={ this._getActionIcon(id) }
                subtitle={ subtitle }>
        <img src="http://lorempixel.com/300/300/cats"/>
      </GridTile>
    );
  }

  _getActionIcon(id) {
    return (
      <IconButton onTouchTap={ () => this.props.openEditTaskDialog(id) }>
        <ActionInfo color="white"/>
      </IconButton>
    );
  }

  render() {
    return (
      <div>
        <div className="task-collection">
          <GridList>
            { this._renderSchedule() }
          </GridList>
        </div>
        <EditTaskDialog />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = (dispatch) => ({
  openEditTaskDialog: (id) => actions.openEditTaskDialog(dispatch, id)
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCollection);
