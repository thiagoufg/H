import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

//createReducer(...) que recebe:
//(1) um initial-state e
//(2) um outro objeto com um hashmap<type,funcao-handler>
//e retorna um reducer.

//reducer é uma function que recebe(inicialState,action),
//procura o action.type nas keys do hashmap de handlers
//e executa o value handler retornado pelo hashmap.
//Em vez de hashmap, poderia ssó ter um switch statement.

//cada const abaixo é um reducer
//e cada reducer vira uma variável na state-store, com o state...
//exemplo: searchedRecipes tem state = objeto com receitas
//recipeCount tem state = um mero número (inicial = 0)
export const searchedRecipes = createReducer({},{
    [types.SET_SEARCHED_RECIPES](state,action){
        let newState = {};
        action.recipes.forEach(function(recipe) {
            let id = recipe.href
            newState[id] = Object.assign({}, recipe, { id });
        });
        return newState;
    }
})

export const recipeCount = createReducer(0,{
    //isto é um hashmap:
    //cria um atributo/function (chamado de handler) 
    //com nome sendo o tipo da action, recebendo 2 parametros:
    [types.ADD_RECIPE](state,action){
        return state+1;
    },

    [types.SET_SEARCHED_RECIPES](state,action){
        return action.recipes.length;
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