"use client";

import { useEffect } from "react";

export default function ContactRedirectPage() {
  useEffect(() => {
    // Redirect on client side to include hash (#)
    window.location.replace("https://www.pdf-to-jpg-converter.com/#contact");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center text-center">
      <p>
        Redirecting to{" "}
        <a
          href="https://www.pdf-to-jpg-converter.com/#contact"
          className="text-blue-600 underline"
        >
          Contact section
        </a>
        ...
      </p>
    </main>
  );
}
