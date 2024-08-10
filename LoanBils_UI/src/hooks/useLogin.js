import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../services/authService';
const useLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const [buttonText, setButtonText] = useState('Sign In');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(''); // Reset email error on change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); // Reset password error on change
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Signing In...')

    let valid = true;

    // Email validation
    if (!email) {
      setEmailError('Please enter your email address');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError('Please enter your password');
      valid = false;
    }

    if (valid) {
      try {
        const userData = { email, password };
        const data = await loginUser(userData);
        toast.success('Login successful redirecting....',{
          className: 'custom-toast custom-toast-success',
        });
        setTimeout(() => navigate('/dashboard'), 3000);// Redirect on successful login
      } catch (error) {
        toast.error('Login error:', error, {
          className: 'custom-toast custom-toast-error',
        });
        setError(error.message || 'Failed to login. Please try again.'); // Set error state for display
      }
    }

    setTimeout(() => {
      setButtonText('Sign In');
      // Handle login logic here
    }, 2000);
  };

  return {
    email,
    password,
    showPassword,
    emailError,
    passwordError,
    error,
    buttonText,
    handleEmailChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleSubmit,
  };
};


 
export default useLogin;

