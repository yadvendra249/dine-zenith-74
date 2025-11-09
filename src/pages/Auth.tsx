import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '@/store/slices/authSlice';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

const Auth = () => {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot' | 'otp'>('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'register') {
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: 'Error',
          description: 'Passwords do not match',
          variant: 'destructive',
        });
        return;
      }
      // Simulate OTP verification
      setMode('otp');
      toast({
        title: 'OTP Sent',
        description: 'Please check your email for the verification code',
      });
    } else if (mode === 'otp') {
      // Simulate OTP verification success
      dispatch(
        login({
          id: '1',
          name: formData.name,
          email: formData.email,
          role: 'customer',
        })
      );
      toast({
        title: 'Success',
        description: 'Account created successfully!',
      });
      navigate('/');
    } else if (mode === 'login') {
      // Simulate login
      dispatch(
        login({
          id: '1',
          name: 'Guest User',
          email: formData.email,
          role: 'customer',
        })
      );
      toast({
        title: 'Success',
        description: 'Logged in successfully!',
      });
      navigate('/');
    } else if (mode === 'forgot') {
      setMode('otp');
      toast({
        title: 'OTP Sent',
        description: 'Please check your email for the password reset code',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-6 text-foreground">
              {mode === 'login' && 'Welcome Back'}
              {mode === 'register' && 'Create Account'}
              {mode === 'forgot' && 'Reset Password'}
              {mode === 'otp' && 'Enter OTP'}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'otp' ? (
                <div className="flex flex-col items-center space-y-4">
                  <Label>Enter 6-digit OTP</Label>
                  <InputOTP
                    maxLength={6}
                    value={formData.otp}
                    onChange={(value) => setFormData({ ...formData, otp: value })}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              ) : (
                <>
                  {mode === 'register' && (
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  {mode !== 'forgot' && (
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                    </div>
                  )}

                  {mode === 'register' && (
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          setFormData({ ...formData, confirmPassword: e.target.value })
                        }
                        required
                      />
                    </div>
                  )}
                </>
              )}

              <Button type="submit" className="w-full">
                {mode === 'login' && 'Login'}
                {mode === 'register' && 'Register'}
                {mode === 'forgot' && 'Send OTP'}
                {mode === 'otp' && 'Verify OTP'}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-2">
              {mode === 'login' && (
                <>
                  <button
                    onClick={() => setMode('forgot')}
                    className="text-primary hover:underline text-sm"
                  >
                    Forgot Password?
                  </button>
                  <p className="text-muted-foreground text-sm">
                    Don't have an account?{' '}
                    <button
                      onClick={() => setMode('register')}
                      className="text-primary hover:underline"
                    >
                      Register
                    </button>
                  </p>
                </>
              )}

              {(mode === 'register' || mode === 'forgot') && (
                <p className="text-muted-foreground text-sm">
                  Already have an account?{' '}
                  <button onClick={() => setMode('login')} className="text-primary hover:underline">
                    Login
                  </button>
                </p>
              )}

              {mode === 'otp' && (
                <button
                  onClick={() => {
                    toast({
                      title: 'OTP Resent',
                      description: 'A new OTP has been sent to your email',
                    });
                  }}
                  className="text-primary hover:underline text-sm"
                >
                  Resend OTP
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
