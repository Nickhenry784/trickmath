import { 
  View, 
  StyleSheet, 
  TouchableOpacity,
  Text, Dimensions, 
  ImageBackground,
  Image, 
  TextInput  } from "react-native";
import React, {useEffect, useState} from 'react';
import { images } from "../assets";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Play = ({navigation, route}) => {

  const {random} = route.params;

  const [result, setResult] = useState(null);
  const [a, onChangeA] = useState(null);
  const [b, onChangeB] = useState(null);

  useEffect(() => {
    if(random){
      onChangeA(1 + Math.floor(Math.random() * 100));
      onChangeB(1 + Math.floor(Math.random() * 100));
    }
  }, []);


  const onClickStartButton = () => {
    setResult(`x: ${-b/a}`);
    console.log(result);
  }

  const onClickBackButton = () => {
    navigation.goBack();
  }

  return (
    <ImageBackground style={appStyle.homeView} source={images.background}>
      <View style={appStyle.topView}>
        {random ? <Text style={appStyle.xtext}>{a}</Text> : <TextInput
          style={appStyle.input}
          onChangeText={onChangeA}
          value={a}
          keyboardType="numeric"
        />}
        <View style={appStyle.textView}>
          <Text style={appStyle.xtext}>x</Text>
        </View>
        <Text style={appStyle.xtext}>+</Text>
        {random ? <Text style={appStyle.xtext}>{b}</Text> : <TextInput
          style={appStyle.input}
          onChangeText={onChangeB}
          value={b}
          keyboardType="numeric"
        />}
        <Text style={appStyle.xtext}> = 0</Text>
      </View>
      <View style={appStyle.centerView}>
        <TouchableOpacity onPress={onClickStartButton}>
          <Image style={appStyle.centerImage} source={images.getresult} />
        </TouchableOpacity>
      </View>
      <View style={appStyle.resultView}>
        {result !== null && <Text style={appStyle.resultText}>{result}</Text>}
      </View>
      <View style={appStyle.bottomView}>
        <TouchableOpacity onPress={onClickBackButton}>
          <Image style={appStyle.centerImage} source={images.back} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


export const appStyle = StyleSheet.create({
  homeView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode: 'cover',
  },
  playView:{
    flex: 0.9,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  centerImage: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.1,
    resizeMode: 'contain',
  },
  textView: {
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
  },
  resultText: {
    fontSize: windowWidth > 640 ? 40 : 30,
    color: 'black',
    fontWeight: 'bold',
  },
  turnText: {
    fontSize: windowWidth > 640 ? 20 : 16,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '5%',
    left: '30%',
  },
  xtext: {
    fontSize: windowWidth > 640 ? 40 : 30,
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  centerView: {
    marginTop: 20,
    flex: 0.2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  resultView: {
    marginTop: 20,
    flex: 0.4,
    backgroundColor: 'white',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  topView: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  bottomView: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
  },
});

export default Play;