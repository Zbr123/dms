class AppVersionPage {
    applicationVersion(versionNumber) {
      return `//div[contains(@class,'version') and contains(., '${versionNumber}')]`;
    }
  }
  
  module.exports = AppVersionPage;