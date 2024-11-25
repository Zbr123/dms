class ProfilePage {
    additionalInformationBanner = `//div[contains(@class,'validation-badge')and contains (.,'Additional information needed')]`;

    SSN = `input[placeholder='Enter last 4 digits of SSN']`;

    DATE = `input[placeholder='mm/dd/yyyy']`;

    Button(buttonText) {
        return (`//button[contains(.,'${buttonText}')]`);
    }

    attemptLeftOnProfileTab(attmptValue) {
        return (`//strong[contains(.,'${attmptValue}')]`);
      }
}
module.exports = ProfilePage;