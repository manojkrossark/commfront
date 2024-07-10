"use client";
import React, { useState, useEffect } from "react";
import ClientComponent from "../components/clientcomponent";
import { fetchAccessToken } from "@humeai/voice";
import LoadingSpinner from "../components/loadingSpinner"; // Import the LoadingSpinner component

function Page() {
	const [accessToken, setAccessToken] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function getSession() {
			try {
				const token = await fetchAccessToken({
					apiKey: "bNzRE1GgZYalChjbylGtqFVxAaf6uYK7AnDGPUJ14YG033tY",
					secretKey: "EBdwum8m7A84RLituk2d9PYa5LPcLZ2D8XlSYQWaGNtJSChlGl0uUMOXSjZAsc0f",
				});

				if (!token) {
					throw new Error("Failed to fetch access token.");
				}

				setAccessToken(token);
			} catch (err) {
				setError(err.message);
			}
		}

		getSession();
	}, []); // The empty array ensures this effect runs only once on mount

	// Conditional rendering based on the state
	if (error) return <p>Error: {error}</p>;
	if (!accessToken) return <LoadingSpinner />; // Use LoadingSpinner instead of text

	return (
		<>
			<ClientComponent accessToken={accessToken} />
			{/* <Record /> */}
		</>
	);
}

export default Page;
