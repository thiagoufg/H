import { combineReducers } from 'redux';
import * as recipesReducer from './recipes';
//reducers são funções COM NOME que recebem um initial-state e uma action
//e fazem alguma lógica de negócio dependendo da action
//a função abaixo junta todos os recuders num objeto,
//cada função nomeada vira um "atributo" com o mesmo nome,
//e cada um procura automaticamente o reducer conforme o type
export default combineReducers(Object.assign(recipesReducer));