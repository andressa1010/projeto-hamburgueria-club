import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BotaoCarrinho, DivButton, Footer, HamburguersDiv, TituloContainer, Whatsapp } from "../Styles/styled.js";
import Logo from "../components/logo.jsx";
import Slider from "../components/Slider.jsx";
import imgWhatsapp from "../assets/whatsapp.png"

const hamburguersDisponivel = [
  {
    id: 1,
    nome: "X-Salada",
    imagem: "/dev-pleno.jpg",
    preco: 19.99,
    descricao: "Pão, mussarela , hambúrguer bovino, alface e tomate"
  },
  {
    id: 2,
    nome: "X-Dublo",
    imagem: "/dev-cheddar.jpg",
    preco: 22.99,
    descricao: "Pão, mussarela , hambúrguer bovino, bacon e cheddar"
  },
  {
    id: 3,
    nome: "X-tudo",
    imagem: "/dev-senior.jpg",
    preco: 45.99,
      descricao: "Pão, mussarela , hambúrguer bovino, alface e tomate"},
  {
    id: 4,
    nome:"X-Bacon",
    imagem:"/dev-bacon.jpg",
    preco: 29.99,
     descricao: "Pão, mussarela , hambúrguer bovino, alface e tomate"
  },

    {
    id: 5,
    nome:"X-Chicken",
    imagem:"/dev-chicken.jpg",
    preco: 29.99,
    descricao:"Pão, hambúrguer empanado de frango,  alface e tomate"
  },
 {
    id: 6,
    nome:"X-Fit",
    imagem:"/dev-fit.jpg",
    preco: 29.99,
    descricao:"Pão, hambúrguer empanado de frango,  alface e tomate"
  },
     {
      id: 7,
      nome:"Refrigerante",
      imagem:"/refri-1.png",
      preco: 6.99,
      descricao:"refrigerante coca cola original lata 350ml geladinha"
    },
    {
      id: 8,
      nome:"Refrigerante",
      imagem:"/refri-2.png",
      preco: 6.99,
      descricao:"refrigerante guaraná original lata 350ml geladinha"
    },

     {
      id: 9,
      nome: "Cheddar Melt",
      imagem: "/dev-cheddar.jpg",
      preco: 23.90,
      descricao: "Pão australiano, hambúrguer bovino e muito cheddar cremoso."
    },
     {
      id: 10,
      nome: "Cheddar Duplo",
      imagem: "/dev-senior.jpg",
      preco: 23.90,
      descricao: "Pão australiano, hambúrguer bovino e muito cheddar cremoso."
    },
     {
      id: 11,
      nome: "Bolo ",
      imagem: "/bolo11.png",
      preco: 10.00,
      descricao: "Bolo  chocolate com morangos"
    },
      {
      id: 12,
      nome: "Bolo Ninho",
      imagem: "/bolo13.png",
      preco: 13.50,
      descricao: "Bolo ninho com doce de leite"
    },
    {
      id: 13,
      nome: "Bolo Maracujá",
      imagem: "/bolo12.png",
      preco: 9.50,
      descricao: "Bolo recheado sabor maracujá"
    },
      {
      id: 14,
      nome: "Bolo Chocolate",
      imagem: "/bolo16.png",
      preco: 9.50,
      descricao: "Bolo recheado chocolate e ninho"
    },
     {
      id: 15,
      nome: "Bolo Chocolate",
      imagem: "/bolo15.png",
      preco: 9.50,
      descricao: "bolo recheado sabor chocolate"
    },
    {
      id: 16,
      nome: " Sorvete",
      imagem: "/casquinha.png",
      preco: 6.00,
      descricao: "casquinha  de creme e calda de chocolate."
    },
   
];

