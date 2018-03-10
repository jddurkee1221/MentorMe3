import React, { Component } from 'react';
// import { Platform } from 'react-native';
import { Rating } from 'react-native-elements';
import { View } from 'react-native';
import {
    Button,
    Icon,
    Text,
    Right,
    Body,
    Left,
    Card,
    CardItem,
    Content,
    Header,
    Title
} from 'native-base';

export default class MentorCard extends Component {
    render() {
        return (
            <Content style={{
                backgroundColor: "#FFFFF0"
            }}>
                <Header style={{
                    backgroundColor: "#FFFFF0"

                }}>
                    <Title >Example Profile of a Mentor</Title>
                </Header>

                <Card key={this.props.mentor.userid}>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text style={{ paddingVertical: 3 }}>
                                    {this.props.mentor.firstname} {this.props.mentor.lastname}
                                </Text>
                                <Text style={{
                                    marginBottom: 10,
                                    paddingVertical: 3
                                }}>
                                    {this.props.mentor.bio}
                                </Text>
                                <Text style={{
                                    marginBottom: 10,
                                    paddingVertical: 3
                                }}>
                                    {this.props.mentor.qualifications}
                                </Text>
                            </Body>
                        </Left>
                        <Right>
                            <Body>
                                <Rating
                                    type='star'
                                    ratingCount={5}
                                    imageSize={30}
                                    showRating
                                    onFinishRating={this.ratingCompleted}
                                    style={{ paddingVertical: 15 }}
                                />
                                <Text note>Hourly Rate:</Text>
                                <Text>$45 an Hour</Text>
                            </Body>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}
