import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './form.scss';
import Success from "../success/Success";

export default function Form( {name, closeModal} ) {
  const {register, handleSubmit, formState:{ errors }, reset } = useForm({
    defaultValues: {
      vacancie: name
    }
  });

  const [isLoaded, setIsLoaded] = useState(false);


  async function sendData(data) {
    try {
      document.getElementById("submit_btn").textContent = "Отправляется...";
      document.getElementById("submit_btn").classList.add('loading');
      document.getElementById("submit_btn").disabled = true;
      
    
      const respons = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (respons.ok) {
        reset(() => ({
          name: '',
          phone: '',
          email: '',
          link: '',
          vacancie: ''
        }))

        setIsLoaded(true);
      
      } else {
        throw new Error(respons.statusText)
      }
    
    } catch(error){
      console.error(error.message)
    
    } finally{
      document.getElementById("submit_btn").textContent = "Отправить";
      document.getElementById("submit_btn").classList.remove('loading');
      document.getElementById("submit_btn").disabled = false;
    }
  } 

  const onSubmit = (data) => {
    console.log(data)
    sendData(data)
  }

  const onCancel = () => {
    reset(() => ({
      name: '',
      phone: '',
      email: '',
      link: '',
      vacancie: ''
    }))
  }

  if (isLoaded) {

    return <Success isLoaded={isLoaded} setIsLoaded={setIsLoaded} closeModal={closeModal} />
  
  } else {

    return (

      <div className="form_field">
          <h2>{name}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Имя*" {...register("name",{ required: true, minLength:2, maxLength: 120 })} className={errors.name ? "error" : ""} />
              <input type="tel" placeholder="Телефон*" {...register("phone", { required: true,  pattern: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/i })} className={errors.phone ? "error" : ""}/>
              <input type="email" placeholder="Email" {...register("email", { required: false, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/i })} className={errors.email ? "error" : ""}/>
              <input type="text" placeholder="Ссылка на резюме" {...register("link",{ required: false, minLength:2, maxLength: 500 })} />
              <input type="text"  {...register("vacancie",{ required: false})} className="vacancie_name" />
              <button type="submit" id="submit_btn">Отправить</button>
          </form>
          <button className="cancel_btn" onClick={onCancel}>Отмена</button>
      </div>
  
    )
  }
  

  
}
