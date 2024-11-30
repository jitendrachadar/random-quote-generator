import React, { useState, useEffect } from "react";
import Quote from "./Components/Quote";
import QuoteHistory from "./Components/QuoteHistory";

const App = () => {
	const [currentQuote, setCurrentQuote] = useState({});
	const [quoteHistory, setQuoteHistory] = useState([]);

	const fetchQuote = async () => {
		const response = await fetch("https://dummyjson.com/quotes/random");
		const data = await response.json();
		setCurrentQuote(data);

		setQuoteHistory((prevHistory) => {
			const updatedHistory = [data, ...prevHistory];
			localStorage.setItem("quoteHistory", JSON.stringify(updatedHistory));
			return updatedHistory;
		});
	};

	useEffect(() => {
		const storedHistory = JSON.parse(localStorage.getItem("quoteHistory"));
		if (storedHistory) setQuoteHistory(storedHistory);

		if (!storedHistory || storedHistory.length === 0) fetchQuote();
		else setCurrentQuote(storedHistory[0]);
	}, []);

	return (
		<div className="min-h-screen bg-rose-100">
			<div className="max-w-4xl mx-auto flex flex-col sm:flex-row  justify-center">
				<div className="flex-3 basis-3/5">
					<Quote quote={currentQuote} fetchNewQuote={fetchQuote} />
				</div>
				<div className="flex-2 basis-2/5">
					<QuoteHistory history={quoteHistory} />
				</div>
			</div>
		</div>
	);
};

export default App;
