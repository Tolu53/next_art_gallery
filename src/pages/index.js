import Image from 'next/image'
import pic1 from '../assets/img5.jpg'
import {AiFillGoogleCircle ,AiFillTwitterCircle,AiFillFacebook} from 'react-icons/ai'
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { collection, addDoc,doc ,setDoc ,getFirestore} from "firebase/firestore"; 
// import { useNavigate } from 'react-router-dom';
// import { firebaseApp } from '../firebase-config';
export default function Home() {
  return (

// const Login = () => {
//     const firebaseAuth = getAuth(firebaseApp);
//     const provider = new GoogleAuthProvider();
//     const firebaseDb = getFirestore(firebaseApp);
//     const navigate = useNavigate();

//     const login = async () =>{
//         const {user} = await signInWithPopup(firebaseAuth,provider);
//         const { refreshToken, providerData} = user;
        
//         localStorage.setItem("user", JSON.stringify(providerData));
//         localStorage.setItem("accessToken", JSON.stringify(refreshToken));

//         await setDoc(doc(firebaseDb, 'users',providerData[0].uid),
//         providerData[0]);
//         navigate("/",{replace:true});

//     };
    <div>
        <div className='h-screen w-full flex justify-center items-center'>
            <div className='flex basis-1/2 h-screen '>
                <Image src={pic1} alt="" className=' w-full object-cover' />
            </div>
            <div className='basis-1/2  bg-slate- max-h-screen flex flex-col items-center justify-center'>
                <div className='flex flex-col justify-center items-center  w-full'>
                    <h1 className='text-5xl'>Sign in to you account</h1>
                    <p>or <span className='text-blue-700'>just visiting</span></p>
                </div>
                <div className='flex flex-col w-[50%]'>
                    <input type="text" placeholder='Email Address' className='w-full shadow-lg my-2 outline outline-1' />
                    <input type="text" placeholder='password' className='w-full shadow-lg my-2 outline outline-1 ' />
                    <div className='flex justify-between'>
                        <div className='flex justify-center items-center'>  
                             <input type="checkbox" className='mx-2'/>
                            <p> remember me </p>
                        </div>
                            <div className='text-green-500'>
                                Forgot Password?
                            </div>
                    </div>
                   <button className='bg-red-300 w-full py-1 hover:scale-105 active:scale-95 duration-500'>Sign in</button>
                   <p>Or Sign in with </p>
                   <div className='flex py-4 w-full'>
                    
                    <div onClick={() => login()} className='p-4 shadow-lg basis-1/3 flex items-center hover:scale-105 active:scale-95 rounded-md justify-center cursor-pointer mx-2'>
                        <AiFillGoogleCircle size={40} />
                    </div>
                    <div className='p-4 shadow-lg basis-1/3 flex items-center hover:scale-105 active:scale-95 rounded-md justify-center cursor-pointer mx-2'>
                        <AiFillTwitterCircle size={40} />
                    </div>
                    <div className='p-4 shadow-lg basis-1/3 flex items-center hover:scale-105 active:scale-95 rounded-md justify-center cursor-pointer mx-2'>
                        <AiFillFacebook size={40} />
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

  