const Home = ({ carrinho, setCarrinho }) => {
  const navigate = useNavigate();
  const [quantidadesSelecionadas, setQuantidadesSelecionadas] = useState({});

  const alterarQuantidade = (id, delta) => {
    setQuantidadesSelecionadas((prev) => {
      const atual = prev[id] ?? 0;
      const novaQuantidade = Math.max(atual + delta, 0);
      return { ...prev, [id]: novaQuantidade };
    });
  };

  const adicionarAoCarrinho = (produto) => {
    const quantidade = quantidadesSelecionadas[produto.id] ?? 0;

    const existe = carrinho.find((item) => item.id === produto.id);

    if (existe) {
      const novoCarrinho = carrinho.map((item) =>
        item.id === produto.id ? { ...item, quantidade } : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade }]);
    }
  };

  return (
    <>
      <Logo/>
   
      <HamburguersDiv>
        {hamburguersDisponivel.map((burguer) => (
          <div key={burguer.id} className="burguer">
            <h2>{burguer.nome}</h2>
            <img src={burguer.imagem} alt={burguer.nome} />
            <p>R$ {burguer.preco.toFixed(2)}</p>
            <p>{burguer.descricao}</p> 

            <div className="controle-quantidade">
              <button onClick={() => alterarQuantidade(burguer.id, -1)}>-</button>
              <span>{quantidadesSelecionadas[burguer.id] ?? 0}</span>
              <button onClick={() => alterarQuantidade(burguer.id, 1)}>+</button>
              <button className="adicionar" onClick={() => adicionarAoCarrinho(burguer)}>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </HamburguersDiv>
       
      <DivButton>
         <BotaoCarrinho onClick={() => navigate("/carrinho")}>
           <img src="/carrinho-verde.png"></img>
       </BotaoCarrinho>
      </DivButton>


<Footer>
  <p>© 2025  Desenvolvido por Andressa Nunes  Todos os direitos reservados.</p>
  <div>
    <a href="https://www.linkedin.com/in/andressa-nunes-silva/" target="_blank" rel="noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.5h.07c.67-1.24 2.3-2.55 4.73-2.55C22 8.5 24 10.5 24 15v9h-5v-8c0-2-.04-4.5-3-4.5s-3.5 2.25-3.5 4.35V24h-5V8z"/>
      </svg>
    </a>

    <a href="https://github.com/andressa1010" target="_blank" rel="noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.086 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0112 6.844a11.5 11.5 0 012.995.404c2.29-1.553 3.296-1.23 3.296-1.23.653 1.653.242 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.19.698.8.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    </a>

    <a href="https://wa.me/5511986414262" target="_blank" rel="noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.828.738 5.566 2.136 7.98L0 32l8.27-2.113A15.872 15.872 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.867a13.832 13.832 0 01-7.056-1.94l-.505-.298-4.906 1.252 1.31-4.78-.322-.516a13.826 13.826 0 01-2.12-7.184C2.4 8.48 8.48 2.4 16 2.4S29.6 8.48 29.6 16 23.52 29.867 16 29.867zm7.974-10.053c-.442-.221-2.617-1.294-3.023-1.442-.406-.147-.703-.221-1 .221s-1.147 1.442-1.408 1.742c-.26.294-.52.331-.962.111a11.388 11.388 0 01-3.353-2.06 12.005 12.005 0 01-2.244-3.17c-.234-.442-.025-.68.174-.9.179-.18.404-.465.604-.697.2-.233.267-.4.4-.663.135-.263.067-.497-.034-.697-.1-.2-.962-2.326-1.318-3.188-.347-.837-.701-.723-.962-.736l-.821-.014c-.26 0-.682.097-1.04.465-.358.369-1.364 1.331-1.364 3.247s1.398 3.77 1.592 4.029c.195.26 2.747 4.196 6.66 5.888.932.402 1.658.642 2.225.822.934.296 1.783.254 2.456.154.749-.112 2.617-1.07 2.99-2.102.37-1.03.37-1.912.258-2.102-.112-.19-.4-.296-.842-.516z"/>
      </svg>
    </a>
  </div>
</Footer>


    </>
  );
};

export default Home;
