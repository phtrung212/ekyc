import {useEffect, useState} from 'react';
// import Toast from 'react-native-toast-message';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import { fwdLogo, iconLock, iconPhone, profile } from '../assets'
import {Colors, Mixins} from './styles';
import { useNavigation } from '@react-navigation/native'
// import {loginRequest, registerNewAccountRequest} from '../../networks';
// import {LoadingView} from '../../components';
// import {storeToken} from '../../utils';
// import {useUser} from '../../hooks';

export default function SignIn() {
  const [switchPage, setSwitchPage] = useState<number>(0); // 0 : signin, 1: signup
  const [phone, setPhone] = useState<string>(''); //0907221912
  const [pass, setPass] = useState<string>(''); //123456
  const [nameNew, setNameNew] = useState<string>('');
  const [phoneNew, setPhoneNew] = useState<string>('');
  const [passNew, setPassNew] = useState<string>('');
  const [confirmPassNew, setConfirmPassNew] = useState<string>('');
  const [loginEnable, setLoginEnable] = useState<boolean>(false);
  const [signUpEnable, setSignUpEnable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation()

  // const {setUser} = useUser();

  useEffect(() => {
    if (phone?.length > 0 && pass?.length > 0) {
      setLoginEnable(true);
    } else {
      setLoginEnable(false);
    }
  }, [phone, pass]);

  useEffect(() => {
    if (
      phoneNew?.length > 0 &&
      nameNew?.length > 0 &&
      passNew?.length > 0 &&
      confirmPassNew?.length > 0 &&
      confirmPassNew === passNew
    ) {
      setSignUpEnable(true);
    } else {
      setSignUpEnable(false);
    }
  }, [phoneNew, passNew, confirmPassNew, nameNew]);

  function onHandleSwitch(status: number) {
    if (status !== switchPage) {
      setSwitchPage(status);
    }
  }

  async function onHandleLogin() {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    navigation.navigate('Home');
    // try {
    //   const response = await loginRequest({
    //     username: phone,
    //     password: pass,
    //     firebaseToken: globalThis.deviceToken || '123456',
    //   });
    //   if (response.data && response.data?.data) {
    //     const data = response.data?.data;
    //     storeToken(JSON.stringify(data));
    //     setUser(data);
    //     navigate('BottomTab');
    //   }
    // } catch (error: any) {
    //   const message = error.response?.data?.message;
    //   message &&
    //     Toast.show({
    //       type: 'error',
    //       text1: message,
    //       visibilityTime: 2000,
    //     });
    // } finally {
    //   setLoading(false);
    // }
  }

  async function onHandleSignUp() {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    // try {
    //   const response = await registerNewAccountRequest({
    //     name: nameNew,
    //     username: phoneNew,
    //     password: passNew,
    //     phone: phoneNew,
    //     firebaseToken: globalThis.deviceToken || '123456',
    //   });
    //   if (response.data && response.data?.data) {
    //     const data = response.data?.data;
    //     storeToken(JSON.stringify(data));
    //     setUser(data);
    //     navigate('BottomTab');
    //   }
    // } catch (error: any) {
    //   const message = error.response?.data?.message;
    //   message &&
    //     Toast.show({
    //       type: 'error',
    //       text1: message,
    //       visibilityTime: 2000,
    //     });
    // } finally {
    //   setLoading(false);
    // }
  }

  function renderSignIn() {
    return (
      <>
        <View style={styles.viewHorizontal}>
          <Image source={iconPhone} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            autoComplete="off"
            placeholder="Phone Number"
            keyboardType="phone-pad"
            placeholderTextColor={Colors.colorBlack3}
            value={phone}
            onChangeText={text => setPhone(text)}
          />
        </View>
        <View style={styles.viewHorizontal}>
          <Image source={iconLock} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            autoComplete="off"
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={Colors.colorBlack3}
            value={pass}
            onChangeText={text => setPass(text)}
          />
        </View>

        <TouchableOpacity
          disabled={!loginEnable}
          onPress={onHandleLogin}
          style={
            !loginEnable
              ? [styles.buttonSignIn, {backgroundColor: Colors.colorBlack3}]
              : styles.buttonSignIn
          }>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPhone')}
          style={styles.buttonForgot}>
          <Text style={styles.forgot}>Forgot Pasword ?</Text>
        </TouchableOpacity>
      </>
    );
  }

  function renderSignUp() {
    return (
      <>
        <View style={styles.viewHorizontal}>
          <Image
            source={profile}
            style={[styles.icon, {tintColor: Colors.colorBlack3}]}
          />
          <TextInput
            style={styles.textInput}
            autoComplete="off"
            placeholder="Name"
            placeholderTextColor={Colors.colorBlack3}
            value={nameNew}
            onChangeText={text => setNameNew(text)}
          />
        </View>
        <View style={styles.viewHorizontal}>
          <Image source={iconPhone} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            autoComplete="off"
            placeholder="Phone Number"
            keyboardType="phone-pad"
            placeholderTextColor={Colors.colorBlack3}
            value={phoneNew}
            onChangeText={text => setPhoneNew(text)}
          />
        </View>
        <View style={styles.viewHorizontal}>
          <Image source={iconLock} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            autoComplete="off"
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={Colors.colorBlack3}
            value={passNew}
            onChangeText={text => setPassNew(text)}
          />
        </View>
        <View style={styles.viewHorizontal}>
          <Image source={iconLock} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            autoComplete="off"
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor={Colors.colorBlack3}
            value={confirmPassNew}
            onChangeText={text => setConfirmPassNew(text)}
          />
        </View>

        <TouchableOpacity
          onPress={onHandleSignUp}
          disabled={!signUpEnable}
          style={
            !signUpEnable
              ? [styles.buttonSignIn, {backgroundColor: Colors.colorBlack3}]
              : styles.buttonSignIn
          }>
          <Text style={styles.signIn}>Create Account</Text>
        </TouchableOpacity>
        <Text style={styles.agree}>
          By creating an account, you agree to our{' '}
          <Text style={styles.agree1}>Terms of Service</Text> and{' '}
          <Text style={styles.agree1}>Privacy & Cookie Statement</Text>
        </Text>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{height: 30}}>
        <Image
          style={{ height: 30, width: 70 }}
          source={fwdLogo}
        />
      </View>
      {/*{loading && <LoadingView loading />}*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <Text style={styles.welcome}>Welcome to FWD eKYC</Text>
        <View style={styles.viewHorizontalSwitch}>
          <TouchableOpacity
            onPress={() => onHandleSwitch(0)}
            style={
              switchPage === 0
                ? styles.buttonSwitchEnable
                : styles.buttonSwitchDisable
            }>
            <Text
              style={
                switchPage === 0
                  ? styles.titleSwitchEnable
                  : styles.titleSwitchDisable
              }>
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onHandleSwitch(1)}
            style={
              switchPage === 1
                ? styles.buttonSwitchEnable
                : styles.buttonSwitchDisable
            }>
            <Text
              style={
                switchPage === 1
                  ? styles.titleSwitchEnable
                  : styles.titleSwitchDisable
              }>
              Create account
            </Text>
          </TouchableOpacity>
        </View>
        {switchPage === 0 ? renderSignIn() : renderSignUp()}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Mixins.heightTabbar,
    backgroundColor: Colors.colorWhite,
  },
  welcome: {
    color: Colors.colorBlack1,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 65,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.colorBlack3,
  },
  buttonForgot: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    marginTop: 15,
  },
  forgot: {
    color: Colors.colorBlack1,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonSignIn: {
    backgroundColor: Colors.colorBlue1,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 40,
  },
  signIn: {
    color: Colors.colorWhite,
    fontSize: 16,
    fontWeight: '600',
  },
  viewHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: Colors.colorBlack4,
    borderRadius: 4,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  viewHorizontalSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 40,
    backgroundColor: Colors.colorBlack4,
    borderRadius: 4,
    padding: 4,
  },
  buttonSwitchEnable: {
    flex: 1,
    backgroundColor: Colors.colorWhite,
    height: Mixins.heightButton,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSwitchEnable: {
    color: Colors.colorBlack1,
    fontSize: 14,
    fontWeight: '600',
  },
  buttonSwitchDisable: {
    flex: 1,
    height: Mixins.heightButton,
    backgroundColor: 'transparent',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSwitchDisable: {
    color: Colors.colorBlack2,
    fontSize: 14,
    fontWeight: '600',
  },
  agree: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.colorBlack5,
    textAlign: 'center',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  agree1: {
    fontWeight: '600',
    color: Colors.colorBlack1,
  },
});
