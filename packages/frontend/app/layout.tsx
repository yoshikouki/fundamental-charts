import "../styles/globals.css";
import ThemeContextProvider from "../components/ThemeContextProvider";
import AuthProvider from "../components/AuthProvider";
import DefaultLayout from '../components/DefaultLayout';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <ThemeContextProvider>
          <AuthProvider>
            <DefaultLayout>{children}</DefaultLayout>
          </AuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
