import React from 'react';
import style from './Timetable.module.css'
import FormLessonContainer from './FormLesson/FormLessonContainer';
import basket from '../../../assets/images/basket.png'

const Timetable = (props) => (
    <>
        {props.adminMode
            ? <FormLessonContainer />
            : null
        }
        <div className={`${style.wrap} ${props.adminMode ?style.wrapWithAdmonMode :style.wrapWithoutAdmonMode}`}>
            <table>
                <caption>Расписание на сегодня</caption>
                <tbody>
                    {props.timetable.map((lesson) => (
                        <tr key={lesson.id}>
                            <td>{lesson.lessonNumber}</td>
                            <td>
                                <span>{lesson.time.begin}</span>
                                <span>{lesson.time.end}</span>
                            </td>
                            <td className={style.subjectAndTeacher}>
                                <span>{lesson.subject}</span>
                                <span>{lesson.teacher}</span>
                            </td>
                            <td>
                                <span>{lesson.type}</span>
                                <span>{lesson.cabinet}</span>
                            </td>
                            <td>
                                {props.adminMode
                                    ? <img
                                        src={basket}
                                        alt="мусорная корзина, корзина значок"
                                        className={style.basket}
                                    />
                                    : null
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
)

export default Timetable