import { BASE_API_URL } from './const'

function fetchAPI(apiCall) {
  try {
    var json = fetch(apiCall, {credentials: 'include'}).then(response => response.json())
  }
  catch (e) {
    console.log(e)
  }
  return json
}

export function fetchBuild(vcsType, orgName, repoName, buildNum) {
  return fetchAPI(`${BASE_API_URL}/project/${vcsType}/${orgName}/${repoName}/${buildNum}`)
}

export function fetchRecentBuilds(vcsType, orgName, repoName) {
  return fetchAPI(`${BASE_API_URL}/project/${vcsType}/${orgName}/${repoName}`)
}

export function fetchConfigTranslation(vcsType, orgName, repoName) {
  return fetch(`${BASE_API_URL}/project/${vcsType}/${orgName}/${repoName}/config-translation`, {credentials: 'include'}).then(response => response.text()) 
}
