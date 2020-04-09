import instance, { NETWORK_ERROR } from "./instance"


const apiAboutGroup = {
     async getGroup(){
          let response

          try{
               response = await instance.get('group?_sort=surname&_order=asc')
          }catch (error){
               return {
                    statusText: NETWORK_ERROR
               }
          }

          return {
               statusText: response.statusText,
               data: response.data
          }
     },
     async deletePerson(id){
          let response

          try{
               response = await instance.delete(`group/${id}`)
          }catch(error){
               return {
                    statusText: NETWORK_ERROR
               }
          }

          return {
               statusText: response.statusText,
               data: response.data
          }
     },
     async createPerson(person){
          let response

          try {
               response = await instance.post('group', person)               
          } catch (error) {
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

export default apiAboutGroup