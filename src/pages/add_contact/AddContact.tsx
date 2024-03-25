import { useState } from "react"
import TWCLogo from "../componets/Logo"
import NewContactButton from "./AddButton"

function AddNewContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    return (
        <div>

            <div className="flex flex-col justify-center items-center min-h-screen px-[100px] bg-primary text-white ">
                <div className="flex-1 flex flex-col  min-w-[770px] max-w-[770px] justify-start mt-[60px] mb-[100px]">
                    <div className="mb-[70px]">
                        <TWCLogo />
                    </div>

                    <div className="w-full flex flex-row justify-between items-center mb-1 text-white font-jost text-4xl font-bold ">
                        <div>
                            New Contact
                        </div>

                    </div>

                    <div className="text-teal-900">
                        <div className="flex flex-row  justify-between mb-6 mt-4">
                        <div className="flex-1 mr-[18px]">
                            <input
                                className="w-full rounded-full py-2 pl-10 text-xl bg-white placeholder-teal-900 "
                                placeholder="full name"
                                name="full-name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 ml-[18px]">
                            <input
                                className="w-full rounded-full py-2 pl-10 text-xl bg-white placeholder-teal-900 "
                                placeholder="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row  justify-between">
                        <div className="flex-1 mr-[18px]">
                            <input
                                className="w-full mb-10 rounded-full py-2 pl-10 text-xl bg-white placeholder-teal-900 "
                                placeholder="phone number"
                                name="phone-number"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="flex-1 ml-[18px] mt-[8px] flex flex-row items-center justify-between  h-full text-white">
                            gender
                            <div className="flex items-center ">
                                <input onClick={() => {
                                    setGender('Male')
                                }} id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium  ">male</label>
                            </div>
                            <div className="flex items-center">
                                <input onClick={() => {
                                    setGender('Female')
                                }}
                                id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium">female</label>
                            </div>
                        </div>
                    </div>
                    
                    </div>

                    <div>
                        <NewContactButton contact={{
                            fullName: name,
                            email: email,
                            phoneNumber: phone,
                            gender: gender
                        }}/>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default AddNewContactPage