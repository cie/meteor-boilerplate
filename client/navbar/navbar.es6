Template.navbar.loggedIn = () => !!Meteor.userId()
Template.navbar.isOnSigninPage = () => Router.current().route.name() === "entrySignIn"