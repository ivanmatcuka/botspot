export const Iframe = ({ src }: { src: string }) => (
  <iframe
    allow="autoplay; fullscreen; xr-spatial-tracking"
    xr-spatial-tracking="true"
    execution-while-out-of-viewport="true"
    execution-while-not-rendered="true"
    web-share="true"
    width="100%"
    height="100%"
    src={src}
  />
);
