import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { connect } from "react-redux";

import { AddUser } from "../redux/actions/taskAction";

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    // creating new user using Redux-Thunk
    addNewUser = () => {
        let data = {
            "name": "muhammad awais",
            "job": "developer"
        }

        this.props.submit(
            data
        );
    }

    render() {

        // getting users from redux store
        console.log("this.props.Users : ", this.props.Users);

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
    Users: state.task.Users
});

const mapDispacthToProps = dispatch => {
    return {
        submit: (data) => {
            dispatch(AddUser(data))
        }
    };
};
// export default withStyles(styles)(ProductList);
export default connect(
    mapStateToProps,
    mapDispacthToProps
)(HomeComponent);