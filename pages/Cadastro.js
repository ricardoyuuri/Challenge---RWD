import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "./Cadastro.css"
import Link from "next/link"



const schema = yup.object({
    nome: yup.string()
             .required('O campo nome é de preenchimento obrigatório!'),
    email: yup.string()
              .email('Digite um email válido')
              .required('O campo email é de preenchimento obrigatório!'),
    cpf: yup.string()
            .min(11,'O CPF deve ter 11 dígitos!')
            .required('O campo CPF é de preenchimento obrigatório'),
    mensagem: yup.string()
            .required('O campo Mensagem não pode estar vacio'),
}).required();

export default function Cadastro(){
    
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});

    const [cliente,setCliente] = useState({'nome':'','email':'','cpf':'','mensagem':''}); 
    
    const [listaClientes, setListaClientes] = useState([]);

    function inserirCliente(cliente){
        setListaClientes([...listaClientes,cliente]);
        console.log(listaClientes);
    }


    return(
        <>
            <Layout>
            </Layout>
            <div className="box_body">     
                <form  onSubmit={handleSubmit(inserirCliente)}>
                    <fieldset className="formulario">
                        <h1 className="h1_cadastro">Cadastro de usuário</h1>
                        <label forhtml="nome">Nome completo: 
                            <br/>
                            <input type="text" placeholder="José da Silva" {...register('nome')} />
                            <span>{ errors.nome?.message }</span>
                        </label>
                        <br/>
                        <label forhtml="dataNascimento">Data de Nasciemnto:
                            <br/> 
                            <input type="text" placeholder="23-04-2001" {...register('DataNascimento')} />
                            <span>{ errors.nome?.message }</span>
                        </label>
                        <br/>
                        <label forhtml="cpf">CPF: 
                            <br/>
                            <input type="text" placeholder="123.456.890-01" {...register('cpf')}/>
                            <span>{ errors.cpf?.message }</span>
                        </label>
                        <br />
                        <label forhtml="Endereco">Endereço: 
                            <br/>
                            <input type="text" placeholder="casa 1" {...register('Endereco')} />
                            <span>{ errors.nome?.message }</span>
                        </label>
                        <br/>
                        <label forhtml="email">E-Mail: 
                            <br/>
                            <input type="text" placeholder="examplo@examplo.com" {...register('email')}/>
                            <span>{ errors.email?.message }</span>
                        </label>
                        <br />
                        <label forhtml="Telefone">Telefone celular/Telefone residencial:
                            <br/> 
                            <input type="number" placeholder="1197987653" {...register('Telefone')} />
                            <span>{ errors.nome?.message }</span>
                        </label>
                        <br/>
                        <label forhtml="ValorBike">Valor da bicicleta: 
                            <br/>
                            <input type="number" placeholder="1000,00" {...register('ValorBike')} />
                            <span>{ errors.nome?.message }</span>
                        </label>
                        <br/>
                        <label forhtml="MarcaBike">Marca da Bike: 
                            <br/>
                            <input type="text" placeholder="GMY-2244" {...register('MarcaBike')} />
                            <span>{ errors.nome?.message }</span>
                        </label>
                        <br/>
                        <button className="button_cad" type="submit" onClick={() => {
                        if (true) {
                            window.location.href = "/AguardandoVistoria";
                        }
                        }}>Entrar</button>
                    </fieldset>
                </form>
            <div>
                <div className="painel">
                    {listaClientes.map((cli,index)=>
                    <div className="etiqueta" key={index}>
                        <h1>Dados Enviados</h1>
                        <p>Nome: { cli.nome }</p>
                        <p>E-Mail: { cli.email }</p>
                        <p>CPF: { cli.cpf }</p>
                        <p>Mensagem: { cli.mensagem}</p>

                    </div>
                    
                    )}
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </>          
    )
}