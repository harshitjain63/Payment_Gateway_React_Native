import React from 'react';
import {Button, Alert} from 'react-native';
import RazorpayService from '../services/RazorpayService';

interface PaymentButtonProps {
  userDetails: {
    name: string;
    email: string;
    contact: string;
    amount: string;
    address: string;
  };
}

const PaymentButton = ({userDetails}: PaymentButtonProps) => {
  const handlePayment = async () => {
    try {
      const paymentResponse = await RazorpayService.initiatePayment(
        userDetails,
      );
      if (paymentResponse.success) {
        Alert.alert(
          'Payment Success!',
          `Payment ID: ${paymentResponse.payment_id}`,
        );
      } else {
        Alert.alert('Payment Failed', 'Something went wrong');
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      }
    }
  };

  return <Button title="Pay Now" onPress={handlePayment} />;
};

export default PaymentButton;
