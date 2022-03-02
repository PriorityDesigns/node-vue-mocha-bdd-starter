'use strict';

import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";

// Component or View under test and dependencies
import ButtonText from "../src/components/base/button-text.vue";

describe("button-text component - unit tests", function () {
	let wrapper;

	beforeEach(function () {
		wrapper = shallowMount(ButtonText, {
			propsData: {
				isDisabled: false
			}
		});
	});

	it("should render a button tag", function () {
		const button = wrapper.find('button');
		expect(button.exists()).to.be.true;
	});

	it("should emit a signal when clicked", async function () {
		const button = wrapper.find('button');
		button.trigger('click');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted('button-clicked').length).to.equal(1);
	});

	it("should not emit a signal when clicked while disabled", async function () {
		const button = wrapper.find('button');
		await wrapper.setProps({ isDisabled: true })
		button.trigger('click');
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted('button-clicked')).to.not.exist;
	});
	
	it("should have .button-text:disabled class applied when button is disabled", async function () {
		const buttonClass = wrapper.find('.button-text');
		expect(buttonClass.attributes('disabled')).to.not.exist;
		await wrapper.setProps({ isDisabled: true });
		expect(buttonClass.attributes('disabled')).to.equal('disabled');
	});

	it("should set the button text when updated", async function () {
		const button = wrapper.find('button');
		await wrapper.setProps({ buttonText: "Test Button" });
		expect(button.text()).to.equal("Test Button");
	});
	

});
