'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Apple,
  Banana,
  Beef,
  Bean,
  Beer,
  CakeSlice,
  Candy,
  Carrot,
  ChefHat,
  Cherry,
  Coffee,
  CookingPot,
  Cookie,
  CupSoda,
  Donut,
  Download,
  Drumstick,
  EggFried,
  Fish,
  Flame,
  GlassWater,
  Ham,
  Heart,
  IceCreamBowl,
  Leaf,
  Martini,
  Milk,
  Pizza,
  Popcorn,
  Salad,
  Sandwich,
  Search,
  Smartphone,
  Soup,
  Star,
  Utensils,
  UtensilsCrossed,
  Vegan,
  Wheat,
  Wine,
} from 'lucide-react'

const imageFiles = [
  'Buff Chicken Fried Rice.jpg',
  'Buff Khaja Set.jpg',
  'Chicken Chilly.jpg',
  'Fried Buff Momo.jpg',
  'Fruit Salad small plate.jpg',
  'aalu fry.jpg',
  'aalu sadeko.jpg',
  'banana lassi.jpg',
  'bhatmas sadeko.jpg',
  'black coffee.jpg',
  'black tea.jpg',
  'boiled egg.jpg',
  'buff kathi roll.jpg',
  'buff khote momo.jpg',
  'buff meatballs.jpg',
  'buff momo plate.jpg',
  'buff momo.jpg',
  'buff pizza.jpg',
  'buff pizza.jpeg',
  'buff sekuwa.jpg',
  'buff steam momo.jpg',
  'cheese pizza.jpg',
  'chicken boil.jpg',
  'chicken burger.jpg',
  'chicken choila.jpg',
  'chicken chowmin.jpg',
  'chicken chowmin.jpeg',
  'chicken drumstick(6 pcs).jpg',
  'chicken fried rice.jpg',
  'chicken kathi roll.jpg',
  'chicken khaja set.jpg',
  'chicken khote momo.jpg',
  'chicken leg piece fry(2 pcs).jpg',
  'chicken pizza.jpg',
  'chicken roast.jpg',
  'chicken sadeko.jpg',
  'chicken sadeko plate.jpg',
  'chicken sausage .jpg',
  'chicken sekuwa.jpg',
  'chicken soup.jpg',
  'chicken taas.jpg',
  'chicken thakali khana.jpg',
  'chicken thukpa.jpg',
  'chicken.jpg',
  'chilly momo.jpg',
  'chinese fried rice.jpg',
  'coke_fanta_dew_sprite.jpg',
  'cold coffee.jpg',
  'dry fruit lassi.jpg',
  'egg biryani.jpg',
  'egg fried rice.jpg',
  'egg kathi roll.jpg',
  'french fry.jpg',
  'fruit salad large plate.jpeg',
  'fry omelette.jpg',
  'fry veg momo.jpg',
  'green salad large plate.jpeg',
  'green salad.jpg',
  'kaju fry.jpg',
  'lemon soda.jpg',
  'lemon tea.jpg',
  'mango juice.jpg',
  'mango lassi.jpg',
  'masala omlet.jpg',
  'milk tea.jpg',
  'min.water.jpg',
  'mix chowmin.jpg',
  'mixed pizza.jpg',
  'mixed thukpa.jpg',
  'mushroom pakoda.jpg',
  'mushroom pizza.jpg',
  'mushroom sadeko.jpg',
  'mushroom soup.jpg',
  'mutton biryani.jpg',
  'mutton chilly.jpg',
  'mushroom chilly.jpg',
  'mutton gravy.jpg',
  'mutton khaja set.jpg',
  'mutton khana set.jpg',
  'mutton khana thali set.jpg',
  'mutton sadeko.jpg',
  'mutton sekuwa.jpg',
  'mutton soup.jpg',
  'mutton taas.jpg',
  'mutton thukpa.jpg',
  'orange juice.jpg',
  'paneer kathi roll.jpg',
  'paneer pakauda.jpg',
  'papad(fry,dry,masala).jpg',
  'peanut sadeko.jpg',
  'peanuts sadeko.jpg',
  'php9S4dVoAM.webp',
  'plain lassi.jpg',
  'plain omlet.webp',
  'pork boil.jpg',
  'pork chilly.jpg',
  'pork choila.jpg',
  'pork fry.jpg',
  'pork sadeko.jpg',
  'pork tawa.jpg',
  'potato chilly.jpg',
  'pouch egg.jpg',
  'russian salad large plate.jpg',
  'russian salad small plate.jpg',
  'soda water.jpg',
  'sweet lassi.jpg',
  'veg biryani.jpg',
  'veg burger.jpg',
  'veg chowmin.jpg',
  'veg chowmin.webp',
  'veg fried rice.jpg',
  'veg kathi roll.jpg',
  'veg khaja set.jpg',
  'veg momo.jpg',
  'veg pakauda.jpg',
  'veg pizza.jpg',
  'veg soup.jpg',
  'veg thakali khana set.jpg',
  'veg thukpa.jpg',
  'veg-chilli-momo-.jpg',
  'wai wai sadeko.png',
] as const

