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
    constructor(props){
        super(props);
    }
    searchPressed(){
        console.log('oi');
        this.props.fetchRecipes('banana');
    }
    render(){
        return <View style={{marginTop:20}}>
            <View>
                <TouchableHighlight onPress={()=>{this.searchPressed();}}>
                    <Text>Procurar5</Text>
                </TouchableHighlight>
            </View>
            <ScrollView>

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