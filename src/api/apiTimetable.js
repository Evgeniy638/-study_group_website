import instance from "./instance"

const apiTimetable = {
     async getTimetable(){
          const response = await instance.get('timetable?_sort=lessonNumber&_order=asc')

          return response.data
     }
}

export default apiTimetable