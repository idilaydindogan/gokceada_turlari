const Airtable = require("airtable");

const base = new Airtable({
	apiKey: `${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
}).base("appnO1e5NKNO2456y");

export default base;
