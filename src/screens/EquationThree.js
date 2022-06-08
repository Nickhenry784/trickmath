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
  const [c, onChangeC] = useState(null);
  const [d, onChangeD] = useState(null);

  useEffect(() => {
    if(random){
      onChangeA(Math.floor(1 + Math.random() * 10));
      onChangeB(Math.floor(1 + Math.random() * 20));
      onChangeC(Math.floor(1 + Math.random() * 30));
      onChangeD(Math.floor(1 + Math.random() * 40));
    }
  }, []);


  const onClickStartButton = () => {
    var delta = b*b - 3*a*c;
	  var k = (9*a*b*c - 2*Math.pow(b,3) - 27*Math.pow(a,2)*d)/ (2*Math.sqrt(Math.abs(Math.pow(delta,3))));
	
    if(delta>0){
      if(Math.abs(k)<=1) {
        setResult(`x1: ${(2*sqrt(delta)*cos((acos(k)/3)) - b)/ (3*a)}, x2: ${(2*sqrt(delta)*cos((acos(k)/3 - (2*PI/3))) - b)/(3*a)}, x3: ${(2*sqrt(delta)*cos((acos(k)/3 + (2*PI/3))) - b)/(3*a)}`);
      } else {
      setResult(`x: ${((Math.sqrt(delta)*Math.abs(k))/(3*a*k))*(Math.pow(Math.abs(k) + Math.sqrt(Math.pow(k,2) - 1),1/3) + Math.pow(Math.abs(k) - Math.sqrt(Math.pow(k,2) - 1),1/3)) - (b/(3*a))}`);
      }
    }
    if(delta=0){
      setResult(`x: ${(-b + Math.pow(Math.pow(b,3) - 27*Math.pow(a,2)*d,1/3))/(3*a)}`);
    }
    if(delta<0){
      setResult(`x: ${(Math.sqrt(Math.abs(delta))/(3*a))*(Math.pow(k + Math.sqrt(Math.pow(k,2) + 1),1/3) + Math.pow(k - Math.sqrt(Math.pow(k,2) + 1),1/3)) - (b/(3*a))}`);
    }
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
          <Text style={appStyle.turnText}>3</Text>
        </View>
        <Text style={appStyle.xtext}>+</Text>
        {random ? <Text style={appStyle.xtext}>{b}</Text> : <TextInput
          style={appStyle.input}
          onChangeText={onChangeB}
          value={b}
          keyboardType="numeric"
        />}
        <View style={appStyle.textView}>
          <Text style={appStyle.xtext}>x</Text>
          <Text style={appStyle.turnText}>2</Text>
        </View>
        <Text style={appStyle.xtext}>+</Text>
        {random ? <Text style={appStyle.xtext}>{c}</Text> : <TextInput
          style={appStyle.input}
          onChangeText={onChangeC}
          value={c}
          keyboardType="numeric"
        />}
        <View style={appStyle.textView}>
          <Text style={appStyle.xtext}>x</Text>
        </View>
      </View>
      <View style={appStyle.topView}>
        <Text style={appStyle.xtext}>+</Text>
        {random ? <Text style={appStyle.xtext}>{c}</Text> : <TextInput
          style={appStyle.input}
          onChangeText={onChangeD}
          value={d}
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
    width: 30,
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
    top: '0%',
    left: '50%',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
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