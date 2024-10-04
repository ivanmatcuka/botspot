export const Iframe = ({ src }: { src: string }) => (
  <iframe
    allow="autoplay; fullscreen; xr-spatial-tracking"
    xr-spatial-tracking
    execution-while-out-of-viewport
    execution-while-not-rendered
    width="100%"
    height="100%"
    src={src}
  />
);
