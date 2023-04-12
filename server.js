const PORT = 8000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/completions', async (req, res) => {
	const options = {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${API_KEY}`,
			"content-type": "application/json"
		},
		body: JSON.stringify({
			model : "gpt-3.5-turbo",
			message: [{ role: "user", content: "how are you?"}],
			max_tokens: 100,
		})

	}
	try {
		const response = await fetch('https://api.openai.com/v1/chat/completions', options)
		const data = await response.json()
		request.send(data)
	} catch (error) {
		console.error(error)
	}
})

app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT))