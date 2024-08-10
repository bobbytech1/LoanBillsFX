import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetPassword } from '../services/authService';

const useResetPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Reset Password');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');
  const email = query.get('email');

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmationChange = (e) => setPasswordConfirmation(e.target.value);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setButtonText('Resetting Password....')

    if (!password || password !== passwordConfirmation) {
      setError('Passwords do not match or are empty.');
      toast.error('Passwords do not match or are empty.');
      return;
    }

    try {
      await resetPassword({ token, email, password, password_confirmation: passwordConfirmation });
      setSuccessMessage('Password has been reset. You can now log in.');
      toast.success('Password has been reset. You can now log in.');
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setError('Failed to reset password');
      toast.error('Failed to reset password');
    }
  };

  return {
    password,
    passwordConfirmation,
    showPassword, 
    setShowPassword,
    togglePasswordVisibility,
    error,
    successMessage,
    buttonText,
    handlePasswordChange,
    handlePasswordConfirmationChange,
    handleSubmit,
  };
};

export default useResetPassword;
