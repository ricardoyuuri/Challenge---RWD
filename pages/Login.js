import Layout from "../components/Layout";
import React, { useState } from "react";
import Footer from "../components/Footer";
import "./Login.css"

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = () => {
    localStorage.setItem("login", login);
    localStorage.setItem("senha", senha);
  };

  const verificarLogin = () => {
    const loginLocal = localStorage.getItem("login");
    const senhaLocal = localStorage.getItem("senha");


    if (login === loginLocal && senha === senhaLocal) {

      return true;
    } else {

      return false;
    }
  };

  return (
    <>
      <Layout>
      </Layout>
      <div className="boty_login">
        <div className="box_login">
          <div className="box_filho">
            <h2>Cadastro de Usuario</h2>
            <label> 
              <input className="Login_input" type="text" placeholder="Login" onChange={e => setLogin(e.target.value)} />
              <br/>
            </label>
            <label>
              <input className="Login_input" type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
            </label>
            <br/>
            <button className="login_button" onClick={() => {
              cadastrar();
              alert("Cadastro realizado com sucesso!");
              }}>Cadastrar
            </button>
          </div>

          <div className="box_filho">
            <h2>Login</h2>
            <label> Usuario ou CPF:
              <br/>
              <input className="Login_input" type="text" placeholder="Login" />
              <br/>
            </label>
            <label> Senha:
              <br/>
              <input className="Login_input" type="password" placeholder="Senha" />
            </label>        
            <br/>          
            <button className="login_button" onClick={() => {
              if (verificarLogin()) {
                alert("Login com sucesso!");
                window.location.href = "/Cadastro";
              } else {
                alert("Usuario ou senha incorretos");
              }
            }}>Entrar</button>
          </div>
        </div>       
      </div>
      <Footer></Footer>
    </>
  );
}
