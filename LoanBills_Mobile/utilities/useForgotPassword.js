import { useState } from 'react';
import { Alert } from 'react-native';
import { router } from 'expo-router'; // Use expo-router for navigation in React Native
import { requestPasswordReset } from '../services/api'; // Ensure correct path

const useForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [buttonText, setButtonText] = useState('Send Reset Link');
  
    const handleEmailChange = (text) => setEmail(text);
  
    const handleSubmit = async () => {
      setEmailError('');
      setButtonText('Sending....');
  
      if (!email) {
        setEmailError('Please enter your email address');
        setButtonText('Send Reset Link');
        return;
      }
  
      try {
        await requestPasswordReset(email); // Send email directly if API expects a single string
        Alert.alert('Success', 'Reset link sent to your email.');
        router.replace('/sign-in'); // Navigate to sign-in page
      } catch (error) {
        console.error('Error:', error); // Log detailed error for debugging
  
        // Handle specific error for invalid email address
        if (error.message.includes('Invalid email address')) {
          setEmailError('Invalid email address');
        } else {
          Alert.alert('Error', 'Error sending reset link'); // User-friendly error message
        }
      } finally {
        setButtonText('Send Reset Link'); // Reset button text regardless of outcome
      }
    };
  
    return {
      email,
      emailError,
      buttonText,
      handleEmailChange,
      handleSubmit,
    };
  };
  
  export default useForgotPassword;