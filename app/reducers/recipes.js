import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

//createReducer(...) recebe um initial-state e um outro
//objecto com hashmap<type,funcao-handler>
//e retorna o reducer, que é uma function que
//recebe(inicialState,action),
//procura o action.type nas keys do hashmap de handlers
//e executa o value handler retornado pelo hashmap

//cada const abaixo é uma variável na state-store... por exemplo,
//searchedRecipes tem o state sendo um objeto com receitas
//recipeCount tem o state sendo um mero número (inicial = 0)
export const sarchedRecipes = createReducer({},{})

export const recipeCount = createReducer(0,{
    //isto é um hashmap:
    //cria um atributo/function (chamado de handler) 
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