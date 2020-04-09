import instance, { NETWORK_ERROR } from "./instance"

const apiNews = {
     async getListNews(currentPage, pageSize, textFilter){
          let response

          try {
               response = await instance.get(`news?_sort=id&_order=desc&_page=${currentPage}&_limit=${pageSize}&text_like=${textFilter}`)
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
     async writeNews(text, date, image){
          let response

          try{
               response = await instance.post('news', { text, date, image })
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
     async deleteNews(id){
          let response

          try{
               response = await instance.delete(`news/${id}`)
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

export default apiNews