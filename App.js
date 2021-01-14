import * as React from 'react';
import {  View,ImageBackground ,StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import gifmoviendose from './src/imagen';
import registros from './src/registros.json';
import {   Button, Text  } from 'galio-framework'

function HomeScreen({ navigation }) {
  const image = "https://titanchannel.com/blog/wp-content/uploads/2017/08/Captura-de-pantalla-2017-08-04-a-las-15.15.27.png";

  return (



<ImageBackground style={styles.backgroundImage} source={{uri:  image}}>

         <FlatList
                      data={registros}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) =>

                      {


                          return(
                            <TouchableOpacity
                             onPress={() => navigation.navigate('Imagen', { IDs: item.IDs,
                               Nombre: item.Nombre , UrlCom: item.UrlCom, UrlFoto: item.UrlFoto })}>
                            <View style={styles.artistBox}>
                           <Image style={styles.image} source={{uri: item.UrlFoto }}/>

                              <View style={styles.info}>
                             <Text style={styles.titulo}>{item.Nombre}</Text>

                              </View>
                            </View>
               </TouchableOpacity>

                            )
                      }
                       }
                    keyExtractor={(item, index) => index.toString()}
                    />
  </ImageBackground>

  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Imagen" component={gifmoviendose} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  artistBox:{
      margin: 20,
      backgroundColor: '#F8992E',
      flexDirection: 'row',
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset:{
        height: 1,
        width: -2,
      },
      elevation: 2,
    },

    image:{
      width: 130,
      height: 130,
    },

    info:{
      flex: 1,
      flexDirection: 'column',
      alignItems:'center',
      justifyContent:'center',
    },

    titulo:{
      fontWeight: "bold",
       textAlign: 'center',
         fontSize: 20,
       color:'white',

    },

    row:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal: 40,
      marginTop:15,
    },

    iconContainer:{
      flex:1,
      alignItems:'center',
    },
    backgroundImage: {
      paddingTop: 20,
  flex: 1,
      resizeMode: 'cover',
    },

});


export default App;
