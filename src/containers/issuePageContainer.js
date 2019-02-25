import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssues, fetchSingleIssue, sortIssues, filterIssues } from '../actions';

let searchTimeout;
class IssuePageContainer extends Component {

    state = {
        text: '',
        currentPage: 1,
    }


    componentDidMount() {
        this.props.fetchIssues(this.state.currentPage)
    }


    filterHandleChange = (text) => {
        console.log('onchange')

        console.log(text)
        this.setState({ text }, () => {
            if (searchTimeout !== undefined) clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.props.filterIssues(text);
            }, 300);
        });
    }

    sortIssues = (type, direction) => {
        this.props.sortIssues(type, direction);
    }

    handlePageChange = (selected) => {
        if (selected <= this.props.pageCount && selected >= 1) {
            this.setState(prevState => ({
                currentPage: selected
            }), () => {
                this.props.fetchIssues(this.state.currentPage)
            })
        }
    }

    showDetail = (number) => {
        this.props.fetchSingleIssue(number);
    }

    getStateAndHelpers() {
        return {
            issues: this.props.issues,
            issue: this.props.issue,
            repository: this.props.repository,
            organization: this.props.organization,
            currentPage: this.state.currentPage,
            handlePageChange: this.handlePageChange,
            pageCount: this.props.pageCount,
            loading: this.props.loading,
            showDetail: this.showDetail,
            sortIssues: this.sortIssues,
            filterText: this.state.filterText,
            filterHandleChange: this.filterHandleChange
        }
    }

    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


const mapStateToProps = (state) => {
    return {
        issues: state.issue.items,
        issue: state.issue.item,
        organization: state.issue.organization,
        repository: state.issue.repository,
        loading: state.loader.loading,
        error: state.error.error,
        pageCount: state.issue.pageCount
    }
}

export default connect(mapStateToProps, {
    fetchIssues,
    fetchSingleIssue,
    sortIssues, 
    filterIssues
})(IssuePageContainer);

