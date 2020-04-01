import React from 'react'
import PeopleInGroup from './PeopleInGroup'

export default class PeopleInGroupClassContainer extends React.Component{
     componentDidMount(){
          this.props.getGroup()
     }

     componentWillUnmount(){
          this.props.clearStateAboutGroup()
     }

     render(){
          return(
               <PeopleInGroup
                    group={this.props.group}
                    deletePerson={this.props.deletePerson}
               />
          )
     }
}