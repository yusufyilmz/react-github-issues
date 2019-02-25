

import axios from 'axios';
import parseLink from 'parse-link-header';

const getPageCount = (pageLinks) => {
    
    if (!pageLinks) {
        return 0;
    }
    if (Object.keys(pageLinks).length === 2 && pageLinks.first && pageLinks.prev) {
        return parseInt(pageLinks.prev.page, 10) + 1;
    } else if (pageLinks.last) {
        return parseInt(pageLinks.last.page, 10)
    } else {
        return 0;
    }
}

class GithubAPI {

    static async fetchIssues(organization, repository, pageNumber, query) {

        try {
            let pageLinks, pageCount = 0;
            // throw new Error('aaa') to test
            let url = `${process.env.REACT_APP_GITHUBAPI_URL}/repos/${organization}/${repository}/issues?page=${pageNumber}`;

            if(query) {
                url += '&' + query;
            }

            var response = await axios.get(url);
            if(response.headers) {
                pageLinks = parseLink(response.headers.link);
                pageCount = getPageCount(pageLinks);
            }

            return {
                pageLinks,
                pageCount,
                data: response.data
            }
        }
        catch (e) {
            return e
        }
    }

    static async fetchSingeIssue(organization, repository, issueNumber) {

        try {
            let url = `${process.env.REACT_APP_GITHUBAPI_URL}/repos/${organization}/${repository}/issues/${issueNumber}`;

            console.log(url)
            var response = await axios.get(url);

            return {
                data: response.data
            }
        }
        catch (e) {
            return e
        }
    }

    

    static async sortIssues(type, direction, organization, repository) {

        try {

            let query = `sort=${type}&direction=${direction}`;
            const url = `${process.env.REACT_APP_GITHUBAPI_URL}/repos/${organization}/${repository}/issues?${query}`;
           
            var response = await axios.get(url);

            const pageLinks = parseLink(response.headers.link);
            const pageCount = getPageCount(pageLinks);

            return {
                pageLinks,
                pageCount,
                data: response.data,
                query: query
            }
        }
        catch (e) {
            return e
        }
    }

}

export default GithubAPI;

