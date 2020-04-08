import React from 'react'
import PersonReduxForm from './FormPerson'

export default class FormPersonClassContainer extends React.Component {
     handle = (data) => {
          // if (data.image === undefined || data.image.length === 0) {
          //      this.props.disablePersonForm()
          //      this.props.createPerson({
          //           surname: data.surname,
          //           name: data.name,
          //           patronymic: data.patronymic,
          //           image: null
          //      })
          // } else {
          //      const reader = new FileReader(data.image)

          //      reader.onload = () => {
          //           this.props.disablePersonForm()
          //           this.props.createPerson({
          //                surname: data.surname,
          //                name: data.name,
          //                patronymic: data.patronymic,
          //                image: reader.result
          //           })
          //      }

          //      reader.readAsDataURL(data.image[0])
          // }
     }

     render() {
          return (
               <PersonReduxForm
                    onSubmit={this.handle}
                    isDisabledPersonForm={this.props.isDisabledPersonForm}
               />
          )
     }
}