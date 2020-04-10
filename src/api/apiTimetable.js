import instance, { NETWORK_ERROR } from "./instance"

const apiTimetable = {
     async getTimetable(){
          let response

          try{
               response = await instance.get('timetable?_sort=lessonNumber&_order=asc')
          }catch (error) {
               return {
                    statusText: NETWORK_ERROR
               }
          }

          return {
               statusText: response.statusText,
               data: response.data
          }
     },
     async createLesson(lesson){
          let response

          try{
               response = await instance.post('timetable', {...lesson})
          }catch (error) {
               return {
                    statusText: NETWORK_ERROR
               }
          }

          return {
               statusText: response.statusText,
               data: response.data
          }
     },
     async deleteLesson(id){
          let response

          try{
               response  = await instance.delete(`timetable/${id}`)
          }catch (error) {
               return {
                    statusText: NETWORK_ERROR
               }
          }

          return {
               statusText: response.statusText,
               data: response.data
          }
     },
     async getLesson(lessonNumber){
          let response

          try{
               response = await await instance.get(`timetable?lessonNumber=${lessonNumber}`)
          }catch (error) {
               return {
                    statusText: NETWORK_ERROR
               }
          }

          if(response.data === null || response.data === undefined ||
               response.data[0] === null || response.data[0] === undefined)
               return {}

          return {
               statusText: response.statusText,
               data:  response.data[0]
          }
     },
     async putLesson(lesson, id){
          let response

          try{
               response = await instance.put(`timetable/${id}`, lesson)
          }catch (error) {
               return {
                    statusText: NETWORK_ERROR
               }
          }

          return {
               statusText: response.statusText,
               data: response.data
          }
     }
}

export default apiTimetable