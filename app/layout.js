import "../styles/app.scss";
import Header from "./header";
import { ContextProvider } from "../components/Clients";

export const metadata = {
  title: "Book App",
  description: "This is a Book App Project made for Next.js series",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}
