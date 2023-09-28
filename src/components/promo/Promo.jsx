import React from "react";
import './promo.scss';

export default function Promo() {
  return (
    <div className="promo-wrapper">
        <div className="promo">
          <h1>Присоединяйся к команде ОАО «ЛЭСК».<br></br> Уверенно смотри в будущее вместе с нами!</h1>
          <span>Мы предлагаем:</span>
          <ul>
            <li>Стабильную заработную плату</li>
            <li>Гибкий график работы</li>
            <li>Социальные выплаты</li>
            <li>Материальную помощь к отпуску</li>
            <li>Компенсацию оплаты летнего отдыха в детских лагерях</li>
            <li>Корпоративная программа ДМС</li>
            <li>Обучение за счет компании</li>
            <li>Доплаты за непрерывный стаж работы в Компании</li>
          </ul>
        </div>

        <img src="./puzzle.svg" alt="promo" className="promo-img"/>

    </div>
  )
}
