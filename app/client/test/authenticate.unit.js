'use strict';

//Require the dev-dependencies
import { expect } from "chai";
import authenticate from "../src/scripts/authenticate.js";

describe("Authenticate existing user", function () {
	describe("authenticateUser with known username and password=1234", function () {
    it("should return true", function () {
			let value = authenticate.authenticateUser("testuser", "1234");
			
			expect(value).to.true;
		});
	});
	
	describe("authenticateUser with invalid username and password", function () {
    it("should return false", function () {
			let value = authenticate.authenticateUser("testuser", "password");
			
			expect(value).to.false;
		});
	});
});