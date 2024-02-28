const core = require('@actions/core');
const github = require('@actions/github');
// const { Octokit } = require("@octokit/action");
const incidentoIOOperations = require('./incidento.io');

try {
    const context = github.context;
    
    // Get action inputs
    const api_key = core.getInput('incidento-io-api-key');
    const url = core.getInput('incidento-io-api-url');
    const github_token = core.getInput('github-token');

    const octokit = github.getOctokit(github_token);
    
    // Get issue updated
    const issue = (async () => {
        return await octokit.rest.issues.get({
            repo: context.issue.repo,
            issue_number: context.issue.number,
            owner: context.issue.owner
        })
    })();

    issue.then(value => {
        // Create Incident.io incident
        incidentoIOOperations.createIncident(value.data, url, api_key);
    });

} catch (error) {
    core.setFailed(error.message);
}