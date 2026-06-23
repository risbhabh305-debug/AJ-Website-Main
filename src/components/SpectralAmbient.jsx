import React, { useEffect, useRef } from 'react';

const SpectralAmbient = ({ videoRef }) => {
  const ambientRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const ambient = ambientRef.current;
    if (!video || !ambient) return undefined;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    const sampleWidth = 64;
    const sampleHeight = 36;
    canvas.width = sampleWidth;
    canvas.height = sampleHeight;
    const smoothed = {
      top: [16, 14, 12], bottom: [16, 14, 12], left: [16, 14, 12], right: [16, 14, 12],
    };
    let frameId;
    let disposed = false;

    const averageEdge = (pixels, predicate) => {
      let red = 0; let green = 0; let blue = 0; let count = 0;
      for (let y = 0; y < sampleHeight; y += 1) {
        for (let x = 0; x < sampleWidth; x += 1) {
          if (!predicate(x, y)) continue;
          const index = (y * sampleWidth + x) * 4;
          red += pixels[index];
          green += pixels[index + 1];
          blue += pixels[index + 2];
          count += 1;
        }
      }
      return [red / count, green / count, blue / count];
    };

    const paintAmbient = () => {
      if (disposed || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
        frameId = requestAnimationFrame(paintAmbient);
        return;
      }
      try {
        context.drawImage(video, 0, 0, sampleWidth, sampleHeight);
        const pixels = context.getImageData(0, 0, sampleWidth, sampleHeight).data;
        const edgeDepthX = 8;
        const edgeDepthY = 5;
        const samples = {
          top: averageEdge(pixels, (x, y) => y < edgeDepthY),
          bottom: averageEdge(pixels, (x, y) => y >= sampleHeight - edgeDepthY),
          left: averageEdge(pixels, (x, y) => x < edgeDepthX),
          right: averageEdge(pixels, (x, y) => x >= sampleWidth - edgeDepthX),
        };
        Object.entries(samples).forEach(([edge, color]) => {
          smoothed[edge] = smoothed[edge].map((value, index) => value + (color[index] - value) * 0.12);
          const [red, green, blue] = smoothed[edge].map((value) => Math.round(value));
          ambient.style.setProperty(`--spectral-${edge}`, `rgb(${red} ${green} ${blue})`);
        });
      } catch {
        // The effect is purely decorative; keep the video playing if frame sampling is unavailable.
      }
      frameId = requestAnimationFrame(paintAmbient);
    };

    paintAmbient();
    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
    };
  }, [videoRef]);

  return (
    <div ref={ambientRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-80 mix-blend-screen" aria-hidden="true">
      <div className="absolute -left-[15%] top-0 h-full w-[45%] blur-[70px]" style={{ background: 'radial-gradient(ellipse at 0% 50%, var(--spectral-left, #20150f) 0%, transparent 70%)' }} />
      <div className="absolute -right-[15%] top-0 h-full w-[45%] blur-[70px]" style={{ background: 'radial-gradient(ellipse at 100% 50%, var(--spectral-right, #20150f) 0%, transparent 70%)' }} />
      <div className="absolute -top-[22%] left-0 h-[52%] w-full blur-[70px]" style={{ background: 'radial-gradient(ellipse at 50% 0%, var(--spectral-top, #20150f) 0%, transparent 72%)' }} />
      <div className="absolute -bottom-[22%] left-0 h-[52%] w-full blur-[70px]" style={{ background: 'radial-gradient(ellipse at 50% 100%, var(--spectral-bottom, #20150f) 0%, transparent 72%)' }} />
      <div className="absolute inset-[-15%] opacity-35 blur-[110px]" style={{ background: 'conic-gradient(from 20deg at 50% 50%, var(--spectral-top, #20150f), var(--spectral-right, #20150f), var(--spectral-bottom, #20150f), var(--spectral-left, #20150f), var(--spectral-top, #20150f))' }} />
    </div>
  );
};

export default SpectralAmbient;
