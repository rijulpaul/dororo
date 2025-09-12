const initializeBackground = () => {
  const canvas = document.getElementById("background");
  if (!(canvas instanceof HTMLCanvasElement)) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const canvasEl: HTMLCanvasElement = canvas;
  const ctx2d: CanvasRenderingContext2D = ctx;

  let width: number;
  let height: number;

  function resize() {
    width = canvasEl.width = window.innerWidth;
    height = canvasEl.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  const circles = Array.from({ length: 7 }, () => {
    const color = Math.random() * 360;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: 100 + Math.random() * 150,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      color,
      light: "",
      dark: "",
    };
  });

  function draw() {
    ctx2d.clearRect(0, 0, width, height);
    for (const circle of circles) {
      circle.x += circle.dx;
      circle.y += circle.dy;

      if (circle.x - circle.r > width) circle.x = -circle.r;
      if (circle.x + circle.r < 0) circle.x = width + circle.r;
      if (circle.y - circle.r > height) circle.y = -circle.r;
      if (circle.y + circle.r < 0) circle.y = height + circle.r;

      circle.color = (circle.color + Math.random() * 0.2) % 360;
      circle.light = `hsla(${circle.color},100%,55%,1)`;
      circle.dark = `hsla(${circle.color},100%,40%,1)`;

      const grad = ctx2d.createRadialGradient(circle.x, circle.y, circle.r, circle.x, circle.y, 0);
      grad.addColorStop(1, circle.dark);
      grad.addColorStop(0, circle.light);
      ctx2d.fillStyle = grad;
      ctx2d.beginPath();
      ctx2d.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
      ctx2d.fill();
    }
    requestAnimationFrame(draw);
  }

  draw();
};

export default initializeBackground;

