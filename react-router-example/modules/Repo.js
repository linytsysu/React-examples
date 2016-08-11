import React, {Component} from 'react';

class Repp extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        );
    }
}

export default Repp;