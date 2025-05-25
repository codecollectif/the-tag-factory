import type { PropsWithChildren } from "react";

import { AuthProvider } from "./AuthContext";

function Layout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <main>{children}</main>
    </AuthProvider>
  );
}

export default Layout;
