import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import { Route, Redirect } from 'react-router-dom'
import AboutGroupContainer from './components/main/AboutGroup/AboutGroupContainer'
import NewsContainer from './components/main/News/NewsContainer'
import TimetableContainer from './components/main/Timetable/TimetableContainer'
import { PATH_ABOUT_GROUP, PATH_NEWS, PATH_TIMETABLE, PATH_ADMIN_ABOUT_GROUP, PATH_ADMIN_NEWS, PATH_ADMIN_TIMETABLE, PATH_ADMIN } from './paths';
import ErrorComponentContainer from './assets/components/ErrorComponent/ErrorComponentContainer'

const App = (props) => {
  if (props.location.pathname.includes(PATH_ADMIN))
    props.enableAdminMode()
  else
    props.disableAdminMode()

  if (props.location.pathname === "/")
    return <Redirect to={PATH_ABOUT_GROUP} />

  if (props.location.pathname === PATH_ADMIN || props.location.pathname === PATH_ADMIN + "/")
    return <Redirect to={PATH_ADMIN_ABOUT_GROUP} />

  return (
    <>
      <HeaderContainer />
      <main>
        <div className={props.hasInternetError ? "displayNone" : ""}>
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
        
        {props.hasInternetError
          ? <ErrorComponentContainer/>
          : null
        }
      </main>
    </>
  )
}

export default App
