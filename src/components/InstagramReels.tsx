"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

interface InstagramReelsProps {
  reelUrls: string[];
}

function loadInstagramEmbedScript(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    if (window.instgrm?.Embeds) {
      resolve();
      return;
    }

    const existingScript = document.getElementById("instagram-embed-script") as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

export function InstagramReels({ reelUrls }: InstagramReelsProps) {
  const reelUrlsKey = reelUrls.join("|");

  useEffect(() => {
    let cancelled = false;

    loadInstagramEmbedScript().then(() => {
      if (!cancelled) {
        window.instgrm?.Embeds?.process();
      }
    });

    return () => {
      cancelled = true;
    };
  }, [reelUrlsKey]);

  return (
    <section id="instagram-reels" className="py-32 bg-[#F9F9F9] dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
            Instagram Reels.
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-light text-lg">
            Ultimos reels del estudio, incrustados directamente desde Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
          {reelUrls.map((url) => (
            <div key={url} className="w-full max-w-[540px]">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#fff",
                  border: 0,
                  margin: 0,
                  padding: 0,
                  width: "100%",
                  maxWidth: "540px",
                }}
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Ver reel en Instagram
                </a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
