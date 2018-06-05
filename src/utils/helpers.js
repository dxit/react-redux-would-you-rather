export function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
		if (+match === 0) return '';
		return index === 0 ? match.toLowerCase() : match.toUpperCase();
	});
}

export function formatUser({avatarURL, name}) {
	const unique = new Date().getMilliseconds();

	return {
		id: `${camelize(name).toLowerCase()}${unique}`,
		name,
		avatarURL,
		answers: {},
		questions: []
	}
}
