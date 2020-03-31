import React from 'react'
import Timetable from './Timetable'

export default class TimetableClassContainer extends React.Component {
     componentWillMount() {
          this.props.getTimetable()
     }

     componentWillUnmount(){
          this.props.clearData()
     }

     render() {
          return (
               <Timetable
                    timetable={this.props.timetable}
               />
          )
     }
}