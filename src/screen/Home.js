import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Cards from '../component/Cards';
// import CalendarStrip from 'react-native-calendar-strip';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
let datesWhitelist = [
  {
    start: moment(),
    end: moment().add(30, 'days'),
  },
];

const mockData = [
  {
    imgUrl:
      'https://thumbs.dreamstime.com/b/happy-birthday-cupcake-celebration-message-160558421.jpg',
    time: '8:30am - 9:30pm',
    status: 'Attending',
    hostName: 'Vish 35th Birthday',
    Venue: 'Radison Blue',
    attendees: '4',
    isButton: false,
    comments: [
      {
        profileUrl:
          'https://www.pinkvilla.com/imageresize/katrina-musings.jpg?width=752&format=webp&t=pvorg',
        comment: 'Hey this is comment',
        commentTime: '40',
      },
    ],
    isBigBtn: true,
    bigBtnLable: 'RSVP',
  },
  {
    imgUrl:
      'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg',
    time: '8:30am - 9:30pm',
    status: 'Pending',
    hostName: 'Mr.John',
    Venue: 'Hotel pearl',
    attendees: '400',
    isButton: true,
  },
  {
    imgUrl:
      'https://www.pinkvilla.com/imageresize/katrina-musings.jpg?width=752&format=webp&t=pvorg',
    time: '11:30am - 9:30pm',
    status: 'Attending',
    hostName: 'John ',
    Venue: 'Online',
    attendees: '4',
    isButton: true,
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hi, Charlie</Text>
      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBar}>
          <Text>
            <Icon name="search" size={20} color="black" />;
          </Text>
          <TextInput
            onChangeText={''}
            value={''}
            style={{width: '100%'}}
            placeholder="Search Your Calender"
            placeholderTextColor={'black'}
          />
        </View>

        <Text>
          <Icon name="bars" size={25} color="black" />;
        </Text>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: 80}}>
        <View style={styles.calanderWrapper}>
          <CalendarStrip
            scrollable={false}
            scrollerPaging={true}
            updateWeek={true}
            minDate={'2021-09-19'}
            maxDate={'2021-09-28'}
            startingDate={'2021-09-19'}
            selectedDate={moment().format('YYYY-MM-DD')}
            scrollToOnSetSelectedDate={true}
            style={{
              height: '95%',
              paddingTop: 20,
              paddingBottom: 10,
            }}
            calendarColor={'#fad9d7'}
            calendarHeaderStyle={{color: 'black'}}
            dateNumberStyle={{color: 'black'}}
            dateNameStyle={{color: 'black'}}
            highlightDateNumberStyle={{color: 'black'}}
            highlightDateNameStyle={{color: 'yellow'}}
            disabledDateNameStyle={{color: 'black'}}
            disabledDateNumberStyle={{color: 'black'}}
            iconLeft={{
              uri: 'https://raw.githubusercontent.com/BugiDev/react-native-calendar-strip/master/src/img/left-arrow-black.png',
            }}
            iconRight={{
              uri: 'https://raw.githubusercontent.com/BugiDev/react-native-calendar-strip/master/src/img/right-arrow-black.png',
            }}
            datesWhitelist={datesWhitelist}
          />
        </View>

        <View style={styles.bannerContainer}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg',
            }}
          />
          <Text style={styles.txt}>
            Focus on important things in this week{'\n\n'}Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley
          </Text>
        </View>
        <Text style={styles.date}>Tue, Jul 20</Text>

        {mockData?.map(item => {
          return <Cards isButton {...item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
    marginLeft: 5,
    marginTop: 10,
  },
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
  },
  calanderWrapper: {
    backgroundColor: '#f7e4e8',
    height: 100,
    marginTop: 20,
  },
  bannerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    paddingRight: 10,
    marginRight: 40,
    width: '100%',
    backgroundColor: '#e8f5fa',
  },
  txt: {
    textAlign: 'left',
    flexWrap: 'wrap',
    width: '50%',
    marginHorizontal: 15,
    color: 'black',
  },
  date: {
    fontSize: 16,
    color: 'black',
    marginTop: 20,
    fontWeight: '900',
  },
  searchBar: {
    backgroundColor: '#f7e4e8',
    width: '85%',
    marginRight: 15,
    borderRadius: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    // width: 150,
    height: 200,
    width: '50%',
  },
  card1: {
    width: '100%',
    borderLeftColor: 'red',
    borderLeftWidth: 5,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  greyTxt: {
    color: 'gray',
    fontSize: 14,
  },
  cardMainTxt: {
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
  },
});
