import styled from "styled-components";

export const LogoBurguer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 200px;
  }
`;

export const LogoDiv = styled.div`
  img {
    position: relative;
    top: 100px;
  }

  @media (max-width: 432px) {
    img {
      width: 250px;
    }
  }

  @media (max-width: 360px) {
    position: relative;
    left: 30px;
  }
`;

export const DivLancheLogo = styled.div`
  img {
    width: 400px;
  }

  @media (max-width: 432px) {
    img {
      width: 200px;
      position: relative;
      right: 20px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const HamburguersDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px;

  .burguer {
    flex: 1 1 200px;
    max-width: 200px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    background-color: #ffa500;
    box-shadow: 0 0 10px #eee;
    
    h2{
      color: #ffffff;
    }

    

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 5px;
    }

    button {
      margin: 10px;
      padding: 6px 12px;
      background-color: #64183f;
      border: none;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  /* 🔥 No celular, dois por linha */
  @media (max-width: 500px) {
    .burguer {
      flex: 1 1 calc(50% - 10px);
      max-width: calc(50% - 10px);
    }
  }
`;


export const CarrinhoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #333;
  }

  p{
    color: #ffffff;
  }

  .item {
    display: flex;
    align-items: center;
    background-color: #ffa500;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    gap: 1rem;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
    }

    .info {
      flex: 1;

      strong {
        font-size: 1.2rem;
        display: block;
        margin-bottom: 0.5rem;
        color: #222;
      }

      p {
        margin: 0.3rem 0;
        font-size: 1rem;
        color: #555;
      }

      .botoes {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;

        button {
          background-color: #64183f;
          color: white;
          border: none;
          padding: 0.4rem 0.8rem;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          transition: background 0.3s;

          &:hover {
            background-color: #d46f19;
          }
        }
      }
    }
  }

  h3 {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.5rem;
    color: #ffff;
  }

  button {
    display: block;
    padding: 0.7rem 1.5rem;
    background-color: #28a745;
    color: white;
    border: none;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #218838;
    }
  }

  .icone-whatsapp {
    height: 20px;
    width: 20px;
    position: relative;
    top: 5px;
  }

  .botao-finalizar {
    margin: 10px;
    padding: 0.7rem 1.5rem;
    background-color: #28a745;
    color: white;
    border: none;
    font-size: 1.1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #218838;
    }
  }

  @media (max-width: 600px) {
    .item {
      flex-direction: column;
      align-items: flex-start;
      width: 250px;

      img {
        width: 100%;
        height: auto;
      }

      .info {
        width: 100%;
      }
    }

    h2,
    h3 {
      font-size: 1.5rem;
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

export const BotaoCarrinho = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1000; 
 

  img {
    width: 40px;
  }

  /* Responsivo para celular */
  @media (max-width: 500px) {
    top: 20px;
    right: 20px;
    right: auto; /* Remove o right */

    img {
      width: 40px;
    }
  }
`;


export const TituloContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 20px;
    font-size: 30px;
    max-width: 600px;
    color: #ffffff;
    font-family: "Pacifico", cursive;
    font-weight: 800;
    font-style: normal;
  }
`;
