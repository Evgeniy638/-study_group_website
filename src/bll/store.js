import { combineReducers, createStore, applyMiddleware } from "redux";
import reducerAboutGroup from './reducers/reducerAboutGroup';
import reducerTimetable from './reducers/reducerTimetable';
import reducerNews from './reducers/reducerNews';
import reducerHeader from './reducers/reducerHeader';
import thunk from "redux-thunk";
import { reducer as reduxForm} from 'redux-form';

const reducer = combineReducers({
    stateAboutGroup: reducerAboutGroup,
    stateTimetable: reducerTimetable,
    stateNews: reducerNews,
    stateHeader: reducerHeader,
    form: reduxForm
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store