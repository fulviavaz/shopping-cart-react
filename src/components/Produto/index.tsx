import React from 'react'
import styles from './Produto.module.scss'
import produtos from '../../data/produtos.json'

export default function Produto() {
  return (
    <div className={styles.container}>
      {produtos.map((produto) => (
        <div className={styles.produto}>
          <img className={styles.produto__imagem} src={produto.imagem} alt="imagem" />
          <div className={styles.produto__info}>
            <p className={styles.produto__info__nome} id="produto">
              {produto.nome}
            </p>
            <div className={styles.produto__info__preco}>
              <p className={styles.produto__info__preco__wrapp}>R$ {produto.preco}</p>
              <button className={styles.produto__info__preco__botao}>-</button>
              <p className={styles.produto__info__preco__numero}>1</p>
              <button className={styles.produto__info__preco__botao}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
