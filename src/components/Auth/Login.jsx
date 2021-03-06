import React, { useState } from 'react';
import './Login.css';
import { useUserContext } from '../../hooks/useUserContext';
import { login } from '../../services/AuthService';
import { setAccessToken } from '../../stores/accessTokenStore';
import { useHistory } from 'react-router-dom';
import Navbar from '../navbar/Navbar';


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
    const { getUser: doLogin } = useUserContext();
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


    const isValid = () => {
        const { errors } = user;
        return !Object.keys(errors).some(error => errors[error])
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (isValid()) {
            login(user.fields)
                .then((response) => {
                    setAccessToken(response.access_token);
                    doLogin().then(() => history.push('/menus'))

                })
                .catch((e) => {
                    const { errors } = e.response.data;
                    const name = Object.keys(errors)
                    const value = errors[name];
                    setUser((prevState) => {
                        return {
                            fields: {
                                ...prevState.fields
                            },
                            errors: {
                                ...prevState.errors,
                                [name]: value
                            }
                        }
                    })
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
        const { name, value } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: value
        }))
    };

    const onFocus = (e) => {
        const { name, value } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: value
        }))
    };

    const { email, password } = user.fields;
    const { errors } = user;

    return (
        <div className="Login-box">
            <Navbar/> 


        
        <div className="Login container mt-5">
    
            <h6 className="mb-3 pb-3 ">Iniciar la sesion en IronMenu</h6>

            <form onSubmit={onSubmit} className="login-form">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label ">Email</label>
                    <input type="email" className={`form-control border-0 border-bottom ${errors.email && touched.email ? 'is-invalid' : ''}`}
                        autoComplete="off"
                        id="email" name="email" value={email} onChange={onChange} onBlur={onBlur} onFocus={onFocus} />
                    {
                        errors.email && (
                            <div className="invalid-feedback">
                                {errors.email}
                            </div>
                        )
                    }

                </div>


                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contrase??a</label>
                    <input type="password"
                        className={`form-control border-0 border-bottom ${errors.password && touched.password ? 'is-invalid' : ''}`}
                        id="password" name="password" value={password} onChange={onChange} onBlur={onBlur} onFocus={onFocus} />
                    {
                        errors.password && (
                            <div className="invalid-feedback">
                                {errors.password}
                            </div>
                        )
                    }
                </div>

                <button className="btn btn-color w-mx-full mt-3" type="submit" disabled={!isValid()}>
                    Iniciar Sesi??n
                    </button>

            </form>
        </div>
        </div>
    )

}


export default Login;