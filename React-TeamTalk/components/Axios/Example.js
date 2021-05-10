import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Example extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")

    }

    componentWillReceiveProps(nextProps) {
        console.log("")

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("")

    }

    componentWillUpdate(nextProps, nextState) {
        console.log("")

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")

    }

    componentWillUnmount() {
        console.log(" componentWillUnmount")

    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

Example.propTypes = {};

export default Example;
