import { useState } from "react";

export default function LoadingImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={[
        "relative overflow-hidden bg-surface-gray",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"
            role="status"
          >
            <span className="sr-only">Loading image</span>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={[
          "w-full h-full object-cover transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
    </div>
  );
}