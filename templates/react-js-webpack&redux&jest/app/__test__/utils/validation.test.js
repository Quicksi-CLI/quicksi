import { validate, validateField } from '../../utils/validation.js';

describe('Validation', () => {
	it('is checking if value is not empty', () => {
		const errorMsg = 'This field is required';
		let value = '123';
		expect(validate.required(value, errorMsg)).toEqual(null);

		value = '';
		expect(validate.required(value, errorMsg)).toEqual(errorMsg);

		// true/false are coming from checkboxes
		value = true;
		expect(validate.required(value, errorMsg)).toEqual(null);

		value = false;
		expect(validate.required(value, errorMsg)).toEqual(errorMsg);
	});

	it('is validating email', () => {
		const errorMsg = 'Please add correct email';
		let value = 'test@test.com';
		expect(validate.email(value, errorMsg)).toEqual(null);

		value = 'a@a.com';
		expect(validate.email(value, errorMsg)).toEqual(null);

		value = 'abc123a@aaaaaaa.com';
		expect(validate.email(value, errorMsg)).toEqual(null);

		value = '123@321.com';
		expect(validate.email(value, errorMsg)).toEqual(null);

		value = 'b@b.b';
		expect(validate.email(value, errorMsg)).toEqual(errorMsg);

		value = 'AAAA';
		expect(validate.email(value, errorMsg)).toEqual(errorMsg);

		value = 'aaa@bbb.comcomomomom';
		expect(validate.email(value, errorMsg)).toEqual(errorMsg);

		// empty value should not be validated
		value = '';
		expect(validate.email(value, errorMsg)).toEqual(null);
	});

	it('is validating field', () => {
		// error messages object with messages uesd only in test
		const errorMsgs = { required: 'This field is required' };
		const customErrorMsg = 'Custom error';

		// required text field
		const field = {
			ref: 'customerFirstName',
			label: 'Enter your first name',
			type: 'text',
			required: true
		};
		// value is empty
		expect(validateField(field, errorMsgs)).toEqual(errorMsgs.required);

		// custom error msg
		expect(validateField(field, errorMsgs, customErrorMsg)).toEqual(customErrorMsg);

		// add value
		field.value = 'test';
		expect(validateField(field, errorMsgs)).toEqual(null);

		// remove validation type and required flag (no validation at this point)
		field.required = undefined;
		field.validationType = undefined;
		expect(validateField(field, errorMsgs)).toEqual(null);
	});

	it('is skipping validation for inproper validation type', () => {
		const errorMsgs = { inproperValidationType: 'Validation type not supported' };

		const field = {
			ref: 'customerFirstName',
			label: 'Enter your first name',
			type: 'text',
			required: true,
			validationType: 'inproperValidationType'
		};

		expect(validateField(field, errorMsgs)).toEqual(null);
	});
});
