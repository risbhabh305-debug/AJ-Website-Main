import React, { useEffect, useRef } from 'react';

const ShaderLines = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let animationId;
    let renderer;
    let resizeObserver;
    let isDisposed = false;

    const initialise = () => {
      if (!containerRef.current || !window.THREE || isDisposed) return;
      const THREE = window.THREE;
      const container = containerRef.current;
      const camera = new THREE.Camera();
      camera.position.z = 1;
      const scene = new THREE.Scene();
      const geometry = new THREE.PlaneBufferGeometry(2, 2);
      const uniforms = { time: { value: 1 }, resolution: { value: new THREE.Vector2() } };
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: 'void main() { gl_Position = vec4(position, 1.0); }',
        fragmentShader: `
          precision highp float;
          uniform vec2 resolution;
          uniform float time;
          float random(float x) { return fract(sin(x) * 10000.0); }
          void main() {
            vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
            uv.x = floor(uv.x * 64.0) / 64.0;
            uv.y = floor(uv.y * 128.0) / 128.0;
            float t = time * 0.06 + random(uv.x) * 0.4;
            float lines = 0.0;
            for (int j = 0; j < 3; j++) {
              for (int i = 0; i < 5; i++) {
                lines += 0.00045 * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) - length(uv));
              }
            }
            gl_FragColor = vec4(vec3(lines * 0.36, lines * 0.2, lines * 0.07), 1.0);
          }
        `,
      });
      scene.add(new THREE.Mesh(geometry, material));
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.replaceChildren(renderer.domElement);

      const resize = () => {
        const { width, height } = container.getBoundingClientRect();
        renderer.setSize(width, height, false);
        uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height);
      };
      resize();
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);
      };
      animate();
    };

    if (window.THREE) {
      initialise();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js';
      script.async = true;
      script.onload = initialise;
      document.head.appendChild(script);
    }

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      renderer?.dispose();
    };
  }, []);

  return <div ref={containerRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />;
};

export default ShaderLines;
