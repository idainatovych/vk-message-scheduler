import React from 'react';
import Dialog from 'material-ui/Dialog';

const styles = {
  maxWidth: '400px',
};

export default class AbstractTaskDialog extends React.Component {

  /**
   * Returns dialog
   * @argument { ReactElement } form to be injected
   **/
  getDialog(form) {
    return (
      <Dialog
        modal
        title={this.title}
        actions={this.actions}
        open={this.props.open}
        contentStyle={styles}
      >
        { form }
      </Dialog>
    );
  }
}

/**
 * Abstract task dialog prop types
 **/
AbstractTaskDialog.propTypes = {};
