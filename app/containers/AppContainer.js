import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../actions';
import Home from './Home'

class AppContainer extends Component {
    addRecipe(){
        this.props.addRecipe();
    }
    render(){
        return <Home {...this.props} />
    }
}

function mapDispatchToProps(dispatch){
    //ActionCreators é um objeto com funções que retornam 1 action.
    //Actions são simples objetos com pelo menos um atributo type.
    
    //O método abaixo retorna objeto com as funções do ActionCreators
    //alteradas para que cada uma faça:
    //this.store.props.dispatch(resultado funçãoOriginal);
    //se o resultado passado for uma action, vai pro reducer
    
    //mas por causa do thunk-middleware,
    //se o resultado passado for uma function, ela recebe dispatch e getState,
    //que pode retornar uma promise, que por fim retornará uma action
    //só a action mesmo é passada pro dispatch básico, que encainha pro redux.
    //mas o dispatch aceita middlewares:
    //ver http://redux.js.org/docs/Glossary.html#async-action
    
    //Ou seja, o ActionCreators vira "actions creator and dispatcher"
    return bindActionCreators(ActionCreators,dispatch);

    //e tais "action creators e dispatchers" serão injetadas no props
    //ver http://redux.js.org/docs/api/bindActionCreators.html
}

function mapStateToProps(state){
    //Esta porção do state vem dos reducers (ver ../reducers/recipes.js, por exemplo)
    return{};
}

//o método abaixo faz duas coisas na classe passada (esta):
//(1) coloca parte do state para as props ( this.state = {recipeCount: xyz} )
//(2) coloca os "action creators e dispatchers" no props
//Ele passa a função dispatch, da this.props.store, para que
//os métodos modificados possam ter esse atalho.
export default connect( mapStateToProps , mapDispatchToProps )(AppContainer);

//Componentes react conectados com o método acima
//são chamados de Container Components