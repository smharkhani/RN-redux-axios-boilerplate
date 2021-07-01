import { GetUsers } from "../redux/actions/taskAction";
import React from 'react';
import { SafeAreaView, Text, View } from "react-native";
import { connect } from "react-redux";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        // making all API calls and store in the redux-store
        this.props.GetUsers();
    }

    render() {
        console.log("this.props.tasksss ", this.props.Loading);
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Text>Hello</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    Loading: state.task.loading
});

const mapDispacthToProps = dispatch => {
    return {
        GetUsers: () => dispatch(GetUsers())
    };

};
export default connect(
    mapStateToProps,
    mapDispacthToProps
)(Home);