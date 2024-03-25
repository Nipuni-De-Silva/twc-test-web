import { useMutation, useQuery } from "@tanstack/react-query";
import TWCLogo from "../componets/Logo"
import login from "../../api/auth/login";
import ProfilePic from "./Avatar";
import NewContactButton from "./AddButton";
import getContactList from "../../api/contact/get";
import { Outlet } from "react-router-dom";

interface Contact {
    fullName: string,
    gender: string,
    email: string,
    phoneNumber: string
}

function ContactsPage() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: getContactList,
    })

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }
    console.log(data)

    return (
        <div>
            <Outlet/>
            <div className="flex flex-col min-h-screen w-full px-[100px] bg-primary text-white ">
                <div className="flex-1 flex flex-col justify-start min-w-[500px] w-full mt-[60px] mb-[100px]">
                    <div className="mb-[70px]">
                        <TWCLogo />
                    </div>

                    <div className="w-full flex flex-row justify-between items-center mb-1 text-white font-jost text-4xl font-bold ">
                        <div>
                            Contact
                        </div>
                        <div>
                            <NewContactButton />
                        </div>
                    </div>


                    <div className=" flex-1 flex flex-col min-h-[100px] max-h-[300px] py-[20px] mt-[30px] bg-white rounded-[30px] text-primary">
                        <ContactHeader />
                        
                        <div className="flex-1 flex flex-col overflow-scroll [&::-webkit-scrollbar]:hidden">
                        <ContactsTable contactList={data}/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}

function ContactsTable({contactList}: {contactList: Array<Contact>}) {
    let children: Array<React.ReactElement> = []
    let index = 0
    contactList.forEach(contact => {
        
        children.push(
            <ContactRow
                fullName={contact.fullName}
                gender={contact.gender}
                email={contact.email}
                phone={contact.phoneNumber}
                key={index}
            />
        );
        index++
    });
    return (
        <div>{children}</div>
    )
}
function ContactHeader() {
    return (
        <div className="flex flex-row mb-2">
            <div className="flex flex-col justify-center items-center ml-8  h-[30px]">
                <div className="w-[50px] h-[20px] rounded-full" >
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-start min-w-[150px]  ml-8 ">
                full name
            </div>
            <div className="flex flex-col justify-center items-start w-[90px] ml-8 ">
                gender
            </div>
            <div className="flex flex-col justify-center items-start flex-1  min-w-[150px] ml-8">
                email
            </div>
            <div className="flex flex-col justify-center items-start w-[170px] ml-8 ">
                phone number
            </div>
            <div className="flex flex-col justify-center items-start w-[90px] ml-8 mr-8 ">

            </div>
        </div>
    )
}
function ContactRow({ fullName, gender, email, phone }: { fullName: string, gender: string, email: string, phone: string }) {
    return (
        <div className="flex flex-row mt-4">
            <div className="flex flex-col justify-center items-center ml-8  h-[50px]">
                <ProfilePic gender={gender} />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start min-w-[150px]  ml-8 ">
                {fullName}
            </div>
            <div className="flex flex-col justify-center items-start w-[90px] ml-8 ">
                {gender}
            </div>
            <div className="flex flex-col justify-center items-start flex-1  min-w-[150px] ml-8 ">
                {email}
            </div>
            <div className="flex flex-col justify-center items-start w-[170px] ml-8 ">
                {phone}
            </div>
            <div className="flex flex-col justify-center items-start w-[90px] ml-8 mr-8 ">

            </div>
        </div>
    )
}




export default ContactsPage