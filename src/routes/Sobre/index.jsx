import './estilo.css';
import React from 'react';


const Sobre = () => {
  return (
    <div className="sobre-nos-container">
      <div className="video-overlay">
        <video autoPlay muted loop className="video">
          <source src="/videocarros.mp4" type='video/mp4' />
        </video>
        <div className="sobre-nos-text">
          <h1>Sobre Nós</h1>
          <p>Conheça nossa campanha</p>
        </div>
      </div>
      <div className="membros-container">
        <div className="membro">
          <img src="/lucca.png" alt="Lucca" className="membro-imagem" />
          <h3>Lucca</h3>
        </div>
        <div className="membro">
          <img src="/guilherme.png" alt="Guilherme" className="membro-imagem" />
          <h3>Guilherme</h3>
        </div>
        <div className="membro">
          <img src="/victorio.png" alt="Victório" className="membro-imagem" />
          <h3>Victório</h3>
        </div>
        <div className="membro">
          <img src="/enzo.png" alt="Lucca" className="membro-imagem" />
          <h3>Enzo</h3>
        </div>
        <div className="membro">
          <img src="/fiapete.png" alt="Lucca" className="membro-imagem"/>
          <h3>Gabriel</h3>
        </div>
      </div>
      <div className="texto-campanha">
        <p>
        Os carros elétricos estão transformando a mobilidade, e nós, da "MadevRace", lideramos essa mudança. Eles reduzem emissões, oferecem baixo custo de manutenção e proporcionam um futuro mais sustentável. Além de vender veículos inovadores, queremos educar nossos clientes sobre os benefícios econômicos e ambientais dessa tecnologia. 
        Junte-se a nós nessa revolução elétrica e faça parte de um futuro mais limpo e eficiente!
        </p>
      </div>
    </div>
  );
};

export default Sobre;
