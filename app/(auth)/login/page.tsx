import FormLogin from '@/components/auth/form-login';

const Login = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Login to your account</h1>
      <FormLogin></FormLogin>
    </div>
  );
};

export default Login;
