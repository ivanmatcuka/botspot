'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export const Gtag = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer ?? [];

    const dataLayer = window.dataLayer;

    function gtag(...args: unknown[]) {
      dataLayer.push(args);
    }

    gtag('set', 'url_passthrough', false);
  }, []);

  return (
    <Script
      data-cbid={process.env.NEXT_PUBLIC_DATA_CBID}
      id="Cookiebot"
      src="https://consent.cookiebot.com/uc.js"
      strategy="beforeInteractive"
      type="text/javascript"
    />
  );
};