const imageAliases: Record<string, string> = {
  'Special|Chicken Momo': 'chicken khote momo',
  'Special|Biryani Chicken': 'chicken',
  'Special|Chowmin Chicken': 'chicken chowmin',
  'Special|Pizza Chicken': 'chicken pizza',
  'Tea & Coffee|Milk Coffee': 'black coffee',
  'Tea & Coffee|Hot Lemon': 'lemon tea',
  'Soft Drinks|Coke/Fanta/Sprite/Dew/Pepsi/Slice': 'coke fanta dew sprite',
  'Starter|Papad (dry/masala/fry)': 'papad fry dry masala',
  'Starter|Peanut (plain/sadeko)': 'peanut sadeko',
  'Starter|Kaju (plain/fry)': 'kaju fry',
  'Veg Items|Veg Pakoda': 'veg pakauda',
  'Veg Items|Paneer Pakoda': 'paneer pakauda',
  'Non Veg Items (Chicken)|Chicken Chilly (boneless/with bone)': 'chicken chilly',
  'Non Veg Items (Chicken)|Chicken Meat Ball': 'buff meatballs',
  'Non Veg Items (Chicken)|Chicken Leg Piece Fry (2pcs)': 'chicken leg piece fry 2 pcs',
  'Non Veg Items (Chicken)|Chicken 65 (per plate)': 'chicken',
  'Momos|Veg Fry': 'fry veg momo',
  'Momos|Veg Chilly': 'veg chilli momo',
  'Momos|Buff C.': 'buff steam momo',
  'Momos|Buff Fry': 'fried buff momo',
  'Momos|Buff Khote': 'buff khote momo',
  'Momos|Buff Chilly': 'chilly momo',
  'Momos|Chicken Momo': 'chicken khote momo',
  'Momos|Chicken C.': 'chicken khote momo',
  'Momos|Chicken Fry': 'chicken khote momo',
  'Momos|Chicken Khote': 'chicken khote momo',
  'Momos|Chicken Chilly': 'chilly momo',
  'Chowmin|Buff': 'mix chowmin',
  'Chowmin|Egg': 'mix chowmin',
  'Chowmin|Mixed': 'mix chowmin',
  'Thukpa|Chicken': 'chicken thukpa',
  'Nepali Thakali Khana|Veg': 'veg thakali khana set',
  'Nepali Thakali Khana|Chicken': 'chicken thakali khana',
  'Nepali Thakali Khana|Mutton': 'mutton khana thali set',
  'Nepali Thakali Khana|Egg': 'veg thakali khana set',
  'Nepali Thakali Khana|Fish': 'mutton khana set',
  'Kati Roll|Mushroom': 'veg kathi roll',
  'Burger|Buff': 'chicken burger',
  'Soup|Mixed': 'mushroom soup',
  'Salad|Fruit Salad (Small Plate)': 'fruit salad small plate',
  'Lassi|Plain': 'plain lassi',
  'Lassi|Sweet': 'sweet lassi',
  'Lassi|Banana': 'banana lassi',
  'Lassi|Mango': 'mango lassi',
  'Lassi|Dry Fruit': 'dry fruit lassi',
  'Milk Shake|Vanilla': 'php9s4dvoam',
  'Milk Shake|Chocolate': 'php9s4dvoam',
  'Milk Shake|Strawberry': 'php9s4dvoam',
  'Milk Shake|Oreo Milkshake': 'php9s4dvoam',
  'Fried Rice|Veg Fry Rice': 'veg fried rice',
  'Fried Rice|Egg Fry Rice': 'egg fried rice',
  'Fried Rice|Buff Fry Rice': 'buff chicken fried rice',
  'Fried Rice|Chicken Fry Rice': 'chicken fried rice',
  'Fried Rice|Mix Fry Rice': 'chinese fried rice',
  'Omelette Egg|Plain Omelette': 'plain omlet',
  'Omelette Egg|Masala Omelette': 'masala omlet',
  'Omelette Egg|Fry Egg': 'fry omelette',
  'Omelette Egg|Poach Egg': 'pouch egg',
  'Mutton|Mutton Grevy': 'mutton gravy',
  'Sekuwa|Chicken Sekuwa': 'chicken sekuwa',
  'Sadeko|Chicken (Boil)': 'chicken boil',
  'Sadeko|Chicken (Fry)': 'chicken roast',
  'Sadeko|Chicken (Sadeko)': 'chicken sadeko',
  'Sadeko|Mutton (Boil)': 'mutton gravy',
  'Sadeko|Mutton (Fry)': 'mutton taas',
  'Sadeko|Mutton (Sadeko)': 'mutton sadeko',
  'Sadeko|Bhatmas (Plain)': 'bhatmas sadeko',
  'Sadeko|Bhatmas (Sadeko)': 'bhatmas sadeko',
  'Sadeko|Aalu Sadeko': 'aalu sadeko',
}

