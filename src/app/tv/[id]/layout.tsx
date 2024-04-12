import { Metadata } from "next";

export const metadata: Metadata = {
	title: "TV Show - Movies",
	description: "Movie aggregator search app",
};

export default function SearchLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div>{children}</div>;
}
