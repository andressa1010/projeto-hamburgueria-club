import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BotaoCarrinho, DivButton, HamburguersDiv, TituloContainer } from "../Styles/styled.js";
import Logo from "../components/logo.jsx";
import Slider from "../components/Slider.jsx";

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
    descricao: "Pão, mussarela , hambúrguer bovino, bacon e cheddar"
  },
  {
    id: 4,
    nome:"X-Bacon",
    imagem:"/dev-bacon.jpg",
    preco: 29.99,
    descricao:"Pão, hambúrguer bovino, queijo cheddar, alface e tomate"
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
      nome: "Duplo Burger",
      imagem: "/dev-pleno.jpg",
      preco: 27.50,
      descricao: "Dois hambúrgueres suculentos com queijo duplo e molho especial."
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
      descricao:"refrigerante guaraná antarctica lata 350ml geladinha"
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
      nome: "Milkshake",
      imagem: "/shake.jpg",
      preco: 10.00,
      descricao: "Milkshake cremoso com morango natural chocolate barras de chocolate kit kat super cremoso cereais e chantilly."
    },
      {
      id: 11,
      nome: "Petit Gâteau",
      imagem: "/petit-gateau.jpeg",
      preco: 13.50,
      descricao: "Bolo quente de chocolate com recheio cremoso e sorvete de creme."
    },
    {
      id: 12,
      nome: "Torta de Limão",
      imagem: "/cake-caramelo.jpeg",
      preco: 9.50,
      descricao: "Torta gelada com base crocante e mousse de limão com calda derretida no açucar super cremoso , biscoitos tipo maisena"
    },
      {
      id: 13,
      nome: "Torta Chocolate",
      imagem: "/cake-chocolate.jpg",
      preco: 9.50,
      descricao: "Torta gelada com base crocante e mousse de chocolate."
    },
     {
      id: 14,
      nome: "Torta Morango",
      imagem: "/cake-morango.jpg",
      preco: 9.50,
      descricao: "Torta gelada com base crocante e mousse de morango feita com biscoitos tipo maisena , leite condensado"
    },
    {
      id: 15,
      nome: " Sorvete",
      imagem: "/casquinha.jpg",
      preco: 6.00,
      descricao: "casquinha com uma bola de sorvete de creme e calda de chocolate."
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
    </>
  );
};

export default Home;
