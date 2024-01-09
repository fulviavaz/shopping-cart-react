import React from 'react'
import styles from './Produto.module.scss'
import produtos from '../../data/produtos.json'



export default function Produto() {
  return (
    <div className={styles.container}>
      {produtos.map((produto) => (
        <div className={styles.produto}>
          <img className={styles.produto__imagem} src={produto.imagem} alt="teclado" />
          <div className={styles.produto__info}>
            <p className={styles.produto__info__nome}>
              {produto.nome}
            </p>
            <div className={styles.produto__info__preco}>
              <p className={styles.produto__info__preco__wrapp}>R$ {produto.preco}</p>
              <div className={styles.produto__info__preco__botao}>-</div>
              <p className={styles.produto__info__preco__numero}>1</p>
              <div className={styles.produto__info__preco__botao}>+</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
