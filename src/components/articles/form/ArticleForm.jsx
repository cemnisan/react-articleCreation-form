import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';
import {ArticleConsumer} from '../../../data/context';
import { withRouter } from 'react-router-dom';

class ArticleForm extends Component{
    state = {
        title:"",
        content:"",
        author:"",
        image:"",
        video:"",
    }

    nameChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addArticle = async(dispatch,e) =>{
        e.preventDefault();
        const {title,content,author,image,video} = this.state;

        const newUser = {
            title:title,
            content:content,
            author:author,
            image:image,
            video:video
            }

        const response = await axios.post('http://localhost:3000/articles',newUser)
        dispatch({type:"ADD_ARTICLE",payload:response.data})
        
        this.props.history.push('/blog')
        
    }

   render(){
        let resumeData= this.props.resumeData;
        
        return(
            <ArticleConsumer>
                {
                    value=>{
                        const {dispatch} = value;
                        return (
                            <Form onSubmit={this.addArticle.bind(this,dispatch)} className="container">
                                {
                                    resumeData.articleForm.map(item=>{
                                        let {controlId,label,type,placeholder,as,rows,name} = item;
                                        return (
                                            <Form.Group key={controlId} controlId={controlId}>
                                                <Form.Label className="mt-3">{label}</Form.Label>
                                                <Form.Control 
                                                type={type} 
                                                placeholder={placeholder} 
                                                as={as} 
                                                rows={rows} 
                                                onChange={this.nameChange}
                                                name={name}
                                                
                                                />
                                            </Form.Group>
                                        )
                                    })
                                }
                                <Button variant="primary" type="submit" className="mt-2">
                                    Submit
                                </Button>
                            </Form>
                        )
                    }
                }
            </ArticleConsumer>
        )
    }
}

export default withRouter(ArticleForm);

