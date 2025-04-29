"use client";

import {
  Phone,
  MessageCircle,
  Search,
  Hospital,
  UserSearch,
  FileText,
  Calendar,
  Ambulance,
  SmileIcon as Tooth,
  Pill,
  Activity,
  Map,
  HeartPulse,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-50 dark:bg-blue-900/20 opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-green-50 dark:bg-green-900/20 opacity-70 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-50 dark:bg-green-900/10 opacity-30 blur-3xl"></div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fadeIn">
          <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/70 px-3 py-1 text-sm">
            Key Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 dark:text-white">
            Comprehensive Healthcare{" "}
            <span className="text-gradient dark:text-gradient-dark">
              Features
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover all the powerful features that make MyDoctor your ultimate
            healthcare companion for every medical need.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1: Hotline Number */}
          <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp">
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Phone className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                24/7 Hotline Number
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access emergency assistance and healthcare advice anytime with
                our 24/7 hotline. Get immediate help for ambulance requests and
                urgent medical consultations.
              </p>
            </div>
          </div>

          {/* Feature 2: Chat Box */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Medical Chat Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Communicate directly with healthcare professionals for initial
                consultations and general advice before booking appointments or
                further consultation.
              </p>
            </div>
          </div>

          {/* Feature 3: Search Box */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Search className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Location-Based Search
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find doctors, hospitals, clinics, and pharmacies in your
                vicinity with our location-based search. Filter by city, area,
                or zip code for convenience.
              </p>
            </div>
          </div>

          {/* Feature 4: My Hospital */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Hospital className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                My Hospital
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access detailed information about hospitals including services,
                specialties, fees, and locations to make informed healthcare
                decisions.
              </p>
            </div>
          </div>

          {/* Feature 5: Find My Doctors */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <UserSearch className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Find My Doctors
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find the right specialists based on your medical condition,
                experience, and availability, complete with reviews and ratings
                from other patients.
              </p>
            </div>
          </div>

          {/* Feature 6: My Record */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                My Record
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Store all your medical records securely in one place. Both you
                and your doctors can access your medical history, prescriptions,
                and test results.
              </p>
            </div>
          </div>

          {/* Feature 7: My Appointment */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Calendar className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                My Appointment
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Book appointments directly with doctors through the app. Select
                your preferred doctor, choose a convenient time slot, and
                confirm your visit.
              </p>
            </div>
          </div>

          {/* Feature 8: Ambulance Service */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Ambulance className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Ambulance Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quick access to ambulance services during emergencies. Request
                an ambulance and track its arrival in real-time for urgent
                medical transportation.
              </p>
            </div>
          </div>

          {/* Feature 9: Dental Point */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Tooth className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Dental Point
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find dental care centers near you. Search for dental services,
                clinics, and dentists based on your location and specific
                treatment requirements.
              </p>
            </div>
          </div>

          {/* Feature 10: Homeopathic Center */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Pill className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Homeopathic Center
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access information about homeopathic treatment centers. Find
                nearby homeopathic doctors and centers offering alternative
                medicine services.
              </p>
            </div>
          </div>

          {/* Feature 11: Physiotherapy Center */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "1.0s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Activity className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Physiotherapy Center
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Locate physiotherapy centers offering rehabilitation services.
                Find specialized clinics for physical therapy based on your
                location and needs.
              </p>
            </div>
          </div>

          {/* Feature 12: Hospital Guide Service */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "1.1s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <Map className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Hospital Guide Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get guidance and information for navigating hospitals. Receive
                detailed directions to hospital departments, facilities, and
                available services.
              </p>
            </div>
          </div>

          {/* Feature 13: Home Nursing */}
          <div
            className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                <HeartPulse className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">
                Home Nursing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access home nursing and caregiver services for in-home care.
                Request nursing services for post-surgery care, chronic disease
                management, and elderly care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
