class ForgotPasswordPage {

    forgotPwd(linkText) {
        return `//a[text()='${linkText}']`;
    }
}
module.exports = ForgotPasswordPage;