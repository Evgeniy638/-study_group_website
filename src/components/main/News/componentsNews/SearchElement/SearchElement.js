import React from 'react'
import style from './SearchElement.module.css'

const SearchElement = (props) => {
     const handler = (event) => {
          props.clearNews()

          //если нажали на backspace
          if(event.nativeEvent.data === null && props.textFilter.length !== 0){
               props.setTextFilter(props.textFilter.substring(0, props.textFilter.length - 1))
          }else if (event.nativeEvent.data !== null){
               props.setTextFilter(props.textFilter + event.nativeEvent.data)
          }
     }

     return(
          <div className={style.wrap}>
               <div>
                    <input 
                         type="text"
                         placeholder="Поиск по тексту"
                         className={style.search_text}
                         value={props.textFilter}
                         onChange={handler}
                    />
                    <div className={style.search_icon}>
                         <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="4.36289" cy="4.36289" r="3.86289" stroke="#999999"></circle>
                              <rect width="1.09072" height="5.21053" rx="0.545362" 
                                   transform="matrix(0.707106 -0.707108 0.707106 0.707108 6.54434 7.31555)"
                                   fill="#999999"></rect>
                         </svg>
                    </div>
               </div>
          </div>
     )
}

export default SearchElement