import React, { Component } from 'react';
import { IssueStateWrapper, IssueStateSvgWrapper } from './style';
import { Popup } from '../Popup';

class IssueState extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState((prevState) => ({
            isHovering: !prevState.isHovering
        }))
    }

    render() {
        return (

            <IssueStateWrapper>
                <span
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}>
                    <IssueStateSvgWrapper
                        state={this.props.state}
                        viewBox="0 0 14 16"
                        version="1.1"
                        width="14"
                        height="16"
                        aria-hidden="true">
                        <path fillRule="evenodd"
                            d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z">
                        </path>
                    </IssueStateSvgWrapper>
                    <Popup
                        show={this.state.isHovering}
                        message={`${this.props.state} issue`} />
                </span>
            </IssueStateWrapper>
        );
    }
}

export default IssueState;