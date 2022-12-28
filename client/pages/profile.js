import { useRouter } from 'next/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../firebase";
import { useState } from 'react';
import authStore  from '../store/auth';

const auth = getAuth(firebase);

const profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const setIsLogged = authStore((state) => state.setIsLogged);

  const goToSignUp = () => {
    router.push('/signUp');
  };

  const googleLogin = async() => {
    const provider = new GoogleAuthProvider();
    const userData = await signInWithPopup(auth, provider)
    const token = await userData.user.getIdToken();
    console.log(token)
    window.alert(token)
    localStorage.setItem('accessToken', token)
    setIsLogged();
    router.push('/');
    
  }



  const Update = async() => {
    try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token = await user.getIdToken()
    console.log(token)
    window.alert(token)
    localStorage.setItem('accessToken', token)
    setIsLogged();
    router.push('/');
  
  
    }  catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert('아이디 및 비밀번호가 틀립니다')
    };
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={Update}
                  type="button"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Update
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};



export default profile;
