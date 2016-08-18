(function () {
	angular.module('kingdoms')
		.config(function ($stateProvider, $urlRouterProvider) {
			
			$stateProvider
				.state('home', {
					url: '',
					template: '<home-component></home-component>'
				})
				.state('gameoflifepage', {
					url: '/gameoflifepage',
					template: '<gameoflifepage-component></gameoflifepage-component>'
				})
				.state('aboutpage', {
					url: '/aboutpage',
					template: '<aboutpage-component></aboutpage-component>'
				})
				.state('moreinfopage', {
					url: '/moreinfopage',
					template: '<moreinfopage-component></moreinfopage-component>'
				})
				.state('treepage', {
					url: '/treepage',
					template: '<treepage-component></treepage-component>'
				})


		})
} ());