import React, {Component} from 'react';

import Profile from './Profile';
import styles from "./Profile.module.css";

const string = value => value ? value.toString() : undefined;

export default class ProfileContainer extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return !nextProps.pending;
  }

  render() {
    return <div className={styles.profile}>
      {this.props.pending ? null : <Profile
          webId={this.props.webId}
          fullName={string(this.props.fullName)}
          imageSrc={string(this.props.imageSrc)}
      />}
    </div>
  }
}