import "sketchbook-ui/style.css";
import {
  SketchProvider,
  Card,
  Button,
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
          Fast, private dictation for macOS and Linux.
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
          <p className="section-sub anim-up d1">Press a key, speak, and your words appear wherever your cursor is.</p>
          <div className="steps-flow anim-up d2">
            <div className="step">
              <img src="/step-activate.svg" alt="" className="step-icon" />
              <span className="step-word">Activate</span>
            </div>
            <img src="/arrow.svg" alt="" className="step-sep" />
            <div className="step">
              <img src="/step-yap.svg" alt="" className="step-icon step-icon-yap" />
              <span className="step-word step-yap">Yap</span>
            </div>
            <img src="/arrow.svg" alt="" className="step-sep" />
            <div className="step">
              <img src="/step-transcribe.svg" alt="" className="step-icon" />
              <span className="step-word">Transcribe</span>
            </div>
            <img src="/arrow.svg" alt="" className="step-sep" />
            <div className="step">
              <img src="/step-done.svg" alt="" className="step-icon step-icon-done" />
              <span className="step-word">Done</span>
            </div>
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
                  Native menubar app with on-device transcription. Your audio
                  never leaves your Mac. Add cloud APIs as fallbacks or use
                  them as your primary backend.
                </p>
                <span className="plat-req">macOS 14+ / Apple Silicon for on-device, Intel for cloud backends</span>
                <div className="cmd-box">{`brew tap kloogans/yappie\nbrew install --cask yappie`}</div>
                <p className="plat-note">
                  I don't feel like giving Apple $99 to sign the app, so
                  macOS will block it on first launch. Head to System
                  Settings &gt; Privacy &amp; Security, scroll down, and
                  click "Open Anyway." You'll also want to grant Microphone and
                  Accessibility permissions there if the prompts don't
                  show up on their own.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.cream} className="plat-card">
              <div className="plat-inner">
                <h3>Linux</h3>
                <p>
                  One bash script. Bind it to any key in your compositor,
                  set up backends in a TOML file, and you're good. Works on
                  any distro running Wayland.
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
            <Card variant="notebook" colors={C.warm} className="feat-card">
              <div className="feat-inner">
                <h3>On-device transcription</h3>
                <p>
                  Runs Whisper models directly on your Mac using Apple
                  Silicon's Neural Engine. No API keys, no internet, no
                  data leaving your machine. Pick from Tiny (~40 MB) to
                  Large v3 (~1.5 GB) based on your needs.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.cream} className="feat-card">
              <div className="feat-inner">
                <h3>Automatic fallback chain</h3>
                <p>
                  Set up multiple backends and Yappie tries them in order.
                  If the primary fails, the next one picks up. Only your
                  primary model loads at startup, so fallbacks don't slow
                  anything down.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.amber} className="feat-card">
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
                <h3>Lightweight</h3>
                <p>
                  A bash script on Linux, a native menubar app on macOS.
                  No Electron. No runtimes. No bloat.
                </p>
              </div>
            </Card>
          </div>
          <ul className="feat-extras anim-up d2">
            <li><strong>Bring your own backend.</strong> OpenAI, Groq, or any OpenAI-compatible speech-to-text endpoint. Self-hosted servers work too.</li>
            <li><strong>Auto-paste.</strong> Transcribed text goes straight to your cursor. No Cmd+V needed.</li>
            <li><strong>Custom hotkeys.</strong> Use the default Fn key or set any key combination you want.</li>
            <li><strong>Push-to-talk or toggle.</strong> Hold a key to record, or click to start and stop.</li>
            <li><strong>Drag-and-drop ordering.</strong> Reorder your backends by dragging cards in Preferences.</li>
          </ul>
        </section>

        <div className="section-gap" />

        {/* FAQ */}
        <section className="section">
          <h2 className="section-head anim-up">FAQ</h2>
          <div className="faq-wrap anim-up d1">
            <Accordion>
              <AccordionItem title="Does it work on Intel Macs?" number={1} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>Yes, but on-device transcription requires Apple Silicon (M1 or later).
                  Intel Macs can use cloud API backends like OpenAI or Groq.</p>
              </AccordionItem>
              <AccordionItem title="Is my audio sent to the cloud?" number={2} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>Only if you configure a cloud backend. With on-device transcription
                  on macOS or a local server on Linux, audio never leaves your machine.</p>
              </AccordionItem>
              <AccordionItem title="Which Whisper model should I use?" number={3} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>Yappie recommends one based on your Mac's RAM. Tiny is the fastest,
                  Large v3 is the most accurate. The first launch after downloading a
                  model takes longer while CoreML compiles it for your hardware.
                  After that, it loads in under a second.</p>
              </AccordionItem>
              <AccordionItem title="Can I share a backend between macOS and Linux?" number={4} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>Yes. Both apps use the same protocols. Point them at the same server.</p>
              </AccordionItem>
              <AccordionItem title="Does it work on my Linux distro?" number={5} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>If you're on Wayland with PipeWire, yes. Ubuntu, Fedora,
                  Arch, and most modern distros work out of the box. No X11
                  support yet.</p>
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
        <p className="footer-attribution">
          built by <a href="https://kloogans.com">kloogans</a>
        </p>
      </footer>
    </SketchProvider>
  );
}
