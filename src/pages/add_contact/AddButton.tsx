import { useMutation } from "@tanstack/react-query";
import login from "../../api/auth/login";
import { Contact } from "../../api/contact/add";

function NewContactButton({contact}: {contact: Contact}) {
    console.log(contact)
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

    return <button
    className='bg-transparent text-white text-lg font-light hover:text-white py-1 px-7 border border-white rounded-full'
    onClick={() => {
        mutation.mutate()
    }}> add new contact </button>
    


}

export default NewContactButton