import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';
import {ArticleConsumer} from '../../data/context';
import { withRouter } from 'react-router-dom';

class UpdateArticle extends Component{

    state ={
        title:"",
        content:"",
        author:"",
        image:"",
        video:""
    }
    
    nameInput = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount = async() =>{
        const {id} = this.props.match.params;
        const response = await axios.get(`http://localhost:3000/articles/${id}`)
        const {title,content,author,image,video} = response.data;
        this.setState({
            title,
            content,
            author,
            image,
            video
        })
        
    }

    updateArticle = async (dispatch,e) =>{
        e.preventDefault();
        
        const {id} = this.props.match.params;
        const {title,content,author,image,video} = this.state;

        const updatedArticle = {
            title,
            content,
            author,
            image,
            video
        }
        const response = await axios.put(`http://localhost:3000/articles/${id}`,updatedArticle)
        dispatch({type:"UPDATE_ARTICLE",payload:response.data})

        this.props.history.push("/blog")
    }

    render(){
        let resumeData= this.props.resumeData;

        return(
            <ArticleConsumer>
                {
                    value=>{
                        const {dispatch} = value;
                        
                        return (
                            <Form onSubmit={this.updateArticle.bind(this,dispatch)} className="container">
                                {
                                    resumeData.articleForm.map(item=>{
                                        let {controlId,label,type,placeholder,as,rows,name} = item;
                                        return (
                                            <Form.Group  key={controlId} controlId={controlId}>
                                                <Form.Label className="mt-3">{label}</Form.Label>
                                                <Form.Control 
                                                type={type} 
                                                placeholder={placeholder} 
                                                as={as} 
                                                rows={rows}
                                                value={this.state.title}
                                                onChange={this.nameInput}
                                                name={name} 
                                                />
                                            </Form.Group>
                                        )
                                    })
                                }
                                <Button type="submit" className="mt-2">
                                    Düzenle
                                </Button>
                            </Form>
                        )
                    }
                }
            </ArticleConsumer>
        )
    }
}

export default withRouter(UpdateArticle);