import React, {Component} from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../actions';
const {
    View,
    Text,
    TouchableHighlight
} = ReactNative;
class AppContainer extends Component {
    addRecipe(){
        this.props.addRecipe();
    }
    render(){
        return <View>
            <Text style={{marginTop:20}}>
                I am App Container! Recipe count: 
                {this.props.recipeCount}</Text>
            <TouchableHighlight onPress={()=>{this.addRecipe()}}>
                <Text>Add recipe</Text>
            </TouchableHighlight>
        </View>
    }
}

function mapDispatchToProps(dispatch){
    //ActionCreator é um objeto com funções que retornam 1 action.
    //Actions são objetos com pelo menos um atributo type.
    //O método abaixo retorna objeto com as funções do ActionCreator
    //alteradas para que cada uma das funções façam:
    // this.props.store.dispatch("objeto action {type: x,}");
    return bindActionCreators(ActionCreators,dispatch);
}

function mapStateToProps(state){
    return{recipeCount: state.recipeCount};
}

//o método abaixo faz duas coisas na classe passada (esta):
//(1) coloca parte do state para as props ( this.state = {recipeCount: xyz} )
//(2) coloca as funções que dispacham as actions no props
//Ele passa a função dispatch, da this.props.store, para que
//os métodos modificados possam ter esse atalho.
export default connect( mapStateToProps , mapDispatchToProps )(AppContainer);