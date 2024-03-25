import { useContext, useState } from "react"
import login from "../../api/auth/login"
import { useMutation} from "@tanstack/react-query"
import toast from "react-hot-toast"
import AuthPage from "../componets/AuthPage"
import { AuthContext } from "../../provider/authProvider"
import { AuthContextType } from "../../provider/auth"
import { Outlet } from "react-router-dom"
import authToast from "../componets/Toast"

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <AuthPage>
            <div className="mb-1 text-white font-jost text-4xl font-bold">Hi there,</div>
                    <div className="text-white text-2xl">Welcome to our</div>
                    <div className="mb-3 text-white text-2xl">contacts portal</div>
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
                            className="w-full mb-10 rounded-full py-2 pl-10 text-xl bg-white placeholder-teal-900 "
                            placeholder="password"
                            name="myInput"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>


                    <LoginButton email={email} password={password} />
        </AuthPage>

    )
}

function LoginButton({ email, password }: { email: string, password: string }) {
    const {setToken} = useContext(AuthContext) as AuthContextType

    // mutation is a state
    const mutation = useMutation({
        mutationFn: () => {
            return login(email, password);
        },
        onError: () => {
            authToast('Login Failed !')
        },

        onSuccess: (response) => {
            setToken(response.data.token)
        }
    });

    const clickableButton = <button
        className='bg-transparent text-white font-semibold hover:text-white py-1 px-7 border border-white rounded-full'
        onClick={() => {
            mutation.mutate()
        }}>
        login
    </button>

    const loadingButton = <button disabled
    className='bg-transparent text-white font-semibold hover:text-white py-1 px-7 border border-white rounded-full'>
        Loading
    </button>

    if (mutation.isPending) {
        return loadingButton;
    } else {
        return clickableButton
    }


}


// const notify = () => toast.error('Login Failed', {
//     id: "1",
//     duration: 4000,
//     position: 'top-center',
// });

export default LoginPage

/*
useEffect = useQuery
event handler (ex: onClick) = useMutation
*/