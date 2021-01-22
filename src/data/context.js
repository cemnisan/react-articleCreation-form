import React,{Component} from 'react';
import axios from 'axios';

const ArticleContext = React.createContext()

const reducer = (state,action) =>{
    switch(action.type){
        case("ADD_USER"):
            return{
                ...state,
                articles:[...state.articles,action.payload]
            }
        case("DELETE_USER"):
            return{
                ...state,
                articles:state.articles.filter(article => article.id !== action.payload)
            }

        default:
            return state
    }
}

export class ArticleProvider extends Component{
    state={
        articles:[],
        dispatch: action=>{
            this.setState(state=> reducer(state,action))
        }
    }
    
    componentDidMount= async () =>{
        const response = await axios("http://localhost:3000/articles")
        
        this.setState({
            articles:response.data
        })
       
    }
    render(){
        return(
            <ArticleContext.Provider value={this.state}>
                {this.props.children}
            </ArticleContext.Provider>
        )
    }
}

const ArticleConsumer = ArticleContext.Consumer;

export {ArticleConsumer}