const categoryImageSuffix: Record<string, string> = {
  Chowmin: 'chowmin',
  Thukpa: 'thukpa',
  'Kati Roll': 'kathi roll',
  Pizza: 'pizza',
  Burger: 'burger',
  Biryani: 'biryani',
  Soup: 'soup',
}

const paymentQrs = [
  { name: 'Payment QR 1', src: '/images/qr1.jpeg' },
  { name: 'Payment QR 2', src: '/images/qr2.jpeg' },
]

const normalizeImageName = (value: string) =>
  value
    .toLowerCase()
    .replace(/\.(jpg|jpeg|png|webp|svg)$/, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')

const imageByName = new Map(imageFiles.map((file) => [normalizeImageName(file), file]))

const getMenuImage = (category: string, name: string, fallback: string) => {
  const withoutDetails = normalizeImageName(name.replace(/\([^)]*\)/g, ''))
  const suffix = categoryImageSuffix[category]
  const candidates = [
    imageAliases[`${category}|${name}`],
    normalizeImageName(name),
    withoutDetails,
    suffix ? `${withoutDetails} ${suffix}` : undefined,
  ].filter(Boolean) as string[]

  const match = candidates.map((candidate) => imageByName.get(candidate)).find(Boolean)
  return match ? `/images/${match}` : fallback
}

const getItemRating = (category: string, name: string) => {
  const seed = `${category}-${name}`.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
  return (4.2 + (seed % 8) / 10).toFixed(1)
}

