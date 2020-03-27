import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import { Route } from 'react-router-dom'
import AboutGroupContainer from './components/main/AboutGroup/AboutGroupContainer'
import NewsContainer from './components/main/News/NewsContainer'
import TimetableContainer from './components/main/Timetable/TimetableContainer'
import { PATH_ABOUT_GROUP, PATH_NEWS, PATH_TIMETABLE, PATH_ADMIN_ABOUT_GROUP, PATH_ADMIN_NEWS, PATH_ADMIN_TIMETABLE, PATH_ADMIN } from './paths';

const App = (props) => {
  if (props.location.pathname.includes(PATH_ADMIN))
    props.enableAdminMode()

  return (
    <>
      <HeaderContainer />
      <div>
        <Route
          path={props.adminMode ? PATH_ADMIN_ABOUT_GROUP : PATH_ABOUT_GROUP}
          render={() => <AboutGroupContainer />}
        />
        <Route
          path={props.adminMode ? PATH_ADMIN_NEWS : PATH_NEWS}
          render={() => <NewsContainer />}
        />
        <Route
          path={props.adminMode ? PATH_ADMIN_TIMETABLE : PATH_TIMETABLE}
          render={() => <TimetableContainer />}
        />
      </div>
    </>
  )
}

export default App
