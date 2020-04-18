const regex = {
	email: /^([\w-+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
};
export const validate = {
	required: function text(value, errorMsg) {
		if (typeof value === 'boolean' && value === true) { return null; }
		if (value && value.length > 0) { return null; }
		return errorMsg;
	},
	email: function mail(value, errorMsg) {
		if (!value || value.length < 1) { return null; }
		return regex.email.test(value) ? null : errorMsg;
	}
};

export function validateField(field, errorMsgs, customErrorMsg) {
	const types = [];
	if (field.required) {
		types.push('required');
	}

	if (field.validationType) {
		types.push(field.validationType);
	}

	const msgs = types.map(type => {
		if (validate[type]) {
			const typeErrorMsg = customErrorMsg || errorMsgs[type];
			return validate[type](field.value, typeErrorMsg);
		}
		return null;
	});

	const msgsWithStrings = msgs.filter(msg => {
		return typeof msg === 'string';
	});

	if (msgsWithStrings.length > 0) {
		return msgsWithStrings[0];
	}

	return null;
}
