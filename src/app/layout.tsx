import { Box } from '@chakra-ui/react';
import { ClerkProvider } from '@clerk/nextjs';
import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body id={'root'}>
          <AppWrappers>{children}</AppWrappers>
        </body>
      </html>
    </ClerkProvider>
  );
}
