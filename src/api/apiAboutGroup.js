import instance from "./instance"


const apiAboutGroup = {
     async getGroup(){
          const response = await instance.get('group?_sort=surname&_order=asc')

          return response.data
     },
     async deletePerson(id){
          const response = await instance.delete(`group/${id}`)

          return response.data
     },
     async createPerson(person){
          const response = await instance.post('group', person)

          return response.data
     }
}

export default apiAboutGroup