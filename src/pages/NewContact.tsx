import { useMutation } from "@tanstack/react-query";
import TWCLogo from "./componets/Logo"
import login from "../api/auth/login";

function NewContactPage() {
    return <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
        <div className="max-h-[500px] min-w-[664px]">
            <div className=" mb-[80px]">
                <TWCLogo />
            </div>

            <div className="mb-1 text-white font-jost text-4xl font-bold">
                New Contact
            </div>
            <div className="flex justify-between">
                <div>
                    {/* <input className='w-full mb-6 rounded-lg py-2 text-gray-700 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username' /> */}
                    <input
                        className="w-full mb-8 mt-8 rounded-full py-2 pl-10 text-xl bg-white placeholder-teal-900 "
                        placeholder="e-mail"
                        name="myInput"
                        value={"email"}
                        onChange={() => { }}
                    />
                </div>
                <div>
                    {/* <input className='w-full mb-6 rounded-lg py-2 text-gray-700 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username' /> */}
                    <input
                        className="w-full mb-8 mt-8 rounded-full py-2 pl-10 text-xl bg-white placeholder-teal-900 "
                        placeholder="e-mail"
                        name="myInput"
                        value={"email"}
                        onChange={() => { }}
                    />
                </div>
            </div>

            <div className="mb-[46px]">
                <NewContactButton />
            </div>

        </div>
        <div className="flex flex-col justify-end items-end w-full pr-10">
            <div>@ logout</div>
        </div>
    </div>
}

function NewContactButton() {

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



export default NewContactPage