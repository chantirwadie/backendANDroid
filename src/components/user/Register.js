import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
function Register() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const nomRef = useRef();
    const prenomRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post("https://fierce-ridge-76224.herokuapp.com/user/register", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            nom: nomRef.current.value,
            prenom: prenomRef.current.value,
        })
            .then(Response => {
                var showUpdateSuccess = document.getElementById('add-success-alert');
                if (showUpdateSuccess) {
                    showUpdateSuccess.style.display = "block";
                }
                setTimeout(function () {
                    if (showUpdateSuccess) {
                        showUpdateSuccess.style.display = "none"
                    }
                }, 6000);


            }
            ).catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div class="container-fluid ps-md-0">
                <div class="row g-0">
                    <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div class="col-md-8 col-lg-6">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9 col-lg-8 mx-auto">
                                        <h3 class="login-heading mb-4">Créez facilement votre propre compte!</h3>
                                        <form onSubmit={e => submitHandler(e)}>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" ref={nomRef} id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Nom
                                                </label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="text" class="form-control" ref={prenomRef} id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Prénom
                                                </label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" ref={emailRef} id="floatingInput" placeholder="name@example.com" />
                                                <label for="floatingInput">Adresse e-mail
                                                </label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="password" class="form-control" ref={passwordRef} id="floatingPassword" placeholder="Password" />
                                                <label for="floatingPassword">Mot de passe</label>
                                            </div>



                                            <div class="d-grid">
                                                <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">S'inscrire</button>
                                                <div class="text-center">
                                                    <a class="small" href="/login">Vous avez déjà un compte ?</a>
                                                </div>
                                            </div>

                                            <div class="alert alert-success" role="alert" id="add-success-alert">
                                                Votre compte est crée avec succes
                                            </div>



                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
