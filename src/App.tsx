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
            onClick={() => window.open("https://github.com/kloogans/yappie/releases", "_blank")}
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
                <span className="plat-req">macOS 14+ / Apple Silicon</span>
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
                  Fast, lightweight, and written in C. On-device
                  transcription via whisper.cpp with your model kept
                  in memory for near-instant results. Bind a key in
                  your compositor and go.
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
                  Your audio never leaves your machine. Whisper runs
                  locally through Apple's Neural Engine on macOS or
                  whisper.cpp on Linux. GPU speeds things up, but CPU
                  works fine too.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.cream} className="feat-card">
              <div className="feat-inner">
                <h3>Automatic fallback chain</h3>
                <p>
                  Stack your backends in any order. If the first one
                  fails, Yappie moves to the next. Local whisper first
                  with a cloud API as backup, or the other way around.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.amber} className="feat-card">
              <div className="feat-inner">
                <h3>Works everywhere</h3>
                <p>
                  Transcribed text goes straight to your clipboard and
                  gets pasted into whatever app you're focused on.
                  Text editor, browser, terminal, Slack, whatever.
                </p>
              </div>
            </Card>
            <Card variant="notebook" colors={C.cream} className="feat-card">
              <div className="feat-inner">
                <h3>Fast and lightweight</h3>
                <p>
                  Written in C on Linux and native Swift on macOS.
                  Your model stays loaded in memory so transcription
                  starts the moment you stop talking. MIT licensed and
                  fully open source.
                </p>
              </div>
            </Card>
          </div>
          <ul className="feat-extras anim-up d2">
            <li><strong>Bring your own backend.</strong> OpenAI, Groq, any compatible endpoint, or a custom TCP server.</li>
            <li><strong>Auto-paste.</strong> Transcribed text goes straight to wherever your cursor is.</li>
            <li><strong>Hot-swap models.</strong> Switch Whisper models on the fly without restarting anything.</li>
            <li><strong>Bind it your way.</strong> Custom hotkeys in the app on macOS, any compositor keybinding on Linux.</li>
            <li><strong>Push-to-talk or toggle.</strong> Hold to record or press to start and stop on macOS. Linux uses toggle mode.</li>
          </ul>
        </section>

        <div className="section-gap" />

        {/* FAQ */}
        <section className="section">
          <h2 className="section-head anim-up">FAQ</h2>
          <div className="faq-wrap anim-up d1">
            <Accordion>
              <AccordionItem title="Is my audio sent to the cloud?" number={1} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>Only if you configure a cloud backend. With on-device transcription
                  on macOS or whisper.cpp on Linux, audio never leaves your machine.</p>
              </AccordionItem>
              <AccordionItem title="Which Whisper model should I use?" number={2} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>Tiny is the fastest, Large v3 is the most accurate. On macOS,
                  Yappie recommends one based on your RAM. On Linux, pick based
                  on your GPU VRAM. You can hot-swap models without restarting.</p>
              </AccordionItem>
              <AccordionItem title="Can I share a backend between macOS and Linux?" number={3} colors={C.cream}
                typography={{ ...H, titleSize: "1.5rem", contentSize: "1.1rem" }}>
                <p>Yes. Both apps use the same protocols. Point them at the same server.</p>
              </AccordionItem>
              <AccordionItem title="Does it work on my Linux distro?" number={4} colors={C.cream}
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
