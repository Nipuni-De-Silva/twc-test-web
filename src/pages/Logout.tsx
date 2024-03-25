import { useContext, useEffect } from "react"
import { removeTokenFromApi } from "../api/auth/token"
import { AuthContext } from "../provider/authProvider"
import { AuthContextType } from "../provider/auth"

function Logout() {
    const {removeToken} = useContext(AuthContext) as AuthContextType
   useEffect(() =>{
    removeToken()
   })
    return <div>
        Logout
    </div>
}

export default Logout