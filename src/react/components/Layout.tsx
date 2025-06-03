import type { PropsWithChildren } from "react";

import { AuthProvider } from "./AuthContext";

function Layout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <main>{children}</main>
      <footer style={{ textAlign: "center", fontSize: "small" }}>
        <p>
          Site hébergé sur un{" "}
          <a href="https://www.ikoula.com/fr/vps/linux?utm_source=codecollectif&utm_medium=banner&utm_campaign=iksvp">
            VPS
          </a>{" "}
          IKOULA
        </p>
        <a
          href="https://www.ikoula.com/fr?utm_source=codecollectif&utm_medium=banner&utm_campaign=iksvp"
          title="Hébergement web, serveurs dédiés et solutions sur mesure"
        >
          <img
            title="Hébergement web, serveurs dédiés et
solutions sur mesure"
            alt="Hébergé par Ikoula"
            src="https://www.ikoula.com/sites/default/files/2025-
01/heberge_par_ikoula_light.png"
            width="133"
            height="51"
          />
        </a>
      </footer>
    </AuthProvider>
  );
}

export default Layout;
