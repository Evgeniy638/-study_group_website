import React, { useState } from 'react'
import style from './SearchElement.module.css'

const SearchElement = (props) => {
     let [localTextFilter, setLocalTextFilter] = useState(props.textFilter)

     const handler = (event) => {
          setLocalTextFilter(event.currentTarget.value)
     }

     const searchWithFilter = () => {
          props.disableSearchButton()
          props.setTextFilter(localTextFilter)
          props.changeCurrentPageAndRemoveNews(1)
     }

     const handlerEnterPress = (event) => {
          if(event.charCode === 13){
               searchWithFilter()
          }
     }

     return(
          <div className={style.wrap}>
               <div>
                    <input 
                         type="text"
                         placeholder="Поиск по тексту"
                         className={style.search_text}
                         onChange={handler}
                         value={localTextFilter}
                         onKeyPress={handlerEnterPress}
                    />
                    <div className={style.search_icon}>
                         <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="4.36289" cy="4.36289" r="3.86289" stroke="#999999"></circle>
                              <rect width="1.09072" height="5.21053" rx="0.545362" 
                                   transform="matrix(0.707106 -0.707108 0.707106 0.707108 6.54434 7.31555)"
                                   fill="#999999"></rect>
                         </svg>
                    </div>
                    <button 
                         className={`button ${style.search_button}`}
                         disabled={props.isDisabledSearchButton}
                         onClick={searchWithFilter}
                    >Найти</button>
               </div>
          </div>
     )
}

export default SearchElement