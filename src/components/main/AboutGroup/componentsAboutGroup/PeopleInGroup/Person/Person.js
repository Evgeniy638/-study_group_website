import React from 'react'
import style from './Person.module.css'
import unknown from '../../../../../../assets/images/invis-user.png'
import basket from '../../../../../../assets/images/basket.png'

const Person = (props) => (
     <li className={style.wrap}>
          <div>
               {props.adminMode
                    ? <img
                         src={basket}
                         alt="удалить человека из группы"
                         className={style.basket}
                         onClick={() => { props.enableConfirm(props.person.id) }}
                    />
                    : null
               }
               <img 
                    src={props.person.image === null ? unknown : props.person.image} 
                    alt="картинка человека из группы"
               />
               <p>{`${props.person.surname} ${props.person.name} ${props.person.patronymic}`}</p>
          </div>
     </li>
)

export default Person