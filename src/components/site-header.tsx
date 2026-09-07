import Link from "next/link";

const navigation = [
  { href: "/", label: "首页" },
  { href: "/search", label: "探索" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav aria-label="主导航" className="navigation">
        <Link className="wordmark" href="/">
          映界
        </Link>
        <div className="nav-links">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
