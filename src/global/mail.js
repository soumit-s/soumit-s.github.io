

const TOKEN = '1df714f3-22db-4a3c-8154-29c0d9c2573b'

function generateBody(email, message) {
	return `EMAIL: ${email},\n
------------------\n
${message}
`
}

export function sendMail({email, message}, callback) {

	const body=generateBody(email, message)

	Email.send({
		SecureToken: TOKEN,
		To: 'soumit.srim@gmail.com',
		From: 'soumit.srim@gmail.com',
		Subject: "Feedback[from: soumit-s.github.io]",
		Body: body
	}).then(
		message => callback ? callback(message) : null
	);
}