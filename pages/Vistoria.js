import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "./Vistoria.css"

export default function Vistoria(){
  return (

    <>
      <Layout>
      </Layout>
      <h1 className="h1_vistoria">Vistoria Porto</h1>
      <div className="box_vistoria">
          <div className="box_filho_vistoria">
            <label className="label_vistoria"> Digite o seu nome completo:
                <br/>
                <input className="Vistoria_input" type="text" placeholder="Angélica ferreira melo" />
            </label> 
            <br/>
            <label className="label_vistoria"> Informar o número do seu CPF:
                <br/>
                <input className="Vistoria_input" type="text" placeholder="Angélica ferreira melo" />
            </label> 
            <br/>
            <label className="label_vistoria"> Informar o numero do seguro:
                <br/>
                <input className="Vistoria_input" type="text" placeholder="Angélica ferreira melo" />
            </label> 
            <br/>
            <label className="label_vistoria"> Informe o seu e-mail:
                <br/>
                <input className="Vistoria_input" type="text" placeholder="Angélica ferreira melo" />
            </label> 
            <button className="button_vistoria" type="submit" onClick={() => {
              if (true) {
                  window.location.href = "/AguardandoVistoria";
              }
              }}>Entrar</button>
            </div>
          <div className="box_filho_vistoria_img ">
            <img src="logo6.png.jpeg" alt="Descrição da imagem" className="img_VVistoria" />   
          </div>

        </div> 
      <Footer></Footer>
    </>
  )
}