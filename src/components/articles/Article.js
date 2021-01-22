import React,{Component} from 'react';
import {ArticleConsumer} from '../../data/context';
import {Accordion,Card,Button} from 'react-bootstrap';
import axios from 'axios';

class Article extends Component{

    deleteArticle = async(dispatch,e) =>{
        const {id} = this.props
        await axios.delete(`http://localhost:3000/articles/${id}`)
        dispatch({type:"DELETE_USER",payload:id})
    }


    render(){
        const {author,content,image,title,video} = this.props
        return(
            <ArticleConsumer>
                {
                    value =>{
                        const {dispatch} = value;

                        return(
                            <Accordion defaultActiveKey="0" className="container mt-5 mb-5">
                                <Card>
                                    <Accordion.Toggle as ={Card.Header} eventKey="0">
                                        {<h1>{title}</h1>}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                        <div className="container">
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
                                            <Button onClick={this.deleteArticle.bind(this,dispatch)} type="submit" className="btn btn-primary px-4 mx-2">Sil</Button>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )
                    }
                }
            </ArticleConsumer>
        )
    }
}

export default Article;