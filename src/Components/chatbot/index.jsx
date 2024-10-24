// Call the api to run the model
// P.S. pipelines work in an async approach
// Therefore the response will be a url to poll from periodically until we get a response
// Initiate the process with POST call
// async function runPipeline () {
// 	try {
// 		const response = await fetch('https://platform-api.aixplain.com/assets/pipeline/execution/run/6719b1466421a8c637b5fcfa', {
// 			method: 'post',
// 			body: JSON.stringify({ data: <QUERY_TEXT_AUDIO_DATA> }),
// 			headers: {
// 				'x-api-key': 'ac88********cd6f', // Put full API key here
// 				'content-type': 'application/json'
// 			}
// 		})
// 		const results = await response.json()
// 		const urlToPoll = results.url

// 		// Checking the request status with GET
// 		const pollInterval = setInterval(async() => {
// 			try {
// 				const statusResponse = await fetch(urlToPoll, {
// 					method: 'get',
// 					headers: {
// 						'x-api-key': 'ac88********cd6f', // Put full API key here
// 						'content-type': 'application/json'
// 					}
// 				})
// 				const results = await statusResponse.json()
// 				if (results.completed) {
// 					clearInterval(pollInterval)
// 					console.log(results.data)
// 				}
// 			} catch (error) {
// 				clearInterval(pollInterval)
// 				console.error(error)
// 			}
// 		}, 5000)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// // Run
// runPipeline()

export default function Chatbot(){
	return(
		<>
{/* <script>
window.embeddedChatbotConfig = {
	chatbotId: "qJx06AJi77Mz2KI344NXj",
	domain: "www.chatbase.co",
}
</script>

<script
src="https://www.chatbase.co/embed.min.js"
chatbotId="qJx06AJi77Mz2KI344NXj"
domain="www.chatbase.co"
defer>
</script>
		
		<iframe
        src="https://www.chatbase.co/chatbot-iframe/qJx06AJi77Mz2KI344NXj"
        width="100%"
        style="height: 100%; min-height: 700px"
        frameBorder="0"
></iframe> */}
		</>
	)
}
