import { CartProvider } from "./CartContext";

export const metadata = {
    title: "Next Architecture Demo",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
        <CartProvider>{children}</CartProvider>
        </body>
        </html>
    );
}
