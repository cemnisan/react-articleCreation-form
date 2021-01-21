import React,{Component} from 'react';

const ArticleContext = React.createContext()

const reducer = (state,action) =>{
    switch(action.type){
        case("ADD_USER"):
            return{
                ...state,
                articles:[...state.articles,action.payload]
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