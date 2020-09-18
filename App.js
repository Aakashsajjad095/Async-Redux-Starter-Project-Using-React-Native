import React, { Component } from "react";
import AppContainer from "./app/containers/AppContainer";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import peopleReducer from './app/Redux/reducer/peopleReducer'
const store=createStore(peopleReducer, applyMiddleware(thunk))
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={AppContainer} />
        </Stack.Navigator>
    );
}
export default function App(){

        return (
            <Provider store={store}>
                <NavigationContainer>
                    <MyStack />
                </NavigationContainer>
            </Provider>

        );

}