import React, {Component} from 'react';
import ReactNative from 'react-native';
import {connect} from 'react-redux';
const{
    ScrollView,
    View,
    TextInput,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} = ReactNative;

class Home extends Component {
    searchPressed(){
        this.props.fetchRecipes('banana');
    }

    recipes(){
        return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key]);
    }
    render(){
        console.log(this.recipes());
        return <View style={{marginTop:20}}>
            <View>
                <TouchableHighlight onPress={()=>{this.searchPressed();}}>
                    <Text>bbb</Text>
                </TouchableHighlight>
            </View>
            <ScrollView>
                {this.recipes().map((recipe)=>{
                    return <View key={recipe.id}>
                        <Image source={{uri:recipe.image}} style={{}}/>
                        <Text>{recipe.title}</Text>
                        </View>;
                })}
            </ScrollView>
        </View>;
    }
}

function mapStateToProps(state)
{
    return {
        searchedRecipes: state.searchedRecipes
    }
}

export default connect(mapStateToProps)(Home);