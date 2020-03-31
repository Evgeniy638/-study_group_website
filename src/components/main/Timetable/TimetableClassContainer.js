import React from 'react'
import Timetable from './Timetable'

export default class TimetableClassContainer extends React.Component {
     componentDidMount() {
          this.props.getTimetable()
     }

     componentWillUnmount(){
          this.props.clearData()
     }

     render() {
          return (
               <Timetable
                    timetable={this.props.timetable}
                    adminMode={this.props.adminMode}
               />
          )
     }
}