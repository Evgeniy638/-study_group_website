import { combineReducers, createStore } from "redux";
import reducerAboutGroup from './reducers/reducerAboutGroup';
import reducerTimetable from './reducers/reducerTimetable';
import reducerNews from './reducers/reducerNews';
import reducerHeader from './reducers/reducerHeader';

const reducer = combineReducers({
    stateAoutGroup: reducerAboutGroup,
    stateTimetable: reducerTimetable,
    stateNews: reducerNews,
    stateHeader: reducerHeader
})

const store = createStore(reducer)

export default store