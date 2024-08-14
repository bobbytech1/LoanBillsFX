import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { requestPasswordReset } from '../services/authService';

const useForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [buttonText, setButtonText] = useState('Send Reset Link');
  const navigate = useNavigate();
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setButtonText('Sending....')

    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }

    try {
      await requestPasswordReset({ email });
      toast.success('Reset link sent to your email.');
      navigate('/login')
    } catch (error) {
      toast.error('Error sending reset link');
    } finally {
      setButtonText('Send Reset Link')
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
