import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {
    Header,
    Title,
    Drawer,
    Card,
    CardItem,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Content
} from 'native-base';
import { StackNavigator } from 'react-navigation'

import MentorCard from '../src/components/MentorCard'




export default class MentorSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { mentors: [] };
    }

    async componentDidMount() {
        let mentors = await this.fetchProfiles()

        this.setState({ mentors });
    }


    async fetchProfiles() {
        try {
            let result = await fetch({
                url: 'http://localhost:3000/api/mentors'
            });
            let mentors = await result.json();
            return mentors;
        } catch (e) {
            console.log(e);
            return;
        }
    }


    render() {
        return (
            <ScrollView>
                {this.state.mentors.map(mentor => {
                    return <MentorCard key={mentor.id} mentor={mentor} />;
                })}
            </ScrollView>
        )
    }

}