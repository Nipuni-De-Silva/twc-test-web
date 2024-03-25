import { useMutation } from "@tanstack/react-query";
import TWCLogo from "./componets/Logo"
import login from "../api/auth/login";

function WelcomePage() {
    return <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
        <div className="max-h-[500px] min-w-[664px]">
            <div className=" mb-[80px]">
                <TWCLogo />
            </div>

            <div className="mb-1 text-white font-jost text-4xl font-bold">
                Welcome,
            </div>
            <div className="text-white text-2xl">
                This is where your contacts will live. Click the button below
            </div>
            <div className="mb-[50px] text-white text-2xl">
                to add a new contact.
            </div>
            <div className="mb-[46px]">
                <AddFirstContactButton />
            </div>
           
        </div>
        <div className="flex flex-col justify-end items-end w-full pr-10">
            <div>@ logout</div>
        </div>
    </div>
}

function AddFirstContactButton() {

    // mutation is a state
    const mutation = useMutation({
        mutationFn: () => {
            return login("email", "password");
        },
        onError: () => {
            //notify()
        },

        onSuccess: (response) => {
            console.error('TODO: >>> Naviagete to Home screennnn')
            //console.log(response.data.token)
        }
    });

    const clickableButton = <button
        className='bg-transparent text-white font-semibold hover:text-white py-1 px-7 border border-white rounded-full'
        onClick={() => {
            mutation.mutate()
        }}>
        add your first contact
    </button>

    const loadingButton = <button disabled
    className='bg-transparent text-white font-semibold hover:text-white py-1 px-7 border border-white rounded-full bg-slate-600'>
        add your first contact
    </button>

    if (mutation.isPending) {
        return loadingButton;
    } else {
        return clickableButton
    }


}



export default WelcomePage