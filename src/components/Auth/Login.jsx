import React, { useState } from 'react';
import './Login.css';
import { useUserContext } from '../../hooks/useUserContext';
import {login} from '../../services/AuthService';
import { setAccessToken } from '../../stores/accessTokenStore';
import { useHistory } from 'react-router-dom';


const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const validators = {
    email: (value) => {
        let message;
        if (!value) {
            message = 'Debe informar un email'
        } else if (!EMAIL_PATTERN.test(value)) {
            message = 'El email es incorrecto'

        }

        return message;
    },

    password: (value) => {
        let message;
        if (!value) {
            message = 'Debe informar una password'
        } else if (value.length < 8) {
            message = 'La password debe tener al menos 8 caracteres';

        }

        return message;

    }

}

const Login = () => {
    const history = useHistory()
    const {getUser: doLogin } = useUserContext()   ; 
    const [user, setUser] = useState({

        fields: {
            email: '',
            password: ''
        },
        errors: {
            email: validators.email(),
            password: validators.password()
        }
    });


    const [touched, setTouched] = useState({});
    

    const isValid = () =>{
        const {errors} = user;
        return !Object.keys(errors).some( error => errors[error])
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (isValid()) {
     //       console.log(user.fields);
            login(user.fields)
            .then((response) => {
       //         console.log(response)
                setAccessToken(response.access_token);
                doLogin().then(()=> history.push('/menus'))
                
            })
        }
    }

    const onChange = (e) => {
        const { name, value } = e.target;

        setUser((prevState) => {
            return {

                fields: {
                    ...prevState.fields,
                    [name]: value
                },
                errors: {
                    ...prevState.errors,
                    [name]: validators[name] && validators[name](value)
                }

            }
        })
    }

    const onBlur = (e) => {
        const { name, value} = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: value
        }))
    };

        const onFocus = (e) => {
            const { name ,value} = e.target;
            setTouched((prevTouched) => ({
                ...prevTouched,
                [name]: value
            }))
        };

        const { email, password } = user.fields;
        const { errors} = user;
        
        return (
            <div className="Login container mt-5">
                <h5 className="mb-3 pb-3 ">Iniciar la sesion en IronMenu</h5>

                <form onSubmit={onSubmit} className="login-form">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label ">Email</label>
                        <input type="email" className={`form-control border-0 border-bottom ${errors.email && touched.email ? 'is-invalid' : ''}`}  
                        autoComplete="off"
                            id="email" name="email" value={email} onChange={onChange} onBlur={onBlur} onFocus={onFocus}/>
                       {  
                        errors.email && (
                            <div className="invalid-feedback">
                            {errors.email}
                        </div>  
                        )
                    }

                    </div>
                
            
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" 
                        className={`form-control border-0 border-bottom ${errors.password && touched.password ? 'is-invalid' : ''}`} 
                            id="password" name="password" value={password} value={password} onChange={onChange} onBlur={onBlur} onFocus={onFocus}/>
                              {
                        errors.password && (
                            <div className="invalid-feedback">
                            {errors.password}
                        </div>
                        )
                    }
                    </div>
                  
                    <button className="btn btn-primary" type="submit" disabled={!isValid()}>
                        Iniciar Sesión
                    </button>

                </form>
            </div>

        )

    }


    export default Login;