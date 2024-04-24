import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });


const APP_NAME = "Movies";
const APP_DEFAULT_TITLE = "Movies";
const APP_TITLE_TEMPLATE = "%s - Movies";
const APP_DESCRIPTION = "PWA Movie aggregator search app";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#2118FF",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} container`}>
				<NavBar />
				<main className="main">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
