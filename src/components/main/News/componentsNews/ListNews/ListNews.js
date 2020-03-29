import React from 'react'
import NewContainer from './New/NewContainer'

const ListNews = (props) => (
     <ul>
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
)

export default ListNews