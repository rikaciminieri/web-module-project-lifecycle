import React from 'react';

class User extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.userData)
        return (this.props.userData ?
            <>
            <div class="text-center mb-4 opacity-90">
        <a href="#" class="block relative">
            <img alt="profile" src={this.props.userData.avatar_url} class="mx-auto object-cover rounded-full h-40 w-40 "/>
        </a>
    </div>
    <div class="text-center">
        <p class="text-2xl text-gray-800 dark:text-white">
            {this.props.userData.login}
        </p>
        <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
            {this.props.company}
            {this.props.location}
            {this.props.followers}
        </p>
    </div>
            </> : "No user found!!"
        )
}
}

export default User;