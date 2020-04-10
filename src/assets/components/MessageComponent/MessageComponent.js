import React from 'react'
import style from './MessageComponent.module.css'

const MessageComponent = (props) => (
     <div className={style.wrap}>
          {props.text}
     </div>
)

export default MessageComponent