import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const defaultProps = {
  isButton: false,
  status: '',
  times: '8:00am - 8:30 am',
  eventTitle: 'Vishs 35th Bday',
  hostName: 'By Vish',
  Venue: 'Bridge Hotel',
  attendees: '40',
  isBigBtn: false,
  bigBtnLable: 'RSVP',
  comments: '',
};

const Cards = props => {
  return (
    <View
      style={{
        marginTop: 20,
      }}>
      <Image
        style={{width: '100%', height: 250}}
        source={{
          uri: `${props.imgUrl}`,
        }}
      />
      <View
        style={[
          styles.card2,
          props.isBigBtn && {borderLeftColor: 'lightblue'},
        ]}>
        <Text style={[styles.greyTxt, {marginBottom: 10}]}>
          {props.times}{' '}
          <Text style={{color: 'orange'}}>
            {' '}
            {`\u2022 `}
            {props.status && props.status}
          </Text>
        </Text>
        <View style={styles.taskCard}>
          <View>
            <Text style={{color: 'black'}}>{props.eventTitle}</Text>
            <Text>{props.hostName}</Text>
            <Text>
              {props.Venue} {'\u2022'} {props.attendees} attendence
            </Text>
          </View>
          <View>
            {props.isButton && (
              <TouchableOpacity style={styles.btn1}>
                <Text style={{color: 'orange', fontSize: 16}}>Join</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {/* comments */}
      {props.comments.length > 0 && (
        <>
          <View style={styles.comments}>
            <Image
              style={{width: 30, height: 30}}
              source={{
                uri: `${props.comments[0]?.profileUrl}`,
              }}
            />

            <View style={styles.commentWrapper}>
              <Text style={styles.commentTxt}>
                John{' '}
                <Text style={{color: 'gray'}}>
                  {props.comments[0]?.commentTime}m ago
                </Text>
              </Text>
              <Text>{props.comments[0]?.comment}</Text>
            </View>
          </View>
          <Text style={styles.moreComments}>{`4 More Comments`}</Text>
        </>
      )}

      {props.isBigBtn && (
        <TouchableOpacity style={styles.bigBtn}>
          <Text style={styles.bigBtnTxt}>{props.bigBtnLable}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Cards;
Cards.defaultProps = defaultProps;

const styles = StyleSheet.create({
  card2: {
    width: '100%',
    borderLeftColor: 'green',
    borderLeftWidth: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 0,
    elevation: 1,
  },
  btn1: {
    borderWidth: 1,
    borderColor: 'orange',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 50,
  },
  taskCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  comments: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: '#f7f3f2',
    alignItems: 'center',
    width: '100%',
  },
  bigBtn: {
    width: '80%',
    backgroundColor: '#115cf2',
    fontSize: 16,
    paddingVertical: 10,
    marginLeft: '10%',
    borderRadius: 20,
  },
  moreComments: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'whitesmoke',
    textAlign: 'center',
    marginTop: 10,
    width: '100%',
  },
  commentWrapper: {
    paddingLeft: 10,
    paddingRight: 30,
    marginTop: 10,

    width: '90%',
  },
  bigBtnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  commentTxt: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
