import React from 'react'
import style from './ErrorComponent.module.css'

const ErrorComponent = (props) => (
     <div className={style.wrap}>
          <b>Ошибка соединения</b><br />
          {props.textError !== undefined ? <>{props.textError}<br /></> : null}
          Перезайдите пожалуйста позже
     </div>
)

export default ErrorComponent