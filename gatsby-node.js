// Create client-side paths

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/groups` page.
	if (page.path.match(/^\/groups/)) {
		// This tells it to load the groups page for all "groups/*" routes
    page.matchPath = "/groups/*"
    // Update the page.
    createPage(page)
  }
}