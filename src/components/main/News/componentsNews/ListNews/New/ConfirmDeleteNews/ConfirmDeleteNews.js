import React from 'react'
import style from './ConfirmDeleteNews.module.css'

const ConfirmDeleteNews = (props) => {
     const deleteNews = () => {
          props.deleteNews()
          props.disableIsConfirmDeleteNews()
     }

     return (
          <div className={style.wrap}>
               <div className={style.confirm}>
                    <div className={style.question}>Вы действительно хотете удалить эту новость?</div>
                    <div
                         className={style.yes}
                    ><button onClick={deleteNews} className="button">Да</button></div>
                    <div
                         className={style.no}
                    ><button onClick={props.disableIsConfirmDeleteNews} className="button">Нет</button></div>
               </div>
          </div>
     )
}

export default ConfirmDeleteNews