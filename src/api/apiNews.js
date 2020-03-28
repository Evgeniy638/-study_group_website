import instance from "./instance"

const apiNews = {
     getListNews(currentPage, pageSize, textFilter){
          return instance.get(`news?_sort=id&_order=desc&_page=${currentPage}&_limit=${pageSize}&text_like=${textFilter}`)
               .then(response => response.data)
     }
}

export default apiNews