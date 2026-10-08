import "./globals.css";

import localFont from "next/font/local";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { UserProvider } from "@/context/UserContext";
import { FavoriteProvider } from "@/context/FavoriteContext"; 
import { AuthProvider } from "@/context/AuthContext";
import { createClient } from "@/lib/supabase/server";

const fontSans = localFont({
  src: [
    {
      path: "./Fonts/PlusJakartaSans-Variable.woff2",
      style: "normal",
    },
    {
      path: "./Fonts/PlusJakartaSans-Italic-Variable.woff2",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "MyWebsite — Build something meaningful",
  description:
    "We help individuals and businesses build modern, simple, and useful digital experiences.",
};

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="en" className={`dark ${fontSans.variable}`}>
      <body className="...">
        <UserProvider>
        <AuthProvider user={user ? { id: user.id, email: user.email } : null}>
          <FavoriteProvider>
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </FavoriteProvider>
        </AuthProvider>
        </UserProvider>
      </body>
    </html>
  );
}


 