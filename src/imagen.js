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
ImageBackground,
  View,
ScrollView,
  StatusBar,
  Image, Dimensions,  Linking,TouchableHighlight
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LocalizedStrings from 'react-native-localization';
import {   Button, Text  } from 'galio-framework'
let strings = new LocalizedStrings({
  en:{
    a1:"Video Example",

  },
  es:{

    a1:"Video Ejemplo",

  },

});


const App: () => React$Node = ({ route, navigation }) => {
  const image = "https://titanchannel.com/blog/wp-content/uploads/2017/08/Captura-de-pantalla-2017-08-04-a-las-15.15.27.png";


  const { UrlCom } = route.params;
  const { Nombre } = route.params;
  const { UrlFoto } = route.params;

  return (
<ImageBackground style={styles.backgroundImage} source={{uri:  image}}>
    <ScrollView>
    <View>
      <Text style={styles.topBox2}> Poomsae: { Nombre }</Text>
<View style={styles.loginButtonSection}>
      <Button round uppercase color="#F08F21" size="large" style={{ marginTop:  20,
           fontFamily: 'serif', }} onPress={() => {
    //on clicking we are going to open the URL using Linking
    Linking.openURL( UrlCom );

  }} >{strings.a1}</Button>
</View>
    <ImageZoom cropWidth={Dimensions.get('window').width}
                cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={400}>
                <Image style={{flex: 1}}
                       source={{uri: UrlFoto }}/>
            </ImageZoom>
            </View>
            </ScrollView>
              </ImageBackground>
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
      marginTop: 20,
      textAlign: 'center', // <-- the magic
        fontSize: 18,
        color: "white",
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      fontFamily: 'Iowan Old Style'
    },
    loginButtonSection: {

     justifyContent: 'center',
     alignItems: 'center'
  },
  backgroundImage: {

  flex: 1,
  resizeMode: 'cover',
},
});

export default App;
