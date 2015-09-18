/* global Router */

Router.configure({
    layoutTemplate: "layout"
})

Router.route("/", function() {
    this.render("home")
})

Router.route("/dashboard", function() {
    if (!Meteor.userId()) {
        this.redirect("entrySignIn")
    }
    this.render("dashboard")
})
