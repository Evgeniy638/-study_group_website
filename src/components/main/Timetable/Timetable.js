import React, { useState } from 'react';
import style from './Timetable.module.css'
import FormLessonContainer from './FormLesson/FormLessonContainer';
import Lesson from './Lesson/Lesson';
import Confirm from '../../../assets/components/Confirm/Confirm';
import MessageComponent from '../../../assets/components/MessageComponent/MessageComponent';

const Timetable = (props) => {
    let [isConfirm, setIsConfirm] = useState(false)
    let [idLesson, setIdLesson] = useState()

    let enableIsConfirm = (id) => {
        setIsConfirm(true)
        setIdLesson(id)
    }

    let disableIsConfirm = () => setIsConfirm(false)

    return (
        <>
            {isConfirm
                ? <Confirm
                    question="Вы действительно хотете удалить этот урок?"
                    action={() => { props.deleteLesson(idLesson) }}
                    disableIsConfirm={disableIsConfirm}
                />
                : null
            }
            {props.adminMode
                ? <FormLessonContainer />
                : null
            }
            {props.timetable.length === 0
                ? <MessageComponent text="Расписания нет" />
                : <div className={`${style.wrap} ${props.adminMode ? style.wrapWithAdmonMode : style.wrapWithoutAdmonMode}`}>
                    <table>
                        <caption>Расписание на сегодня</caption>
                        <tbody>
                            {props.timetable.map((lesson) => (
                                <Lesson
                                    key={lesson.id}
                                    {...lesson}
                                    deleteLesson={props.deleteLesson}
                                    adminMode={props.adminMode}
                                    enableIsConfirm={enableIsConfirm}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

export default Timetable