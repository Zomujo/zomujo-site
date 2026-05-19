export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>© {new Date().getFullYear()} Zomujo Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}
