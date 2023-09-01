import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slice/authSlice';
import styles from './styles';
import RoundedLogo from '../../components/RoundedImage';
import InputView from '../../components/InputView';
import { colors } from '../../theme/colors';
import { isEmailValid } from '../../Utils/utils';

const LoginScreen = () => {
  
  //Custom Hook
  const dispatch = useDispatch();

  //States
  const [email, setemail] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [password, setpassword] = useState("")
  const [erroPassword, setErroPassword] = useState("")

  // Reset Errors if any values get chagnes/
  useEffect(()=>{
    setErroPassword("")
    setErrorEmail("")
  }, [password, email])

  //Functions
  const onChangeEmail = (text: string) => setemail(text)
  const onChangePassword = (text: string) => setpassword(text)


  /***
   * @function handleLogin
   * Handling Login Button Press
   */
  const handleLogin = () => {
    if (isValidate()) {
      dispatch(login());
    }
  };

  /***
   * @function isValidate
   * This function is for checking the validation.
   */
  const isValidate = (): boolean => {
    if (!email.trim()) {
      setErrorEmail("Please Enter Email-ID.")
      return false
    }

    if (!isEmailValid(email.trim())) {
      setErrorEmail("Please Enter Valid Email-ID.")
      return false
    }

    if (!password.trim()) {
      setErroPassword("Please Enter Password.")
      return false
    }
    if(email.trim() !== "reactnative@tot.com"){
      setErrorEmail("Entered Email-ID is invalid.")
      return false
    }

    if(password.trim() !== "Tot@123"){
      setErroPassword("Entered password is invalid.")
      return false
    }

    return true
  }

  return (
    <View style={styles.container}>
      <View style={styles.innterContainer}>
        <RoundedLogo containerStyle={styles.logo} />
        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.body} >
          <InputView
            error={errorEmail}
            iconName='email'
            placeholder='Enter Email'
            value={email}
            onChangeText={onChangeEmail}
            inputProps={{ inputMode: 'email', keyboardType: 'email-address' }} />

          <InputView
            error={erroPassword}
            iconName='lock'
            value={password}
            placeholder='Enter Password'
            onChangeText={onChangePassword}
            inputProps={{ inputMode: 'text', secureTextEntry: true }} />

          <View style={styles.button}>
            <Button disabled={!(email && password)} color={email && password ? colors.prmiary : colors.disabled} title='Login' onPress={handleLogin} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
