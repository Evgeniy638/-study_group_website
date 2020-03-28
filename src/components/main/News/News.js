import React from 'react'
import ListNewsContainer from './componentsNews/ListNews/ListNewsContainer'
import SearchElementContainer from './componentsNews/SearchElement/SearchElementContainer'

const News = (props) => (
    <div>
        <SearchElementContainer/>
        <ListNewsContainer/>
    </div>
)

export default News