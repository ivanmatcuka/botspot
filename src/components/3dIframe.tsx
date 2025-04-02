export const Iframe = ({ src }: { src: string }) => (
  <iframe
    allow="autoplay; fullscreen; xr-spatial-tracking"
    execution-while-not-rendered="true"
    execution-while-out-of-viewport="true"
    height="100%"
    loading="lazy"
    src={src}
    web-share="true"
    width="100%"
    xr-spatial-tracking="true"
  />
);
