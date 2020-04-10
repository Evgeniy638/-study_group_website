import React from 'react'
import NewContainer from './New/NewContainer'
import MessageComponent from '../../../../../assets/components/MessageComponent/MessageComponent'

const ListNews = (props) => (
     <>
          {
               props.news.length === 0
                    ? <MessageComponent text="Список новостей пуст" />
                    : <ul>
                         {props.news.map((item, index) => (
                              <NewContainer
                                   key={index}
                                   image={item.image}
                                   text={item.text}
                                   date={item.date}
                                   id={item.id}
                              />
                         ))}
                    </ul>
          }
     </>
)

export default ListNews