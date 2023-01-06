import { useLogin } from 'hooks';

const Login = () => {
  const login = useLogin();
  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.log('err: ', error);
    }
  };
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 h-screen">
      <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 p-10 bg-black-rgba rounded-xl shadow-lg">
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
