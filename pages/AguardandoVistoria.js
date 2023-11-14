import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "./AguardandoVistoria.css"

export default function AguardandoVistoria(){
  return (
    <>
      <Layout> 
      </Layout>

      <h1 className="h1_vistoria">Solicitação de Ativação de sinistro em andamento</h1>
      <p className="p_vistoria">Enviaremos o retorno da sua solicitação para o seu e-mail em até 48 horas</p>

      <div className="box_vistoria">
        <p>Independente da sua necessidade, conte com a gente sempre que precisar.</p>
      </div>

      <img className="img_vistoria" src="logo4.png" alt="Descrição da imagem" />

      <Footer></Footer>
    </>
    
  )
}