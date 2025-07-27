// script.js
function analyzeSentiment() {
  const text = document.getElementById('inputText').value;
  const resultElement = document.getElementById('result');

  if (!text) {
    resultElement.textContent = 'Please enter some text!';
    resultElement.style.color = 'red';
    return;
  }

  // Simulated sentiment analysis logic (for demonstration purposes)
  let sentiment = 'neutral'; // Default sentiment
  if (text.includes('happy') || text.includes('good') || text.includes('excellent')) {
    sentiment = 'positive';
  } else if (text.includes('sad') || text.includes('bad') || text.includes('terrible')) {
    sentiment = 'negative';
  }

  // Display the result
  resultElement.textContent = `The sentiment is: ${sentiment}`;
  resultElement.style.color = sentiment === 'positive' ? 'green' : sentiment === 'negative' ? 'red' : 'blue';
}