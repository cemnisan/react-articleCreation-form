import React,{Component} from 'react';
import {ArticleConsumer} from '../../data/context';
import Article from './Article';

class Articles extends Component{
    render(){
        return(
            <ArticleConsumer>
                {
                    value =>{
                        const {articles} =value;
                        
                        return(
                            <div>
                                {
                                    articles.map(article =>{
                                        return(
                                            <Article
                                            key={article.id}
                                            id ={article.id}
                                            title={article.title}
                                            content = {article.content}
                                            author = {article.author}
                                            image = {article.image}
                                            video = {article.video}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </ArticleConsumer>
        )
    }
}

export default Articles;