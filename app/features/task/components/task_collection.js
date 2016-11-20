import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ActionInfo from 'material-ui/svg-icons/action/info';


let tasks = [];

const iconButton = <IconButton><ActionInfo color="white"/></IconButton>

const TaskCollection = () => (
  <div className="task-collection">
    <GridList>
      <Subheader>Saturday</Subheader>
      <GridTile key={1} title="Lorem"
                actionIcon={iconButton}
                subtitle="John Doe at 12.45 pm">
        <img src="http://lorempixel.com/300/300/cats"/>
      </GridTile>
      <GridTile key={2} title="Ipsum"
                actionIcon={iconButton}
                subtitle="John Doe at 12.45 pm">
        <img src="http://lorempixel.com/300/300/cats"/>
      </GridTile>
      <Subheader>Sunday</Subheader>
      <GridTile key={3} title="Dolor"
                actionIcon={iconButton}
                subtitle="John Doe at 12.45 pm">
        <img src="http://lorempixel.com/300/300/cats"/>
      </GridTile>
      <GridTile key={4} title="Sit amet"
                actionIcon={iconButton}
                subtitle="John Doe at 12.45 pm">
        <img src="http://lorempixel.com/300/300/cats"/>
      </GridTile>
      <Subheader>Monday</Subheader>
      <GridTile key={5} title="Dolor"
                actionIcon={iconButton}
                subtitle="John Doe at 12.45 pm">
        <img src="http://lorempixel.com/300/300/cats"/>
      </GridTile>
      <GridTile key={6} title="Sit amet"
                actionIcon={iconButton}
                subtitle="John Doe at 12.45 pm">
        <img src="http://lorempixel.com/300/300/cats"/>
      </GridTile>
    </GridList>
  </div>
);

export default TaskCollection;
