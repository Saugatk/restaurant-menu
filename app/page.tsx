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
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedAlcohol, setSelectedAlcohol] = useState<null | { name: string; sizes: string[]; image: string }>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [menuPeriod, setMenuPeriod] = useState('Menu')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' }))
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}`)

      const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' }
      const dateStr = now.toLocaleDateString('en-US', options)
      setCurrentDate(dateStr)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Always start with Breakfast section for now
    const orderedCategories = [
      'Tea & Coffee',
      'Omelette / Egg',
      'Sandwich',
      'Lassi',
      'Juice',
      'Milk Shake',
      'Starter',
      'Momo',
      'Chowmein',
      'Burger',
      'Pizza',
      'Thukpa',
      'Fried Rice',
      'Nepali Thakali Khana',
      'Khaja Set',
      'Biryani',
      'Veg Items',
      'Non Veg Items (Chicken)',
      'Mutton',
      'Pork',
      'Buff',
      'Soup',
      'Taas',
      'Sekuwa',
      'Sadeko',
      'Salad',
      'Soft Drinks',
      'Beer',
      'Wine',
      'Whiskey / Vodka',
      'Hookah',
    ]
    setMenuPeriod('Breakfast Menu')
    setCategories(orderedCategories)

    return () => clearInterval(interval)
  }, [])


  const menuData = {
    'Special': [
      { name: 'Tawa Pork', price: '400', image: '/images/tawapork.jpeg', popular: true },
      { name: 'Chicken Biryani', price: '500', image: '/images/mutton biryani.jpg', popular: true },
      { name: 'Mutton Khaja Set', price: '600', image: '/images/mutton khaja set.jpg', popular: true },
      { name: 'Potato Spiral with Seasoning', price: '100', image: '/images/potatospiral.jpeg' },
    ],
    'Tea & Coffee': [
      { name: 'Milk Tea', price: '40', image: '/images/milk tea.jpg' },
      { name: 'Masala Milk Tea', price: '50', image: '/images/masala milk tea.jpg' },
      { name: 'Black Tea', price: '30', image: '/images/black tea.jpg' },
      { name: 'Ginger Black Tea', price: '50', image: '/images/ginger black tea.jpg' },
      { name: 'Lemon Tea', price: '50', image: '/images/lemon tea.jpg' },
      { name: 'Hot Lemon', price: '50', image: '/images/hot lemon.jpg' },
      { name: 'Hot Lemon with Honey', price: '120', image: '/images/hot lemon with honey.jpg' },
      { name: 'Milk Coffee', price: '100', image: '/images/milkcoffee.jpeg' },
      { name: 'Black Coffee', price: '60', image: '/images/black coffee.jpg' },
      { name: 'Cold Coffee', price: '100', image: '/images/cold coffee.jpg' },
      { name: 'Hot Chocolate', price: '160', image: '/images/hot chocolate.jpg' },
    ],
    'Soft Drinks': [
      { name: 'Lemon Soda', price: '60', image: '/images/lemon soda.jpg' },
      { name: 'Soda Water', price: '110', image: '/images/soda water.jpg' },
      { name: 'Mineral Water', price: '25', image: '/images/min.water.jpg' },
    ],
    'Starter': [
      { name: 'French Fry', price: '150', image: '/images/french fry.jpg' },
      { name: 'Papad Dry / Masala / Fry', price: '50 / 100 / 60', image: '/images/papad(fry,dry,masala).jpg' },
      { name: 'Peanut Plain / Sadeko', price: '100 / 180', image: '/images/peanut sadeko.jpg' },
      { name: 'Kaju Plain / Fry', price: '250 / 300', image: '/images/kaju fry.jpg' },
      { name: 'Potato Spiral with Seasoning', price: '100', image: '/images/potatospiral.jpeg' },
    ],
    'Veg Items': [
      { name: 'Aalu Jeera', price: '150', image: '/images/aalu jeera.jpg' },
      { name: 'Veg Pakoda', price: '200', image: '/images/veg pakauda.jpg' },
      { name: 'Potato Chilly', price: '220', image: '/images/potato chilly.jpg' },
      { name: 'Mushroom Pakoda', price: '280', image: '/images/mushroom pakoda.jpg' },
      { name: 'Paneer Pakoda', price: '300', image: '/images/paneer pakauda.jpg' },
      { name: 'Mushroom Chilly', price: '300', image: '/images/ mushroom chilly.jpg' },
    ],
    'Non Veg Items (Chicken)': [
      { name: 'Chicken Roast', price: '350', image: '/images/chickenroast.jpeg' },
      { name: 'Chicken Boil', price: '300', image: '/images/chicken boil.jpg' },
      { name: 'Chicken Chilli', price: '380', image: '/images/Chicken Chilly.jpg' },
      { name: 'Chicken Choila', price: '300', image: '/images/chicken choila.jpg' },
      { name: 'Chicken Leg Piece Fry, 2 pcs', price: '400', image: '/images/chicken leg piece fry(2 pcs).jpg' },
      { name: 'Chicken Sausage Fry / Chilli / Sadeko', price: '70 / 100 / 100', image: '/images/chicken sausage .jpg' },
      { name: 'Chicken 65', price: '450', image: '/images/chicken 65.jpg' },
      { name: 'Chicken Lollipop, 4 pcs', price: '320', image: '/images/chicken lollipop.jpg' },
      { name: 'Tawa Chicken', price: '350', image: '/images/chickentawa.webp' },
      { name: 'Buffalo Wings', price: '380', image: '/images/buffalo wings.jpeg' },
      { name: 'Chicken Hot Wings 4 Pieces', price: '600', image: '/images/chicken hot wings.jpg' },
      { name: 'Chicken Wings Per Piece', price: '150', image: '/images/chicken wing.jpg' },
    ],
    'Momo': [
      { name: 'Chicken Momo Steam', price: '140', image: '/images/chickenmomosteam.jpg' },
      { name: 'Chicken Momo Fried', price: '150', image: '/images/chicken-fry-momo.jpg' },
      { name: 'Chicken Momo Kothey', price: '180', image: '/images/chickenmomokothey.jpeg' },
      { name: 'Chicken Momo Jhol', price: '160', image: '/images/buff jhol momo.jpg' },
      { name: 'Chicken Momo C', price: '180', image: '/images/buffmomoc.jpeg' },
      { name: 'Buff Momo Steam', price: '140', image: '/images/buff steam momo.jpg' },
      { name: 'Buff Momo Fried', price: '150', image: '/images/buff momo fired.jpg' },
      { name: 'Buff Momo Kothey', price: '180', image: '/images/buff khote momo.jpg' },
      { name: 'Buff Momo Jhol', price: '160', image: '/images/chicken jhol momo.jpg' },
      { name: 'Buff Momo C', price: '180', image: '/images/chickenmomoc.jpeg' },
      { name: 'Veg Momo Steam', price: '120', image: '/images/vegmomosteam.jpeg' },
      { name: 'Veg Momo Fried', price: '130', image: '/images/fry veg momo.jpg' },
      { name: 'Veg Momo Kothey', price: '140', image: '/images/veg momo kothey.jpg' },
      { name: 'Veg Momo Jhol', price: '150', image: '/images/vegmomojhol.jpeg' },
      { name: 'Veg Momo C', price: '150', image: '/images/vegchilli.jpeg' },
    ],
    'Chowmein': [
      { name: 'Veg Chowmein', price: '120', image: '/images/veg chowmein.jpeg' },
      { name: 'Buff Chowmein', price: '150', image: '/images/buff-chowmein.jpg' },
      { name: 'Chicken Chowmein', price: '150', image: '/images/chickenchowmein.jpg' },
      { name: 'Egg Chowmein', price: '140', image: '/images/egg chowmin.jpg' },
      { name: 'Mixed Chowmein', price: '200', image: '/images/mix chowmin.jpg' },
    ],
    'Kati Roll': [
      { name: 'Veg', price: '180', image: '/images/veg kathi roll.jpg' },
      { name: 'Chicken', price: '250', image: '/images/chicken kathi roll.jpg' },
      { name: 'Egg', price: '200', image: '/images/egg kathi roll.jpg' },
      { name: 'Paneer', price: '230', image: '/images/paneer kathi roll.jpg' },
    ],
    'Thukpa': [
      { name: 'Veg Thukpa', price: '140', image: '/images/veg thukpa.jpg' },
      { name: 'Buff Thukpa', price: '180', image: '/images/mixed thukpa.jpg' },
      { name: 'Chicken Thukpa', price: '200', image: '/images/chichken thukpa.jpg' },
      { name: 'Mutton Thukpa', price: '250', image: '/images/mutton thukpa.jpg' },
      { name: 'Mixed Thukpa', price: '300', image: '/images/mixed thukpa.jpg' },
    ],
    'Pizza': [
      { name: 'Veg Pizza', price: '400', image: '/images/veg pizza.jpg' },
      { name: 'Chicken Pizza', price: '500', image: '/images/chicken pizza.jpeg' },
      { name: 'Cheese Pizza', price: '450', image: '/images/cheese pizza.jpg' },
      { name: 'Buff Pizza', price: '500', image: '/images/buff pizza.jpg' },
      { name: 'Mixed Pizza', price: '550', image: '/images/mixed pizza.jpg' },
      { name: 'Mushroom Pizza', price: '450', image: '/images/mushroom pizza.jpg' },
    ],
    'Burger': [
      { name: 'Chicken Burger', price: '300', image: '/images/chicken burger.jpg' },
      { name: 'Veg Burger', price: '200', image: '/images/veg burger.jpg' },
    ],
    'Sandwich': [
      { name: 'Veg Sandwich', price: '80', image: '/images/veg sandwich.jpeg' },
      { name: 'Egg Sandwich', price: '100', image: '/images/egg sandwich.jpeg' },
      { name: 'Chicken Sandwich', price: '150', image: '/images/chicken sandwich.jpeg' },
      { name: 'Cheese Sandwich', price: '120', image: '/images/cheese sandwich.jpeg' },
    ],
    'Biryani': [
      { name: 'Veg Biryani', price: '400', image: '/images/veg biryani.jpg' },
      { name: 'Chicken Biryani', price: '500', image: '/images/mutton biryani.jpg' },
      { name: 'Mutton Biryani', price: '600', image: '/images/muttonbiryani.jpeg' },
      { name: 'Egg Biryani', price: '400', image: '/images/egg biryani.jpg' },
    ],
    'Nepali Thakali Khana': [
      { name: 'Veg', price: '250', image: '/images/nepali veg thakali khana.jpg' },
      { name: 'Chicken', price: '400', image: '/images/chicken thakali khana.jpg' },
      { name: 'Mutton', price: '500', image: '/images/mutton khana thali set.jpg' },
      { name: 'Egg', price: '300', image: '/images/eggnepalithakalikhana.jpg' },
      { name: 'Fish', price: '475', image: '/images/fish nepali thali khana.jpg' },
    ],
    'Soup': [
      { name: 'Veg Soup', price: '120', image: '/images/veg soup.jpg' },
      { name: 'Mushroom Soup', price: '150', image: '/images/mushroomsoup.webp' },
      { name: 'Chicken Soup', price: '180', image: '/images/chickensoup.jpg' },
      { name: 'Mutton Soup', price: '200', image: '/images/mutton soup.jpg' },
      { name: 'Mixed Soup', price: '250', image: '/images/mushroom soup.jpg' },
    ],
    'Salad': [
      { name: 'Green Salad, Small Plate', price: '70', image: '/images/saladgreen.jpeg' },
      { name: 'Green Salad, Large Plate', price: '120', image: '/images/green salad large plate.jpeg' },
      { name: 'Fruit Salad, Small Plate', price: '250', image: '/images/fruitsalad.jpg' },
      { name: 'Fruit Salad, Large Plate', price: '350', image: '/images/fruit salad large plate.jpeg' },
      { name: 'Russian Salad, Small Plate', price: '200', image: '/images/russian salad small plate.jpg' },
      { name: 'Russian Salad, Large Plate', price: '450', image: '/images/russian salad large plate.jpg' },
    ],
    'Lassi': [
      { name: 'Plain Lassi', price: '120', image: '/images/plain lassi.jpg' },
      { name: 'Sweet Lassi', price: '130', image: '/images/sweet lassi.jpg' },
      { name: 'Banana Lassi', price: '160', image: '/images/banana lassi.jpg' },
      { name: 'Mango Lassi', price: '200', image: '/images/mango lassi.jpg' },
      { name: 'Vanilla Lassi', price: '200', image: '/images/vanilla lassi.jpeg' },
      { name: 'Dry Fruit Lassi', price: '230', image: '/images/dry fruit lassi.jpg' },
    ],
    'Milk Shake': [
      { name: 'Vanilla Milk Shake', price: '200', image: '/images/vanilla milkshake.jpeg' },
      { name: 'Chocolate Milk Shake', price: '200', image: '/images/chocolate milk shake.jpeg' },
      { name: 'Strawberry Milk Shake', price: '200', image: '/images/strawberry milkshake.jpeg' },
      { name: 'Oreo Milkshake', price: '250', image: '/images/oreo milkshake.jpeg' },
    ],
    'Juice': [
      { name: 'Mango Juice', price: '250', image: '/images/mango juice.jpg' },
      { name: 'Orange Juice', price: '250', image: '/images/orange juice.jpg' },
    ],
    'Beer': [
      { name: 'Gorkha Strong 300ml / 650ml', price: '250 / 500', image: '/images/gorkha storng.jpg' },
      { name: 'Tuborg 300ml / 650ml', price: '300 / 600', image: '/images/tuborg.jpeg' },
      { name: 'Arna 300ml', price: '250', image: '/images/arna.jpeg' },
      { name: 'Barahsinghe 300ml / 650ml', price: '300 / 550', image: '/images/barahsinghe.jpeg' },
      { name: 'Carlsberg 300ml / 650ml', price: '350 / 650', image: '/images/carlsberg.jpeg' },
      { name: '5000 Beer 650ml', price: '380', image: '/images/5000beer.jpg' },
      { name: 'Tuborg Can Beer', price: '450', image: '/images/tuborg can.jpeg' },
      { name: 'Gorkha Can Beer', price: '400', image: '/images/gorkhacan.jpeg' },
    ],
    'Wine': [
      { name: 'Big Master 750ml', price: '1100', image: '/images/big master 750ml.jpg' },
      { name: 'Canvas 750ml', price: '1100', image: '/images/canvas 750ml.jpeg' },
    ],
    'Whiskey / Vodka': [
      {
        name: 'Golden Oak',
        price: 'Starting Rs 150',
        sizes: [
          '60ml - Rs 150',
          '90ml - Rs 250',
          '180ml - Rs 400',
          '375ml - Rs 800',
          '750ml - Rs 1600',
        ],
        image: '/images/golden oak.jpeg'
      },
      {
        name: 'Old Durbar Red',
        price: 'Starting Rs 280',
        sizes: [
          '60ml - Rs 280',
          '90ml - Rs 420',
          '180ml - Rs 800',
          '375ml - Rs 1600',
          '750ml - Rs 3200',
        ],
        image: '/images/old durbar red.jpeg'
      },
      {
        name: 'Old Durbar Black',
        price: 'Starting Rs 370',
        sizes: [
          '60ml - Rs 370',
          '90ml - Rs 550',
          '180ml - Rs 1050',
          '375ml - Rs 2100',
          '750ml - Rs 4200',
        ],
        image: '/images/old durbar black.jpeg'
      },
      {
        name: '8848 Vodka',
        price: 'Starting Rs 270',
        sizes: [
          '60ml - Rs 270',
          '90ml - Rs 390',
          '180ml - Rs 750',
          '375ml - Rs 1500',
          '750ml - Rs 3000',
        ],
        image: '/images/8848 vodka.jpg'
      },
      {
        name: 'Khukri Rum',
        price: 'Starting Rs 230',
        sizes: [
          '60ml - Rs 230',
          '90ml - Rs 350',
          '180ml - Rs 650',
          '375ml - Rs 1300',
          '750ml - Rs 2600',
        ],
        image: '/images/khukuri rum.jpeg'
      },
      {
        name: 'Signature Red',
        price: 'Starting Rs 280',
        sizes: [
          '60ml - Rs 280',
          '90ml - Rs 420',
          '180ml - Rs 800',
          '375ml - Rs 1600',
          '750ml - Rs 3200',
        ],
        image: '/images/signature red.jpeg'
      },
      {
        name: 'Mustang',
        price: 'Starting Rs 150',
        sizes: [
          '60ml - Rs 150',
          '90ml - Rs 250',
          '180ml - Rs 400',
          '375ml - Rs 800',
          '750ml - Rs 1600',
        ],
        image: '/images/mustang.jpeg'
      },
      {
        name: 'Highlander',
        price: 'Starting Rs 150',
        sizes: [
          '60ml - Rs 150',
          '90ml - Rs 250',
          '180ml - Rs 400',
          '375ml - Rs 800',
          '750ml - Rs 1600',
        ],
        image: '/images/highlander.jpeg'
      },
    ],
    'Fried Rice': [
      { name: 'Veg Fried Rice', price: '200', image: '/images/veg fried rice.jpg' },
      { name: 'Egg Fried Rice', price: '250', image: '/images/egg fried rice.jpg' },
      { name: 'Buff Fried Rice', price: '300', image: '/images/bufffryrice.jpg' },
      { name: 'Chicken Fried Rice', price: '300', image: '/images/chicken fried rice.jpg' },
      { name: 'Mixed Fried Rice', price: '350', image: '/images/chinese fried rice.jpg' },
    ],
    'Omelette / Egg': [
      { name: 'Plain Omelette', price: '50', image: '/images/plain omlet.webp' },
      { name: 'Masala Omelette', price: '80', image: '/images/masala omlet.jpg' },
      { name: 'Sunset Egg', price: '60', image: '/images/sunsetegg.jpeg' },
      { name: 'Poach Egg', price: '70', image: '/images/pouch egg.jpg' },
      { name: 'Boiled Egg', price: '50', image: '/images/boiled egg.jpg' },
    ],
    'Mutton': [
      { name: 'Mutton Gravy, Small / Large', price: '300 / 450', image: '/images/mutton grevy.jpg' },
      { name: 'Mutton Taas, Small / Large', price: '350 / 450', image: '/images/mutton taas.jpg' },
      { name: 'Mutton Boil, Small / Large', price: '300 / 400', image: '/images/mutton soup.jpg' },
    ],
    'Pork': [
      { name: 'Tawa Pork', price: '400', image: '/images/pork tawa.jpg' },
      { name: 'Pork Chilli', price: '400', image: '/images/pork chilly.jpg' },
      { name: 'Pork Boil, Small / Large', price: '300 / 400', image: '/images/pork boil.jpg' },
    ],
    'Buff': [
      { name: 'Sukuti', price: '300', image: '/images/buffsukuti.jpg' },
      { name: 'Buff Choila', price: '350', image: '/images/buffchoila.jpg' },
      { name: 'Buff Chilli', price: '380', image: '/images/buff chilli.jpg' },
      { name: 'Buff Gravy, Small / Large', price: '250 / 350', image: '/images/buff gravy.webp' },
    ],
    'Sekuwa': [
      { name: 'Buff Sekuwa', price: '350', image: '/images/buffsekuwa.jpeg' },
      { name: 'Chicken Sekuwa', price: '350', image: '/images/chicken sekuwa.jpeg' },
      { name: 'Mutton Sekuwa', price: '500', image: '/images/muttonsekuwa.jpeg' },
      { name: 'Pork Sekuwa', price: '450', image: '/images/porksekuwa.jpeg' },
    ],
    'Khaja Set': [
      { name: 'Chicken Khaja Set', price: '450', image: '/images/chicken khaja set.jpg' },
      { name: 'Mutton Khaja Set', price: '600', image: '/images/muttonkhajaset.jpg' },
      { name: 'Veg Khaja Set', price: '300', image: '/images/veg khaja set.jpg' },
      { name: 'Buff Khaja Set', price: '500', image: '/images/Buff Khaja Set.jpg' },
      { name: 'Pork Khaja Set', price: '500', image: '/images/pork khaja set.jpg' },
    ],
    'Taas': [
      { name: 'Chicken Taas', price: '300', image: '/images/chicken taas.jpg' },
      { name: 'Mutton Taas', price: '450', image: '/images/muttontaass.jpg' },
      { name: 'Pork Taas', price: '400', image: '/images/porktaas.jpg' },
    ],
    'Sadeko': [
      { name: 'Peanuts Sadeko', price: '150', image: '/images/peanuts sadeko.jpg' },
      { name: 'Chicken Boil Sadeko', price: '300', image: '/images/chickenboilsadeko.jpeg' },
      { name: 'Chicken Fry Sadeko', price: '320', image: '/images/chickenfry.webp' },
      { name: 'Mutton Boil Sadeko', price: '400', image: '/images/mutton soup.jpg' },
      { name: 'Mutton Fry Sadeko', price: '450', image: '/images/muttonfry.jpeg' },
      { name: 'Buff Sadeko', price: '350', image: '/images/buff sadeko.jpg' },
      { name: 'Bhatmas Sadeko', price: '120', image: '/images/bhatmas sadeko.jpg' },
      { name: 'Mushroom Sadeko', price: '250', image: '/images/mushroom sadeko.jpg' },
      { name: 'Aalu Sadeko', price: '120', image: '/images/aalu sadeko.jpg' },
      { name: 'Wai Wai Sadeko', price: '100', image: '/images/wai wai sadeko.png' },
    ],
    'Hookah': [
      { name: 'Normal Hookah', price: '400', image: '/images/normal hookah.jpg' },
      { name: 'Coconut Hookah', price: '500', image: '/images/normal hookah.jpg' },
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
              <button
                onClick={() => window.print()}
                className="inline-flex h-9 items-center gap-2 border border-[#111315] bg-[#111315] px-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:opacity-80 focus:outline-none"
              >
                <Download className="h-3.5 w-3.5" />
                Download PDF
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
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#111315]/60">
              {menuPeriod}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#111315]/60">
              Complete single-page menu with live search, clear pricing, and QR payment options.
            </p>
          </section>
        </header>

        <main id="menu" className="px-5 pb-12 sm:px-10 lg:px-16">
          <section id="special">
            <div className="mb-8 text-center">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#111315]/60">
                Featured
              </p>
              <h2 className="font-serif text-3xl font-light uppercase leading-tight text-[#111315] sm:text-4xl">
                House Specials
              </h2>
              <div className="mx-auto mt-3 h-px w-16 bg-[#111315]/20" />
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-3">
              {menuData.Special.map((item) => (
                <div
                  key={item.name}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative mb-3 aspect-square w-32 sm:w-40 mx-auto overflow-hidden bg-[#e4eff6]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      priority
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 200px, 45vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-1 text-xs font-semibold leading-5 text-[#111315] sm:text-sm">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-[#111315] sm:text-sm">
                    Rs {item.price}
                  </p>
                </div>
              ))}
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

          <section className="mt-10 space-y-16">
            {visibleSections.map((section) => (
              <article
                id={section.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                key={section.category}
                className="scroll-mt-40"
              >
                {/* Category Header — centered with decorative line */}
                <div className="mb-8 text-center">
                  <h2 className="font-serif text-2xl font-light uppercase leading-tight text-[#111315] sm:text-3xl">
                    {section.category}
                  </h2>
                  <div className="mx-auto mt-3 h-px w-16 bg-[#111315]/20" />
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
                  {section.items.map((item) => (
                    <div
                      key={`${section.category}-${item.name}`}
                      className="group flex flex-col items-center text-center"
                    >
                      {/* Image */}
                      <div className="relative mb-3 aspect-square w-24 sm:w-28 lg:w-32 mx-auto overflow-hidden bg-[#e4eff6]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(min-width: 1024px) 220px, (min-width: 640px) 180px, 45vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Name */}
                      <h3 className="mt-1 text-xs font-semibold leading-5 text-[#111315] sm:text-sm">
                        {item.name}
                      </h3>

                      {/* Price */}
                      <p className="mt-1 text-xs font-bold text-[#111315] sm:text-sm print:hidden">
                        {section.category === 'Whiskey / Vodka' ? item.price : `Rs ${item.price}`}
                      </p>
                      
                      {/* Only for non-alcohol items, show price in print (alcohol will show full sizes list) */}
                      {section.category !== 'Whiskey / Vodka' && (
                        <p className="mt-1 hidden text-xs font-bold text-[#111315] sm:text-sm print:block">
                          Rs {item.price}
                        </p>
                      )}

                      {/* For Whiskey / Vodka, show View Sizes button and Print-only sizes list */}
                      {section.category === 'Whiskey / Vodka' && (
                        <>
                          <button
                            onClick={() => setSelectedAlcohol(item as { name: string; sizes: string[]; image: string })}
                            className="mt-2 inline-block border border-[#111315] rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.10em] text-[#111315] hover:bg-[#111315] hover:text-white transition focus:outline-none print:hidden"
                            style={{ fontSize: '11px' }}
                          >
                            View Sizes
                          </button>
                          
                          {/* Print-only size list for Whiskey / Vodka */}
                          {(item as any).sizes && (
                            <div className="mt-2 hidden w-full px-1 text-left text-[9px] leading-tight text-[#111315] print:block">
                              {(item as any).sizes.map((sz: string) => {
                                const [size, price] = sz.split(' - ')
                                return (
                                  <div key={sz} className="flex justify-between border-b border-black/10 py-1">
                                    <span>{size}</span>
                                    <span className="font-semibold">{price}</span>
                                  </div>
                                )
                              })}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
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
              <a className="block transition hover:text-white" href="#momo">Momo</a>
              <a className="block transition hover:text-white" href="#nepali-thakali-khana">Thakali Khana</a>
            </div>
          </div>
          <div className="text-xs leading-7 text-white/50">
            <p>Open daily for dine-in menu service.</p>
            <p>{currentDate} · {currentTime}</p>
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

      {/* Alcohol Sizes Modal */}
      {selectedAlcohol && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111315]/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-[#f0f6fa] rounded-lg shadow-2xl animate-scale-up p-6">
            <button
              className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center border border-black/10 rounded-full text-[#111315] hover:bg-[#111315] hover:text-white hover:border-[#111315] transition"
              onClick={() => setSelectedAlcohol(null)}
              aria-label="Close alcohol sizes modal"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex flex-col items-center">
              <Image
                src={selectedAlcohol.image}
                alt={selectedAlcohol.name}
                width={80}
                height={80}
                className="mb-2 h-20 w-20 rounded-full object-cover ring-1 ring-black/10"
              />
              <h2 className="mb-2 mt-1 font-serif text-xl font-light uppercase text-[#111315] text-center">{selectedAlcohol.name}</h2>
              <table className="w-full mt-3 border border-black/10 bg-white rounded text-xs">
                <thead>
                  <tr>
                    <th className="px-3 py-2 border-b border-black/10 text-left font-semibold">Size</th>
                    <th className="px-3 py-2 border-b border-black/10 text-left font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedAlcohol.sizes.map((sz) => {
                    const [size, price] = sz.split(' - ');
                    return (
                      <tr key={sz}>
                        <td className="px-3 py-2 border-b border-black/10">{size}</td>
                        <td className="px-3 py-2 border-b border-black/10">{price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
        @media print {
          @page { margin: 10mm; }
          body { 
            background: white !important; 
            color: black !important;
            font-size: 10pt;
          }
          /* Hide non-printable elements */
          nav, header > p:last-child, #payment, footer, .sticky, button, input { 
            display: none !important; 
          }
          a[href^="https://wa.me"] {
            display: none !important;
          }

          /* Force left alignment and full width */
          .max-w-6xl { max-width: none !important; }
          .mx-auto { margin-left: 0 !important; margin-right: 0 !important; }
          .text-center { text-align: left !important; }
          .items-center { align-items: flex-start !important; }
          
          /* Make images smaller and add breathing space */
          .aspect-square { 
            width: 85% !important; 
            max-width: 140px !important; 
            margin-bottom: 12px !important; 
          }

          /* Adjust grid for printing to fit perfectly across 8 pages at 50% scale */
          .grid {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 25px 15px !important;
            justify-content: flex-start !important;
          }
          .grid > div {
            width: calc(16.666% - 15px) !important; /* 6 columns */
            page-break-inside: avoid;
            break-inside: avoid;
            margin-bottom: 15px !important;
          }
          article {
            page-break-inside: auto;
            break-inside: auto;
            margin-bottom: 30px !important;
            padding-top: 15px !important;
          }
          /* Prevent category header from being orphaned from its items on page breaks */
          article > div.mb-8 { 
            margin-bottom: 15px !important; 
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          
          /* Ensure text and headings fit well */
          h1 { font-size: 24pt !important; margin-bottom: 10px !important; }
          h2 { font-size: 18pt !important; margin-bottom: 2px !important; text-align: left !important; }
          h3 { font-size: 12pt !important; margin-top: 5px !important; margin-bottom: 0 !important; text-align: left !important; }
          p { font-size: 10pt !important; margin: 0 !important; text-align: left !important; }
          
          /* Show borders and backgrounds */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
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
