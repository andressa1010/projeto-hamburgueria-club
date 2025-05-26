import React from "react";

const Carrinho = ({ carrinho, setCarrinho }) => {
  const aumentar = (id) => {
    const atualizado = carrinho.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setCarrinho(atualizado);
  };

  const diminuir = (id) => {
    const atualizado = carrinho
      .map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
      )
      .filter((item) => item.quantidade > 0);
    setCarrinho(atualizado);
  };

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  const finalizarCompra = () => {
    const mensagem = carrinho
      .map(
        (item) =>
          `🍔 ${item.nome} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}`
      )
      .join("\n");

    const texto = `Olá! Gostaria de fazer um pedido:\n${mensagem}\n\nTotal: R$ ${total.toFixed(
      2
    )}`;
    const url = `https://wa.me/5599999999999?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f3f3f3" }}>
      <h2>Carrinho de Compras</h2>
      {carrinho.length === 0 && <p>Seu carrinho está vazio.</p>}

      {carrinho.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.nome}</strong> - R$ {item.preco.toFixed(2)} x {item.quantidade}
          <div>
            <button onClick={() => aumentar(item.id)}>+</button>
            <button onClick={() => diminuir(item.id)}>-</button>
          </div>
        </div>
      ))}

      {carrinho.length > 0 && (
        <>
          <h3>Total: R$ {total.toFixed(2)}</h3>
          <button onClick={finalizarCompra}>Finalizar no WhatsApp</button>
        </>
      )}
    </div>
  );
};

export default Carrinho;
