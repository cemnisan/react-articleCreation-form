import React,{Component} from 'react'

class ArticleDetails extends Component{
  render(){
    const {title,author,image,video,content} = this.props
    return(
      <>
        <div className="div">
          <h1>{title}</h1>
          <h1>{author}</h1>
          <img src={image} alt="..."></img>
          <source src={video}></source>
          <p>{content}</p>
        </div>
      </>
    )
  }
}

export default ArticleDetails;