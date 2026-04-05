import "sketchbook-ui/style.css";
import {
  SketchProvider,
  Card,
  Button,
  Badge,
  Accordion,
  AccordionItem,
} from "sketchbook-ui";
import "./App.css";

const H = { fontFamily: "'Caveat', cursive" };

const C = {
  yellow: { bg: "#FFCC02", bgOverlay: "#F5C000", stroke: "#3a3a3a", text: "#1a1a1a" },
  warm: { bg: "#FFFAE0", bgOverlay: "#FFF3B0", stroke: "#3a3a3a", text: "#2a2a2a" },
  cream: { bg: "#FFFDF5", bgOverlay: "#F5F0E8", stroke: "#3a3a3a", text: "#2a2a2a" },
  amber: { bg: "#FFF3E0", bgOverlay: "#FFE8CC", stroke: "#3a3a3a", text: "#2a2a2a" },
  dark: { bg: "#1a1a1a", bgOverlay: "#2a2a2a", stroke: "#555555", text: "#ffffff" },
  sticky: { bg: "#FFF9C4", bgOverlay: "#FEF5A8", stroke: "#3a3a3a", text: "#2a2a2a" },
};

export default function App() {
  return (
    <SketchProvider>
      {/* ── Hero (full-bleed) ── */}
      <header className="hero">
        <img src="/yappie-hero.png" alt="Yappie" className="hero-logo anim-up" />
        <h1 className="anim-up d1" style={H}>yappie</h1>
        <p className="tagline anim-up d2">
          Talk to your computer. It types.
        </p>
        <div className="hero-cta anim-up d3">
          <Button
            size="lg"
            colors={C.yellow}
            typography={{ ...H, fontSize: "1.5rem" }}
            onClick={() => window.open("https://github.com/kloogans/yappie", "_blank")}
          >
            <span className="btn-with-icon">
              <img src="/apple.svg" alt="" className="btn-icon btn-icon-apple" />
              macOS
            </span>
          </Button>
          <Button
            size="lg"
            colors={C.dark}
            typography={{ ...H, fontSize: "1.5rem" }}
            onClick={() => window.open("https://github.com/kloogans/yappie-linux", "_blank")}
          >
            <span className="btn-with-icon">
              <img src="/tux.svg" alt="" className="btn-icon" />
              Linux
            </span>
          </Button>
        </div>
      </header>

      {/* ── Content sections ── */}
      <div className="content">

        {/* How it works */}
        <section className="section">
          <h2 className="section-head anim-up">How it works</h2>
          <p className="section-sub anim-up d1">Same on both platforms</p>
          <div className="steps-flow anim-up d2">
            <span className="step-word">Activate</span>
            <img src="/arrow.svg" alt="" className="step-sep" />
            <span className="step-word step-yap">Yap</span>
            <img src="/arrow.svg" alt="" className="step-sep" />
            <span className="step-word">Stop</span>
            <img src="/arrow.svg" alt="" className="step-sep" />
            <span className="step-word">Done</span>
          </div>
        </section>

        <div className="section-gap" />

        {/* Get yappie */}
        <section className="section">
          <h2 className="section-head anim-up">Get yappie</h2>
          <div className="platforms-grid anim-up d1">
            <Card variant="notebook" colors={C.warm} className="plat-card">
              <div className="plat-inner">
                <h3>macOS</h3>
                <p>
                  Menubar app with push-to-talk and toggle modes. Configure
                  backends through a native preferences UI. API keys stored
                  securely in Keychain.
                </p>
                <span className="plat-req">macOS 14+</span>
                <div className="cmd-box">{`brew tap kloogans/yappie\nbrew install --cask yappie`}</div>
                <p className="plat-note">
                  After installing, run{" "}
                  <code>xattr -dr com.apple.quarantine /Applications/Yappie.app</code>{" "}
                  to clear the Gatekeeper flag. You may also need to manually grant
                  Microphone and Accessibility permissions in System Settings &gt;
                  Privacy &amp; Security if the prompts don't appear automatically.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.cream} className="plat-card">
              <div className="plat-inner">
                <h3>Linux</h3>
                <p>
                  One bash script. Bind to any key in your compositor. Configure
                  backends through a TOML file. Works on any Linux distro
                  running Wayland.
                </p>
                <span className="plat-req">Wayland + PipeWire</span>
                <div className="cmd-box">{`# Arch (AUR)\nyay -S yappie\n\n# Any distro\ngit clone https://github.com/kloogans\\\n  /yappie-linux.git\ncd yappie-linux\nbash install.sh`}</div>
              </div>
            </Card>
          </div>
        </section>

        <div className="section-gap" />

        {/* Features */}
        <section className="section">
          <h2 className="section-head anim-up">Features</h2>
          <div className="features-layout anim-up d1">
            <Card variant="notebook" colors={C.yellow} className="feat-card feat-hero-card">
              <div className="feat-hero-inner">
                <img src="/plug.svg" alt="" className="feat-icon" />
                <div>
                  <h3>Bring your own backend</h3>
                  <p>
                    Yappie works with any OpenAI-compatible speech-to-text
                    API. Use a cloud service like Groq or OpenAI, self-host
                    with Speaches or LocalAI, or connect a custom TCP server.
                    Set up multiple backends and yappie automatically falls
                    back if one is unavailable.
                  </p>
                </div>
              </div>
            </Card>
            <Card variant="notebook" colors={C.warm} className="feat-card">
              <div className="feat-inner">
                <h3>Private by default</h3>
                <p>
                  Use a local transcription server and your audio never
                  leaves your machine. Cloud backends are available if you
                  want them, but never required.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.cream} className="feat-card">
              <div className="feat-inner">
                <h3>Works everywhere</h3>
                <p>
                  macOS and any Linux distro running Wayland. Ubuntu, Fedora,
                  Arch, whatever. Same backends, same workflow.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.amber} className="feat-card">
              <div className="feat-inner">
                <h3>Lightweight</h3>
                <p>
                  The Linux client is a single bash script. The macOS app
                  is a native menubar app. No Electron, no runtimes, no bloat.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.warm} className="feat-card">
              <div className="feat-inner">
                <h3>Open source</h3>
                <p>
                  MIT licensed. No telemetry, no accounts, no tracking.
                  Read every line of code before you run it.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.cream} className="feat-card">
              <div className="feat-inner">
                <h3>Instant</h3>
                <p>
                  No loading screens, no spinners. Transcribed text shows up
                  at your cursor the moment you stop talking.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.amber} className="feat-card">
              <div className="feat-inner">
                <h3>Configurable</h3>
                <p>
                  Push-to-talk or toggle mode. Multiple backends with
                  priority ordering. Tune it to your workflow.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <div className="section-gap" />

        {/* FAQ */}
        <section className="section">
          <h2 className="section-head anim-up">FAQ</h2>
          <div className="faq-wrap anim-up d1">
            <Accordion>
              <AccordionItem title="Do I need a GPU?" number={1} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>No. Use a cloud backend like Groq or OpenAI with just an API key.
                  For local, a GPU helps but CPU-only servers work too.</p>
              </AccordionItem>
              <AccordionItem title="Is my audio sent to the cloud?" number={2} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>Only if you configure a cloud backend. With a local server, audio
                  never leaves your machine.</p>
              </AccordionItem>
              <AccordionItem title="Can I share a backend between macOS and Linux?" number={3} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>Yes. Both apps use the same protocols. Point them at the same server.</p>
              </AccordionItem>
              <AccordionItem title="Does it work on my Linux distro?" number={4} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>If you're running Wayland with PipeWire, yes. Ubuntu, Fedora,
                  Arch, and most modern distros work out of the box. X11 is not
                  currently supported.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <img src="/yappie-logo.svg" alt="" className="footer-icon" />
        <p>
          <a href="https://github.com/kloogans/yappie">macOS</a>
          {" · "}
          <a href="https://github.com/kloogans/yappie-linux">Linux</a>
          {" · "}
          MIT licensed
        </p>
      </footer>
    </SketchProvider>
  );
}
