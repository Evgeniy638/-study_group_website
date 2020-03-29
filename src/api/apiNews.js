import instance from "./instance"

const apiNews = {
     async getListNews(currentPage, pageSize, textFilter){
          const response = await instance.get(`news?_sort=id&_order=desc&_page=${currentPage}&_limit=${pageSize}&text_like=${textFilter}`)

          return response.data
     },
     async writeNews(text, date, image){
          const response = await instance.post('news', { text, date, image })

          return response.data
     },
     async deleteNews(id){
          const response = await instance.delete(`news/${id}`)

          return response.data
     }
}

export default apiNews