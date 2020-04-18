import React from 'react'
import style from './Confirm.module.css'

const Confirm = (props) => {
     const action = () => {
          props.action()
          props.disableIsConfirm()
     }

     return (
          <div className={style.wrap}>
               <div className={style.confirm}>
                    <div className={style.question}><p>{props.question}</p></div>
                    <div
                         className={style.yes}
                    ><button onClick={action}>Да</button></div>
                    <div
                         className={style.no}
                    ><button onClick={props.disableIsConfirm}>Нет</button></div>
               </div>
          </div>
     )
}

export default Confirm