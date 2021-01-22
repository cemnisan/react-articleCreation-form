import React,{Component} from 'react';
import {ArticleConsumer} from '../../data/context';

class Article extends Component{
    render(){
        const {author,content,id,image,title,video} = this.props
        return(
            <ArticleConsumer>
                {
                    value =>{
                        const {dispatch} = value;
                        console.log(dispatch,id)
                        return(
                            <div className="container mt-5">
                                <div className="article">
                                    <div className="title">
                                        <h1>{title}</h1>
                                        <h5>{author}</h5>
                                    </div>
                                    <div className="image mt-3">
                                        <img src={image} alt="..."></img>
                                    </div>
                                    <div className="video mt-3 mb-3">
                                        <video controls>
                                            <source src={video} type="video/mp4"></source>
                                        </video>
                                    </div>
                                    <div className="content">
                                        <p>{content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </ArticleConsumer>
        )
    }
}

export default Article;