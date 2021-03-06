import React,{Component} from 'react';
import {ArticleConsumer} from '../../data/context';
import {Accordion,Card,Button,Container} from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

let slugify = require('slugify')

class Article extends Component{

    deleteArticle = async(dispatch,e) =>{
        const {id} = this.props
        await axios.delete(`http://localhost:3000/articles/${id}`)
        dispatch({type:"DELETE_ARTICLE",payload:id})
        this.props.history.push("/")
    }


    render(){
        const {author,content,image,title,video,id} = this.props
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
                                        <Container>
                                                <div className="article">
                                                    <div className="title">
                                                        <Link to={`detail/${id}/${slugify(title,{lower:true})}`}>
                                                            <h1>{title}</h1>
                                                        </Link>

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
                                            </Container>
                                            <Button onClick={this.deleteArticle.bind(this,dispatch)} type="submit" className="btn btn-primary px-4 mx-2">Sil</Button>
                                            <Link to={`edit/${id}`}><Button className="btn btn-primary">Düzenle</Button></Link>
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

export default withRouter(Article);