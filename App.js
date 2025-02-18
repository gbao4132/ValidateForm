import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = (number) => {
    const regex = /^\d{10}$/;
    return regex.test(number);
  };

  const handleContinue = () => {
    if (validatePhoneNumber(phoneNumber)) {
      setError('');
      console.log('Số điện thoại hợp lệ:', phoneNumber);
    } else {
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại');
    }
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={10}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
      <View style={styles.keyboard}>
        {}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;