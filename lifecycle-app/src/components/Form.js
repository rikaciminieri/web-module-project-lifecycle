import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" placeholder="Type your Github Username" onChange={this.props.handleChange} value={this.props.user} className=" m-3 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-50% py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                <button className="py-4 px-6 m-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-25% transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full" >Search</button>
            </form>
        )
    }
}

export default Form;