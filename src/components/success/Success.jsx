import React, { useEffect } from "react";
import './success.scss';

export default function Success({closeModal, setIsLoaded}) {

    useEffect((isLoaded) => {
        if (!isLoaded) {
            setIsLoaded(true);
        }      
      }, [setIsLoaded]); 

  return (
    <div className="form_field">
        <h2>Успешно отправлено</h2>
        <img src="./successfully.svg" alt="successfully" className="load-img"/>
        <button className="close_btn" onClick={closeModal}>Закрыть</button>
    </div>
  )
}
