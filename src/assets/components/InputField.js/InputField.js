import React from 'react'
import style from './InputField.module.css'

const InputField = ({ input, meta, ...props }) => {
    let hasError = meta.error && meta.touched

    return (
        <div className={style.wrap}>
            <div>
                <input
                    {...input}
                    {...props}
                    type="text"
                    placeholder={props.placeholder}
                />
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

export default InputField