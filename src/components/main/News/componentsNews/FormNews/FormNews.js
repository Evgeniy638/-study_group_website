import React from 'react'
import style from './FormNews.module.css'

const FromNews = (props) => {
     
     return(
          <div className={style.wrap}>
               <form className={style.form} onSubmit={props.handler}>
                    <textarea placeholder="Введите текст новости"></textarea>
                    <div className={style.input_image_form}>
                         <input type="file" id="input_image"/>
                         <label htmlFor="input_image" className="button">Выберете фото</label>
                    </div>
                    <div className={style.buttun_form}>
                         <button type="submit" className="button">Создать новость</button>
                    </div>
               </form>
          </div>
     )
}

export default FromNews