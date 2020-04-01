import React from 'react'
import style from './PeopleInGroup.module.css'
import PersonContainer from './Person/PersonContainer'
import Confirm from '../../../../../assets/components/Confirm/Confirm'
import { useState } from 'react'

const PeopleInGroup = (props) => {
     const [idPerson, setIdPerson] = useState()
     const [isConfirm, setIsConfirm] = useState(false)

     const enableConfirm = (idPerson) => {
          setIdPerson(idPerson)
          setIsConfirm(true)
     }
     const disableConfirm = () => { setIsConfirm(false) }

     return (
          <>
               <div className={style.wrap}>
                    <h2>Участники нашей группы</h2>
                    <ul>
                         {
                              props.group.map((person, index) => (
                                   <PersonContainer
                                        key={index}
                                        person={person}
                                        enableConfirm={enableConfirm}
                                   />
                              ))
                         }
                    </ul>
               </div>
               {isConfirm
                    ? <Confirm
                         question="Вы действительно хотете удалить этого человека из группы?"
                         action={() => { props.deletePerson(idPerson) }}
                         disableIsConfirm={disableConfirm}
                    />
                    : null
               }
          </>
     )
}

export default PeopleInGroup