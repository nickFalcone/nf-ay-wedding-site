const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it

  delete configOptions.plugins
  // Helper function to process weather data into Gatsby node structure
  const processData = data => {
    const nodeId = createNodeId(`something`)
    const nodeContent = JSON.stringify(data)
    const nodeData = Object.assign({}, data, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `weatherData`,
        content: nodeContent,
        contentDigest: createContentDigest(data),
      },
    })
    return nodeData
  }

  // Convert the options object into a query string
  const apiOptions = queryString.stringify(configOptions)
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${apiOptions}`

  // Gatsby expects sourceNodes to return a promise
  return (
    fetch(apiUrl)
      .then(response => response.json())
      // Process the response data into a node
      .then(data => {
        // Process the weather data to match the structure of a Gatsby node
        const nodeData = processData(data)
        // Use Gatsby's createNode helper to create a node from the node data
        createNode(nodeData)
      })
  )
}