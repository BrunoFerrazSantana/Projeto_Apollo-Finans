import React, {useState} from 'react';
import {Container,
        Form,
        FormTitle
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import AuxLogin from '../../components/AuxLogin';
import PlataformsLogin from '../../components/PlataformsLogin';
import {useAuth} from '../../components/hooks/auth';

const SignIn: React.FC = () => {

    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {sigIn} = useAuth();

    return(
        <Container>
            
            <AuxLogin>
                
            </AuxLogin>

            <Form onSubmit = {() => sigIn(name, password)}>
                <FormTitle>Entrar</FormTitle>

                <Input 
                    type = "name"
                    required
                    placeholder = "Digite seu usuário"
                    onChange = {(e) => setName(e.target.value)}
                />

                <Input 
                    type = "password"
                    required
                    placeholder = "Digite sua senha"
                    onChange = {(e) => setPassword(e.target.value)}
                />            
                
                <Button type = "submit">
                    Acessar
                </Button>

                <PlataformsLogin />
            </Form>
        </Container>
    );
}

export default SignIn;