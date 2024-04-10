import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Search - Movies",
    description: "Movie aggregator search app",
  };

export default function SearchLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }