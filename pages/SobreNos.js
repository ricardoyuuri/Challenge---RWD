import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "./SobreNos.css"

export default function SobreNos(){
  return (

    <>
      <Layout>
      </Layout>
      <img src="logo3.png" alt="Descrição da imagem" className="img_sobreNos" />
        <h1 className="h1_sobreNos">Nosso propósito é:</h1>
        <div className="div_contenedor" >Desenvolver uma solução prática e segura para os nossos clientes.</div>
        <section className="box_sobreNos">
          <p className="p_sobreNos">
          Angélica Ferreira de Matos Melo <span>RM-550776</span> 
          </p>
          <p className="p_sobreNos">
          Lucas Antunes da Silva <span>RM-551670</span> 
          </p >
          <p className="p_sobreNos">
          Matheus Roberto Aparecido <span>RM-98581</span> 
          </p>
          <p className="p_sobreNos">
          Pablo Enrique Condori Jimenez <span>RM-552045</span> 
          </p>
          <p className="p_sobreNos">
          Ricardo Yuri G. Domingues <span>RM-551808</span> 
          </p>
        </section>   
      <Footer></Footer>
    </>
  )
}