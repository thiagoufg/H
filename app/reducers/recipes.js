import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

//createReducer recebe array[funções handler] p cada type de action
//(isso evita switch stsm) e o state inicial, e retornam 1 reducer.

//reducer é 1 function que recebe um initial-state e um action
//e faze alguma lógica de negócio dependendo da action.type.

//cada const abaixo é uma variável na state-store... por exemplo,
//searchedRecipes tem o state sendo um objeto com receitas
//recipeCount tem o state sendo um mero número (inicial = 0)
export const sarchedRecipes = createReducer({},{})

export const recipeCount = createReducer(0,{
    //isto cria um atributo/function (chamado de handler) 
    //com nome sendo o tipo da action, recebendo 2 parametros:
    [types.ADD_RECIPE](state,action){
        return state+1;
    }
});

/*
alternativamente, esta classe poderia ter 2 reducers
com switch statements:

export const searchedRecipes = ({},{}) => { };
export const recipeCount = (state=0,action)=>{
    switch(action.type){
        case types.ADD_RECIPE:
            return state+1;
        default:
            return state;
    }
}
*/