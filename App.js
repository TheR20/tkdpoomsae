/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, Dimensions,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View>
      <Text style={styles.topBox2}>strings.textodimemasaoru</Text>
    <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={{uri:'https://www.poomsaetaekwondo.com/wp-content/uploads/2019/11/ESQUEMA-DEL-POMMSAE-TAEGUK-I-CHANG.jpg'}}/>
            </ImageZoom>
            </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  topBox2: {
      marginTop: 40,
      textAlign: 'center', // <-- the magic
        fontSize: 18,
        color: "white",
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      fontFamily: 'Iowan Old Style'
    }
});

export default App;
