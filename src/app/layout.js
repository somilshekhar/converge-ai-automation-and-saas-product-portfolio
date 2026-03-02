import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Converge Digitals – AI, Automation & SaaS Solutions",
  description:
    "Custom SaaS tools, workflow automation, internal systems, and AI-assisted business solutions. Built to perform.",
  keywords: "AI, SaaS, automation, workflow, machine learning, Converge Digitals",
  openGraph: {
    title: "Converge Digitals – AI Lab",
    description: "Premium AI engineering studio portfolio",
    type: "website",
    url: "https://www.convergedigitals.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        <AnimationProvider>
          <main>{children}</main>
        </AnimationProvider>
        <Footer />
      </body>
    </html>
  );
}
