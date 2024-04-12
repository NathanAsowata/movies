import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Person - Movies",
	description: "Movie aggregator search app",
};

export default function SearchLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div>{children}</div>;
}
