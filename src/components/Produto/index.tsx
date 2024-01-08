import React from 'react'
import styles from './Produto.module.scss'
import teclado from '../../assets/product-image-teclado.jpg'

export default function Produto() {
  return (
    <div className={styles.produto}>
      <img className={styles.produto__imagem} src={teclado} alt="teclado" />
      <div className={styles.produto__info}>
        <p className={styles.produto__info__nome}>
          Teclado Gamer Mecânico Low Profile RGB AW510K 580
        </p>
        <div className={styles.produto__info__preco}>
          <p className={styles.produto__info__preco__wrapp}>R$ 8.599,90</p>            
            <div className={styles.produto__info__preco__botao}>-</div>
            <p className={styles.produto__info__preco__numero}>1</p>
            <div className={styles.produto__info__preco__botao}>+</div>          
        </div>
          </div>
          
      </div>        
      
  );
}
