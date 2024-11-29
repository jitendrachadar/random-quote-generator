import React from "react";

const QuoteHistory = ({ history }) => {
	return (
		<div className="w-full mt-6 border-t pt-2 border-white/30">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-bold text-gray-700">Quote History</h2>
				<span className="text-sm text-gray-600">{history.length} Quotes</span>
			</div>
			<ul className="mt-4 space-y-4">
				{history.length > 0 && history.map((quote, index) => (
					<li
						key={index}
						className="p-4 bg-white/20  border rounded border-white/10 shadow-lg"
					>
						<p className="text-lg italic text-gray-800">“{quote.quote}”</p>
						<p className="mt-2 text-right text-sm font-medium text-gray-600">
							- {quote.author || "Unknown"}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default QuoteHistory;
