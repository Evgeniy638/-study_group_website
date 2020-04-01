import React, { useState } from 'react'
import style from './New.module.css'
import basket from '../../../../../../assets/images/basket.png'
import Confirm from '../../../../../../assets/components/Confirm/Confirm'
const New = (props) => {
     let date = new Date(props.date);
     
     let day = date.getDate()
     let month = date.getMonth() + 1
     let year = date.getFullYear()

     let dd = day < 10 ?"0" + day :"" + day
     let mm = month < 10 ?"0" + month :"" + month
     let yyyy = "" + year
     
     let [isConfirmDeleteNews, setIsConfirmDeleteNews] = useState(false)
     let enableIsConfirmDeleteNews = () => setIsConfirmDeleteNews(true)
     let disableIsConfirmDeleteNews = () =>  setIsConfirmDeleteNews(false)

     return(
          <>
               {isConfirmDeleteNews
                    ?<Confirm
                         question="Вы действительно хотете удалить эту новость?"
                         action={() => {props.deleteNews(props.id)}}
                         disableIsConfirm = {disableIsConfirmDeleteNews}
                    />
                    :null
               }
               <div className={style.wrap}>
                    {props.adminMode 
                         ?<img 
                              src={basket} 
                              alt="мусорная корзина, корзина значок" 
                              className={style.basket}
                              onClick={enableIsConfirmDeleteNews}
                         /> 
                         :null
                    }
                    <p className={style.date}>{`${dd}.${mm}.${yyyy}`}</p>
                    <p>{props.text}</p>
                    {props.img !== null
                         ?<img src={props.image} alt=""/>
                         :null
                    }
               </div>
          </>
     )
}

export default New