import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { xdateToData } from '../../interface';
import XDate from 'xdate';
import dateutils from '../../dateutils';
import styleConstructor from './style';
import moment from 'moment';

class ReservationListItem extends Component {
  static displayName = 'IGNORE';

  constructor(props) {
    super(props);

    this.styles = styleConstructor(props.theme);
  }

  shouldComponentUpdate(nextProps) {
    const r1 = this.props.item;
    const r2 = nextProps.item;
    let changed = true;
    if (!r1 && !r2) {
      changed = false;
    } else if (r1 && r2) {
      if (r1.date.getTime() !== r2.date.getTime()) {
        changed = true;
      } else if (!r1.events && !r2.events) {
        changed = false;
      } else if (r1.events && r2.events) {
        if ((!r1.date && !r2.date) || (r1.date && r2.date)) {
          changed = this.props.rowHasChanged(r1.events, r2.events);
        }
      }
    }
    return changed;
  }

  renderDate(date, item) {
    if (this.props.renderDay) {
      return this.props.renderDay(date ? xdateToData(date) : undefined, item);
    }
    const today = dateutils.sameDate(date, XDate()) ? this.styles.today : undefined;
    if (date) {
      return (
        <View style={this.styles.day}>
          <Text allowFontScaling={false} style={[this.styles.dayNum, today]}>{date.getDate()}</Text>
          <Text allowFontScaling={false} style={[this.styles.dayText, today]}>{XDate.locales[XDate.defaultLocale].dayNamesShort[date.getDay()]}</Text>
        </View>
      );
    } else {
      return (
        <View style={this.styles.day} />
      );
    }
  }

  render() {
    const { events, date } = this.props.item;
    let content;
    if (events.length) {
      content = this.props.renderItem(events, date);
    } else {
      content = this.props.renderEmptyDate(date);
    }

    return (
      <View style={this.styles.container}>
        {this.renderDate(date, events)}
        <View style={{ flex: 1 }}>
          {content}
        </View>
      </View>
    );
  }
}

export default ReservationListItem;
