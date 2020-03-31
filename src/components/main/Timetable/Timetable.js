import React from 'react';
import style from './Timetable.module.css'

const Timetable = (props) => (
    <div className={style.wrap}>
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
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

export default Timetable