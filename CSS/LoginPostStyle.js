import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
 } from 'react-native';


import EStyleSheet from 'react-native-extended-stylesheet';
const red = '#bc2025'
const window = Dimensions.get('window');

function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100);
}
function vh(percentageHeight) {
  return Dimensions.get('window').height * (percentageHeight / 100);
}
const loginPostStyles = EStyleSheet.create({

  mainPost: {
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputBar: {
    height: 40,
    width: 350,
    borderColor: 'black',
    borderWidth: 1,
    margin: 15,
    padding: 5,
  },
   inputArea: {
    height: 150,
    width: 350,
    borderColor: 'black',
    borderWidth: 1,
    margin: 15,
    padding: 5,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
    flex: 1,
  },
  toggleContainer: {
  	alignItems:'center',
  	flex: 1,
    flexDirection: 'row',
  },
  toggleBtn: {
  	margin: 5,
    width: 150,
    height: 40,
    alignItems: 'center',
    backgroundColor: red,
    justifyContent: 'center',
  },
  loginBtn: {
    margin: 5,
    width: 350,
    height: 40,
    alignItems: 'center',
    backgroundColor: red,
    justifyContent: 'center',
  },
  bodyContainer: {
  	alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    height: vh(100),
    backgroundColor: 'white',
  },
  selectHeader: {
    backgroundColor: 'rgba(0, 0, 0, .75)',
    padding: 10,
    height: 40,
    color: 'white',
  }
})


module.exports = loginPostStyles