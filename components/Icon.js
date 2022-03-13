import {CartIcon} from "@bitcoin-design/bitcoin-icons-react/outline";
import {MusicNoteIcon} from "@heroicons/react/outline";
import {Component} from 'react';

export default class Icon extends Component {
  render() {
    const ComponentName = this.props.icon;
    return (<ComponentName />);
  }
}