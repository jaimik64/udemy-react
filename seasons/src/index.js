import React from 'react';
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lat: null, errorMsg: '' };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => this.setState({ lat: pos.coords.latitude }),
            (err) => this.setState({ errorMsg: err.message })
        )
    }

    // Required
    render() {

        this.setState()

        return (
            <div>
                {this.state.lat && !this.state.errorMsg ? <SeasonDisplay lat={this.state.lat} /> : ''}
                {this.state.errorMsg && !this.state.lat ? `Error : ${this.state.errorMsg}` : ''}
                {!this.state.errorMsg && !this.state.lat ? <Spinner msg="Please accept location request" /> : ''}
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
