import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../services/authService';
const useRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Full name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.country) newErrors.country = 'Country is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const result = await registerUser(formData);
                toast.success('Registration successful! Please check your email for the OTP.');
                navigate(`/verification?email=${encodeURIComponent(formData.email)}`); // Pass email to OTP page
            } catch (error) {
                toast.error('Registration failed. Please try again.');
                if (error.name) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        fullName: error.name[0]
                    }));
                }
            }
        }
    };
    


    return {
        formData,
        errors,
        handleInputChange,
        handleSubmit,
    };
};

 
export default useRegister;