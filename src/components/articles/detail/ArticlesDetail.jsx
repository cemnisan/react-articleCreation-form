import React, { Component } from 'react'
import {ArticleConsumer} from '../../data/context';
import ArticleDetails from './ArticleDetails';

class ArticlesDetail extends Component {
  render() {
    const {id} = this.props.match.params
    console.log(id)
    return (
      <ArticleConsumer>
        {
          value =>{
            const {articles} = value;
            return(
              <div>
                {
                  articles.filter(item=>item.id === Number(id)).map(item=>{
                    return(
                      <ArticleDetails key={item.id}
                        title={item.title}
                        author={item.author}
                        image={item.image}
                        video={item.video}
                        content={item.content}
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

export default ArticlesDetail;
