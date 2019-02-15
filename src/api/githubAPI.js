

import axios from 'axios';

class GithubAPI {

    static async fetchIssues(organization, repository) {

        try {
            const url = `${process.env.REACT_APP_GITHUBAPI_URL}/repos/${organization}/${repository}/issues`;
            var response = await axios.get(url);
            return response;
        }
        catch (e) {
            return e
        }
    
    }
}

export default GithubAPI;

