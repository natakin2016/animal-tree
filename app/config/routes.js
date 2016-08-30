(function () {
	angular.module('kingdoms')
		.config(function ($stateProvider, $urlRouterProvider) {
			
			$stateProvider
				.state('home', {
					url: '/home',
					template: '<home-component></home-component>'
				})
				.state('gol', {
					url: '/gameoflifepage',
					template: '<gameoflifepage-component></gameoflifepage-component>'
				})
				.state('about', {
					url: '/aboutpage',
					template: '<aboutpage-component></aboutpage-component>'
				})
				.state('moreinfo', {
					url: '/moreinfopage',
					template: '<moreinfopage-component></moreinfopage-component>'
				})
				.state('tree', {
					url: '/treepage',
					template: '<treepage-component></treepage-component>'
				})


		})
} ());