import React from 'react'
import style from './New.module.css'

const New = (props) => {
     let date = new Date(props.date);
     
     let day = date.getDate()
     let month = date.getMonth() + 1
     let year = date.getFullYear()

     let dd = day < 10 ?"0" + day :"" + day
     let mm = month < 10 ?"0" + month :"" + month
     let yyyy = "" + year

     return(
          <div className={style.wrap}>
               <p className={style.date}>{`${dd}.${mm}.${yyyy}`}</p>
               <p>{props.text}</p>
               {props.img !== null
                    ?<img src={props.image} alt=""/>
                    :null
               }
          </div>
     )
}

export default New