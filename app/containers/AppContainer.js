/**
 * Created by HP on 9/16/2020.
 */
import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import PeopleList from "../components/PeopleList";
import {fetchPeople} from "../Redux/actions/peopleAction"
import {connect} from "react-redux"

class AppContainer extends Component {

    componentDidMount() {
       // this.fetchRandomPeopleAPI();
        this.props.fetchPeople();
        // this.props.navigation.navigate('Home')
    }

    render() {
        let content = <PeopleList people={this.props.people} />;
        if (this.props.isFetching) {
            content = <ActivityIndicator size="large" />;
        }
        return <View style={styles.container}>{content}</View>;
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#093339"
    }
});
//Map the redux state to your props.
const mapStateToProps = state => ({
    people: state.people,
    isFetching: state.isFetching,
})

//Map your action creators to your props.
const mapDispatchToProps = {
    fetchPeople,
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
