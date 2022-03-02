'use strict';

import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";

// Component or View under test and dependencies
import Home from "../src/views/Home.vue"

describe("Home View - bdd tests", function () {
	let wrapper;

	beforeEach(function () {
		wrapper = shallowMount(Home, {
			propsData: {

			}
		});
	});

	describe("Feature - Login", function() {
		
		describe("Scenario - Create new user", function () {
			it("GIVEN a user has not created an account");
			it("WHEN the home view is loaded");
			it("THEN the user is presented with the option to create a new account");
		});

		describe("Scenario - Login existing user", function () {
			it("GIVEN a user has created an account");
			it("WHEN the home view is loaded");
			it("THEN the user is presented with the option to enter a username and password");
			it("AND a login button");
		});

	})
	
});
