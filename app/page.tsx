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
    'Momo',
    'Chowmein',
    'Kati Roll',
    'Thukpa',
    'Pizza',
    'Burger',
    'Sandwich',
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
    'Omelette / Egg',
    'Mutton',
    'Pork',
    'Buff',
    'Sekuwa',
    'Khaja Set',
    'Taas',
    'Sadeko',
    'Hookah',
  ]

  const menuData = {
    'Special': [
      { name: 'Tawa Pork', price: '400', image: '/images/pork tawa.jpg', popular: true },
      { name: 'Chicken Biryani', price: '500', image: '/images/chicken fried rice.jpg', popular: true },
      { name: 'Mutton Khaja Set', price: '600', image: '/images/mutton khaja set.jpg', popular: true },
    ],
    'Tea & Coffee': [
      { name: 'Milk Tea', price: '30', image: '/images/milk tea.jpg' },
      { name: 'Masala Milk Tea', price: '50', image: '/images/milk tea.jpg' },
      { name: 'Black Tea', price: '40', image: '/images/black tea.jpg' },
      { name: 'Ginger Black Tea', price: '50', image: '/images/black tea.jpg' },
      { name: 'Lemon Tea', price: '50', image: '/images/lemon tea.jpg' },
      { name: 'Hot Lemon', price: '80', image: '/images/lemon tea.jpg' },
      { name: 'Hot Lemon with Honey', price: '120', image: '/images/lemon tea.jpg' },
      { name: 'Milk Coffee', price: '120', image: '/images/black coffee.jpg' },
      { name: 'Black Coffee', price: '80', image: '/images/black coffee.jpg' },
      { name: 'Cold Coffee', price: '160', image: '/images/cold coffee.jpg' },
      { name: 'Hot Chocolate', price: '200', image: '/images/black coffee.jpg' },
      { name: 'Steamed Milk', price: '80', image: '/images/milk tea.jpg' },
      { name: 'Flavored Steamed Milk', price: '120', image: '/images/milk tea.jpg' },
    ],
    'Soft Drinks': [
      { name: 'Lemon Soda', price: '60', image: '/images/lemon soda.jpg' },
      { name: 'Soda Water', price: '110', image: '/images/soda water.jpg' },
      { name: 'Mineral Water', price: '25', image: '/images/min.water.jpg' },
    ],
    'Starter': [
      { name: 'French Fry', price: '180', image: '/images/french fry.jpg' },
      { name: 'Papad Dry / Masala / Fry', price: '50 / 100 / 60', image: '/images/papad(fry,dry,masala).jpg' },
      { name: 'Peanut Plain / Sadeko', price: '100 / 180', image: '/images/peanut sadeko.jpg' },
      { name: 'Kaju Plain / Fry', price: '250 / 300', image: '/images/kaju fry.jpg' },
      { name: 'Potato Spiral with Seasoning', price: '80', image: '/images/aalu fry.jpg' },
    ],
    'Veg Items': [
      { name: 'Aalu Fry', price: '90', image: '/images/aalu fry.jpg' },
      { name: 'Aalu Jeera', price: '150', image: '/images/aalu fry.jpg' },
      { name: 'Veg Pakoda', price: '200', image: '/images/veg pakauda.jpg' },
      { name: 'Potato Chilly', price: '220', image: '/images/potato chilly.jpg' },
      { name: 'Mushroom Pakoda', price: '280', image: '/images/mushroom pakoda.jpg' },
      { name: 'Paneer Pakoda', price: '300', image: '/images/paneer pakauda.jpg' },
      { name: 'Mushroom Chilly', price: '300', image: '/images/ mushroom chilly.jpg' },
    ],
    'Non Veg Items (Chicken)': [
      { name: 'Chicken Roast', price: '350', image: '/images/chicken roast.jpg' },
      { name: 'Chicken Boil', price: '300', image: '/images/chicken boil.jpg' },
      { name: 'Chicken Chilli', price: '380', image: '/images/Chicken Chilly.jpg' },
      { name: 'Chicken Choila', price: '300', image: '/images/chicken choila.jpg' },
      { name: 'Chicken Meat Ball', price: '300', image: '/images/buff meatballs.jpg' },
      { name: 'Chicken Leg Piece Fry, 2 pcs', price: '400', image: '/images/chicken leg piece fry(2 pcs).jpg' },
      { name: 'Chicken Drumstick, per piece', price: '180', image: '/images/chicken drumstick(6 pcs).jpg' },
      { name: 'Chicken Drumstick, 6 pcs', price: '720', image: '/images/chicken drumstick(6 pcs).jpg' },
      { name: 'Chicken Sausage Fry / Chilli / Sadeko', price: '70 / 80 / 180', image: '/images/chicken sausage .jpg' },
      { name: 'Chicken 65', price: '450', image: '/images/chicken roast.jpg' },
      { name: 'Chicken Lollipop, 4 pcs', price: '320', image: '/images/chicken roast.jpg' },
      { name: 'Tawa Chicken', price: '350', image: '/images/chicken roast.jpg' },
      { name: 'Buffalo Wings', price: '380', image: '/images/chicken drumstick(6 pcs).jpg' },
      { name: 'Chicken Hot Wings', price: '380', image: '/images/chicken drumstick(6 pcs).jpg' },
      { name: 'Chicken Wings', price: '150', image: '/images/chicken drumstick(6 pcs).jpg' },
    ],
    'Momo': [
      { name: 'Chicken Momo Steam', price: '140', image: '/images/buff steam momo.jpg' },
      { name: 'Chicken Momo Fried', price: '150', image: '/images/Fried Buff Momo.jpg' },
      { name: 'Chicken Momo Kothey', price: '180', image: '/images/chicken khote momo.jpg' },
      { name: 'Chicken Momo Jhol', price: '160', image: '/images/chilly momo.jpg' },
      { name: 'Chicken Momo C', price: '150', image: '/images/chilly momo.jpg' },
      { name: 'Buff Momo Steam', price: '140', image: '/images/buff steam momo.jpg' },
      { name: 'Buff Momo Fried', price: '150', image: '/images/Fried Buff Momo.jpg' },
      { name: 'Buff Momo Kothey', price: '180', image: '/images/buff khote momo.jpg' },
      { name: 'Buff Momo Jhol', price: '160', image: '/images/chilly momo.jpg' },
      { name: 'Buff Momo C', price: '150', image: '/images/chilly momo.jpg' },
      { name: 'Veg Momo Steam', price: '120', image: '/images/veg momo.jpg' },
      { name: 'Veg Momo Fried', price: '130', image: '/images/fry veg momo.jpg' },
      { name: 'Veg Momo Kothey', price: '140', image: '/images/veg momo.jpg' },
      { name: 'Veg Momo Jhol', price: '150', image: '/images/veg-chilli-momo-.jpg' },
      { name: 'Veg Momo C', price: '140', image: '/images/veg-chilli-momo-.jpg' },
    ],
    'Chowmein': [
      { name: 'Veg Chowmein', price: '120', image: '/images/veg chowmin.jpg' },
      { name: 'Buff Chowmein', price: '150', image: '/images/chicken chowmin.jpg' },
      { name: 'Chicken Chowmein', price: '150', image: '/images/chicken chowmin.jpeg' },
      { name: 'Egg Chowmein', price: '140', image: '/images/chicken chowmin.jpg' },
      { name: 'Mixed Chowmein', price: '200', image: '/images/mix chowmin.jpg' },
    ],
    'Kati Roll': [
      { name: 'Veg', price: '180', image: '/images/veg kathi roll.jpg' },
      { name: 'Chicken', price: '250', image: '/images/chicken kathi roll.jpg' },
      { name: 'Egg', price: '200', image: '/images/egg kathi roll.jpg' },
      { name: 'Mushroom', price: '200', image: '/images/veg kathi roll.jpg' },
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
      { name: 'Chicken Pizza', price: '500', image: '/images/chicken pizza.jpg' },
      { name: 'Cheese Pizza', price: '450', image: '/images/cheese pizza.jpg' },
      { name: 'Buff Pizza', price: '500', image: '/images/buff pizza.jpg' },
      { name: 'Mixed Pizza', price: '550', image: '/images/mixed pizza.jpg' },
      { name: 'Mushroom Pizza', price: '450', image: '/images/mushroom pizza.jpg' },
    ],
    'Burger': [
      { name: 'Chicken Burger', price: '300', image: '/images/chicken burger.jpg' },
      { name: 'Buff Burger', price: '300', image: '/images/chicken burger.jpg' },
      { name: 'Veg Burger', price: '200', image: '/images/veg burger.jpg' },
    ],
    'Sandwich': [
      { name: 'Veg Sandwich', price: '80', image: '/images/veg burger.jpg' },
      { name: 'Egg Sandwich', price: '100', image: '/images/egg kathi roll.jpg' },
      { name: 'Chicken Sandwich', price: '150', image: '/images/chicken burger.jpg' },
      { name: 'Cheese Sandwich', price: '120', image: '/images/cheese pizza.jpg' },
    ],
    'Biryani': [
      { name: 'Veg Biryani', price: '380', image: '/images/veg biryani.jpg' },
      { name: 'Chicken Biryani', price: '500', image: '/images/chicken fried rice.jpg' },
      { name: 'Mutton Biryani', price: '550', image: '/images/mutton biryani.jpg' },
      { name: 'Egg Biryani', price: '400', image: '/images/egg biryani.jpg' },
    ],
    'Nepali Thakali Khana': [
      { name: 'Veg', price: '250', image: '/images/veg thakali khana set.jpg' },
      { name: 'Chicken', price: '400', image: '/images/chicken thakali khana.jpg' },
      { name: 'Mutton', price: '500', image: '/images/mutton khana thali set.jpg' },
      { name: 'Egg', price: '300', image: '/images/chicken thakali khana.jpg' },
      { name: 'Fish', price: '475', image: '/images/chicken thakali khana.jpg' },
    ],
    'Soup': [
      { name: 'Veg Soup', price: '90', image: '/images/veg soup.jpg' },
      { name: 'Mushroom Soup', price: '120', image: '/images/mushroom soup.jpg' },
      { name: 'Chicken Soup', price: '140', image: '/images/chicken soup.jpg' },
      { name: 'Mutton Soup', price: '160', image: '/images/mutton soup.jpg' },
      { name: 'Mixed Soup', price: '190', image: '/images/mushroom soup.jpg' },
    ],
    'Salad': [
      { name: 'Green Salad, Small Plate', price: '70', image: '/images/green salad.jpg' },
      { name: 'Green Salad, Large Plate', price: '120', image: '/images/green salad large plate.jpeg' },
      { name: 'Fruit Salad, Small Plate', price: '120', image: '/images/Fruit Salad small plate.jpg' },
      { name: 'Fruit Salad, Large Plate', price: '200', image: '/images/fruit salad large plate.jpeg' },
      { name: 'Russian Salad, Small Plate', price: '185', image: '/images/russian salad small plate.jpg' },
      { name: 'Russian Salad, Large Plate', price: '350', image: '/images/russian salad large plate.jpg' },
    ],
    'Lassi': [
      { name: 'Plain Lassi', price: '120', image: '/images/plain lassi.jpg' },
      { name: 'Sweet Lassi', price: '130', image: '/images/sweet lassi.jpg' },
      { name: 'Banana Lassi', price: '180', image: '/images/banana lassi.jpg' },
      { name: 'Mango Lassi', price: '200', image: '/images/mango lassi.jpg' },
      { name: 'Vanilla Lassi', price: '200', image: '/images/plain lassi.jpg' },
      { name: 'Dry Fruit Lassi', price: '230', image: '/images/dry fruit lassi.jpg' },
    ],
    'Milk Shake': [
      { name: 'Vanilla Milk Shake', price: '250', image: '/images/plain lassi.jpg' },
      { name: 'Chocolate Milk Shake', price: '275', image: '/images/cold coffee.jpg' },
      { name: 'Strawberry Milk Shake', price: '300', image: '/images/mango lassi.jpg' },
      { name: 'Oreo Milkshake', price: '300', image: '/images/cold coffee.jpg' },
    ],
    'Juice': [
      { name: 'Mango Juice', price: '250', image: '/images/mango juice.jpg' },
      { name: 'Orange Juice', price: '250', image: '/images/orange juice.jpg' },
    ],
    'Beer': [
      { name: 'Gorkha Strong 300ml / 650ml', price: '250 / 500', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Tuborg 300ml / 650ml', price: '300 / 600', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Arna 300ml', price: '250', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Barahsinghe 300ml / 650ml', price: '300 / 550', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Carlsberg 300ml / 650ml', price: '350 / 650', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: '500 Beer 650ml', price: '380', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Tuborg Can Beer', price: '450', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Gorkha 500', price: '400', image: '/images/coke_fanta_dew_sprite.jpg' },
    ],
    'Wine': [
      { name: 'Big Master 750ml', price: '1100', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Canvas 750ml', price: '1100', image: '/images/coke_fanta_dew_sprite.jpg' },
    ],
    'Whiskey / Vodka': [
      { name: 'Golden Oak 60 / 90 / 180 / 375 / 750ml', price: '200 / 250 / 400 / 800 / 1600', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Old Durbar Red 60 / 90 / 180 / 375 / 750ml', price: '280 / 430 / 800 / 1600 / 3200', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Old Durbar Black 60 / 90 / 180 / 375 / 750ml', price: '380 / 550 / 1050 / 2050 / 4100', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: '8848 Vodka 60 / 90 / 180 / 375 / 750ml', price: '270 / 400 / 750 / 1500 / 3000', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Khukri Rum 60 / 90 / 180 / 375 / 750ml', price: '250 / 350 / 700 / 1350 / 2700', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Signature Red 60 / 90 / 180 / 375 / 750ml', price: '280 / 430 / 800 / 1600 / 3200', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Mustang 60 / 90 / 180 / 375 / 750ml', price: '150 / 200 / 400 / 800 / 1600', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Highlander 60 / 90 / 180 / 375 / 750ml', price: '140 / 200 / 375 / 750 / 1500', image: '/images/coke_fanta_dew_sprite.jpg' },
    ],
    'Fried Rice': [
      { name: 'Fried Rice', price: '150', image: '/images/chinese fried rice.jpg' },
      { name: 'Veg Fried Rice', price: '200', image: '/images/veg fried rice.jpg' },
      { name: 'Egg Fried Rice', price: '250', image: '/images/egg fried rice.jpg' },
      { name: 'Buff Fried Rice', price: '300', image: '/images/Buff Chicken Fried Rice.jpg' },
      { name: 'Chicken Fried Rice', price: '300', image: '/images/chicken fried rice.jpg' },
      { name: 'Mixed Fried Rice', price: '350', image: '/images/chinese fried rice.jpg' },
    ],
    'Omelette / Egg': [
      { name: 'Plain Omelette', price: '50', image: '/images/plain omlet.webp' },
      { name: 'Masala Omelette', price: '80', image: '/images/masala omlet.jpg' },
      { name: 'Fry Egg', price: '60', image: '/images/fry omelette.jpg' },
      { name: 'Poach Egg', price: '70', image: '/images/pouch egg.jpg' },
      { name: 'Boiled Egg', price: '50', image: '/images/boiled egg.jpg' },
    ],
    'Mutton': [
      { name: 'Mutton Chilly, Small / Large', price: '400 / 500', image: '/images/mutton chilly.jpg' },
      { name: 'Mutton Gravy, Small / Large', price: '300 / 450', image: '/images/mutton grevy.jpg' },
      { name: 'Mutton Taas, Small / Large', price: '350 / 450', image: '/images/mutton taas.jpg' },
      { name: 'Mutton Boil, Small / Large', price: '300 / 400', image: '/images/mutton soup.jpg' },
    ],
    'Pork': [
      { name: 'Tawa Pork', price: '400', image: '/images/pork tawa.jpg' },
      { name: 'Pork Fry', price: '375', image: '/images/pork fry.jpg' },
      { name: 'Pork Choila', price: '400', image: '/images/pork choila.jpg' },
      { name: 'Pork Chilli', price: '400', image: '/images/pork chilly.jpg' },
      { name: 'Pork Boil, Small / Large', price: '300 / 400', image: '/images/pork boil.jpg' },
      { name: 'Pork Sekuwa, Small / Large', price: '350 / 450', image: '/images/pork sadeko.jpg' },
    ],
    'Buff': [
      { name: 'Sukuti', price: '300', image: '/images/buff sekuwa.jpg' },
      { name: 'Buff Choila', price: '350', image: '/images/buff sekuwa.jpg' },
      { name: 'Buff Chilli', price: '380', image: '/images/buff sekuwa.jpg' },
      { name: 'Buff Gravy, Small / Large', price: '250 / 350', image: '/images/buff sekuwa.jpg' },
      { name: 'Tawa Buff', price: '380', image: '/images/buff sekuwa.jpg' },
    ],
    'Sekuwa': [
      { name: 'Buff Sekuwa', price: '150', image: '/images/buff sekuwa.jpg' },
      { name: 'Chicken Sekuwa', price: '150', image: '/images/chichken sekuwa.jpg' },
      { name: 'Mutton Sekuwa', price: '150', image: '/images/mutton sekuwa.jpg' },
      { name: 'Pork Sekuwa', price: '180', image: '/images/pork sadeko.jpg' },
    ],
    'Khaja Set': [
      { name: 'Chicken Khaja Set', price: '450', image: '/images/chicken khaja set.jpg' },
      { name: 'Mutton Khaja Set', price: '600', image: '/images/mutton khaja set.jpg' },
      { name: 'Veg Khaja Set', price: '350', image: '/images/veg khaja set.jpg' },
      { name: 'Buff Khaja Set', price: '500', image: '/images/Buff Khaja Set.jpg' },
      { name: 'Pork Khaja Set', price: '500', image: '/images/pork tawa.jpg' },
    ],
    'Taas': [
      { name: 'Chicken Taas', price: '300', image: '/images/chicken taas.jpg' },
      { name: 'Mutton Taas', price: '450', image: '/images/mutton taas.jpg' },
      { name: 'Pork Taas', price: '400', image: '/images/pork fry.jpg' },
    ],
    'Sadeko': [
      { name: 'Peanuts Sadeko', price: '180', image: '/images/peanuts sadeko.jpg' },
      { name: 'Papad Sadeko', price: '160', image: '/images/papad(fry,dry,masala).jpg' },
      { name: 'Chicken Boil', price: '300', image: '/images/chicken boil.jpg' },
      { name: 'Chicken Fry', price: '320', image: '/images/chicken roast.jpg' },
      { name: 'Chicken Sadeko', price: '350', image: '/images/chicken sadeko.jpg' },
      { name: 'Mutton Boil', price: '400', image: '/images/mutton soup.jpg' },
      { name: 'Mutton Fry', price: '450', image: '/images/mutton taas.jpg' },
      { name: 'Mutton Sadeko', price: '500', image: '/images/mutton sadeko.jpg' },
      { name: 'Buff Sadeko', price: '130', image: '/images/buff sekuwa.jpg' },
      { name: 'Bhatmas Plain', price: '100', image: '/images/bhatmas sadeko.jpg' },
      { name: 'Bhatmas Sadeko', price: '100', image: '/images/bhatmas sadeko.jpg' },
      { name: 'Mushroom Sadeko', price: '250', image: '/images/mushroom sadeko.jpg' },
      { name: 'Aalu Sadeko', price: '120', image: '/images/aalu sadeko.jpg' },
      { name: 'Cucumber Sadeko', price: '100', image: '/images/green salad.jpg' },
      { name: 'Wai Wai Sadeko', price: '100', image: '/images/wai wai sadeko.png' },
    ],
    'Hookah': [
      { name: 'Normal Hookah', price: '400', image: '/images/coke_fanta_dew_sprite.jpg' },
      { name: 'Coconut Hookah', price: '500', image: '/images/coke_fanta_dew_sprite.jpg' },
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
                  <div className="relative mb-3 aspect-square w-full overflow-hidden bg-[#e4eff6]">
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
                      <div className="relative mb-3 aspect-square w-full overflow-hidden bg-[#e4eff6]">
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
                      <p className="mt-1 text-xs font-bold text-[#111315] sm:text-sm">
                        Rs {item.price}
                      </p>
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
