import React, { Component } from 'react';
import { connect } from 'react-redux';
import { backToIssuePage } from '../actions';

class IssueDetailPageContainer extends Component {


    backToIssuePage = () => {
        this.props.backToIssuePage();
    }
    getStateAndHelpers() {
        return {
            issue: this.props.issue,
            loading: this.props.loading,
            error: this.props.error,
            backToIssuePage: this.backToIssuePage
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        issue: state.issue.item,
        loading: state.loader.loading,
        error: state.error.error,
    }
}

export default connect(mapStateToProps,
    { backToIssuePage })
    (IssueDetailPageContainer);

