import React from 'react'
import New from './New/New'

const ListNews = (props) => (
     <div>
          {props.news.map((item, index) => (
               <New key={index} image={item.image} text={item.text} date={item.date}/>
          ))}
     </div>
)

export default ListNews