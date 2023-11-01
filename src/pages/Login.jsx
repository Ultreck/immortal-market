import { Link } from "react-router-dom";
import Button from "@/components/global/Button.jsx";
import Input from "@/components/global/Input.jsx";
import PasswordInput from "@/components/global/PasswordInput.jsx";
import Checkbox from "@/components/global/Checkbox.jsx";
import { useToast } from "@/hooks/use-toast.jsx";
import { useAuth } from "@/hooks/use-auth.jsx";
import { useLoginMutation } from "@/api/auth.js";
import { useForm } from "react-hook-form";

const Login = () => {
  const toast = useToast();
  const { authenticate } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutateAsync: login, isPending: isLoginLoading } = useLoginMutation();

  const submit = async (values) => {
    try {
      const res = await login(values);
      const { user, token } = res.data;
      authenticate({ user, token });
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div className="container py-20">
      <div className="w-full max-w-md mx-auto rounded-xl">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="mt-3">Enter your credentials below to sign in to your account</p>
        </div>
        <form onSubmit={ handleSubmit(submit) }>
          <div className="space-y-4">
            <Input
              label="Email address" bordered type="email"
              { ...register('email', { required: 'Email address is required' }) }
              error={ errors?.email?.message } disabled={ isLoginLoading }
            />
            <PasswordInput
              label="Password" bordered
              { ...register('password', { required: 'Password is required' }) }
              error={ errors?.password?.message } disabled={ isLoginLoading }
            />
          </div>
          <Checkbox
            className="mt-6" disabled={ isLoginLoading }
            { ...register('remember') }
          >
            Remember me
          </Checkbox>
          <Button type="submit" className="mt-10" size="lg" loading={ isLoginLoading }>
            Login
          </Button>
          <p className="mt-4">
            New to Statisense?
            <Link to="/register" className="ml-2 text-primary-600 italic">Sign up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
