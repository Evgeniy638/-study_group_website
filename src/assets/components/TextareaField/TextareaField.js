import React from 'react'
import style from './TextareaField.module.css'

const TextareaField = ({input, meta, ...props}) => {
     let hasError = meta.error && meta.touched

     return (
          <div className={`${props.className} ${style.wrap}`}>
               {hasError
                    ? <div className={style.errorMessage}>
                         <span>{meta.error}</span>
                    </div>
                    :null
               }

               <textarea {...input} placeholder={props.placeholder}></textarea>
          </div>
     )
}

export default TextareaField