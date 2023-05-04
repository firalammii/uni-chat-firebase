import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { GoogleAuthProvider } from 'firebase/auth';
// import { signInWithRedirect } from 'firebase/app';

// import {} from 'firebase/app';

import { auth } from '../firebase';
console.log(auth);

const Login = () => {
    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to UniChat</h2>
                <div
                    className='login-button google'
                    onClick={() => new GoogleAuthProvider()}
                >
                    <GoogleOutlined /> Sign in with Google
                </div>
                <br /> <br />
                <div className='login-button facebook'>
                    <FacebookOutlined /> Sign in with FaceBook
                </div>

            </div>

        </div>
    );
};

export default Login;