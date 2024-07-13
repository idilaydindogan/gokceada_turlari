const Airtable = require("airtable");

const base = new Airtable({
	apiKey: `${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
}).base("appXs4b7ViU3gh1eK");

export default base;
