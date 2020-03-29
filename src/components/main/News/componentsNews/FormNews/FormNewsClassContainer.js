import React from 'react'
import FromNews from './FormNews'

export default class FormNewsClassContainer extends React.Component{
     handler = (event) => {
          event.preventDefault();

          let elements = event.currentTarget

          let text, date, file = null

          date = new Date()

          const reader = new FileReader()

          for(let i = 0; i < elements.length; i++){
               if(elements[i].type === "textarea"){
                    text = elements[i].value
               }else if(elements[i].type === "file"){
                    if (elements[i].files.length === 0)
                         continue

                    file = elements[i].files[0]
               }
          }
          
          reader.onloadend = () => {
               this.props.writeNews(text, date.getTime(), reader.result)
          }
          
          reader.readAsDataURL(file)
     }

     render(){
          return(
               <FromNews 
                    writeNews={this.props.writeNews}
                    handler={this.handler}
               />
          )
     }
}
