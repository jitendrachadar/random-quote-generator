import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/rqg-icon.png";

const Quote = ({ quote, fetchNewQuote }) => {
	return (
		<div className="p-4 sm:h-screen">
			<div
				className="flex flex-col flex-1  p-6 sm:min-h-full justify-between
            bg-white/50 backdrop-blur-md border rounded-md border-white/20 shadow-lg"
			>
				<img className="w-3/5 self-center" src={logo} alt="random quote generator logo" />
				<div className="">
					<p className="text-xs text-gray-400 mt-2">Quote</p>
					<p className="text-3xl sm:text-5xl font-semibold text-black mb-10">
						"{quote.quote}"
					</p>
				</div>
				<div className="flex justify-between items-center">
					<button
						onClick={fetchNewQuote}
						className="relative flex justify-center gap-1 bg-rose-100 rounded-full border 
                    border-white p-2 hover:scale-105 transition-scale duration-300"
					>
						<FontAwesomeIcon icon={faQuoteLeft} />
						<span className="text-gray-700 font-medium">New Quote</span>
						<FontAwesomeIcon icon={faQuoteRight} />
					</button>

					<p className="text-lg text-gray-600">{quote.author || "Unknown"}</p>
				</div>
			</div>
		</div>
	);
};

export default Quote;
