import React from 'react'
import style from './InputImage.module.css'

const InputImage = ({ input, meta, ...props }) => {
     let hasError = meta.error && meta.touched

     return (
          <div className={style.wrap}>
               <div className={style.input_image_form}>
                    <input 
                         onChange={input.onChange}
                         name={input.name}
                         type="file"
                         accept='.jpg, .png, .jpeg'
                         id="input_image" 
                    />
                    <label htmlFor="input_image" className="button">Выберете фото</label>
                    {input.value !== undefined && input.value.length > 0
                         ?<p>{input.value[0].name}</p>
                         :null
                    }
               </div>

               {hasError
                    ? <div className={style.errorMessage}>
                         <span>{meta.error}</span>
                    </div>
                    : null
               }
          </div>
     )
}

export default InputImage