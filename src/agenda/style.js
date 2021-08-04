import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';
import platformStyles from './platform-style';

const STYLESHEET_ID = 'stylesheet.agenda.main';

export default function styleConstructor(theme = {}) {
    const appStyle = { ...defaultStyle, ...theme };

    return StyleSheet.create({
        knob: {
            width: 38,
            height: 7,
            marginTop: 10,
            borderRadius: 3,
            backgroundColor: appStyle.agendaKnobColor
        },
        weekdays: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            paddingTop: 28,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 20,
            backgroundColor: appStyle.calendarBackground,
        },
        shortCalendarMonthTextStyle: {
            top: -22,
        },
        header: {
            overflow: 'hidden',
            justifyContent: 'flex-end',
            position: 'absolute',
            height: '100%',
            width: '100%',
        },
        calendar: { // not in use
            flex: 1,
            borderBottomWidth: 1,
            borderColor: appStyle.separatorColor
        },
        knobContainer: {
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            height: 24,
            bottom: 0,
            alignItems: 'center',
            backgroundColor: appStyle.calendarBackground
        },
        weekday: {
            width: 32,
            textAlign: 'center',
            color: appStyle.textSectionTitleColor,
            fontSize: appStyle.textDayHeaderFontSize,
            fontFamily: appStyle.textDayHeaderFontFamily,
            fontWeight: appStyle.textDayHeaderFontWeight,
        },
        reservations: {
            flex: 1,
            marginTop: 104,
            backgroundColor: appStyle.backgroundColor
        },
        ...(theme[STYLESHEET_ID] || {})
    });
}
