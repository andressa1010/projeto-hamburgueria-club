import  { useState, useEffect } from "react";
import styled from "styled-components";

// 🖼️ Lista de imagens do slider
const listaDeImagens = [
  "/Banne3.png",
  "/Banne4.png",
  "/trio-vegano.jpg",
  "/banne5.png",
];

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
`;

const BotaoSeta = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  z-index: 1;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const SetaEsquerda = styled(BotaoSeta)`
  left: 10px;
`;

const SetaDireita = styled(BotaoSeta)`
  right: 10px;
`;

const Slider = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  // 👉 Função para ir para imagem anterior
  const imagemAnterior = () => {
    const novoIndice = indiceAtual === 0 ? listaDeImagens.length - 1 : indiceAtual - 1;
    setIndiceAtual(novoIndice);
  };

  // 👉 Função para ir para próxima imagem
  const proximaImagem = () => {
    const novoIndice = indiceAtual === listaDeImagens.length - 1 ? 0 : indiceAtual + 1;
    setIndiceAtual(novoIndice);
  };

  // 🔄 Troca automática de imagens a cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      proximaImagem();
    }, 5000);

    return () => clearInterval(intervalo);
  }, [indiceAtual]);

  return (
    <SliderContainer>
      <SetaEsquerda onClick={imagemAnterior}>&#10094;</SetaEsquerda>
      <Imagem src={listaDeImagens[indiceAtual]} alt="Imagem do hambúrguer" />
      <SetaDireita onClick={proximaImagem}>&#10095;</SetaDireita>
    </SliderContainer>
  );
};

export default Slider;
