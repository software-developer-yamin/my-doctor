"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MessageCircle,
  Video,
  FileText,
  MapPin,
  Play,
  User,
  Hospital,
  Clock,
  Download,
  Star,
  ChevronRight,
  ArrowRight,
  Menu,
  Phone,
  Mail,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { useRouter } from "next/navigation";
import { MobileNav } from "@/components/mobile-nav";
import { useState, useEffect, useCallback, useMemo } from "react";
import DownloadDialog from "@/components/download-dialog";

export default function Home() {
  const router = useRouter();
  const [showDownloadDialog, setShowDownloadDialog] = useState(false);
  const [showCountdown, setShowCountdown] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate launch date - May 15, 2025
  const launchDate = useMemo(
    () => new Date("May 15, 2025 00:00:00").getTime(),
    []
  );

  // Handle download button click
  const handleDownloadClick = useCallback(() => {
    setShowDownloadDialog(true);
  }, []);

  // Calculate countdown to May 15
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        // Launch date has passed
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeRemaining({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 dark:border-gray-800 backdrop-blur-md shadow-sm transition-colors duration-300">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-green-500 to-blue-600 p-[2px]">
              <div className="h-full w-full rounded-full bg-white dark:bg-gray-900 p-1">
                <Image
                  src="/logo.svg?height=40&width=40&text=MD"
                  alt="My Doctor Logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            </div>
            <span className="text-xl font-bold dark:text-white">
              <span className="text-blue-700 dark:text-blue-400">MY</span>{" "}
              <span className="text-green-500 dark:text-green-400">DOCTOR</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-medium hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400 transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 dark:bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400 transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 dark:bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400 transition-colors relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 dark:bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#download"
              className="text-sm font-medium hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400 transition-colors relative group"
            >
              Download
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 dark:bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-green-500 dark:text-gray-200 dark:hover:text-green-400 transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 dark:bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-md shadow-green-500/20 dark:shadow-green-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 dark:hover:shadow-green-900/30"
              onClick={handleDownloadClick}
              aria-label="Download Now"
            >
              Download Now
            </Button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <MobileNav
              triggerButton={
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-500"></div>
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-green-200 dark:bg-green-900 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-3xl"></div>

          <div className="container relative grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="space-y-8 animate-fadeIn">
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/70 px-3 py-1 text-sm">
                Healthcare Reimagined
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                Your Gateway to{" "}
                <span className="text-gradient dark:text-gradient-dark">
                  Seamless Healthcare
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 md:text-xl max-w-lg">
                My Doctor is your all-in-one app for accessing healthcare
                services anytime, anywhere. Connect with specialists, book
                appointments, and get instant medical assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12 px-6 shadow-lg shadow-green-500/20 dark:shadow-green-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 dark:hover:shadow-green-900/30 hover:scale-105"
                  onClick={handleDownloadClick}
                  aria-label="Download Now"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Now
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 dark:border-green-700 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 h-12 px-6 transition-all duration-300 hover:shadow-md"
                  onClick={() => router.push("/#about")}
                  aria-label="Learn More"
                >
                  Learn More{" "}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                    JD
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                    SM
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                    KL
                  </div>
                </div>
                <span>
                  Trusted by{" "}
                  <span className="font-medium text-gray-900 dark:text-white">
                    10,000+
                  </span>{" "}
                  users
                </span>
              </div>
            </div>
            <div className="relative mx-auto max-w-sm md:max-w-none animate-float">
              <div className="relative">
                <div className="absolute -top-6 -left-6 h-64 w-64 rounded-full bg-green-100 dark:bg-green-900/50 opacity-30 blur-3xl"></div>
                <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full bg-blue-100 dark:bg-blue-900/50 opacity-30 blur-3xl"></div>
                <div className="relative rounded-[2.5rem] border-8 border-white dark:border-gray-800 bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/30">
                  <Image
                    src="/video-call.svg?height=600&width=600&text=Doctor+Consultation"
                    alt="Doctor consulting patient via video call"
                    width={600}
                    height={600}
                    className="rounded-[2rem] object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-xl dark:shadow-black/30 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
                      <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium dark:text-white">
                        24/7 Support
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Medical chat available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-10 transition-colors duration-300">
          <div className="container">
            <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Trusted by leading healthcare providers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center opacity-70">
              <div className="flex justify-center group">
                <Image
                  src="/square.png"
                  width={120}
                  height={40}
                  alt="Healthcare Partner Logo"
                  className="h-8 w-auto object-contain transition-all duration-300 group-hover:opacity-100 opacity-70 dark:invert"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center group">
                <Image
                  src="/incepta.jpeg"
                  width={120}
                  height={40}
                  alt="Healthcare Partner Logo"
                  className="h-8 w-auto object-contain transition-all duration-300 group-hover:opacity-100 opacity-70 dark:invert"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center group">
                <Image
                  src="/beximco.png"
                  width={120}
                  height={40}
                  alt="Healthcare Partner Logo"
                  className="h-8 w-auto object-contain transition-all duration-300 group-hover:opacity-100 opacity-70 dark:invert"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center group">
                <Image
                  src="/aci-plc.png"
                  width={120}
                  height={40}
                  alt="Healthcare Partner Logo"
                  className="h-8 w-auto object-contain transition-all duration-300 group-hover:opacity-100 opacity-70 dark:invert"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center group">
                <Image
                  src="/eskayef.jpeg"
                  width={120}
                  height={40}
                  alt="Healthcare Partner Logo"
                  className="h-8 w-auto object-contain transition-all duration-300 group-hover:opacity-100 opacity-70 dark:invert"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 md:py-28 lg:py-32 relative overflow-hidden dark:bg-gray-950 transition-colors duration-300"
        >
          <div className="absolute top-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-green-50 dark:bg-green-900/20 opacity-70 blur-3xl"></div>
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fadeIn">
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/70 px-3 py-1 text-sm">
                About My Doctor
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 dark:text-white">
                Healthcare at Your{" "}
                <span className="text-gradient dark:text-gradient-dark">
                  Fingertips
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My Doctor connects you with specialized doctors, allows you to
                book appointments, access your medical records, and get instant
                medical assistance through video calls, chat, or in-person
                visits. With 24/7 medical chat support, help is always just a
                tap away.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-float">
                <div className="absolute -z-10 h-full w-full rounded-full bg-green-50 dark:bg-green-900/20 opacity-70 blur-3xl"></div>
                <div className="relative mx-auto max-w-sm md:max-w-none">
                  <div className="relative rounded-[2.5rem] border-8 border-white dark:border-gray-800 bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-black/30 rotate-3 transition-transform duration-500 hover:rotate-0">
                    <Image
                      src="/app-interface.svg?height=800&width=400&text=App+Interface"
                      alt="My Doctor App Interface"
                      width={400}
                      height={800}
                      className="rounded-[2rem] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-xl dark:shadow-black/30 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
                        <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium dark:text-white">
                          Easy Booking
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Schedule in seconds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8 animate-slideUp">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="rounded-xl bg-green-100 dark:bg-green-900/50 p-3 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                      <User className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold dark:text-white">
                        Find Specialized Doctors
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Search for doctors by specialization such as
                        Neurologist, Cardiologist, and more. Filter by location,
                        ratings, and availability.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="rounded-xl bg-green-100 dark:bg-green-900/50 p-3 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                      <Calendar className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold dark:text-white">
                        Book Appointments Easily
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Schedule appointments with just a few taps and manage
                        your healthcare calendar. Receive reminders and
                        confirmations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="rounded-xl bg-green-100 dark:bg-green-900/50 p-3 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                      <FileText className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold dark:text-white">
                        Access Your Medical Records
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        View and manage your health records securely in one
                        place. Share with doctors when needed for better care.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button
                    className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12 px-6 shadow-lg shadow-green-500/20 dark:shadow-green-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 dark:hover:shadow-green-900/30"
                    onClick={() => router.push("/#features")}
                    aria-label="Explore Features"
                  >
                    Explore Features{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                Powerful Healthcare{" "}
                <span className="text-gradient dark:text-gradient-dark">
                  Features
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Discover all the powerful features that make My Doctor your
                ultimate healthcare companion.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp">
                <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    <Video className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    Instant Medical Assistance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get help via video calls, chat, or in-person visits whenever
                    you need it. Connect with doctors 24/7 for urgent
                    consultations.
                  </p>
                </div>
              </div>
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
                    24/7 Medical Chat Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Always available for quick health advice from qualified
                    medical professionals. Get answers to your health questions
                    instantly.
                  </p>
                </div>
              </div>
              <div
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    <Hospital className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    Discover Nearby Hospitals
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Find hospitals with contact details and services in your
                    area. Get directions, contact information, and available
                    specialties.
                  </p>
                </div>
              </div>
              <div
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    <Play className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    Informative Health Videos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Learn about health topics through curated videos from
                    medical experts. Stay informed about the latest health
                    information.
                  </p>
                </div>
              </div>
              <div
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    Specialized Doctor Search
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Find the right specialist for your specific health concerns.
                    Filter by specialty, experience, ratings, and availability.
                  </p>
                </div>
              </div>
              <div
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 dark:hover:shadow-green-900/10 hover:border-green-100 dark:hover:border-green-900 animate-slideUp"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="absolute right-6 top-6 h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                    <Clock className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold dark:text-white">
                    Appointment Management
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Keep track of all your upcoming and past medical
                    appointments. Receive reminders and easily reschedule when
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Screenshots Section */}
        <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden dark:bg-gray-950 transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fadeIn">
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/70 px-3 py-1 text-sm">
                App Interface
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 dark:text-white">
                Designed for{" "}
                <span className="text-gradient dark:text-gradient-dark">
                  Simplicity
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our intuitive interface makes healthcare management effortless.
                See how easy it is to use My Doctor.
              </p>
            </div>
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute -z-10 h-full w-full rounded-full bg-green-50 dark:bg-green-900/20 opacity-70 blur-3xl"></div>
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="transform translate-y-8 transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
                  <div className="rounded-2xl border-8 border-white dark:border-gray-800 bg-white dark:bg-gray-800 shadow-xl dark:shadow-black/30 overflow-hidden aspect-[9/19]">
                    <Image
                      src="/home.svg?height=600&width=300&text=App+Screen+1"
                      alt="My Doctor App Interface - Home Screen"
                      width={300}
                      height={600}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
                  <div className="rounded-2xl border-8 border-white dark:border-gray-800 bg-white dark:bg-gray-800 shadow-xl dark:shadow-black/30 overflow-hidden aspect-[9/19]">
                    <Image
                      src="/doctor.svg?height=600&width=300&text=App+Screen+2"
                      alt="My Doctor App Interface - Doctor Search"
                      width={300}
                      height={600}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="transform translate-y-8 transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
                  <div className="rounded-2xl border-8 border-white dark:border-gray-800 bg-white dark:bg-gray-800 shadow-xl dark:shadow-black/30 overflow-hidden aspect-[9/19]">
                    <Image
                      src="/appointments.svg?height=600&width=300&text=App+Screen+3"
                      alt="My Doctor App Interface - Appointment Booking"
                      width={300}
                      height={600}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden dark:bg-gray-900 transition-colors duration-300">
          <div className="absolute top-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-50 dark:bg-blue-900/20 opacity-70 blur-3xl"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fadeIn">
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/70 px-3 py-1 text-sm">
                Simple Process
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 dark:text-white">
                How It{" "}
                <span className="text-gradient dark:text-gradient-dark">
                  Works
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Getting started with My Doctor is simple and straightforward.
                Follow these easy steps.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              <div className="group relative">
                <div className="absolute left-10 top-10 h-[calc(100%-20px)] w-[2px] bg-gradient-to-b from-green-100 to-green-300 dark:from-green-900/30 dark:to-green-700/30 md:block hidden"></div>
                <div className="relative z-10 text-center md:text-left">
                  <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg dark:shadow-black/30 md:mx-0 group-hover:border-green-100 dark:group-hover:border-green-900 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/10 dark:group-hover:shadow-green-900/10">
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                      1
                    </span>
                    <Download className="h-8 w-8 text-green-500 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">
                    Download the App
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get My Doctor from App Store or Google Play. Available for
                    both iOS and Android devices.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute left-10 top-10 h-[calc(100%-20px)] w-[2px] bg-gradient-to-b from-green-100 to-green-300 dark:from-green-900/30 dark:to-green-700/30 md:block hidden"></div>
                <div className="relative z-10 text-center md:text-left">
                  <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg dark:shadow-black/30 md:mx-0 group-hover:border-green-100 dark:group-hover:border-green-900 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/10 dark:group-hover:shadow-green-900/10">
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                      2
                    </span>
                    <User className="h-8 w-8 text-green-500 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">
                    Register or Log In
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create your account or sign in to get started. Your medical
                    data is secure and private.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute left-10 top-10 h-[calc(100%-20px)] w-[2px] bg-gradient-to-b from-green-100 to-green-300 dark:from-green-900/30 dark:to-green-700/30 md:block hidden"></div>
                <div className="relative z-10 text-center md:text-left">
                  <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg dark:shadow-black/30 md:mx-0 group-hover:border-green-100 dark:group-hover:border-green-900 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/10 dark:group-hover:shadow-green-900/10">
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                      3
                    </span>
                    <MapPin className="h-8 w-8 text-green-500 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">
                    Search for Doctors
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Find specialists or hospitals based on your needs. Filter by
                    specialty, location, and availability.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute left-10 top-10 h-[calc(100%-20px)] w-[2px] bg-gradient-to-b from-green-100 to-green-300 dark:from-green-900/30 dark:to-green-700/30 md:block hidden"></div>
                <div className="relative z-10 text-center md:text-left">
                  <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg dark:shadow-black/30 md:mx-0 group-hover:border-green-100 dark:group-hover:border-green-900 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-green-500/10 dark:group-hover:shadow-green-900/10">
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                      4
                    </span>
                    <Calendar className="h-8 w-8 text-green-500 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 dark:text-white">
                    Book or Chat
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Schedule an appointment or start a medical chat. Get the
                    care you need, when you need it.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <div className="relative mx-auto max-w-3xl">
                <div className="absolute -z-10 h-full w-full rounded-full bg-green-50 dark:bg-green-900/20 opacity-70 blur-3xl"></div>
                <div className="rounded-2xl border-8 border-white dark:border-gray-800 bg-white dark:bg-gray-800 shadow-xl dark:shadow-black/30 overflow-hidden">
                  <Image
                    src="/workflow.svg?height=400&width=800&text=App+Workflow"
                    alt="My Doctor App Workflow"
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-green-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 left-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-green-50 dark:bg-green-900/20 opacity-70 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-50 dark:bg-blue-900/20 opacity-70 blur-3xl"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fadeIn">
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/70 px-3 py-1 text-sm">
                Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 dark:text-white">
                What Our{" "}
                <span className="text-gradient dark:text-gradient-dark">
                  Users Say
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hear from people who have transformed their healthcare
                experience with My Doctor.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg dark:shadow-black/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 dark:hover:shadow-green-900/10 hover:translate-y-[-8px]">
                <div className="mb-6 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300 italic">
                  "My Doctor has made managing my health so much easier! I can
                  book appointments and chat with doctors without leaving my
                  home. The interface is intuitive and the doctors are
                  responsive."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white font-bold">
                    SJ
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      App User • 2 months
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full bg-green-50 dark:bg-green-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="group rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg dark:shadow-black/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 dark:hover:shadow-green-900/10 hover:translate-y-[-8px]">
                <div className="mb-6 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300 italic">
                  "The 24/7 chat support is incredible. I got medical advice at
                  2 AM when my child had a high fever. The doctor was
                  professional and helped us manage the situation until morning.
                  Highly recommend!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Michael Chen</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Parent • 6 months
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full bg-green-50 dark:bg-green-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="group rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg dark:shadow-black/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 dark:hover:shadow-green-900/10 hover:translate-y-[-8px]">
                <div className="mb-6 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                  <Star className="h-5 w-5 fill-current text-yellow-500" />
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300 italic">
                  "Finding specialized doctors used to be a hassle. With My
                  Doctor, I can easily search, read reviews, and book
                  appointments in minutes. The app has simplified my healthcare
                  management completely."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    PS
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">Priya Sharma</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Regular User • 1 year
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full bg-green-50 dark:bg-green-900/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section
          id="download"
          className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500"></div>
          <div className="absolute top-0 left-0 h-full w-full bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-green-400 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-400 opacity-20 blur-3xl"></div>

          <div className="container relative">
            <div className="mx-auto max-w-4xl rounded-3xl bg-white/10 backdrop-blur-sm p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="animate-fadeIn">
                  <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 px-3 py-1 text-sm">
                    Download Now
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-6">
                    Take Control of Your Health Today
                  </h2>
                  <p className="text-lg text-green-50 mb-8">
                    Get started with My Doctor and experience healthcare like
                    never before. Available on iOS and Android.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleDownloadClick}
                      className="bg-white text-green-600 hover:bg-green-50 flex items-center gap-2 h-14 px-6 shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-105"
                      aria-label="Download on App Store"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M8 2l8 14" />
                        <path d="M16 2l-8 14" />
                        <path d="M2 14h20" />
                        <path d="M12 22l4-8H8l4 8z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-lg font-semibold">App Store</div>
                      </div>
                    </Button>
                    <Button
                      onClick={handleDownloadClick}
                      className="bg-white text-green-600 hover:bg-green-50 flex items-center gap-2 h-14 px-6 shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-105"
                      aria-label="Download on Google Play"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-lg font-semibold">Google Play</div>
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="relative mx-auto max-w-xs animate-float">
                  <div className="absolute -z-10 h-full w-full rounded-full bg-white/10 opacity-70 blur-3xl"></div>
                  <div className="relative rounded-[2.5rem] border-8 border-white/20 bg-white/10 shadow-xl overflow-hidden">
                    <Image
                      src="/app-interface-2.svg?height=600&width=300&text=App+Interface"
                      alt="My Doctor App Interface"
                      width={300}
                      height={600}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Company Section */}
        <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden dark:bg-gray-950 transition-colors duration-300">
          <div className="absolute top-0 left-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-green-50 dark:bg-green-900/20 opacity-70 blur-3xl"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center animate-fadeIn">
              <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/70 px-3 py-1 text-sm">
                About the Company
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 dark:text-white">
                Backed by{" "}
                <span className="text-gradient dark:text-gradient-dark">
                  Healthcare Experts
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Brought to you by a leading pharmaceutical company, a pioneer in
                healthcare innovation. Our commitment to advancing
                pharmaceutical research and digital health solutions ensures
                that you receive the best care possible.
              </p>
              <div className="flex justify-center">
                <Button
                  className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12 px-6 shadow-lg shadow-green-500/20 dark:shadow-green-900/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 dark:hover:shadow-green-900/30 hover:scale-105"
                  onClick={() => router.push("/#about")}
                  aria-label="Learn More About Us"
                >
                  Learn More About Us{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="bg-gray-900 text-gray-300 relative overflow-hidden"
        id="contact"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat opacity-5"></div>
        <div className="container py-16 relative">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-green-500 to-blue-600 p-[2px]">
                  <div className="h-full w-full rounded-full bg-gray-900 p-1">
                    <Image
                      src="/logo.svg?height=40&width=40&text=MD"
                      alt="My Doctor Logo"
                      width={40}
                      height={40}
                      className="object-contain rounded-full"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="text-xl font-bold text-white">
                  <span className="text-blue-400">MY</span>{" "}
                  <span className="text-green-400">DOCTOR</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Your all-in-one healthcare companion for accessing medical
                services anytime, anywhere.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="rounded-full bg-gray-800 p-2 hover:bg-green-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-gray-800 p-2 hover:bg-green-600 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 0 0 5.4-2.1 8-3.4-3.4-1.6-4.7-7.1-4.7-7.1s-1.4 0-2.4-.3c-.8-.2-1.8-.6-1.8-.6s1.8-2.1 3.2-2.8c-1.8-.8-4.2-1.5-4.2-1.5S5.1 1 12 1c0 0 3 5.3-5 9 0 0 3.5 6.8 12 6.5 0 0 1.2-1.5 2-2.6.6 1.2 1.6 2.1 2.8 2.5 1.6.3 3.6.4 3.6.4s-2.5-2.4-2.5-4.3z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-gray-800 p-2 hover:bg-green-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="rounded-full bg-gray-800 p-2 hover:bg-green-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />{" "}
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />{" "}
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />{" "}
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#download"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />{" "}
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />{" "}
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />{" "}
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />{" "}
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400 group hover:text-green-400 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 group-hover:bg-green-600 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a
                    href="tel:01974200905"
                    className="text-gray-400 hover:text-green-400"
                  >
                    01974-200905
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 group hover:text-green-400 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 group-hover:bg-green-600 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a
                    href="mailto:mydoctorinfo247@gmail.com?subject=Contact%20from%20Website"
                    className="text-gray-400 hover:text-green-400"
                  >
                    mydoctorinfo247@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 group hover:text-green-400 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 group-hover:bg-green-600 transition-colors">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>
                    Address: pourosova mur, city centar 3rd floor, Narsingdi
                    sadar, Narsingdi
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <Button
                  onClick={() =>
                    (window.location.href =
                      "mailto:mydoctorinfo247@gmail.com?subject=Contact%20from%20Website")
                  }
                  className="bg-green-500 hover:bg-green-600 text-white w-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                  aria-label="Contact Us"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} My Doctor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Countdown Timer */}
      {showCountdown && (
        <div className="fixed bottom-4 right-4 z-50 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-green-100 dark:border-green-900 relative">
            <button
              onClick={() => setShowCountdown(false)}
              className="absolute -top-2 -right-2 h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Close countdown timer"
            >
              <X className="h-3 w-3 text-gray-600 dark:text-gray-400" />
            </button>
            <div className="text-center mb-2">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                App Launch In
              </h3>
            </div>
            <div className="flex space-x-2">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md px-2 py-1 font-mono font-bold text-lg min-w-[40px] text-center">
                  {timeRemaining.days}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Days
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md px-2 py-1 font-mono font-bold text-lg min-w-[40px] text-center">
                  {timeRemaining.hours}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Hours
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md px-2 py-1 font-mono font-bold text-lg min-w-[40px] text-center">
                  {timeRemaining.minutes}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Mins
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md px-2 py-1 font-mono font-bold text-lg min-w-[40px] text-center animate-pulse">
                  {timeRemaining.seconds}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Secs
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Download Dialog */}
      <DownloadDialog
        open={showDownloadDialog}
        onOpenChange={setShowDownloadDialog}
        launchDate={launchDate}
      />
    </div>
  );
}
