
import { useState } from "react";
import { Search, TrendingUp, Users, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const collections = [
    {
      id: 1,
      name: "Cosmic Collection",
      creator: "ArtistName",
      items: 150,
      floorPrice: "0.8 ETH",
      volume: "245 ETH",
      change: "+15%",
      verified: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop",
      banner: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Digital Dreams",
      creator: "CryptoArtist",
      items: 88,
      floorPrice: "1.2 ETH",
      volume: "189 ETH",
      change: "+8%",
      verified: false,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop",
      banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Abstract Minds",
      creator: "DigitalMaster",
      items: 200,
      floorPrice: "0.5 ETH",
      volume: "156 ETH",
      change: "-2%",
      verified: true,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop",
      banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=200&fit=crop"
    },
  ];

  const filteredCollections = collections.filter(collection =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    collection.creator.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-gray-700/50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              NFTopia
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/explore" className="text-gray-300 hover:text-white transition-colors">Explore</Link>
              <Link to="/collections" className="text-purple-400 font-medium">Collections</Link>
              <Link to="/creators" className="text-gray-300 hover:text-white transition-colors">Creators</Link>
              <Link to="/profile" className="text-gray-300 hover:text-white transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Top Collections
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the most popular and trending NFT collections in the marketplace
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search collections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-black/30 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-black/40 border-gray-700">
            <CardContent className="p-6 text-center">
              <Image className="mx-auto mb-3 text-purple-400" size={32} />
              <h3 className="text-2xl font-bold text-white mb-2">150+</h3>
              <p className="text-gray-400">Total Collections</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-gray-700">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto mb-3 text-blue-400" size={32} />
              <h3 className="text-2xl font-bold text-white mb-2">2.5K+</h3>
              <p className="text-gray-400">Active Collectors</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="mx-auto mb-3 text-green-400" size={32} />
              <h3 className="text-2xl font-bold text-white mb-2">890 ETH</h3>
              <p className="text-gray-400">Total Volume</p>
            </CardContent>
          </Card>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection) => (
            <Card key={collection.id} className="bg-black/40 border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer group overflow-hidden">
              <CardContent className="p-0">
                <Link to={`/collection/${collection.id}`}>
                  {/* Banner */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={collection.banner}
                      alt={`${collection.name} banner`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      {collection.verified && (
                        <Badge className="bg-blue-500/70 text-white">✓ Verified</Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Collection Avatar */}
                  <div className="relative px-6 pb-6">
                    <div className="absolute -top-8 left-6">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-16 h-16 rounded-full border-4 border-gray-800 object-cover"
                      />
                    </div>
                    
                    <div className="pt-12">
                      <h3 className="text-xl font-bold text-white mb-1">{collection.name}</h3>
                      <p className="text-gray-400 mb-4">by {collection.creator}</p>
                      
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-gray-400 text-sm">Items</p>
                          <p className="text-white font-semibold">{collection.items}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Floor</p>
                          <p className="text-white font-semibold">{collection.floorPrice}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Volume</p>
                          <p className="text-white font-semibold">{collection.volume}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <Badge className={`${
                          collection.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {collection.change}
                        </Badge>
                        <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                          View Collection
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
