import React from 'react';
import {Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Welcome = props => {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <LinearGradient
        start={{x: 0.0, y: 0.4}}
        end={{x: 0.5, y: 1.0}}
        colors={['#2D97Da', '#2249D6']}
        style={{flex: 1}}
        locations={[0, 1]}>
        {/* Top selection */}
        <View
          style={{
            // backgroundColor: '#ddd',
            flex: 2,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'row',
            // borderColor: 'red',
            // borderWidth: 2,
          }}>
          <Image
            resizeMode="contain"
            style={{
              width: wp('90%'),
              height: hp('90%'),
              // borderWidth: 2,
              // borderColor: 'red',
            }}
            source={require('../assets/images/crypto_bank.png')}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 2,
            // borderColor: 'red',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              height: hp('37%'),
              width: wp('90%'),
              borderRadius: 18,
              paddingHorizontal: 12,
              paddingVertical: 12,
              position: 'relative',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Poppins-Black',
                color: '#fff',
                alignSelf: 'center',
                textAlign: 'center',
                // margin: 12,
              }}>
              Buy And Trade Top Cryptocurrencies
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Poppins-Thin',
                color: '#fff',
                alignSelf: 'center',
                textAlign: 'center',
                margin: 10,
              }}>
              You can trade and buy and sell crypto coins here very easily and
              reliably
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: wp('80%'),
                height: hp('7%'),
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                // padding: 20,
              }}
              onPress={() => props.navigation.navigate('Navbar')}>
              <Text style={{color: '#2D97Da', fontFamily: 'Poppins-Bold'}}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Bottom Selection */}
      </LinearGradient>
    </View>
  );
};

export default Welcome;
