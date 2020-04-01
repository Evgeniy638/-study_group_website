import React from 'react'
import basket from '../../../../assets/images/basket.png'
import style from '../Timetable.module.css'

const Lesson = (props) => (
     <tr>
          <td>{props.lessonNumber}</td>
          <td>
               <span>{props.timeBegin}</span>
               <span>{props.timeEnd}</span>
          </td>
          <td className={style.subjectAndTeacher}>
               <span>{props.subject}</span>
               <span>{props.teacher}</span>
          </td>
          <td>
               <span>{props.type}</span>
               <span>{props.cabinet}</span>
          </td>
          <td>
               {props.adminMode
                    ? <img
                         src={basket}
                         alt="мусорная корзина, корзина значок"
                         className={style.basket}
                         onClick={() => {props.enableIsConfirm(props.id)}}
                    />
                    : null
               }
          </td>
     </tr>
)

export default Lesson