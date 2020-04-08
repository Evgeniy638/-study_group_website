import React from 'react'
import FormNewsRedux from './FormNews'

export default class FormNewsClassContainer extends React.Component {
     handle = (data) => {
          console.log(data)

          let date = new Date()
          const reader = new FileReader()

          reader.onloadend = () => {
               this.props.writeNews(data.text, date.getTime(), reader.result)
          }

          if (data.file !== undefined && data.file.length > 0) {
               reader.readAsDataURL(data.file[0])
          } else {
               this.props.writeNews(data.text, date.getTime(), null)
          }
     }

     render() {
          return (
               <>
                    <FormNewsRedux
                         onSubmit={this.handle}
                    />
               </>
          )
     }
}
