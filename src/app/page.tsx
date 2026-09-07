import Link from "next/link";

const highlights = [
  { label: "动画", value: "丰富世界" },
  { label: "电影", value: "值得重看" },
  { label: "片单", value: "慢慢发现" },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">ANIMATION · FILM</p>
        <h1 id="hero-title">把想看的，留在眼前。</h1>
        <p className="hero-copy">
          映界是一个简洁的动画与电影目录。第一版只收录可清楚说明来源和播放方式的内容。
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/search">
            开始探索
          </Link>
          <Link className="button button-secondary" href="#principles">
            了解收录原则
          </Link>
        </div>
      </section>

      <section className="highlights" aria-label="目录特色">
        {highlights.map((highlight) => (
          <article className="highlight" key={highlight.label}>
            <p>{highlight.label}</p>
            <strong>{highlight.value}</strong>
          </article>
        ))}
      </section>

      <section className="principles" id="principles" aria-labelledby="principles-title">
        <p className="eyebrow">收录原则</p>
        <h2 id="principles-title">内容来源清晰，观看方式透明。</h2>
        <p>
          我们只展示经授权、公版或明确允许嵌入的播放来源。目录采集将遵守
          robots.txt、来源许可和访问频率限制。
        </p>
      </section>
    </div>
  );
}
