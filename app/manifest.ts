import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Scholatech — Premium School Tech",
    short_name: "Scholatech",
    description:
      "Custom school management portals, school websites, and 100% offline CBT infrastructure for Nigerian schools. Built once, owned permanently.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E1B38",
    theme_color: "#3B59F7",
    icons: [
      {
        src: "/images/logo/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logo/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
