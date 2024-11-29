import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Quote = ({ quote, fetchNewQuote }) => {

	return (
		<div
			className="flex flex-col justify-between p-6  min-h-56 w-full
            bg-white/30 backdrop-blur-md border rounded-md border-white/20 shadow-lg"
		>
			<p className="text-xs text-gray-400 mt-2">Quote</p>
			<p className="text-3xl sm:text-5xl font-semibold text-black mb-10">
				"{quote.quote}"
			</p>
			<div className="flex justify-between items-center">
					<button
						onClick={fetchNewQuote}
						className="relative flex items-center justify-center rounded-full border 
                    hover:bg-rose-100 border-white p-2 hover:scale-125 transition-scale duration-300"
					>
						<FontAwesomeIcon icon={faQuoteLeft} />
						<FontAwesomeIcon icon={faQuoteRight} />
					</button>

				<p className="text-lg text-gray-600">{quote.author || "Unknown"}</p>
			</div>
		</div>
	);
};

export default Quote;
