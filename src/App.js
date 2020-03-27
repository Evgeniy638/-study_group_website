import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import { Route } from 'react-router-dom'
import AboutGroupContainer from './components/main/AboutGroup/AboutGroupContainer'
import NewsContainer from './components/main/News/NewsContainer'
import TimetableContainer from './components/main/Timetable/TimetableContainer'
import { PATH_ABOUT_GROUP, PATH_NEWS, PATH_TIMETABLE } from './paths';

const App = () => (
  <>
    <HeaderContainer/>
    <div>
      <Route path = {PATH_ABOUT_GROUP} render = {() => <AboutGroupContainer/>}/>
      <Route path = {PATH_NEWS} render = {() => <NewsContainer/>}/>
      <Route path = {PATH_TIMETABLE} render = {() => <TimetableContainer/>}/>
    </div>
  </>
)

export default App
