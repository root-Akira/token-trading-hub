
import { useState } from "react";
import { Search, Filter, TrendingUp, Users, Image, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "art", "gaming", "music", "photography", "sports"];

  const featuredNFTs = [
    {
      id: 1,
      title: "Cosmic Dreams #001",
      creator: "ArtistName",
      price: "2.5 ETH",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      likes: 42,
      verified: true,
    },
    {
      id: 2,
      title: "Digital Abstract",
      creator: "CryptoArtist",
      price: "1.8 ETH",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      likes: 28,
      verified: false,
    },
    {
      id: 3,
      title: "Neon Genesis",
      creator: "DigitalMaster",
      price: "3.2 ETH",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
      likes: 67,
      verified: true,
    },
  ];

  const collections = [
    {
      id: 1,
      name: "Cosmic Collection",
      items: 150,
      floorPrice: "0.8 ETH",
      volume: "245 ETH",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Digital Dreams",
      items: 88,
      floorPrice: "1.2 ETH",
      volume: "189 ETH",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Abstract Minds",
      items: 200,
      floorPrice: "0.5 ETH",
      volume: "156 ETH",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop",
    },
  ];

  const trendingNFTs = [
    {
      id: 4,
      title: "Ethereal Waves",
      creator: "WaveArtist",
      price: "4.1 ETH",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      likes: 89,
      change: "+15%",
    },
    {
      id: 5,
      title: "Quantum Leap",
      creator: "QuantumCreator",
      price: "2.9 ETH",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      likes: 56,
      change: "+8%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-gray-700/50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                NFTopia
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Explore</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Collections</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Creators</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Stats</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                Connect Wallet
              </Button>
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Discover Digital Art
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore, collect, and trade extraordinary NFTs on the world's most advanced marketplace
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search NFTs, collections, or creators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 bg-black/30 border-gray-600 text-white placeholder-gray-400 text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Filter size={16} />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 cursor-pointer transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "border-gray-600 text-gray-300 hover:border-purple-500"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Image className="text-purple-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">50K+</h3>
              <p className="text-gray-400">Total NFTs</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="text-blue-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">12K+</h3>
              <p className="text-gray-400">Creators</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="text-green-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">15K ETH</h3>
              <p className="text-gray-400">Volume Traded</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Tag className="text-pink-400" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">8.5K</h3>
              <p className="text-gray-400">Total Sales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured NFTs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Featured NFTs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNFTs.map((nft) => (
              <Card key={nft.id} className="bg-black/40 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={nft.image}
                      alt={nft.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/70 text-white">
                        ❤️ {nft.likes}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{nft.title}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400">by</span>
                          <span className="text-purple-400">{nft.creator}</span>
                          {nft.verified && <span className="text-blue-400">✓</span>}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Current Price</p>
                        <p className="text-2xl font-bold text-white">{nft.price}</p>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Collections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Top Collections</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Card key={collection.id} className="bg-black/40 border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-white">{collection.name}</h4>
                      <p className="text-gray-400">{collection.items} items</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Floor Price</span>
                      <span className="text-white font-semibold">{collection.floorPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Volume</span>
                      <span className="text-white font-semibold">{collection.volume}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Trending Now</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trendingNFTs.map((nft) => (
              <Card key={nft.id} className="bg-black/40 border-gray-700 hover:border-green-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <img
                      src={nft.image}
                      alt={nft.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">{nft.title}</h4>
                      <p className="text-gray-400 mb-2">by {nft.creator}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">{nft.price}</span>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500">
                            {nft.change}
                          </Badge>
                          <span className="text-gray-400">❤️ {nft.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-700 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
                NFTopia
              </h4>
              <p className="text-gray-400">
                The premier destination for discovering, collecting, and trading unique digital assets.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Marketplace</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Explore</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Activity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Stats</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Account</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Profile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Favorites</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Watchlist</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Settings</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Learn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Platform Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NFTopia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
