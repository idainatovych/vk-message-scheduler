import TaskActionKeys from './keys';

export function titleChanged(dispatch, title) {
  dispatch({
    type: TaskActionKeys.TITLE_CHANGED,
    title
  });
}

export function recipientChanged(dispatch, name) {
  dispatch({
    type: TaskActionKeys.RECIPIENT_CHANGED,
    name
  });
}

export function dateChanged(dispatch, date) {
  dispatch({
    type: TaskActionKeys.DATE_CHANGED,
    date
  })
}

export function timeChanged(dispatch, time) {
  dispatch({
    type: TaskActionKeys.TIME_CHANGED,
    time
  });
}

export function repeatEveryDay(dispatch, repeat) {
  dispatch({
    type: TaskActionKeys.REPEAT_EVERY_DAY,
    repeat
  })
}

export function repeatEveryWeek(dispatch, repeat) {
  dispatch({
    type: TaskActionKeys.REPEAT_EVERY_WEEK,
    repeat
  });
}
