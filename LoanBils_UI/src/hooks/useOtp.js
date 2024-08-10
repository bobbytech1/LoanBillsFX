import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { verifyOtp, resendOtp } from '../services/authService';

const useOtp = (initialEmail) => {
    const [otp, setOtp] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [otpError, setOtpError] = useState('');
  const [buttonText, setButtonText] = useState('Verify');
  const [countdown, setCountdown] = useState(120); // 2 minutes countdown
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsResendEnabled(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setOtpError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Verifying....')
    let valid = true;

    if (!otp) {
      setOtpError('Please enter the code sent to your email.');
      valid = false;
    } else if (otp.length !== 6) {
      setOtpError('Please enter a valid 6-digit code.');
      valid = false;
    }

    if (valid) {
      try {
        await verifyOtp(email, otp);
        toast.success('OTP verification successful!');
        navigate('/login')
        // Handle success (e.g., redirect to another page)
      } catch (error) {
        toast.error('Invalid or expired OTP. Please try again.');
      }
    }
  };

  const handleResendOtp = async () => {
    try {
      await resendOtp(email);
      setCountdown(120); // Reset countdown
      setIsResendEnabled(false);
      toast.success('OTP has been resent to your email.');
    } catch (error) {
      toast.error(error.message || 'Failed to resend OTP.');
    }
  };

  return {
    otp,
    email,
    otpError,
    countdown,
    buttonText,
    isResendEnabled,
    handleOtpChange,
    handleSubmit,
    handleResendOtp,
  };
}
 
export default useOtp;