import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import PaymentButton from '../component/PaymentButton';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    contact: '',
    amount: '',
    address: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setUserDetails(prevState => ({...prevState, [field]: value}));
  };

  const isFormValid = () => {
    const {name, email, contact, amount, address} = userDetails;
    return name && email && contact && amount && address;
  };

  return (
    <LinearGradient colors={['#00c6ff', '#0072ff']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>Razorpay Payment Integration</Text>

        <Image
          source={require('../constants/online-payment.png')} // Update the path as needed
          style={styles.logo}
        />

        <TextInput
          placeholder="Name"
          style={styles.input}
          value={userDetails.name}
          onChangeText={value => handleInputChange('name', value)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={userDetails.email}
          onChangeText={value => handleInputChange('email', value)}
        />
        <TextInput
          placeholder="Contact"
          style={styles.input}
          keyboardType="phone-pad"
          value={userDetails.contact}
          onChangeText={value => handleInputChange('contact', value)}
        />
        <TextInput
          placeholder="Amount"
          style={styles.input}
          keyboardType="numeric"
          value={userDetails.amount}
          onChangeText={value => handleInputChange('amount', value)}
        />
        <TextInput
          placeholder="Address"
          style={styles.input}
          value={userDetails.address}
          onChangeText={value => handleInputChange('address', value)}
        />

        {isFormValid() ? (
          <PaymentButton userDetails={userDetails} />
        ) : (
          <TouchableOpacity
            style={styles.gradientButtonContainer}
            onPress={() => Alert.alert('Please fill in all fields')}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.gradientButton}>
              <Text style={styles.buttonText}>Pay Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#192f6a',
    marginBottom: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f0f8ff',
    color: '#333',
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 5,
  },

  gradientButtonContainer: {
    width: '80%',
    borderRadius: 5,
    marginTop: 20,
  },
  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: '50%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 15,
  },
});

export default HomeScreen;
