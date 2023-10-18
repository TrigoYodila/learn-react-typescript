import { useState } from "react"

type AuthUser = {
    name:string
    email:string
}


export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)  //accepte une valeur de type null ou AuthUser
    //const [user, setUser] = useState<AuthUser>({} as AuthUser);   // assertion de type

    const handleLogin = () => {
        setUser({
            name:'Trigo',
            email:'trigo@gmail.com'
        })
    };

    const handleLogout = () => {
        setUser(null)
    };

    return (
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user?.name }</div>
        {/* <div>User name is {user.name }</div>  sans ? avec assertion de type  */}
        <div>User email is {user?.email}</div>
      </div>
    );
}