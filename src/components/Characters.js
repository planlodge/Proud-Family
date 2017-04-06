import React, { Component } from 'react';

export default class Character extends Component {

    render () {
        return (
            <div>
                <a className="swipebox" href={"images/photos/" + this.props.image} title={this.props.description} rel="gallery-1">
                    <img
                        className="lazyOwl"
                        data-src={"images/photos/" + this.props.image}
                        src={"images/photos/" + this.props.image}
                        alt={this.props.description} />

                    <div className="titleIt">
                        <p>{this.props.name}</p>
                    </div>
                </a>
            </div>
        );
    }

}