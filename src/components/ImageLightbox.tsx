import { useEffect, useRef, useState } from "react";

function LightboxImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-12 h-12 border-2 border-current border-t-transparent rounded-full animate-spin"
            role="status"
            aria-label="Loading"
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={[
          "max-w-[90vw] max-h-[85vh] object-contain transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
    </>
  );
}

export default function ImageLightbox({
  images,
  isOpen,
  index,
  onIndexChange,
  alt,
  onClose,
}: {
  images: readonly string[];
  isOpen: boolean;
  index: number;
  onIndexChange: (i: number) => void;
  alt: string;
  onClose: () => void;
}) {
  const indexRef = useRef(index);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        onIndexChange(Math.max(0, indexRef.current - 1));
      if (e.key === "ArrowRight")
        onIndexChange(Math.min(images.length - 1, indexRef.current + 1));
    };

    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, images.length, onIndexChange, onClose]);

  if (!isOpen) return null;

  const currentImage = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-primary flex items-center justify-center text-on-primary"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-10 text-on-primary hover:bg-on-primary/10 p-2 cursor-pointer border-0 bg-transparent"
        aria-label="Close"
      >
        <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
          close
        </span>
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange(Math.max(0, index - 1));
            }}
            disabled={index === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-on-primary hover:bg-on-primary/10 disabled:opacity-20 disabled:cursor-not-allowed p-2 cursor-pointer border-0 bg-transparent"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "48px" }}>
              arrow_back
            </span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange(Math.min(images.length - 1, index + 1));
            }}
            disabled={index === images.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-on-primary hover:bg-on-primary/10 disabled:opacity-20 disabled:cursor-not-allowed p-2 cursor-pointer border-0 bg-transparent"
            aria-label="Next image"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "48px" }}>
              arrow_forward
            </span>
          </button>
        </>
      )}

      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <LightboxImage key={index} src={currentImage} alt={`${alt} ${index + 1}`} />
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-label-code text-label-code uppercase">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}