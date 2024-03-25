import { useContext, useState } from "react"
import validator from 'validator';
import { useMutation, useQuery } from "@tanstack/react-query"
import AuthPage from "../componets/AuthPage"
import commonToast from "../componets/Toast"
import register from "../../api/auth/register";
import { AuthContext } from "../../provider/authProvider";
import { AuthContextType } from "../../provider/auth";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    return (
        <AuthPage>
            <div className="mb-1 text-white font-jost text-4xl font-bold">Register Now!</div>

            <div>
                {/* <input className='w-full mb-6 rounded-lg py-2 text-gray-700 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username' /> */}
                <input
                    className="w-full mb-8 mt-8 rounded-full py-2 pl-10 text-xl bg-white placeholder-teal-900 "
                    placeholder="e-mail"
                    name="myInput"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div >
                <input
                    className="w-full mb-8 rounded-full py-2 pl-10 text-xl bg-white placeholder-teal-900 "
                    placeholder="create password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div >
                <input
                    className="w-full mb-10 rounded-full py-2 pl-10 text-xl bg-white placeholder-teal-900 "
                    placeholder="confirm password"
                    name="comfirm-password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </div>



            <RegisterButton email={email} password={password} conPassword={confirmPassword}/>
        </AuthPage>

    )
}

function RegisterButton({ email, password, conPassword }: { email: string, password: string, conPassword: string }) {
    const {setToken} = useContext(AuthContext) as AuthContextType
    let navigate = useNavigate();
    // mutation is a state
    const mutation = useMutation({
        mutationFn: () => {
            return register(email, password);
        },
        onError: () => {
            commonToast('Register Failed !')
        },

        onSuccess: (response) => {
            setToken(response.data.token)
            navigate("/");
        }
    });

    const clickableButton = <button
        className='bg-transparent text-white font-medium  hover:text-white py-1 px-7 border border-white rounded-full'
        onClick={() => {
            //1. check for password validation
            const isValidated: boolean = validator.isEmail(email)
            if (isValidated) {
                if (password === conPassword) {
                    //2. call mutation
                    mutation.mutate()
                } else {
                    commonToast('Password Mismatched !')
                }
            } else {
                commonToast('Invalid Email !')
            }
            
        }}>
        register
    </button>

    const loadingButton = <button disabled
        className='bg-transparent text-white font-medium  hover:text-white py-1 px-7 border border-white rounded-full'>
        Loading...
    </button>

    if (mutation.isPending) {
        return loadingButton;
    } else {
        return clickableButton
    }


}




export default RegisterPage

/*
useEffect = useQuery
event handler (ex: onClick) = useMutation
*/