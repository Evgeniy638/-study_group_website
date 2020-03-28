import React from 'react'
import ListNews from './ListNews'

export default class ListNewsClassContainer extends React.Component{
     handler = () => {
          let scrollHeight = Math.max(
               document.body.scrollHeight, document.documentElement.scrollHeight,
               document.body.offsetHeight, document.documentElement.offsetHeight,
               document.body.clientHeight, document.documentElement.clientHeight
          );

          let clientHeight = document.documentElement.clientHeight

          let pageYOffset = window.pageYOffset

          if (pageYOffset + clientHeight + 300 > scrollHeight || clientHeight === scrollHeight){
               this.props.changeCurrentPage(this.props.currentPage + 1)
          }
     }

     componentDidMount(){
          this.props.getNews(this.props.currentPage, this.props.pageSize, this.props.textFilter)

          window.addEventListener('scroll', this.handler)
     }


     componentDidUpdate(prevProps){
          if(prevProps.currentPage !== this.props.currentPage){
               this.props.getNews(this.props.currentPage, this.props.pageSize, this.props.textFilter)
          }

          if(this.props.news.length !== prevProps.news.length){
               this.handler()
          }else if(this.props.isAllNews){
               window.removeEventListener('scroll', this.handler)
          }else if(!this.props.isAllNews && this.props.currentPage === 1){
               window.addEventListener('scroll', this.handler)
               this.props.getNews(this.props.currentPage, this.props.pageSize, this.props.textFilter)
          }
     }

     componentWillUnmount(){
          this.props.clearNews()
          window.removeEventListener('scroll', this.handler)
     }

     render(){
          let buttons = []

          for(let i = 1; i <= this.props.currentPage; i++) buttons.push(i)


          return(
               <ListNews 
                    news={this.props.news}
                    buttons={buttons}
                    currentPage={this.props.currentPage}
               />
          )
     }
}