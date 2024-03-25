import { PropsWithChildren, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import TWCLogo from "./Logo";

function AuthPage({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="flex flex-column   h-screen">

                <div className="flex flex-col w-1/2 justify-between bg-primary">

                    <div className="pl-6 min-w-[366px] m-auto">
                        {children}
                    </div>

                </div>
                <div className="flex-1 flex flex-col justify-center items-center w-full h-full">
                    <TWCLogo/>
                </div>
            </div>
        </>

    );
}

export default AuthPage