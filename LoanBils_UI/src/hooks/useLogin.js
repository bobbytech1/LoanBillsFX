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
        toast.success('Login successful redirecting....',);
        navigate('/dashboard'); // Redirect on successful login
      } catch (error) {
        toast.error('Login error:', error);
        setError(error.message || 'Failed to login. Please try again.'); // Set error state for display
      }
    }
  };

  return {
    email,
    password,
    showPassword,
    emailError,
    passwordError,
    error,
    handleEmailChange,
    handlePasswordChange,
    togglePasswordVisibility,
    handleSubmit,
  };
};


 
export default useLogin;

