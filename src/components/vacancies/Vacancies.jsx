import React, { useState } from "react";
import './vacancies.scss';
import VacItem from "../vac_item/VacItem";
import VAC from "../../VAC_list";



export default function Vacancies() {
    const [openId, setId] = useState(null);

    const clickHendler = (id) => {
        if (id === openId) setId(null)
        else setId(id)
    }

    return (
        <div className="vacancies">
            <h1>Список вакансий</h1>
            <div className="line"></div>


            <ul className="accordeon">
                {VAC.map((item, id) => {
                    return (
                        <li className="accordeon_item" key={item.id}>
                            <button className="accordeon_header" onClick={() => clickHendler(id)}>
                                {item.name}
                                <img className={`arrow ${id === openId ? 'open' : ''}`} src="./arrow.svg" alt="arrow" />
                                </button>

                            <div className={`accordeon_collapse ${id === openId ? 'open' : ''}`}>
                                <div className="accoredeon_body">
                                    <VacItem
                                    name={item.name}
                                    description={item.description}
                                    responsibilities={item.responsibilities}
                                    requirements={item.requirements}
                                    conditions={item.conditions}
                                    />
                                </div>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