const categoryIcons = [
  Utensils,
  Coffee,
  CupSoda,
  ChefHat,
  Salad,
  Drumstick,
  CookingPot,
  Wheat,
  Soup,
  Sandwich,
  Pizza,
  Beef,
  EggFried,
  UtensilsCrossed,
  Fish,
  IceCreamBowl,
  Milk,
  GlassWater,
  Wine,
  CakeSlice,
  Ham,
  Candy,
  Heart,
  Apple,
  Banana,
  Bean,
  Beer,
  Carrot,
  Cherry,
  Cookie,
  Donut,
  Flame,
  Leaf,
  Martini,
  Popcorn,
  Vegan,
]

export default function MenuApp() {
  const [selectedCategory, setSelectedCategory] = useState('Special')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentTime, setCurrentTime] = useState<string>('')
  const [currentDate, setCurrentDate] = useState<string>('')
  const [greeting, setGreeting] = useState<string>('')
  const [isSearching, setIsSearching] = useState(false)
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

  const filteredItems = isSearching || searchTerm
    ? getAllItems().filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : (menuData[selectedCategory as keyof typeof menuData]?.map((item, idx) => ({ 
        ...item, 
        category: selectedCategory,
        popular: undefined 
      })) || [])

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f5f4] text-[#222827]">
      <header className="relative bg-[#e9eeeb]">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden md:block">
          <Image
            src="/images/chicken roast.jpg"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f6f68] text-white shadow-lg shadow-[#2f6f68]/20">
              <Utensils className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2f6f68]">{greeting}</p>
              <h1 className="text-2xl font-black sm:text-3xl">Khukuri Restaurant & Bar</h1>
              <p className="text-xs font-medium text-[#7b8581]">{currentDate} · {currentTime}</p>
            </div>
          </div>
          <button
            onClick={() => setShowPaymentModal(true)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#2f6f68] px-5 text-sm font-bold text-white shadow-xl shadow-[#2f6f68]/20 transition hover:bg-[#285f59]"
          >
            <Smartphone className="h-4 w-4" />
            Pay
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <section className="mb-10 grid gap-6 lg:grid-cols-[minmax(300px,0.85fr)_minmax(0,1.6fr)] lg:items-end">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Our Popular Menu</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#7b8581]">
              Fresh dishes, drinks, khaja sets and restaurant favorites from our full menu.
            </p>
          </div>

          <div className="grid min-w-0 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#95a09b]" />
              <input
                type="text"
                placeholder="Search menu"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setIsSearching(e.target.value.length > 0)
                }}
                onFocus={() => setIsSearching(true)}
                onBlur={() => searchTerm === '' && setIsSearching(false)}
                className="h-12 w-full rounded-full border border-[#e3e6e4] bg-white pl-11 pr-5 text-sm font-semibold text-[#26302e] shadow-sm outline-none transition focus:border-[#2f6f68] focus:ring-4 focus:ring-[#2f6f68]/10"
              />
            </div>

            {!isSearching && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {categories.map((cat, idx) => {
                  const CategoryIcon = categoryIcons[idx % categoryIcons.length]
                  const isSelected = selectedCategory === cat

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      title={cat}
                      aria-label={cat}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md border shadow-sm transition ${
                        isSelected
                          ? 'border-[#2f6f68] bg-[#2f6f68] text-white shadow-[#2f6f68]/20'
                          : 'border-[#ecefed] bg-white text-[#9ba5a0] hover:border-[#2f6f68]/40 hover:text-[#2f6f68]'
                      }`}
                    >
                      <CategoryIcon className="h-5 w-5" />
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        {isSearching && searchTerm && (
          <p className="mb-8 text-sm font-semibold text-[#64716d]">
            Search results for <span className="text-[#2f6f68]">{searchTerm}</span> · {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
          </p>
        )}

        {!isSearching && (
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#2f6f68]">{selectedCategory}</p>
            <p className="text-sm font-semibold text-[#9aa39f]">{filteredItems.length} items</p>
          </div>
        )}

        <div
          key={`${selectedCategory}-${searchTerm}`}
          className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredItems.map((item, idx) => {
            const imageSrc = getMenuImage(item.category, item.name, item.image)
            const rating = getItemRating(item.category, item.name)

            return (
              <article key={`${item.category}-${item.name}`} className="group relative pt-14">
                <div className="absolute left-7 top-0 z-10 h-28 w-28 overflow-hidden rounded-full bg-[#edf0ee] shadow-xl shadow-black/10 ring-8 ring-[#f4f5f4]">
                  <Image
                    src={imageSrc}
                    alt={item.name}
                    fill
                    priority={idx < 4}
                    sizes="112px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="min-h-44 rounded-[28px] bg-white px-6 pb-6 pt-16 shadow-[0_24px_40px_rgba(35,45,43,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_50px_rgba(35,45,43,0.12)]">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <button
                      type="button"
                      aria-label={`Save ${item.name}`}
                      className="mt-1 flex h-8 w-8 items-center justify-center rounded-full text-[#a5aeaa] transition hover:bg-[#f0f4f2] hover:text-[#2f6f68]"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-1 text-xs font-black text-[#252b2a]">
                      {rating}
                      <Star className="h-3.5 w-3.5 fill-[#f5d74f] text-[#f5d74f]" />
                    </div>
                  </div>

                  <h3 className="min-h-10 text-sm font-black leading-5 text-[#202826]">{item.name}</h3>
                  <p className="mt-1 min-h-5 truncate text-xs font-semibold text-[#a1aaa6]">{item.category}</p>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="h-2 w-20 rounded-full bg-[#2f6f68]" />
                    <p className="whitespace-nowrap text-sm font-black text-[#202826]">Rs {item.price}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-base font-black text-[#2f6f68]">
              {isSearching ? `No items found for "${searchTerm}"` : `No items available in ${selectedCategory}`}
            </p>
          </div>
        )}
      </main>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#202826]/50 p-4 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl overflow-hidden rounded-[28px] bg-[#f4f5f4] shadow-2xl animate-scale-up">
            <div className="relative bg-[#e9eeeb] px-8 py-7">
              <div className="absolute right-0 top-0 h-full w-36 overflow-hidden opacity-20">
                <Image
                  src="/images/chicken roast.jpg"
                  alt=""
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f6f68] text-white shadow-lg shadow-[#2f6f68]/20">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-[#202826]">Payment</h2>
                  <p className="text-sm font-semibold text-[#7b8581]">Scan or download QR code to pay</p>
                </div>
              </div>
            </div>

            {/* QR Code Display */}
            <div className="px-8 py-7">
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                {paymentQrs.map((qr) => (
                  <div key={qr.src} className="rounded-[24px] bg-white p-4 shadow-[0_24px_40px_rgba(35,45,43,0.08)]">
                    <p className="mb-3 text-center text-xs font-black uppercase tracking-[0.18em] text-[#2f6f68]">{qr.name}</p>
                    <div className="relative mx-auto aspect-square w-full max-w-56 overflow-hidden rounded-[18px] border border-[#dce3df] bg-[#f9faf9]">
                      <Image
                        src={qr.src}
                        alt={qr.name}
                        fill
                        sizes="224px"
                        className="object-contain p-2"
                      />
                    </div>
                    <a
                      href={qr.src}
                      download
                      className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#2f6f68] py-3 text-sm font-bold text-white shadow-lg shadow-[#2f6f68]/20 transition hover:bg-[#285f59]"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowPaymentModal(false)}
                className="w-full rounded-full border border-[#dce3df] bg-white py-3 font-bold text-[#64716d] transition hover:border-[#2f6f68]/40 hover:text-[#2f6f68]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-soft {
          0%, 100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.7); }
          50% { box-shadow: 0 0 0 10px rgba(14, 165, 233, 0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s infinite;
        }
      `}</style>
    </div>
  )
}
