import axios from 'axios';
import {RAZORPAY_KEY, RAZORPAY_SECRET} from '@env';

export async function generateUniqueOrderId(totalPrice: number) {
  console.log(RAZORPAY_KEY);
  try {
    const response = await axios.post(
      'https://razorpay-server-juby.onrender.com/order',
      {
        key: RAZORPAY_KEY,
        secret: RAZORPAY_SECRET,
        amount: totalPrice * 100,
        currency: 'INR',
      },
    );
    const data = await response.data;
    return data.order_id;
  } catch (errr) {
    console.log(errr);
  }
}
