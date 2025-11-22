// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ASM – Contact Us",
  description:
    "Get in touch with ASM. Email, phone, and office address with an embedded map.",
};

const CONTACT = {
  email: "asmalusystem@gmail.com",
  phoneDisplay: "+91 8923925982",
  phoneHref: "+918923925982",
  optPhone: "+91 9837840510",
  optPhoneHref: "+919837840510",
  addressLine1: "ISKCON Temple, East of Kailash",
  addressLine2: "New Delhi, Delhi 110065",
  mapQuery:
    "ISKCON Temple, East of Kailash, New Delhi, Delhi 110065",
};

export default function ContactPage() {
  const addressFull = `${CONTACT.addressLine1}, ${CONTACT.addressLine2}`;

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Page Hero */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-2">Reach us</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Contact <span className="text-gray-900">Us</span>
          </h1>
          <p className="text-neutral-600 mt-4 max-w-2xl lg:text-lg">
            We’d love to hear about your project. Reach out via phone or email, or
            visit our office.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-6 md:grid-cols-3">
          {/* Email */}
          <Card className="rounded-2xl border-neutral-200 hover:border-gray-900 border-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm lg:text-lg text-neutral-500">Email</p>
                  <p className="font-semibold">{CONTACT.email}</p>
                </div>
              </div>
              <Link
                href={`mailto:${CONTACT.email}`}
                className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900 hover:underline"
              >
                Send an email <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="rounded-2xl border-neutral-200 hover:border-gray-900 border-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm lg:text-lg text-neutral-500">Phone</p>
                  <p className="font-semibold">{CONTACT.phoneDisplay}</p>
                  <p className="font-semibold">{CONTACT.optPhone}</p>
                </div>
              </div>
              <Link
                href={`tel:${CONTACT.phoneHref}`}
                className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900 hover:underline"
              >
                Call now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="rounded-2xl border-neutral-200 hover:border-gray-900 border-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm lg:text-lg text-neutral-500">Office</p>
                  {/* <p className="font-semibold">{CONTACT.addressLine1}</p>
                  <p className="text-sm text-neutral-600">{CONTACT.addressLine2}</p> */}
                  <p className="font-semibold">{addressFull}</p>
                </div>
              </div>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  CONTACT.mapQuery
                )}`}
                target="_blank"
                className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900 hover:underline"
              >
                Open in Google Maps <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Embed */}
      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
            {/* No API key needed — simple Google Maps embed using a query string */}
            <iframe
              title="ASM office location"
              aria-label="ASM office on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                CONTACT.mapQuery
              )}&output=embed`}
              width="100%"
              height="480"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            Not seeing the map? <span className="underline">Check your ad blocker</span> or{" "}
            <Link
              className="underline"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                CONTACT.mapQuery
              )}`}
              target="_blank"
            >
              open in Maps
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
