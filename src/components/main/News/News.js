import React from 'react'
import ListNewsContainer from './componentsNews/ListNews/ListNewsContainer'
import SearchElementContainer from './componentsNews/SearchElement/SearchElementContainer'
import FormNewsContainer from './componentsNews/FormNews/FormNewsContainer'

const News = (props) => (
    <div>
        {props.adminMode ?<FormNewsContainer/> :null}
        <SearchElementContainer/>
        <ListNewsContainer/>
    </div>
)

export default News