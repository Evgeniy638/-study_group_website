export const getAdminMode = state => state.stateHeader !== undefined ?state.stateHeader.adminMode :false

export const getArrayMenu = state => state.stateHeader.arrayMenu

export const getPageSize = state => state.stateNews.pageSize

export const getCurrentPage = state => state.stateNews.currentPage

export const getListNews = state => state.stateNews.news

export const getIsAllNews = state => state.stateNews.isAllNews

export const getTextFilter = state => state.stateNews.textFilter

export const getIsDisabledSearchButton = state => state.stateNews.isDisabledSearchButton

export const getTimetableByState = state => state.stateTimetable.timetable

export const getIsDisabledFormButton = state => state.stateTimetable.isDisabledFormButton

export const getGroupByState = state => state.stateAboutGroup.group

export const getIsDisabledPersonForm = state => state.stateAboutGroup.isDisabledPersonForm

export const getHasInternetError = state => state.stateApp.hasInternetError

export const getTextError = state => state.stateApp.textError
