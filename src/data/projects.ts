export interface Project {
	name: string;
	description: string;
	repoName?: string;
	url?: string;
	stack: Technology[];
}

export enum Technology {
	TypeScript,
	Svelte,
	Rust,
}

export const projectData: Project[] = [
	{
		name: "Waddle Bot",
		description: "Multipurpose discord.js v13 bot with lots of fun features",
		repoName: "Waddle-Bot",
		stack: [Technology.TypeScript],
	},
	{
		name: "Iubus",
		description: "[WIP] Dead simple discord.js v14 slash command framework",
		repoName: "iubus",
		stack: [Technology.TypeScript],
	},
	{
		name: "Quicalc",
		description: "A website for training your skills in mental arithmetic",
		repoName: "quicalc",
		url: "https://quicalc.epicgamer.me",
		stack: [Technology.TypeScript, Technology.Svelte],
	},
	{
		name: "epicgamer.me",
		description: "My personal site, you're looking at it right now!",
		repoName: "epicgamer.me",
		url: "https://epicgamer.me",
		stack: [Technology.TypeScript, Technology.Svelte],
	},
	{
		name: "Rustdex",
		description: "Simple Rust CLI for getting basic information about Pokemon using PokéApi",
		repoName: "rustdex",
		stack: [Technology.Rust],
	},
];
