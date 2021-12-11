import { createContext, useState, useEffect } from 'react';


export const AuthContext = createContext();
export function checkForToken() {
    var serverIsoDate = new Date(localStorage.getItem('tokenExpirationTime'));
    if (serverIsoDate) {
        var now = new Date();
        var isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
        return serverIsoDate < new Date(isoDate)
    }

}

export const AuthProvider = (props) => {
    const [user, setUser] = useState({
        id: '',
        userName: '',
        authToken: ''

    })
    
    checkForToken();
    useEffect(() => {
        var id = localStorage.getItem('id');
        var userName = localStorage.getItem('userName');
        var authTOken = localStorage.getItem('authToken')
        setUser(prevUser => ({ ...prevUser, id: id, userName: userName, authToken: authTOken }))
    }, [])

    function logout() {
        setUser(oldState => ({ ...oldState, id: '', email: '', authToken: '' }))
        localStorage.clear()
    }

    function login(id, userName, authToken, expiration) {
        setUser(oldState => ({ ...oldState, id: id, userName: userName, authToken: authToken }))
        localStorage.setItem('id', id)
        localStorage.setItem('userName', userName)
        localStorage.setItem('authToken', authToken)
        localStorage.setItem('tokenExpirationTime', expiration);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, checkForToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

