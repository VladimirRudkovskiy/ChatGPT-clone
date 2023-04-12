const App = () => {

	const getMessages = async () => {
		const options = {
			method: "POST",
			body : JSON.stringify({message: "hello how are you"
		}),
		headers: {
			"Content-Type": "application/json"
		}
		}
		try {
			const response = await fetch('http://localhost:8000/completions', options)
			const data = await response.json()
			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}


  return (
    <div className="app">
			<section className="side-bar">
				<button>+ New Chat</button>
				<ul className="history">
					<li>123</li>
				</ul>
				<nav>
					<p>Made by North</p>
				</nav>
			</section>
			<section className="main">
				<h1>ChatGPT</h1>
				<ul className="feed">

				</ul>
				<div className="bottom-section">
					<div className="input-container">
						<input/>
						<div id="submit" onClick={getMessages}>➢</div>
					</div>
					<p className="info">
						Chat GPT Mar 14 Version. Free Research Preview.
						Goal is to make AI systems more natural and safe to interact with.
						Your feedback will help us improve.
					</p>
				</div>
			</section>
    </div>
  );
}

export default App
