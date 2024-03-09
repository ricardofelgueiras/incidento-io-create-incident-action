const axios = require('axios');

function createIncident(issuePayload, url, apiKey) {
    const create_incident_endpoint = `${url}/incidents`;
    const create_incident_json = getJson(issuePayload);

    axios.post(create_incident_endpoint, create_incident_json, {
        headers: {
            'Content-Type': 'application/json',
            'API_Key': `${apiKey}`
        }
    })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error creating incident:', error);
            throw error;
        });
}

function getJson(issue) {
    var create_incident_json = {
        "title": issue.title,
        "description": issue.body,
        "priority": getPriorityFromLabels(issue.labels),
        "externalLink": issue.html_url,
    };
    return create_incident_json;
}

function getPriorityFromLabels(labels) {
    var labelsWithPriorityNames = [];

    labels.forEach(function (label) {
        if (label.name == "P1" || label.name == "P2" || label.name == "P3") {
            labelsWithPriorityNames.push(label.name);
        }
    });

    if (labelsWithPriorityNames.length > 0) {
        return labelsWithPriorityNames.sort()[0];
    }

    // default priority is P5
    return "P5";
}

module.exports = { createIncident }