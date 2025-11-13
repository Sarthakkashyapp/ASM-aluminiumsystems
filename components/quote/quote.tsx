// components/quote/quote-form.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Briefcase, Building2, MapPin, UploadCloud } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    // --- OPTION A: local demo success (works now) ---
    await new Promise((r) => setTimeout(r, 900));
    setState("success");

    // --- OPTION B: real submission via Formspree/Web3Forms ---
    // 1) Add action + hidden key and remove the preventDefault above
    // <form action="https://api.web3forms.com/submit" method="POST" ...>
    // <input type="hidden" name="access_key" value="YOUR_KEY" />
    // Then handle success by redirect or success page.
  }

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-12 gap-10">
        {/* Left: contact quick info */}
        <div className="lg:col-span-5">
          <Card className="rounded-2xl border-neutral-200">
            <CardContent className="p-6 space-y-5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p className="font-semibold">sales@asmframes.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-neutral-500">Phone</p>
                  <p className="font-semibold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-neutral-500">Office</p>
                  <p className="font-semibold">Plot 12, Industrial Area</p>
                  <p className="text-sm text-neutral-600">New Delhi, 110020</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7">
          <Card className="rounded-2xl border-neutral-200">
            <CardContent className="p-6">
              {state === "success" ? (
                <SuccessMessage />
              ) : (
                <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
                  {/* Honeypot */}
                  <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />

                  {/* Name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <LabeledInput icon={<Briefcase className="h-4 w-4" />} label="Your Name" name="name" required />
                    <LabeledInput icon={<Building2 className="h-4 w-4" />} label="Company (optional)" name="company" />
                  </div>

                  {/* Contact */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <LabeledInput icon={<Mail className="h-4 w-4" />} type="email" label="Email" name="email" required />
                    <LabeledInput icon={<Phone className="h-4 w-4" />} label="Phone" name="phone" required />
                  </div>

                  {/* Service */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Product / Service</label>
                      <select
                        name="service"
                        className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300 bg-white"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option>Solar Aluminium Frames</option>
                        <option>Aluminium Extrusion Profiles</option>
                        <option>PV Round Wires</option>
                        <option>Other / Custom</option>
                      </select>
                    </div>
                    <LabeledInput label="Project Location" name="location" placeholder="City / State" />
                  </div>

                  {/* Quantities */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <LabeledInput label="Approx. Quantity" name="quantity" placeholder="e.g., 500 units" />
                    <LabeledInput label="Required Timeline" name="timeline" placeholder="e.g., 6–8 weeks" />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Project Details</label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300"
                      placeholder="Share dimensions, drawings, standards, finishes, delivery schedule…"
                      required
                    />
                  </div>

                  {/* File upload (optional) */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Attach files (optional)</label>
                    <div className="flex items-center gap-3 rounded-xl border border-dashed border-neutral-300 px-4 py-3">
                      <UploadCloud className="h-5 w-5" />
                      <input
                        type="file"
                        name="files"
                        multiple
                        className="block w-full text-sm"
                        accept=".pdf,.png,.jpg,.jpeg,.heic,.webp,.dwg,.dxf"
                      />
                    </div>
                    <p className="text-xs text-neutral-500">PDF, images or CAD files. Max 10MB each (server limit dependent).</p>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <Button disabled={state === "submitting"} className="h-11 rounded-xl px-5">
                      {state === "submitting" ? "Submitting…" : "Submit Request"}
                    </Button>
                  </div>

                  {/* If using Web3Forms later: */}
                  {/* <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" /> */}
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Tiny helpers ---------- */

function LabeledInput({
  label,
  icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; icon?: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium">{label}</label>
      <div className="flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-3 focus-within:ring-2 focus-within:ring-neutral-300 bg-white">
        {icon ? <span className="text-neutral-500">{icon}</span> : null}
        <input {...props} className="w-full bg-transparent outline-none" />
      </div>
    </div>
  );
}

function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-green-200 bg-green-50 p-6"
    >
      <h3 className="text-lg font-semibold text-green-800">Request submitted 🎉</h3>
      <p className="mt-1 text-sm text-green-700">
        Thanks! We’ve received your details and will get back to you within one business day.
      </p>
      <p className="mt-3 text-xs text-green-700">
        Want this to actually send an email? Swap the form to a provider like Web3Forms or Formspree and
        add your access key (I left comments where to plug it in).
      </p>
    </motion.div>
  );
}
