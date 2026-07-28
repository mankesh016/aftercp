export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://mankesh.in" target="_blank" rel="noopener noreferrer">
          full resume — mankesh.in
        </a>
        <div className="right-links">
          <a href="https://github.com/mankesh016" target="_blank" rel="noopener noreferrer">
            github / mankesh016
          </a>
          <a href="https://codeforces.com/profile/cp_first" target="_blank" rel="noopener noreferrer">
            codeforces / cp_first
          </a>
        </div>
      </div>
      <div className="disclaimer">
        <em>note:</em> &quot;After CP&quot; doesn&apos;t mean only after CP. It&apos;s not a queue — it&apos;s an
        awareness. This site exists because CP alone won&apos;t tell you these topics exist, or why they matter. You
        don&apos;t need to finish competitive programming to start here — do them alongside it, before it, whenever
        curiosity strikes. The goal isn&apos;t to replace the CP-first engineer in you. It&apos;s to grow the human
        engineer standing right next to it.
      </div>
    </footer>
  );
}
