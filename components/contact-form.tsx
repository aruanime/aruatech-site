"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";

const fieldClass =
  "h-11 rounded-md border-sand bg-white px-3 text-navy placeholder:text-navy/40";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [interested, setInterested] = useState(true);
  const [status, setStatus] = useState<"idle" | "ready" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    const subject = `${interested ? "Growth Retainer inquiry" : "Project inquiry"} — ${name.trim()}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Business: ${business.trim() || "(not provided)"}`,
      `Interested in Growth Retainer: ${interested ? "Yes" : "No"}`,
      "",
      message.trim(),
    ].join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("ready");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-navy">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClass}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-navy">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClass}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="business" className="text-navy">
          Business
        </Label>
        <Input
          id="business"
          name="business"
          autoComplete="organization"
          value={business}
          onChange={(event) => setBusiness(event.target.value)}
          className={fieldClass}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-navy">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-32 rounded-md border-sand bg-white px-3 py-2 text-navy placeholder:text-navy/40"
        />
      </div>
      <div className="flex items-start gap-3">
        <Checkbox
          id="retainer"
          checked={interested}
          onCheckedChange={(value) => setInterested(value === true)}
          className="mt-0.5"
        />
        <Label htmlFor="retainer" className="text-sm font-normal leading-5 text-navy/80">
          Interested in Growth Retainer
        </Label>
      </div>
      {status === "error" ? (
        <p role="alert" className="text-sm text-destructive">
          Please add your name, email, and a short message.
        </p>
      ) : null}
      {status === "ready" ? (
        <p role="status" className="text-sm text-navy/80">
          Your email app should open with a draft to {SITE.email}. If it does
          not, copy the message and send it directly.
        </p>
      ) : null}
      <Button
        type="submit"
        className="h-11 rounded-full bg-navy px-8 text-white hover:bg-navy-deep"
      >
        Send inquiry
      </Button>
    </form>
  );
}
