import * as types from './types';
import Api from '../lib/api';

//aqui, as funções principais são action creators, e retornam action

//o bindActionCreators altera todas as functions aqui, transformando-as
//em this.props.store.dispatch(resultado da function original daqui);

//se o resultado das functions aqui for action (objeto com type)
//o dispatch passa direto pro reducer (padrão do redux)

export function addRecipe(){
    return {
        type: types.ADD_RECIPE,
    }
}

//outras funções, que não retornam action, são utilitárias e
//devem retornar outra função que recebe dispatch e getState,
//e que faz algo antes de chamar disptach passando uma action

//mas por causa do thunk-middleware, aplicado na criação da store,
//se o resultado passado pro dispatch for outra function (middleware),
//essa function deve receber dispatch e getState,
//e ela pode retornar promise/observable, que por fim retornará uma action
//só a action mesmo é passada pro dispatch básico e vai pro redux.
//mas o dispatch aceita actions e middlewares:
//ver http://redux.js.org/docs/Glossary.html#async-action

export function fetchRecipes(ingredients){
    return (dispatch,getState)=>{
        console.log(getState());
    }
}