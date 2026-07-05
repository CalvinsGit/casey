import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Menu, X, ArrowRight, Phone, Mail, MapPin, Star, CheckCircle2 } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Page = "home" | "counselling" | "equine";

// ─── Shared contact section ───────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary border-t border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Details */}
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Get in Touch</p>
          <h2
            className="text-3xl md:text-4xl font-medium leading-tight mb-5 text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Take the first step — reach out today
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-8 text-sm">
            Whether you have questions about counselling, equine therapy, or simply want to understand
            if this is right for you, I am always happy to have a no-obligation conversation.
          </p>
          <div className="space-y-4">
            {[
              { icon: Phone, label: "+44 (0) 7700 900 412" },
              { icon: Mail, label: "hello@topointcounselling.co.uk" },
              { icon: MapPin, label: "Sessions in-person & online · Cape Town, South Africa" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-primary" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className="bg-background border border-border p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <h3
            className="text-xl font-medium text-foreground mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Send a message
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {["First Name", "Last Name"].map((ph) => (
              <div key={ph} className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">{ph}</label>
                <input
                  type="text"
                  placeholder={ph === "First Name" ? "Sarah" : "Murphy"}
                  className="w-full bg-input-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
            ))}
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input
              type="email"
              placeholder="sarah@example.com"
              className="w-full bg-input-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">I am interested in</label>
            <select className="w-full bg-input-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors appearance-none">
              <option value="">Select a service…</option>
              <option>Individual Counselling</option>
              <option>Equine-Assisted Therapy</option>
              <option>Both / Not sure yet</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              rows={4}
              placeholder="Share a little about what has brought you here…"
              className="w-full bg-input-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── Home page ────────────────────────────────────────────────────────────────

const QUALIFICATIONS = [
  "BSc (Hons) Counselling & Psychotherapy — University College Dublin",
  "Diploma in Equine-Assisted Psychotherapy (EAP) — EAGALA certified",
  "Member of the Irish Association for Counselling & Psychotherapy (IACP)",
  "Accredited Practitioner — Equine Assisted Growth & Learning Association",
  "Certificate in Trauma-Informed Care — National Trauma Institute",
  "Advanced Certificate in Person-Centred Therapy",
];

function HomePage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-muted">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1599508411018-69d643c18c95?w=1400&h=900&fit=crop&auto=format"
          alt="A woman sitting peacefully on a rock surrounded by nature"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C27]/75 via-[#2C2C27]/30 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 w-full">
          <p className="text-[#F7F3EE]/60 text-xs uppercase tracking-[0.3em] mb-4">
            Counselling &amp; Equine Therapy · Cape Town
          </p>
          <h1
            className="text-4xl md:text-6xl font-medium text-[#F7F3EE] leading-tight max-w-3xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Casey Lange Counselling &amp; Equine Therapy
          </h1>
          <p className="text-[#F7F3EE]/75 text-lg font-light mt-4 max-w-xl leading-relaxed">
            Honest, grounded support for the moments when life feels too heavy to carry alone.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => onNav("counselling")}
              className="bg-accent text-accent-foreground px-7 py-3 text-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300 flex items-center gap-2"
            >
              Counselling <ArrowRight size={14} />
            </button>
            <button
              onClick={() => onNav("equine")}
              className="border border-[#F7F3EE]/50 text-[#F7F3EE] px-7 py-3 text-sm uppercase tracking-widest hover:bg-[#F7F3EE]/10 transition-colors duration-300"
            >
              Equine Therapy
            </button>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="bg-primary py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-primary-foreground/90 text-xl md:text-2xl font-light leading-relaxed italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "You don't have to have it all figured out to begin. You just have to take one small step."
          </p>
        </div>
      </section>

      {/* Photo + Qualifications */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* Counsellor photo */}
          <div className="relative">
            <div className="overflow-hidden aspect-[4/5] bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1444011283387-7b0f76371f12?w=700&h=875&fit=crop&auto=format"
                alt="Portrait of the counsellor in a calm, welcoming setting"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-accent/20 -z-10" />
            <div className="absolute -top-5 -left-5 w-16 h-16 border border-primary/25 -z-10" />
          </div>

          {/* About + qualifications */}
          <div className="md:pt-4">
            <p className="text-accent text-xs uppercase tracking-[0.3em] mb-4">About Me</p>
            <h2
              className="text-3xl md:text-4xl font-medium leading-tight mb-5 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Straight-talking support, rooted in compassion
            </h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-sm mb-8">
              <p>
                My name is Claire, and I believe that good therapy should be clear, honest, and free from jargon.
                I work with adults navigating anxiety, depression, grief, relationship difficulties, trauma, and life
                transitions — both in the counselling room and alongside horses.
              </p>
              <p>
                Trained in person-centred and trauma-informed approaches, I tailor every session to the individual
                in front of me. My equine therapy work adds a dimension that talk-based therapy sometimes cannot reach
                — horses offer an immediacy and honesty that cuts through in remarkable ways.
              </p>
            </div>

            {/* Qualifications */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Qualifications &amp; Memberships</p>
              <ul className="space-y-3">
                {QUALIFICATIONS.map((q) => (
                  <li key={q} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview cards */}
      <section className="bg-secondary py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3 text-center">What I Offer</p>
          <h2
            className="text-3xl md:text-4xl font-medium text-foreground text-center mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Two distinct paths to the same destination
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Counselling card */}
            <button
              onClick={() => onNav("counselling")}
              className="group text-left bg-background border border-border p-0 overflow-hidden hover:border-primary/40 transition-colors duration-300"
            >
              <div className="h-52 overflow-hidden bg-muted">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1775480393107-666e3cd44ab8?w=600&h=400&fit=crop&auto=format"
                  alt="Warm, inviting counselling room with a comfortable chair"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <p className="text-accent text-xs uppercase tracking-widest mb-2">Talk-based therapy</p>
                <h3
                  className="text-2xl font-medium text-foreground mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Counselling
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  A confidential, non-judgemental space to explore what is troubling you, understand your patterns, and find your way forward.
                </p>
                <span className="mt-5 flex items-center gap-1 text-primary text-xs uppercase tracking-widest group-hover:text-accent transition-colors">
                  Learn more <ArrowRight size={12} />
                </span>
              </div>
            </button>

            {/* Equine card */}
            <button
              onClick={() => onNav("equine")}
              className="group text-left bg-background border border-border p-0 overflow-hidden hover:border-primary/40 transition-colors duration-300"
            >
              <div className="h-52 overflow-hidden bg-muted">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1692700557219-ffc7615cabbc?w=600&h=400&fit=crop&auto=format"
                  alt="Person gently connecting with a horse in an open field"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <p className="text-accent text-xs uppercase tracking-widest mb-2">Body-based therapy</p>
                <h3
                  className="text-2xl font-medium text-foreground mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Equine Therapy
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Working alongside horses to access emotions, rebuild trust, and develop self-awareness in ways that words alone cannot always reach.
                </p>
                <span className="mt-5 flex items-center gap-1 text-primary text-xs uppercase tracking-widest group-hover:text-accent transition-colors">
                  Learn more <ArrowRight size={12} />
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3 text-center">Client Words</p>
          <h2
            className="text-3xl md:text-4xl font-medium text-foreground text-center mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What clients say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Claire has a gift for cutting through the noise and helping you see clearly. I finally understand why I kept repeating the same patterns.",
                name: "Emma R.",
                service: "Individual Counselling",
              },
              {
                quote: "I was not expecting the horses to move me the way they did. Something shifted in that first session that months of sitting in a chair hadn't touched.",
                name: "Aoife M.",
                service: "Equine Therapy",
              },
              {
                quote: "She listens deeply but also challenges you — in the kindest possible way. I felt heard and gently pushed, both at the same time.",
                name: "James T.",
                service: "Individual Counselling",
              },
            ].map((t) => (
              <div key={t.name} className="bg-secondary border border-border p-7 flex flex-col gap-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-accent text-accent" />
                  ))}
                </div>
                <blockquote
                  className="text-foreground leading-relaxed font-light italic text-sm flex-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "{t.quote}"
                </blockquote>
                <div className="pt-4 border-t border-border">
                  <p className="text-foreground text-sm font-medium">{t.name}</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mt-0.5">{t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

// ─── Counselling page ─────────────────────────────────────────────────────────

function CounsellingPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-muted">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1774612541935-14b5efc16511?w=1400&h=600&fit=crop&auto=format"
          alt="A warm, cosy counselling room with soft chairs and plants"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#2C2C27]/55" />
        <div className="relative h-full flex flex-col items-start justify-end px-6 pb-12 max-w-5xl mx-auto w-full">
          <p className="text-[#F7F3EE]/55 text-xs uppercase tracking-[0.3em] mb-3">What I Offer</p>
          <h1
            className="text-4xl md:text-5xl font-medium text-[#F7F3EE] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Counselling
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-5 text-muted-foreground font-light leading-relaxed">
            <p className="text-foreground text-lg leading-relaxed font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Counselling is a confidential, collaborative process — a space set apart from the rest of life where you can think out loud, be honest, and feel genuinely heard.
            </p>
            <p>
              I work with adults experiencing a wide range of difficulties: anxiety and panic, low mood and depression, grief and loss, relationship breakdown, work-related stress, low self-esteem, identity questions, and the aftermath of trauma. If something is weighing on you, it belongs here.
            </p>
            <p>
              My approach is primarily person-centred, which means you lead and I follow. I believe strongly that you are the expert on your own life, and my role is to create the conditions in which your own wisdom can surface. That said, I draw on other evidence-based approaches — including elements of CBT, somatic awareness, and narrative therapy — where they serve you.
            </p>
            <p>
              Sessions are 50 minutes, held weekly or fortnightly, and available in person at my practice in Cape Town or online via secure video call.
            </p>
          </div>

          {/* Sidebar info */}
          <div className="space-y-6">
            <div className="bg-secondary border border-border p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Session Details</p>
              <ul className="space-y-3 text-sm text-foreground/80">
                {[
                  ["Duration", "50 minutes"],
                  ["Frequency", "Weekly or fortnightly"],
                  ["Format", "In-person or online"],
                  ["Fee", "R900 per session"],
                ].map(([label, value]) => (
                  <li key={label} className="flex justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">The Process</p>
          <h2
            className="text-3xl font-medium text-foreground mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What to expect
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                step: "01",
                title: "Getting started",
                body: "Your first full session is an extended intake — we explore your history, what you hope to achieve, and begin building the therapeutic relationship.",
              },
              {
                step: "02",
                title: "Ongoing work",
                body: "Regular sessions follow at your pace. Progress is rarely linear, but with time and consistency most clients notice meaningful, lasting change.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-secondary p-8 group hover:bg-background transition-colors duration-300">
                <span
                  className="text-5xl font-medium text-primary/15 group-hover:text-primary/30 transition-colors duration-300 leading-none block mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.step}
                </span>
                <h3 className="text-lg font-medium text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

// ─── Equine Therapy page ──────────────────────────────────────────────────────

function EquineTherapyPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-muted">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1629366794049-d4ba5e2c683d?w=1400&h=600&fit=crop&auto=format"
          alt="Woman in a field gently connecting with a horse"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#2C2C27]/50" />
        <div className="relative h-full flex flex-col items-start justify-end px-6 pb-12 max-w-5xl mx-auto w-full">
          <p className="text-[#F7F3EE]/55 text-xs uppercase tracking-[0.3em] mb-3">Body-Based Therapy</p>
          <h1
            className="text-4xl md:text-5xl font-medium text-[#F7F3EE] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Equine Therapy
          </h1>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-5 text-muted-foreground font-light leading-relaxed">
            <p className="text-foreground text-lg leading-relaxed font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Equine-Assisted Psychotherapy (EAP) is a powerful, experiential form of therapy that takes place on the ground, alongside horses — not on horseback. No riding experience is necessary.
            </p>
            <p>
              Horses are extraordinarily sensitive animals. They respond moment-to-moment to the emotional states of the people around them — they cannot be fooled by the face we present to the world. This makes them remarkable mirrors, reflecting back what is happening inside us with honesty and without judgement.
            </p>
            <p>
              In an equine therapy session, you might be invited to observe a horse, approach it, lead it, or simply stand in its presence. Each exercise is followed by a guided reflective conversation, drawing out the insights and emotions that arose. Often, what emerges in the field cuts straight to the heart of long-standing patterns in a way that months of talk therapy might not.
            </p>
            <p>
              I am an EAGALA-certified equine therapist, which means I work using the internationally recognised Equine Assisted Growth and Learning Association model. All sessions take place at our dedicated outdoor site in Cape Town, in a safe, professionally managed environment.
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-secondary border border-border p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Session Details</p>
              <ul className="space-y-3 text-sm text-foreground/80">
                {[
                  ["Duration", "75–90 minutes"],
                  ["Frequency", "Weekly or fortnightly"],
                  ["Location", "Outdoor site, Cape Town"],
                  ["Fee", "R900 per session"],
                  ["Riding needed?", "No — ground-based only"],
                ].map(([label, value]) => (
                  <li key={label} className="flex justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629366794937-fb2c3cc69927?w=500&h=400&fit=crop&auto=format"
                alt="A woman in a knit sweater gently holding a brown horse"
                className="w-full h-44 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why horses */}
      <section className="bg-primary py-14 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-primary-foreground/85 text-2xl md:text-3xl font-light leading-relaxed italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Horses live entirely in the present moment. Being with them teaches us, almost against our will, to do the same."
          </p>
        </div>
      </section>

      {/* Who can benefit */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent text-xs uppercase tracking-[0.3em] mb-3">Who Can Benefit</p>
          <h2
            className="text-3xl font-medium text-foreground mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Equine therapy is particularly effective for
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Trauma & PTSD",
                body: "The non-verbal, somatic nature of equine work allows trauma responses stored in the body to surface and shift without the need to retell a painful story.",
              },
              {
                title: "Anxiety & emotional regulation",
                body: "Horses require calm, consistent energy. Learning to regulate yourself in their presence builds skills that transfer directly to daily life.",
              },
              {
                title: "Low self-esteem & confidence",
                body: "Successfully communicating with and earning the trust of a horse is a deeply affirming experience that reshapes how we see ourselves.",
              },
              {
                title: "Relationship & attachment difficulties",
                body: "Patterns in how we connect — or avoid connecting — with horses often mirror our human relationship styles, offering rich material for exploration.",
              },
              {
                title: "Adolescents & young adults",
                body: "Young people who find traditional therapy too stilted often respond strongly to the outdoor, activity-based nature of equine work.",
              },
              {
                title: "Those who feel 'stuck' in talk therapy",
                body: "When words have reached their limit, the body and the horse can open doors that conversation alone cannot.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-secondary border border-border p-7 group hover:bg-background transition-colors duration-300">
                <h3
                  className="text-lg font-medium text-foreground mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Counselling", page: "counselling" },
  { label: "About Equine Therapy", page: "equine" },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Lato', sans-serif" }}>
      {/* ─── Nav ─── */}
      <nav className="sticky top-0 z-50 bg-background/92 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo / wordmark */}
          <button
            onClick={() => navigate("home")}
            className="text-primary hover:text-accent transition-colors duration-300 shrink-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-base md:text-lg font-medium tracking-wide leading-tight">
              Casey Lange <span className="text-accent">·</span> Counselling &amp; Equine Therapy
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors duration-200 ${
                  currentPage === item.page
                    ? "text-primary font-medium border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-5 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                className={`text-left text-sm uppercase tracking-widest transition-colors ${
                  currentPage === item.page ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ─── Page content ─── */}
      <main>
        {currentPage === "home" && <HomePage onNav={navigate} />}
        {currentPage === "counselling" && <CounsellingPage />}
        {currentPage === "equine" && <EquineTherapyPage />}
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-foreground text-[#F7F3EE] py-10 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4
              className="text-lg font-medium mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Casey Lange
            </h4>
            <p className="text-[#F7F3EE]/45 text-xs font-light leading-relaxed">
              Counselling &amp; Equine Therapy · Cape Town, South Africa
            </p>
          </div>
          <div>
            <p className="text-[#F7F3EE]/35 text-xs uppercase tracking-widest mb-3">Pages</p>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-[#F7F3EE]/55 text-sm hover:text-[#F7F3EE] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#F7F3EE]/35 text-xs uppercase tracking-widest mb-3">Horse Picture</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-[#F7F3EE]/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-[#F7F3EE]/25 text-xs">
          <span>© 2026 Casey Lange Counselling &amp; Equine Therapy. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
