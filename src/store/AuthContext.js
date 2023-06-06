import react, { useState, useCallback } from "react";

const AuthContext = react.createContext({
    token: '',
userId:'',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {
    let initialToken;
    const dataToken = localStorage.getItem('token');
    if (dataToken) {
        initialToken = dataToken
    }
    const [token, setToken] = useState(initialToken);
    const [userId, setUserId] = useState('');
    const userIsLoggedIn = !!token;

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }, []);

    const loginHandler = (token,user_id) => {
        setToken(token);
        setUserId(user_id)
        localStorage.setItem('token', token);
        localStorage.setItem('userId', user_id);
    }
    const contextValues = {
        token: token,
        dataUser: userId,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return < AuthContext.Provider value={contextValues}> {props.children}</AuthContext.Provider>
}
export default AuthContext;