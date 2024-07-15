import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Nav_Bar from "@/components/Nav_Bar";

const raleway = Raleway({
	subsets: ["latin"],
});

export const metadata = {
	title: "Gökçeada Turları",
	description: "Gökçeada'dasınız Yavaşlayın. Size özel butik turlar.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<Nav_Bar />
				<main className="">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
