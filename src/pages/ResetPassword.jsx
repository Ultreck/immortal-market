import { useState } from 'react';
import ResetPasswordEmail from '../components/core/auth/ResetPasswordEmail.jsx';
import ResetPasswordOtp from '../components/core/auth/ResetPasswordOtp.jsx';
import Success from '@/components/global/Success.jsx';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [view, setView] = useState('email');

  const handleEmailDone = (v) => {
    setEmail(v);
    setView('otp');
  };

  const handleOtpDone = () => setView('success');

  return (
    <div className="container py-20">
      {view === 'email' && <ResetPasswordEmail onDone={handleEmailDone} />}
      {view === 'otp' && <ResetPasswordOtp email={email} onDone={handleOtpDone} />}
      {view === 'success' && (
        <Success
          text="Password changed"
          subtext="Login with your new password to continue"
          buttonText="Login"
          onButtonClick={() => {
            navigate('/login', { replace: true });
          }}
        />
      )}
    </div>
  );
};

export default ResetPassword;
