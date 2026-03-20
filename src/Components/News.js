import NewsItem from './NewsItem'
import React, { Component } from 'react'

export default class News extends Component {

   
  constructor() {
    super();
    this.state = {
      articles : [],
      loading  : false
    }
  }

  async componentDidMount(){
    const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4ee3f4db81c44939a7bf900509818c45"
    let data = await fetch(url);
    let parsdata = await data.json()

    this.setState({articles :  parsdata.articles})
    console.log(parsdata)
  }
 
  render() {
    return (
      <div className="container my-4  ">
        <div className='row row-gap-4'>
          {this.state.articles.map((element)=>{
          return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
          })}
        </div>
      </div>
    )
  }
}
