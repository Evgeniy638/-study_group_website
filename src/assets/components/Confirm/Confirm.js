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
                    <div className={style.question}>{props.question}</div>
                    <div
                         className={style.yes}
                    ><button onClick={action} className="button">Да</button></div>
                    <div
                         className={style.no}
                    ><button onClick={props.disableIsConfirm} className="button">Нет</button></div>
               </div>
          </div>
     )
}

export default Confirm