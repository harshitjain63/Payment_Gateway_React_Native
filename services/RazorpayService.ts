import RazorpayCheckout from 'react-native-razorpay';
import {generateUniqueOrderId} from './utils/OrderId';
import {RAZORPAY_KEY} from '@env';

const RazorpayService = {
  initiatePayment: async (userDetails: {
    name: string;
    email: string;
    contact: string;
    amount: string;
    address: string;
  }) => {
    console.log(RAZORPAY_KEY, "'");
    try {
      const {name, email, contact, amount, address} = userDetails;

      const order_ids = await generateUniqueOrderId(parseInt(amount, 10));
      const options = {
        description: 'Test Payment',
        image: 'https://example.com/logo.png',
        currency: 'INR',
        key: RAZORPAY_KEY,
        amount: parseInt(amount, 10) * 100,
        name: 'Test App',
        order_id: order_ids,
        prefill: {
          email: email,
          contact: contact,
          name: name,
        },
        theme: {color: '#F37254'},
        notes: {address: address},
      };

      const response = await RazorpayCheckout.open(options);
      return {success: true, payment_id: response.razorpay_payment_id};
    } catch (error) {
      return {success: false, error};
    }
  },
};

export default RazorpayService;
