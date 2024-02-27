# incidento-io-create-incident-action
GitHub action to create incidents on the Incidento.io - the cheapest incident management tool.

This action creates an incident in Incidento.io (via API) for a specified issue. 
Note: the issue must have a label containing the priority (P1, P2, P3, P4 or P5).

## Inputs

### `incidento-io-api-key`

**Required** Incident.io API Key.

### `incidento-io-api-url`

**Required** Incident.io base API URL.

### `github-token`

**Required** GitHub API Token.

## Example usage

```yaml
uses: ricardofelgueiras/incidento-io-create-incident-action@v1.2
with:
  incidento-io-api-key: "${{ secrets.INCIDENTO_IO_APIKEY }}"
  incidento-io-api-url: "${{ secrets.INCIDENTO_IO_URL }}"
  github-token: "${{ secrets.GITHUB_TOKEN }}"
```
