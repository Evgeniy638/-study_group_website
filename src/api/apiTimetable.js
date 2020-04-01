import instance from "./instance"

const apiTimetable = {
     async getTimetable(){
          const response = await instance.get('timetable?_sort=lessonNumber&_order=asc')

          return response.data
     },
     async createLesson(lesson){
          const response = await instance.post('timetable', {...lesson})

          return response.data
     },
     async deleteLesson(id){
          const response = await instance.delete(`timetable/${id}`)

          return response.data
     },
     async getLesson(lessonNumber){
          const response = await instance.get(`timetable?lessonNumber=${lessonNumber}`)

          if(response.data === null || response.data === undefined ||
               response.data[0] === null || response.data[0] === undefined)
               return undefined

          return response.data[0]
     },
     async putLesson(lesson, id){
          const response = await instance.put(`timetable/${id}`, lesson)

          return response.data
     }
}

export default apiTimetable