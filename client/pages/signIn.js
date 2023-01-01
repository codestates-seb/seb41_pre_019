import { useRouter } from 'next/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../firebase";
import { useState } from 'react';
import authStore  from '../store/auth';

const auth = getAuth(firebase);

const SignIn = () => {
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



  const signIn = async() => {
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
    <div className="signin001">
      <div className="signin002">
        <div className="signin003">
          <h2 className="signin004">
            Sign in to your account
          </h2>
        </div>

        <div className="signin005">
          <div className="signin006">
            <form className="signform001" action="#" method="POST">
              <div>
                <label htmlFor="email" className="signin007">
                  Email address
                </label>
                <div className="signin008">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="signin009"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="signin010">
                  Password
                </label>
                <div className="signin011">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="signin012"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={signIn}
                  type="button"
                  className="signin013"
                >
                  Sign in
                </button>
              </div>

              <div>
                <button
                  onClick={goToSignUp}
                  type="button"
                  className="signin014"
                >
                  Sign Up
                </button>
              </div>
              <div>
                <button
                  onClick={googleLogin}
                  type="button"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  GOOGLE LOGIN
                </button>
              </div>
              <div>
                <button
                  onClick={() => alert('sign in')}
                  type="button"
                  className="signin015"
                >
                  FACEBOOK LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};



export default SignIn;
