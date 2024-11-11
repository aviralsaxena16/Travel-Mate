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