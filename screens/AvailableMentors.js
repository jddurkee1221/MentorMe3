import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { StackNavigator } from 'react-navigation';
import MentorCard from '../src/components/MentorCard';


export default class AvailableMentors extends Component {

    constructor(props) {
        super(props);
        this.state = { mentors: [] };
    }

    async componentDidMount() {
        let mentors = await this.fetchProfiles()

        this.setState({ mentors });
    }
3

    async fetchProfiles() {
        try {
            let result = await fetch({
                url: `http://localhost:3000/api/mentors/${this.id}`
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