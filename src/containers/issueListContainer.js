import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssues } from '../actions';
// import { NO_CHANGE_MESSAGE } from '../constants/messages';

class BookContainer extends Component {

    state = {
        name: '',
        price: '',
        genre: undefined
    }

    componentDidMount() {
        this.props.fetchIssues()
    }

    componentDidUpdate(prevProps) {

        // if (this.props.operation === 'edit' && prevProps.book !== this.props.book && this.props.book) {
        //     this.setState({
        //         name: this.props.book.name,
        //         id: this.props.book.id,
        //         genre: this.props.book.genre.id,
        //         price: this.props.book.price,
        //     })
        // }

        // if (this.props.operation === 'create' && prevProps.genres !== this.props.genres && this.props.genres) {
        //     this.setState({
        //         genre: this.props.genres.length > 0 && this.props.genres[0].id

        //     })
        // }
    }


    getStateAndHelpers() {
        console.log(this.props.issues)
        return {
            issues: this.props.issues,
            repository: this.props.repository,
            organization: this.props.organization,

        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        issues: state.issue.items,
        organization: state.issue.organization,
        repository: state.issue.repository,

        // loading: state.loader.loading,
    }
}

export default connect(mapStateToProps, {
    fetchIssues
})(BookContainer);

