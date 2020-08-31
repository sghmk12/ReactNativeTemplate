import React, {Component} from 'react';
import {
    Alert,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {Agenda} from 'react-native-calendars';


export default class CalendarScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            items:{}
        }
    }

    render() {
        return (
         <View style={styles.container}>
          <Agenda
             items={this.state.items}
             loadItemsForMonth={this.loadItems.bind(this)}
             renderItem={this.renderItem.bind(this)}
             renderEmptyDate={this.renderEmptyDate.bind(this)}
             rowHasChanged={this.rowHasChanged.bind(this)}
             markingType={'period'}
             markedDates={{
                 
             }}
             monthFormat={'yyyy'}
             theme={{
                agendaDayTextColor: 'grey',
                agendaDayNumColor: 'black',
                agendaTodayColor: 'darkslateblue',
                agendaKnobColor:'lightgrey',
                selectedDayTextColor:'dodgerblue',
                selectedDotColor:'dodgerblue'
              }}
             renderDay={(day, item) => (<Text style={day ? styles.dayText : styles.eventText}>{day ? day.day : item.time}</Text>)}
          />
          </View>
        );
    }

    loadItems(day) {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
              const time = day.timestamp + i * 24 * 60 * 60 * 1000;
              const strTime = this.timeToString(time);
              const strHours = this.timeToString(time, true)
              if (!this.state.items[strTime]) {
                this.state.items[strTime] = [];
                const numItems = Math.floor(Math.random() * 4 + 1);
                for (let j = 0; j < numItems; j++) {
                  this.state.items[strTime].push({
                    name: 'Event at ' + strTime,
                    time:strHours,
                    height: Math.max(50, Math.floor(Math.random() * 150))
                  });
                }
              }
            }
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
            this.setState({
              items: newItems
            });
          }, 1000);
    }

    renderItem(item) {
        return (
            <TouchableOpacity
              style={[styles.item, {height: item.height}]} 
              onPress={() => Alert.alert(item.name)}
            >
              <Text style={styles.eventContent}>{item.name}</Text>
            </TouchableOpacity>
          );
    }

    renderEmptyDate() {
        <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    }

    rowHasChanged(r1, r2) {
        return r1.name !== r2.name;
    }

    timeToString(time, hourly = false) {
        const date = new Date(time);
        var hours = date.getUTCHours();
        var hourStr = ''+hours
        var minutes = date.getMinutes();
        var minuteStr = ''+minutes
        if(minutes < 10){
            minuteStr = '0'+minutes
        }
        if(hours < 10){
            hourStr='0'+hours
        }
        return hourly ? hourStr+':'+minuteStr : date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    marginHorizontal:10,
    marginVertical:10,
  },
  eventText:{
    textAlign:"center",
    fontSize:18,
    color:"grey",
    marginHorizontal:7
  },
  dayText:{
    textAlign:"center",
    fontSize:24,
    color:"grey",
    marginRight:7,
    fontWeight:"bold"
  },
  eventContent:{
    fontSize:14,
    color:"black",
    fontWeight:"bold",
    marginLeft:5
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom:5
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

