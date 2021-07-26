import React, {createContext, useState, useContext} from "react";

interface IAuthContext{
    logged: boolean;
    sigIn(name: string, password: string): void;
    sigOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({children}) => {

    const [logged, setLogged] = useState<boolean>(() => {

        const isLogged = localStorage.getItem('@ApolloFinans:logged');

        return !!isLogged;
});

        const sigIn = (name: string, password: string) => {

            if(name === 'Apollo' && password === '123'){
                
                localStorage.setItem('@ApolloFinans:logged', 'true');
                setLogged(true);
            }
            else{
                alert('Senha ou usuário inválidos.');
            }
        }

        const sigOut = () => {
            localStorage.removeItem('@ApolloFinans:logged');
            setLogged(false);
        }

        return (
            <AuthContext.Provider value ={{logged, sigIn, sigOut}}>
                {children}
            </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext{
    
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth};