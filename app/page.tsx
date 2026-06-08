'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Download, Search, Smartphone, X, Phone, MessageCircle } from 'lucide-react'

const paymentQrs = [
  { name: 'Payment QR 1', src: '/images/qr1.jpeg' },
  { name: 'Payment QR 2', src: '/images/qr2.jpeg' },
]

const WHATSAPP_NUMBER = '+9779855073719'

export default function MenuApp() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentTime, setCurrentTime] = useState<string>('')
  const [currentDate, setCurrentDate] = useState<string>('')
  const [greeting, setGreeting] = useState<string>('')
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' }))
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}`)

      const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' }
      const dateStr = now.toLocaleDateString('en-US', options)
      setCurrentDate(dateStr)

      const hour = now.getHours()
      if (hour < 12) setGreeting('Good Morning')
      else if (hour < 17) setGreeting('Good Afternoon')
      else if (hour < 21) setGreeting('Good Evening')
      else setGreeting('Good Night')
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const categories = [
    'Special',
    'Tea & Coffee',
    'Soft Drinks',
    'Starter',
    'Veg Items',
    'Non Veg Items (Chicken)',
    'Momos',
    'Chowmin',
    'Kati Roll',
    'Thukpa',
    'Pizza',
    'Burger',
    'Biryani',
    'Nepali Thakali Khana',
    'Soup',
    'Salad',
    'Lassi',
    'Milk Shake',
    'Juice',
    'Beer',
    'Wine',
    'Whiskey / Vodka',
    'Fried Rice',
    'Omelette Egg',
    'Mutton',
    'Pork',
    'Buff',
    'Sekuwa',
    'Khaja Set',
    'Hot Set',
    'Half Full',
    'Taas',
    'Sadeko',
  ]

  const menuData = {
    'Special': [
      { name: 'Chicken Roast', price: '350', image: '/images/chicken-roast.png', popular: true },
      { name: 'Chicken Momo', price: '140', image: '/images/momo.png', popular: true },
      { name: 'Mutton Khaja Set', price: '500', image: '/images/thakali-khana.png', popular: true },
      { name: 'Biryani Chicken', price: '450', image: '/images/biryani.png', popular: true },
      { name: 'French Fry', price: '180', image: '/images/french-fry.png' },
      { name: 'Chowmin Chicken', price: '150', image: '/images/chowmin.png' },
      { name: 'Milk Tea', price: '50', image: '/images/milk-tea.png' },
      { name: 'Pizza Chicken', price: '500', image: '/images/pizza.png' },
    ],
    'Tea & Coffee': [
      { name: 'Milk Tea', price: '50', image: '/images/milk-tea.png' },
      { name: 'Black Tea', price: '40', image: '/images/black-tea.png' },
      { name: 'Milk Coffee', price: '120', image: '/images/coffee.png' },
      { name: 'Black Coffee', price: '80', image: '/images/coffee.png' },
      { name: 'Cold Coffee', price: '160', image: '/images/cold-coffee.png' },
      { name: 'Hot Lemon', price: '60', image: '/images/black-tea.png' },
      { name: 'Lemon Tea', price: '50', image: '/images/black-tea.png' },
    ],
    'Soft Drinks': [
      { name: 'Coke/Fanta/Sprite/Dew/Pepsi/Slice', price: '70', image: '/images/soft-drinks.png' },
      { name: 'Lemon Soda', price: '60', image: '/images/soft-drinks.png' },
      { name: 'Soda Water', price: '110', image: '/images/soft-drinks.png' },
      { name: 'Min. Water', price: '25', image: '/images/soft-drinks.png' },
    ],
    'Starter': [
      { name: 'French Fry', price: '180', image: '/images/french-fry.png' },
      { name: 'Papad (dry/masala/fry)', price: '50/100/60', image: '/images/pakoda.png' },
      { name: 'Peanut (plain/sadeko)', price: '100/180', image: '/images/pakoda.png' },
      { name: 'Kaju (plain/fry)', price: '250/300', image: '/images/pakoda.png' },
    ],
    'Veg Items': [
      { name: 'Aalu Fry', price: '90', image: '/images/alu-fry.png' },
      { name: 'Alu Jira', price: '180', image: '/images/alu-fry.png' },
      { name: 'Veg Pakoda', price: '200', image: '/images/pakoda.png' },
      { name: 'Potato Chilly', price: '220', image: '/images/alu-fry.png' },
      { name: 'Mushroom Pakoda', price: '280', image: '/images/pakoda.png' },
      { name: 'Paneer Pakoda', price: '300', image: '/images/pakoda.png' },
      { name: 'Mushroom Chilly', price: '300', image: '/images/pakoda.png' },
    ],
    'Non Veg Items (Chicken)': [
      { name: 'Chicken Roast', price: '350', image: '/images/chicken-roast.png' },
      { name: 'Chicken Boil', price: '300', image: '/images/chicken-roast.png' },
      { name: 'Chicken Chilly (boneless/with bone)', price: '380', image: '/images/chicken-roast.png' },
      { name: 'Chicken Choila', price: '300', image: '/images/chicken-roast.png' },
      { name: 'Chicken Meat Ball', price: '300', image: '/images/chicken-roast.png' },
      { name: 'Chicken Leg Piece Fry (2pcs)', price: '400', image: '/images/chicken-roast.png' },
      { name: 'Chicken Drumstick (6 pcs)', price: '720', image: '/images/chicken-roast.png' },
      { name: 'Chicken Sausage (fry/chilli/sadeko)', price: '70/80/180', image: '/images/chicken-roast.png' },
      { name: 'Chicken 65 (per plate)', price: '450', image: '/images/chicken-roast.png' },
    ],
    'Momos': [
      { name: 'Veg Momo', price: '120', image: '/images/momo.png' },
      { name: 'Veg Fry', price: '140', image: '/images/momo.png' },
      { name: 'Veg Chilly', price: '160', image: '/images/momo.png' },
      { name: 'Buff Momo', price: '140', image: '/images/momo.png' },
      { name: 'Buff C.', price: '160', image: '/images/momo.png' },
      { name: 'Buff Fry', price: '150', image: '/images/momo.png' },
      { name: 'Buff Khote', price: '200', image: '/images/momo.png' },
      { name: 'Buff Chilly', price: '180', image: '/images/momo.png' },
      { name: 'Chicken Momo', price: '140', image: '/images/momo.png' },
      { name: 'Chicken C.', price: '160', image: '/images/momo.png' },
      { name: 'Chicken Fry', price: '150', image: '/images/momo.png' },
      { name: 'Chicken Khote', price: '200', image: '/images/momo.png' },
      { name: 'Chicken Chilly', price: '180', image: '/images/momo.png' },
      { name: 'Chicken Chilli Momo', price: '160', image: '/images/momo.png' },
      { name: 'Paneer Momo', price: '280', image: '/images/momo.png' },
      { name: 'Paneer Fry', price: '200', image: '/images/momo.png' },
      { name: 'Paneer Jhol', price: '220', image: '/images/momo.png' },
    ],
    'Chowmin': [
      { name: 'Buff', price: '150', image: '/images/chowmin.png' },
      { name: 'Chicken', price: '150', image: '/images/chowmin.png' },
      { name: 'Veg', price: '120', image: '/images/chowmin.png' },
      { name: 'Egg', price: '140', image: '/images/chowmin.png' },
      { name: 'Mixed', price: '200', image: '/images/chowmin.png' },
    ],
    'Kati Roll': [
      { name: 'Veg', price: '180', image: '/images/kati-roll.png' },
      { name: 'Chicken', price: '250', image: '/images/kati-roll.png' },
      { name: 'Egg', price: '200', image: '/images/kati-roll.png' },
      { name: 'Mushroom', price: '200', image: '/images/kati-roll.png' },
      { name: 'Paneer', price: '230', image: '/images/kati-roll.png' },
    ],
    'Thukpa': [
      { name: 'Veg Thukpa', price: '150', image: '/images/thukpa.png' },
      { name: 'Chicken', price: '200', image: '/images/thukpa.png' },
      { name: 'Mutton', price: '250', image: '/images/thukpa.png' },
      { name: 'Mixed', price: '300', image: '/images/thukpa.png' },
    ],
    'Pizza': [
      { name: 'Veg', price: '400', image: '/images/pizza.png' },
      { name: 'Chicken', price: '500', image: '/images/pizza.png' },
      { name: 'Cheese', price: '450', image: '/images/pizza.png' },
      { name: 'Buff', price: '500', image: '/images/pizza.png' },
      { name: 'Mixed', price: '550', image: '/images/pizza.png' },
      { name: 'Mushroom', price: '450', image: '/images/pizza.png' },
    ],
    'Burger': [
      { name: 'Chicken', price: '300', image: '/images/burger.png' },
      { name: 'Buff', price: '300', image: '/images/burger.png' },
      { name: 'Veg', price: '200', image: '/images/burger.png' },
    ],
    'Biryani': [
      { name: 'Veg', price: '380', image: '/images/biryani.png' },
      { name: 'Chicken', price: '450', image: '/images/biryani.png' },
      { name: 'Mutton', price: '550', image: '/images/biryani.png' },
      { name: 'Egg', price: '400', image: '/images/biryani.png' },
    ],
    'Nepali Thakali Khana': [
      { name: 'Veg', price: '250', image: '/images/thakali-khana.png' },
      { name: 'Chicken', price: '400', image: '/images/thakali-khana.png' },
      { name: 'Mutton', price: '500', image: '/images/thakali-khana.png' },
      { name: 'Egg', price: '300', image: '/images/thakali-khana.png' },
      { name: 'Fish', price: '475', image: '/images/thakali-khana.png' },
    ],
    'Soup': [
      { name: 'Chicken', price: '140', image: '/images/soup.png' },
      { name: 'Mutton', price: '160', image: '/images/soup.png' },
      { name: 'Mushroom', price: '120', image: '/images/soup.png' },
      { name: 'Veg', price: '90', image: '/images/soup.png' },
      { name: 'Mixed', price: '190', image: '/images/soup.png' },
    ],
    'Salad': [
      { name: 'Green Salad (Small Plate)', price: '70', image: '/images/salad.png' },
      { name: 'Green Salad (Large Plate)', price: '120', image: '/images/salad.png' },
      { name: 'Fruit Salad (Small Plate)', price: '120', image: '/images/salad.png' },
      { name: 'Fruit Salad (Large Plate)', price: '200', image: '/images/salad.png' },
      { name: 'Russian Salad (Small Plate)', price: '185', image: '/images/salad.png' },
      { name: 'Russian Salad (Large Plate)', price: '350', image: '/images/salad.png' },
    ],
    'Lassi': [
      { name: 'Plain', price: '120', image: '/images/lassi.png' },
      { name: 'Sweet', price: '130', image: '/images/lassi.png' },
      { name: 'Banana', price: '180', image: '/images/lassi.png' },
      { name: 'Mango', price: '200', image: '/images/lassi.png' },
      { name: 'Dry Fruit', price: '230', image: '/images/lassi.png' },
    ],
    'Milk Shake': [
      { name: 'Vanilla', price: '250', image: '/images/milkshake.png' },
      { name: 'Chocolate', price: '275', image: '/images/milkshake.png' },
      { name: 'Strawberry', price: '300', image: '/images/milkshake.png' },
      { name: 'Oreo Milkshake', price: '300', image: '/images/milkshake.png' },
    ],
    'Juice': [
      { name: 'Mango Juice', price: '250', image: '/images/juice.png' },
      { name: 'Orange Juice', price: '250', image: '/images/juice.png' },
    ],
    'Beer': [
      { name: 'Gorkha Strong (300ml/650ml)', price: '250/500', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Tuborg (300ml/650ml)', price: '300/600', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Arna (300ml)', price: '250', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Barahsinghe (300ml/650ml)', price: '300/550', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Carlsberg (300ml/650ml)', price: '350/650', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: '500 Beer (650ml)', price: '380', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Tuborg Can Beer', price: '450', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Gorkha 500', price: '400', image: '/images/coke_fanta_dew_sprite.jpg' },
    ],
    'Wine': [
      { name: 'Big Master (750ml)', price: '1100', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Canvas (750ml)', price: '1100', image: '/images/coke_fanta_dew_sprite.jpg' },
    ],
    'Whiskey / Vodka': [
      { name: 'Golden Oak (60/90/180/375/750ml)', price: '200/250/400/800/1600', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Old Durbar Red (60/90/180/375/750ml)', price: '280/430/800/1600/3200', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Old Durbar Black (60/90/180/375/750ml)', price: '380/550/1050/2050/4100', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: '8848 Vodka (60/90/180/375/750ml)', price: '270/400/750/1500/3000', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Khukri Rum (60/90/180/375/750ml)', price: '250/350/700/1350/2700', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Signature Red (60/90/180/375/750ml)', price: '280/430/800/1600/3200', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Mustang (60/90/180/375/750ml)', price: '150/200/400/800/1600', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Highlander (60/90/180/375/750ml)', price: '140/200/375/750/1500', image: '/images/coke_fanta_dew_sprite.jpg' },
    ],
    'Fried Rice': [
      { name: 'Veg Fry Rice', price: '200', image: '/images/fried-rice.png' },
      { name: 'Egg Fry Rice', price: '250', image: '/images/fried-rice.png' },
      { name: 'Buff Fry Rice', price: '300', image: '/images/fried-rice.png' },
      { name: 'Chicken Fry Rice', price: '300', image: '/images/fried-rice.png' },
      { name: 'Mix Fry Rice', price: '350', image: '/images/fried-rice.png' },
    ],
    'Omelette Egg': [
      { name: 'Plain Omelette', price: '50', image: '/images/omelette.png' },
      { name: 'Masala Omelette', price: '80', image: '/images/omelette.png' },
      { name: 'Fry Egg', price: '60', image: '/images/omelette.png' },
      { name: 'Poach Egg', price: '70', image: '/images/omelette.png' },
      { name: 'Boiled Egg', price: '50', image: '/images/omelette.png' },
    ],
    'Mutton': [
      { name: 'Mutton Chilly (Small/Large)', price: '400/500', image: '/images/mutton.png' },
      { name: 'Mutton Grevy (Small/Large)', price: '300/450', image: '/images/mutton.png' },
      { name: 'Mutton Taas (Small/Large)', price: '350/450', image: '/images/mutton.png' },
      { name: 'Mutton Boil (Small/Large)', price: '300/400', image: '/images/mutton.png' },
    ],
    'Pork': [
      { name: 'Pork Tawa', price: '400', image: '/images/pork.png' },
      { name: 'Pork Fry', price: '375', image: '/images/pork.png' },
      { name: 'Pork Sadeko (Fry/Boil, Small/Large)', price: '400/500', image: '/images/pork.png' },
      { name: 'Pork Boil (Small/Large)', price: '300/400', image: '/images/pork.png' },
      { name: 'Pork Choila (Small/Large)', price: '360/460', image: '/images/pork.png' },
      { name: 'Pork Chilly (Small/Large)', price: '360/480', image: '/images/pork.png' },
      { name: 'Pork Sekuwa (Small/Large)', price: '350/450', image: '/images/pork.png' },
    ],
    'Buff': [
      { name: 'Sukuti (Small/Large)', price: '300/400', image: '/images/buff sekuwa.jpg' },
      { name: 'Choila (Small/Large)', price: '330/430', image: '/images/buff sekuwa.jpg' },
      { name: 'Gravy (Small/Large)', price: '250/350', image: '/images/buff sekuwa.jpg' },
    ],
    'Sekuwa': [
      { name: 'Buff Sekuwa', price: '150', image: '/images/sekuwa.png' },
      { name: 'Chicken Sekuwa', price: '150', image: '/images/sekuwa.png' },
      { name: 'Mutton Sekuwa', price: '150', image: '/images/sekuwa.png' },
      { name: 'Pork Sekuwa', price: '180', image: '/images/sekuwa.png' },
    ],
    'Khaja Set': [
      { name: 'Chicken Khaja Set', price: '450', image: '/images/thakali-khana.png' },
      { name: 'Mutton Khaja Set', price: '600', image: '/images/thakali-khana.png' },
      { name: 'Veg Khaja Set', price: '350', image: '/images/thakali-khana.png' },
      { name: 'Buff Khaja Set', price: '480', image: '/images/thakali-khana.png' },
    ],
    'Hot Set': [
      { name: 'Chicken Hot Set', price: '450', image: '/images/chicken khaja set.jpg' },
      { name: 'Mutton Hot Set', price: '600', image: '/images/mutton khaja set.jpg' },
      { name: 'Veg Hot Set', price: '350', image: '/images/veg khaja set.jpg' },
      { name: 'Buff Hot Set', price: '480', image: '/images/Buff Khaja Set.jpg' },
    ],
    'Half Full': [
      { name: 'Chicken', price: '180', image: '/images/chicken.jpg' },
      { name: 'Egg', price: '250', image: '/images/boiled egg.jpg' },
      { name: 'Mushroom', price: '200', image: '/images/mushroom soup.jpg' },
      { name: 'Paneer', price: '230', image: '/images/paneer pakauda.jpg' },
    ],
    'Taas': [
      { name: 'Chicken Taas', price: '300', image: '/images/chicken-roast.png' },
      { name: 'Mutton Taas', price: '450', image: '/images/mutton.png' },
      { name: 'Pork Taas', price: '400', image: '/images/pork.png' },
    ],
    'Sadeko': [
      { name: 'Peanuts Sadeko', price: '180', image: '/images/pakoda.png' },
      { name: 'Papad Sadeko', price: '160', image: '/images/pakoda.png' },
      { name: 'Chicken (Boil)', price: '300', image: '/images/chicken-roast.png' },
      { name: 'Chicken (Fry)', price: '320', image: '/images/chicken-roast.png' },
      { name: 'Chicken (Sadeko)', price: '350', image: '/images/chicken-roast.png' },
      { name: 'Mutton (Boil)', price: '400', image: '/images/mutton.png' },
      { name: 'Mutton (Fry)', price: '450', image: '/images/mutton.png' },
      { name: 'Mutton (Sadeko)', price: '500', image: '/images/mutton.png' },
      { name: 'Buff Sadeko', price: '130', image: '/images/buff sekuwa.jpg' },
      { name: 'Bhatmas (Plain)', price: '100', image: '/images/pakoda.png' },
      { name: 'Bhatmas (Sadeko)', price: '100', image: '/images/pakoda.png' },
      { name: 'Mushroom Sadeko', price: '250', image: '/images/pakoda.png' },
      { name: 'Aalu Sadeko', price: '120', image: '/images/alu-fry.png' },
      { name: 'Cucumber Sadeko', price: '100', image: '/images/green salad.jpg' },
      { name: 'Wai Wai Sadeko', price: '100', image: '/images/chowmin.png' },
    ],
  }

  const getAllItems = () => {
    const allItems: Array<{name: string; price: string; image: string; category: string; popular?: boolean}> = []
    Object.entries(menuData).forEach(([category, items]) => {
      items.forEach(item => {
        allItems.push({ ...item, category })
      })
    })
    return allItems
  }

  const allItems = getAllItems()
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const visibleSections = categories
    .map((category) => {
      const items = menuData[category as keyof typeof menuData].filter((item) => {
        if (!normalizedSearch) return true

        return `${category} ${item.name} ${item.price}`.toLowerCase().includes(normalizedSearch)
      })

      return { category, items }
    })
    .filter((section) => section.items.length > 0)
  const visibleItemCount = visibleSections.reduce((total, section) => total + section.items.length, 0)
  const featuredImages = [
    '/images/chicken roast.jpg',
    '/images/chicken khote momo.jpg',
    '/images/mutton khana thali set.jpg',
    '/images/mixed pizza.jpg',
    '/images/mango lassi.jpg',
  ]
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#dce8f0] px-3 py-4 text-[#111315] sm:px-6 sm:py-8 lg:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden bg-[#f0f6fa] shadow-[0_30px_80px_rgba(17,19,21,0.10)] ring-1 ring-black/5">
        <header className="px-5 pb-8 pt-6 sm:px-10 lg:px-16 lg:pb-12 lg:pt-10">
          <nav className="flex flex-wrap items-center justify-between gap-5">
            <a href="#top" className="flex h-9 items-center gap-2">
              <Image
                src="/images/logo.jpeg"
                alt="Khukuri Restaurant & Bar"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover border border-black/10"
              />
            </a>

            <div className="hidden items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111315] md:flex">
              <a className="transition hover:opacity-50" href="#menu">Menu</a>
              <a className="transition hover:opacity-50" href="#special">Special</a>
              <a className="transition hover:opacity-50" href="#payment">Payment</a>
              <a className="transition hover:opacity-50" href="#footer">Contact</a>
              <a
                className="inline-flex items-center gap-1.5 transition hover:opacity-50"
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111315] transition hover:opacity-50 sm:inline-flex"
              >
                <Phone className="h-3.5 w-3.5" />
                Contact
              </a>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="inline-flex h-9 items-center gap-2 border border-[#111315] px-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111315] transition hover:bg-[#111315] hover:text-white focus:outline-none"
              >
                <Smartphone className="h-3.5 w-3.5" />
                Pay
              </button>
            </div>
          </nav>

          <section id="top" className="pt-10 text-center sm:pt-14">
            <div className="mx-auto mb-5 flex justify-center">
              <Image
                src="/images/logo.jpeg"
                alt="Khukuri Restaurant & Bar Logo"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover shadow-md ring-1 ring-black/10"
              />
            </div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#111315]">
              Khukuri Restaurant & Bar
            </p>
            <h1 className="font-serif text-6xl font-light uppercase leading-none text-[#111315] sm:text-7xl lg:text-8xl">
              Menu
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#111315]/60">
              Complete single-page menu with live search, clear pricing, and QR payment options.
            </p>
          </section>
        </header>

        <main id="menu" className="px-5 pb-12 sm:px-10 lg:px-16">
          <section className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1fr)] lg:items-center">
            <div id="special" className="min-w-0">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#111315]/60">
                Featured
              </p>
              <h2 className="font-serif text-3xl font-light uppercase leading-tight text-[#111315] sm:text-4xl">
                House Specials
              </h2>
              <div className="mt-7 space-y-4">
                {menuData.Special.slice(0, 5).map((item) => (
                  <div key={item.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-black/10 pb-3">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-6 text-[#111315]">{item.name}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#111315]/40">Special</p>
                    </div>
                    <p className="whitespace-nowrap text-sm font-semibold text-[#111315]">Rs {item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto aspect-[1.35/1] w-full max-w-sm overflow-hidden bg-[#e4eff6]">
              <div className="absolute inset-4 z-10 rounded-[50%] border border-black/10" />
              <Image
                src="/images/chicken roast.jpg"
                alt="Chicken Roast"
                fill
                priority
                sizes="(min-width: 1024px) 380px, 70vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </section>

          <section className="sticky top-0 z-20 -mx-5 mt-12 border-y border-black/10 bg-[#f0f6fa]/95 px-5 py-4 backdrop-blur sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="relative min-w-0">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#111315]/40" />
                <input
                  type="search"
                  placeholder="Search dishes, drinks, categories, or prices"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12 w-full border border-black/10 bg-white px-11 text-sm font-medium text-[#111315] outline-none transition placeholder:text-[#111315]/30 focus:border-[#111315]/30 focus:ring-4 focus:ring-black/5"
                />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#111315]/50">
                {normalizedSearch ? `${visibleItemCount} results` : `${allItems.length} items`}
              </p>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="shrink-0 border border-black/10 bg-white/60 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111315] transition hover:bg-[#111315] hover:text-white hover:border-[#111315]"
                >
                  {category}
                </a>
              ))}
            </div>
          </section>

          {normalizedSearch && (
            <p className="mt-8 text-sm font-medium text-[#111315]/60">
              Showing matches for <span className="font-semibold text-[#111315]">{searchTerm}</span>
            </p>
          )}

          <section className="mt-10 grid gap-x-14 gap-y-16 lg:grid-cols-2">
            {visibleSections.map((section, index) => {
              const showImage = !normalizedSearch && index % 6 === 1
              const imageSrc = featuredImages[index % featuredImages.length]

              return (
                <article
                  id={section.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                  key={section.category}
                  className={`scroll-mt-40 ${showImage ? 'lg:grid lg:grid-cols-[0.92fr_1fr] lg:items-center lg:gap-8' : ''}`}
                >
                  {showImage && (
                    <div className="relative mb-7 aspect-square max-w-[280px] mx-auto overflow-hidden bg-[#e4eff6] lg:mb-0">
                      <div className="absolute inset-4 z-10 rounded-[50%] border border-black/10" />
                      <Image
                        src={imageSrc}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 220px, 60vw"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="min-w-0">
                    <div className="mb-5 flex items-end justify-between gap-4">
                      <h2 className="font-serif text-2xl font-light uppercase leading-tight text-[#111315] sm:text-3xl">
                        {section.category}
                      </h2>
                      <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111315]/40">
                        {section.items.length} items
                      </span>
                    </div>

                    <div className="space-y-3">
                      {section.items.map((item) => (
                        <div
                          key={`${section.category}-${item.name}`}
                          className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b border-black/8 pb-3 transition duration-300 hover:border-black/20"
                        >
                          <div className="min-w-0">
                            <h3 className="text-sm font-medium leading-6 text-[#111315] transition group-hover:text-[#111315]/70">
                              {item.name}
                            </h3>
                          </div>
                          <p className="max-w-[5.75rem] text-right text-xs font-semibold leading-5 text-[#111315] [overflow-wrap:anywhere] sm:max-w-[8.5rem] sm:text-sm sm:leading-6">
                            Rs {item.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </section>

          {visibleSections.length === 0 && (
            <div className="my-16 border border-black/10 bg-white px-6 py-12 text-center">
              <p className="font-serif text-2xl text-[#111315]">No menu items found</p>
              <p className="mt-2 text-sm text-[#111315]/50">Try a different dish, drink, category, or price.</p>
            </div>
          )}

          <section id="payment" className="mt-16 grid gap-8 border-t border-black/10 pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="flex items-start gap-5">
              <Image
                src="/images/logo.jpeg"
                alt="Khukuri Restaurant & Bar"
                width={48}
                height={48}
                className="hidden h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-black/10 sm:block"
              />
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#111315]/60">QR Payment</p>
                <h2 className="font-serif text-3xl font-light uppercase text-[#111315]">Scan & Pay</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#111315]/60">
                  Use either QR option for table payment. The full-size payment panel includes downloadable QR codes.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowPaymentModal(true)}
              className="inline-flex h-11 items-center justify-center gap-2 border border-[#111315] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#111315] transition hover:bg-[#111315] hover:text-white focus:outline-none"
            >
              <Smartphone className="h-4 w-4" />
              Open QR Codes
            </button>
          </section>
        </main>

        <footer id="footer" className="grid gap-8 bg-[#111315] px-5 py-10 text-white sm:px-10 lg:grid-cols-[1fr_1fr_1.2fr] lg:px-16">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="Khukuri Restaurant & Bar"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover ring-1 ring-white/20"
              />
              <p className="font-serif text-lg">Khukuri</p>
            </div>
            <p className="mt-5 text-xs text-white/50">Khukuri Restaurant & Bar</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs text-white/70 transition hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              +977 9855073719
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs leading-7 text-white/50">
            <div>
              <a className="block transition hover:text-white" href="#menu">Menu</a>
              <a className="block transition hover:text-white" href="#special">Specials</a>
              <a className="block transition hover:text-white" href="#payment">Payment</a>
            </div>
            <div>
              <a className="block transition hover:text-white" href="#tea-coffee">Tea & Coffee</a>
              <a className="block transition hover:text-white" href="#momos">Momos</a>
              <a className="block transition hover:text-white" href="#nepali-thakali-khana">Thakali Khana</a>
            </div>
          </div>
          <div className="text-xs leading-7 text-white/50">
            <p>Open daily for dine-in menu service.</p>
            <p>{currentDate} · {currentTime}</p>
            <p>{greeting}</p>
          </div>
        </footer>
      </div>

      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#111315]/70 p-4 backdrop-blur-sm animate-fade-in sm:items-center">
          <div className="my-4 w-full max-w-3xl bg-[#f0f6fa] shadow-2xl animate-scale-up">
            <div className="flex items-start justify-between gap-6 border-b border-black/10 px-5 py-5 sm:px-8">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#111315]/60">Khukuri Payment</p>
                <h2 className="font-serif text-3xl font-light uppercase text-[#111315]">QR Payment</h2>
                <p className="mt-2 text-sm text-[#111315]/60">Scan or download a QR code to complete payment.</p>
              </div>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 text-xl leading-none text-[#111315] transition hover:bg-[#111315] hover:text-white hover:border-[#111315]"
                aria-label="Close payment panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-8">
              {paymentQrs.map((qr) => (
                <div key={qr.src} className="border border-black/10 bg-white p-4">
                  <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111315]">{qr.name}</p>
                  <div className="relative mx-auto aspect-square w-full max-w-64 overflow-hidden border border-black/10 bg-[#f0f6fa]">
                    <Image
                      src={qr.src}
                      alt={qr.name}
                      fill
                      sizes="256px"
                      className="object-contain p-2"
                    />
                  </div>
                  <a
                    href={qr.src}
                    download
                    className="mt-4 flex h-11 items-center justify-center gap-2 border border-[#111315] bg-[#111315] text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:opacity-80"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#111315] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-110 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.22s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.22s ease-out;
        }
      `}</style>
    </div>
  )
}
