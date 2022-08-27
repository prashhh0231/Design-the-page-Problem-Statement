import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
const Meeting = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headTxt}>Meeting/ Appoinment details</Text>
      <View style={styles.bannerImag}>
        <Text>
          <Icon name="camera" size={20} color="black" />;
        </Text>
      </View>
      <Text style={styles.titleTxt}>Titlle</Text>
      <View style={styles.locationContainer}>
        <Text>
          {' '}
          <Icon name="map-marker" size={20} color={'black'} />
        </Text>
        <Text style={styles.location}>
          Mountain View, California, {'\n'}United States
        </Text>
      </View>
      <Image
        style={styles.map}
        source={{
          uri: 'https://staticmapmaker.com/img/google-placeholder.png',
        }}
      />

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{marginRight: 20, marginLeft: 20}}>
          <Icon name="video" size={20} color="black" />
        </Text>
        <Text style={styles.txt1}>Link to join online</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Text style={{marginRight: 20, marginLeft: 20}}>
          <Icon name="calendar" size={20} color="black" />;
        </Text>
        <Text style={styles.txt1}>Description</Text>
      </View>
      <Text style={[styles.headTxt, {marginVertical: 20}]}>
        Meeting Schedule
      </Text>
      <View style={styles.meetingContainer}>
        <View style={{width: '20%'}}>
          <Text>
            <Icon name="Clock" size={20} color="black" />;
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <View
            style={{
              flexDirection: 'row',
              width: '95%',
              justifyContent: 'space-between',
            }}>
            <Text>All Day</Text>
            <Text style={styles.mediumTxt}>No {'>'}</Text>
          </View>
          <View style={styles.startDate}>
            <Text>From Date</Text>
            <Text>Start Time </Text>
          </View>
          <View style={styles.startDate}>
            <Text>To Date</Text>
            <Text>End Time </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={styles.mediumTxt}>
              Australlian Estern Standerd Time
            </Text>
            <Text style={[styles.mediumTxt, {marginRight: 10}]}>{'>'}</Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.meetingContainer,
          {marginTop: 20, alignItems: 'center'},
        ]}>
        <View style={{width: '20%'}}>
          <Text>
            <Icon name="repeat" size={20} color="black" />;
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <View
            style={{
              flexDirection: 'row',
              width: '95%',
              justifyContent: 'space-between',
            }}>
            <Text>Repeat</Text>
            <Text style={styles.headTxt}>Do not repeat {'>'}</Text>
          </View>
        </View>
      </View>

      <Text style={[styles.headTxt, {marginVertical: 20}]}>Calender</Text>
      <View style={styles.calenderWrapper}>
        <Text>
          <Icon name="calendar" size={20} color="black" />;
        </Text>
        <Text> Select calender</Text>
      </View>
      <View style={styles.calenderWrapper1}>
        <Text style={styles.grayTxt}>Privacy</Text>
        <Text style={styles.mediumTxt}>Private {'>'}</Text>
      </View>
      <View style={styles.calenderWrapper1}>
        <Text style={styles.grayTxt}>Event Category</Text>
        <Text style={styles.mediumTxt}> {'>'}</Text>
      </View>
      <Text style={[styles.headTxt, {marginVertical: 20}]}>Attendees</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 20}}>
            <Icon name="users" size={20} color="black" />;
          </Text>
          <Text style={styles.grayTxt}>Add Guests</Text>
        </View>
        <View>
          <Text style={styles.mediumTxt}>{'>'}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnLable}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Meeting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  headTxt: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
    marginTop: 10,
  },
  bannerImag: {
    width: '100%',
    height: 100,
    backgroundColor: '#e1e3e3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  titleTxt: {
    marginTop: 20,
    marginLeft: '20%',
  },
  location: {
    fontSize: 18,
    color: 'black',
    marginTop: 20,
    marginLeft: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  map: {
    width: '100%',
    height: 160,
    marginTop: 20,
  },
  txt1: {
    fontSize: 16,
  },
  meetingContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 10,
  },
  innerContainer: {
    width: '80%',
  },
  mediumTxt: {
    fontSize: 16,
    color: 'black',
  },
  startDate: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  calenderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  calenderWrapper1: {
    marginLeft: '23%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  grayTxt: {
    fontSize: 16,
  },
  btn: {
    width: '80%',
    marginHorizontal: 20,
    backgroundColor: '#1154d1',
    borderRadius: 50,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnLable: {
    color: 'white',
    fontSize: 18,
  },
});
