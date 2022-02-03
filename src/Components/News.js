import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  articles= []
  constructor(){
    super();
    this.state ={
      articles : this.articles,
      loading : false,
      page:1
    }
  }

  async componentDidMount(){
    let url =" https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c4487027f2934ffa911420097d06d400&page=1&pageSize=12"
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData)
    this.setState({articles : parseData.articles})
  
  }
  handleNextclick= async()=>{
    let url =` https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c4487027f2934ffa911420097d06d400&page=${this.state.page+1}pageSize=20`
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData)
    this.setState({
      page: this.state.page+1,
      articles : parseData.articles})
  }

  handlePrevclick=async ()=>{
    let url =` https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c4487027f2934ffa911420097d06d400&page=${this.state.page-1}pageSize=20`
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData)
    this.setState({
      page: this.state.page-1,
      articles : parseData.articles})

  }
  render() {
    
    return <div className='container my-3'>
      <h2>Top headlines</h2>
      <div className="row my-3">
          {this.state.articles.map((element) =>{
           return <div className="col-md-4 my-3"  key={element.url}>
            <NewsItem title ={element.title?element.title.slice(0,45):""}  description={element.description?element.description.slice(0,88):""}
           imageUrl = {element.urlToImage} newsUrl ={element.url} />
            </div>
             })} </div>

             <div className="container d-flex justify-content-between">
             <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
             <button type="button" class="btn btn-dark" onClick={this.handleNextclick}>Next &rarr; </button>
             </div>
    </div>;
  }
}
