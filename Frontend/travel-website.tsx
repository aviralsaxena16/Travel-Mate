'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Search, Star, MapPin, Users, ChevronRight, Mail, Phone, MapPinned } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Component() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    distance: '',
    people: ''
  })

  const featuredTours = [
    {
      id: 1,
      title: 'Westminster Bridge',
      location: 'London',
      rating: 4.5,
      reviews: 2,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Bali, Indonesia',
      location: 'Bali',
      rating: 5.0,
      reviews: 1,
      image: '/placeholder.svg'
    },
  ]

  const services = [
    {
      title: 'Calculate Weather',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Best Tour Guide',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Customization',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">TravelWorld</span>
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden ml-auto">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold">Home</Link>
                <Link href="/about" className="text-lg font-semibold">About</Link>
                <Link href="/tour" className="text-lg font-semibold">Tour</Link>
                <Link href="/login" className="text-lg font-semibold">Login</Link>
                <Link href="/register" className="text-lg font-semibold">Register</Link>
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/tour" className="text-sm font-medium transition-colors hover:text-primary">
              Tour
            </Link>
          </nav>

          <div className="ml-auto hidden md:flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">Login</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Input id="email" placeholder="Email" type="email" />
                    <Input id="password" placeholder="Password" type="password" />
                    <Button className="w-full">Login</Button>
                  </div>
                  <p className="text-sm text-center">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-primary">
                      Register
                    </Link>
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Register</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Input id="username" placeholder="Username" />
                    <Input id="email" placeholder="Email" type="email" />
                    <Input id="password" placeholder="Password" type="password" />
                    <Button className="w-full">Create Account</Button>
                  </div>
                  <p className="text-sm text-center">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary">
                      Login
                    </Link>
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-12 md:py-24 lg:py-32 bg-background">
          <div className="container grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Traveling opens the door to creating{' '}
                <span className="text-primary">memories</span>
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsum nobis aspernores soluta voluptas.
              </p>
              <div className="grid gap-4 p-6 bg-white rounded-lg shadow-lg">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <Input 
                      placeholder="Where are you going?" 
                      value={searchParams.location}
                      onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5" />
                    <Input 
                      placeholder="Distance k/m" 
                      value={searchParams.distance}
                      onChange={(e) => setSearchParams({...searchParams, distance: e.target.value})}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <Input 
                      placeholder="Max People" 
                      value={searchParams.people}
                      onChange={(e) => setSearchParams({...searchParams, people: e.target.value})}
                    />
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
            <div className="grid gap-4 items-start">
              <Image
                src="/placeholder.svg"
                alt="Travel memories"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                width={500}
                height={300}
              />
            </div>
          </div>
        </section>