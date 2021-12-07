import { createContext, useState } from 'react';


export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        id: '',
        email: '',
        authToken: ''
    
    })

    function logout() {
        setUser( oldState=> ({...oldState,id: '', email: '', authToken: '' }))
        localStorage.clear()
    }
    function login(id, email, authToken) {
        setUser( oldState=> ({...oldState,id: id, email: email, authToken: authToken }))
        localStorage.setItem('id', id)
        localStorage.setItem('userName', email)
        localStorage.setItem('authToken', authToken)
    }
    return (
        <AuthContext.Provider value={{ user, login,logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

