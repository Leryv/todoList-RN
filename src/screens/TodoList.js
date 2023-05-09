import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppTheme from '../styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IconPlus from '../assets/icons/plus.png';
import ButtonIcon from '../components/Buttons/ButtonIcons';
import Input from '../components/Input';

const TodoList = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 0.4}}
        end={{x: 0.5, y: 1.0}}
        colors={['#2D97Da', '#2249D6']}
        style={styles.topWrapper}
        locations={[0, 1]}>
        <View style={styles.topContent}>
          <Text style={styles.title}>Welcome, User</Text>
          <Text style={styles.desc}>Let's Make Your Daily Activity</Text>
        </View>
      </LinearGradient>
      <View style={styles.bottomWrapper}>
        <View style={styles.inputText}>
          {/* Input */}
          <Input placeholder="Add New Task" />
          {/* Button */}
          <ButtonIcon source={IconPlus} />
        </View>

        {/* List Task */}
        <ScrollView contentContainerStyle={styles.scrollList}>
          <View style={styles.cardList}>
            <Text style={styles.cardText}>Lorem Lorem</Text>
            <ButtonIcon source={IconPlus} color={'red'} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Top
  topWrapper: {
    flex: 1,
  },
  topContent: {
    marginHorizontal: wp('7%'),
    marginTop: hp('9%'),
    textAlign: 'center',
    justifyContent: 'center',
    maxWidth: wp('50%'),
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: AppTheme.color.white,
  },

  desc: {
    color: 'white',
    fontSize: 18,
    width: wp('40%'),
  },

  // Bottom
  bottomWrapper: {
    flex: 2,
  },
  inputText: {
    flexDirection: 'row',
    padding: hp('3%'),
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: wp('100%'),
  },

  // Bottom List
  scrollList: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  cardList: {
    width: wp('85%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  cardText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('1%'),
    borderWidth: 2,
    borderRadius: 12,
    width: wp('68%'),
  },
});
