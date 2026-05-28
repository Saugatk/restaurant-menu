'use client'

import { useState, useEffect } from 'react'
import { Search, Download, Smartphone } from 'lucide-react'

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
    'Non Veg (Chicken)',
    'Momos',
    'Chowmin',
    'Thukpa',
    'Kati Roll',
    'Pizza',
    'Burger',
    'Biryani',
    'Nepali Thakali Khana',
    'Soup',
    'Salad',
    'Lassi',
    'Milk Shake',
    'Juice',
    'Fried Rice',
    'Omelette Egg',
    'Mutton',
    'Pork',
    'Sekuwa',
    'Khaja Set',
    'Taas',
    'Sadeko',
  ]

  const menuData = {
    'Special': [
      { name: 'Chicken Roast', price: '350', image: '/images/chicken-roast.png', popular: true },
      { name: 'Chicken Momo', price: '140', image: '/images/momo.png', popular: true },
      { name: 'Mutton Khaja Set', price: '500', image: '/images/thakali-khana.png', popular: true },
      { name: 'Biryani Chicken', price: '450', image: '/images/biryani.png', popular: true },
      { name: 'French Fry', price: '150', image: '/images/french-fry.png' },
      { name: 'Chowmin Chicken', price: '150', image: '/images/chowmin.png' },
      { name: 'Milk Tea', price: '40', image: '/images/milk-tea.png' },
      { name: 'Pizza Chicken', price: '500', image: '/images/pizza.png' },
    ],
    'Tea & Coffee': [
      { name: 'Milk Tea', price: '40', image: '/images/milk-tea.png' },
      { name: 'Black Tea', price: '30', image: '/images/black-tea.png' },
      { name: 'Milk Coffee', price: '100', image: '/images/coffee.png' },
      { name: 'Black Coffee', price: '60', image: '/images/coffee.png' },
      { name: 'Cold Coffee', price: '100', image: '/images/cold-coffee.png' },
      { name: 'Hot Lemon', price: '60', image: '/images/black-tea.png' },
      { name: 'Lemon Tea', price: '50', image: '/images/black-tea.png' },
    ],
    'Soft Drinks': [
      { name: 'Coke/Fanta/Sprite/Dew/Pepsi/Slice', price: '60', image: '/images/soft-drinks.png' },
      { name: 'Lemon Soda', price: '60', image: '/images/soft-drinks.png' },
      { name: 'Soda Water', price: '110', image: '/images/soft-drinks.png' },
      { name: 'Min. Water', price: '25', image: '/images/soft-drinks.png' },
    ],
    'Starter': [
      { name: 'French Fry', price: '150', image: '/images/french-fry.png' },
      { name: 'Papad (dry/masala/fry)', price: '50/80/60', image: '/images/pakoda.png' },
      { name: 'Peanut (plain/sadeko)', price: '80/120', image: '/images/pakoda.png' },
      { name: 'Kaju (plain/fry)', price: '200/250', image: '/images/pakoda.png' },
    ],
    'Veg Items': [
      { name: 'Alu Fry', price: '90', image: '/images/alu-fry.png' },
      { name: 'Veg Pakoda', price: '140', image: '/images/pakoda.png' },
      { name: 'Potato Chilly', price: '160', image: '/images/alu-fry.png' },
      { name: 'Mushroom Pakoda', price: '160', image: '/images/pakoda.png' },
      { name: 'Paneer Pakoda', price: '280', image: '/images/pakoda.png' },
      { name: 'Mushroom Chilly', price: '160', image: '/images/pakoda.png' },
    ],
    'Non Veg (Chicken)': [
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
      { name: 'Veg Chilly', price: '150', image: '/images/momo.png' },
      { name: 'Buff Momo', price: '140', image: '/images/momo.png' },
      { name: 'Buff C.', price: '160', image: '/images/momo.png' },
      { name: 'Buff Fry', price: '150', image: '/images/momo.png' },
      { name: 'Buff Khote', price: '180', image: '/images/momo.png' },
      { name: 'Buff Chilly', price: '200', image: '/images/momo.png' },
      { name: 'Chicken Momo', price: '140', image: '/images/momo.png' },
      { name: 'Chicken C.', price: '160', image: '/images/momo.png' },
      { name: 'Chicken Fry', price: '150', image: '/images/momo.png' },
      { name: 'Chicken Khote', price: '180', image: '/images/momo.png' },
      { name: 'Chicken Chilly', price: '200', image: '/images/momo.png' },
    ],
    'Chowmin': [
      { name: 'Buff', price: '150', image: '/images/chowmin.png' },
      { name: 'Chicken', price: '150', image: '/images/chowmin.png' },
      { name: 'Veg', price: '120', image: '/images/chowmin.png' },
      { name: 'Egg', price: '140', image: '/images/chowmin.png' },
      { name: 'Mixed', price: '200', image: '/images/chowmin.png' },
    ],
    'Thukpa': [
      { name: 'Veg Thukpa', price: '150', image: '/images/thukpa.png' },
      { name: 'Chicken', price: '200', image: '/images/thukpa.png' },
      { name: 'Mutton', price: '250', image: '/images/thukpa.png' },
      { name: 'Mixed', price: '300', image: '/images/thukpa.png' },
    ],
    'Kati Roll': [
      { name: 'Veg', price: '180', image: '/images/kati-roll.png' },
      { name: 'Chicken', price: '250', image: '/images/kati-roll.png' },
      { name: 'Egg', price: '200', image: '/images/kati-roll.png' },
      { name: 'Mushroom', price: '200', image: '/images/kati-roll.png' },
      { name: 'Paneer', price: '230', image: '/images/kati-roll.png' },
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
      { name: 'Banana', price: '160', image: '/images/lassi.png' },
      { name: 'Mango', price: '180', image: '/images/lassi.png' },
      { name: 'Dry Fruit', price: '200', image: '/images/lassi.png' },
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
      { name: 'Pouch Egg', price: '70', image: '/images/omelette.png' },
      { name: 'Boiled Egg', price: '50', image: '/images/omelette.png' },
    ],
    'Mutton': [
      { name: 'Mutton Chilly', price: '500', image: '/images/mutton.png' },
      { name: 'Mutton Grevy', price: '400', image: '/images/mutton.png' },
      { name: 'Mutton Taas', price: '450', image: '/images/mutton.png' },
    ],
    'Pork': [
      { name: 'Pork Tawa', price: '400', image: '/images/pork.png' },
      { name: 'Pork Fry', price: '375', image: '/images/pork.png' },
      { name: 'Pork Sadeko', price: '430', image: '/images/pork.png' },
      { name: 'Pork Boil', price: '350', image: '/images/pork.png' },
      { name: 'Pork Chhoila', price: '430', image: '/images/pork.png' },
      { name: 'Pork Chilly', price: '450', image: '/images/pork.png' },
    ],
    'Sekuwa': [
      { name: 'Buff Sekuwa', price: '120', image: '/images/sekuwa.png' },
      { name: 'Chicken Sekuwa', price: '120', image: '/images/sekuwa.png' },
      { name: 'Mutton Sekuwa', price: '200', image: '/images/sekuwa.png' },
    ],
    'Khaja Set': [
      { name: 'Chicken Khaja Set', price: '400', image: '/images/thakali-khana.png' },
      { name: 'Mutton Khaja Set', price: '500', image: '/images/thakali-khana.png' },
      { name: 'Veg Khaja Set', price: '300', image: '/images/thakali-khana.png' },
      { name: 'Buff Khaja Set', price: '380', image: '/images/thakali-khana.png' },
    ],
    'Taas': [
      { name: 'Chicken Taas', price: '270', image: '/images/chicken-roast.png' },
      { name: 'Mutton Taas', price: '350', image: '/images/mutton.png' },
    ],
    'Sadeko': [
      { name: 'Peanuts Sadeko', price: '120', image: '/images/pakoda.png' },
      { name: 'Chicken (boil/fry/sadeko)', price: '300 / 320 / 350', image: '/images/chicken-roast.png' },
      { name: 'Mutton (boil/fry/sadeko)', price: '400 / 450 / 500', image: '/images/mutton.png' },
      { name: 'Bhatmas (plain/sadeko)', price: '100', image: '/images/pakoda.png' },
      { name: 'Mushroom Sadeko', price: '200', image: '/images/pakoda.png' },
      { name: 'Aalu Sadeko', price: '120', image: '/images/alu-fry.png' },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 right-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Status Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="px-4 py-2 flex items-center justify-between text-xs text-purple-600">
          <span className="font-semibold">{currentTime}</span>
          <div className="flex gap-1">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white/70 backdrop-blur-xl sticky top-8 z-40 px-4 py-5 border-b border-purple-100">
        <div className="w-full">
          <div className="flex items-start justify-between mb-4 animate-fade-in">
            <div>
              <p className="text-sm text-purple-600 font-medium">{greeting},</p>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Pool Café</h1>
              <p className="text-xs text-purple-500 mt-1">{currentDate}</p>
            </div>
            <button
              onClick={() => setShowPaymentModal(true)}
              className="group relative px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs font-bold hover:shadow-lg hover:shadow-purple-300 transition-all duration-300 transform hover:scale-105 animate-pulse-soft flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              Pay
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4 group">
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-purple-400" />
            <input
              type="text"
              placeholder="Search all items..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setIsSearching(e.target.value.length > 0)
              }}
              onFocus={() => setIsSearching(true)}
              onBlur={() => searchTerm === '' && setIsSearching(false)}
              className="w-full pl-10 pr-10 py-3 border border-purple-200 rounded-full text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 bg-white/80 backdrop-blur-sm transition-all duration-300"
            />
            <button className="absolute right-3 top-3.5 text-purple-400">⚙️</button>
          </div>

          {/* Category Pills */}
          {!isSearching && (
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide animate-fade-in">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{ animationDelay: `${idx * 30}ms` }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 animate-slide-up ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-300'
                      : 'bg-white/60 text-purple-700 hover:bg-white border border-purple-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Special Offers Banner */}
      {!isSearching && selectedCategory === 'Special' && (
        <div className="px-4 py-6 relative z-10 animate-fade-in">
          <div className="max-w-full mx-auto">
            <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-screen filter blur-2xl"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">Specially Curated For You</h2>
                <p className="text-purple-100 text-sm">Handpicked favorites and our most popular dishes</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="w-full px-4 py-6 pb-20 relative z-10">
        {isSearching && searchTerm && (
          <div className="mb-6 animate-fade-in">
            <p className="text-sm text-sky-700 font-semibold">
              Search results for <span className="text-sky-600">'{searchTerm}'</span> • Found {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 50}ms` }}
              className="group animate-slide-up"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-purple-100 cursor-pointer h-full flex flex-col hover:border-purple-300">
                {/* Image Section */}
                <div className="relative bg-gradient-to-br from-sky-100 to-blue-100 aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.popular && (
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                      Popular
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-xs sm:text-sm text-gray-900 mb-2 line-clamp-2 min-h-9 group-hover:text-purple-600 transition-colors">
                    {item.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="mt-auto pt-2 border-t border-purple-100">
                    <span className="font-bold text-purple-600 text-sm">NPR {item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-purple-700 text-base font-semibold">
              {isSearching ? `No items found for "${searchTerm}"` : `No items available in ${selectedCategory}`}
            </p>
            <p className="text-purple-500 text-sm mt-2">Try another search or category</p>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-scale-up">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment</h2>
            <p className="text-gray-600 text-sm mb-6">Scan or download QR code to pay</p>

            {/* QR Code Display */}
            <div className="mb-6 flex justify-center">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl">
                <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border-2 border-purple-300">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm font-semibold mb-2">QR Code</p>
                    <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">📱</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300">
                <Smartphone className="w-4 h-4" />
                Scan
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowPaymentModal(false)}
              className="w-full py-3 border border-purple-200 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
            >
              Close
            </button>
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
