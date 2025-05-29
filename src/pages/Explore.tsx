
import { useState } from "react";
import { Search, Filter, Grid, List, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("recent");

  const categories = ["all", "art", "gaming", "music", "photography", "sports", "collectibles"];

  const nfts = [
    {
      id: 1,
      title: "Cosmic Dreams #001",
      creator: "ArtistName",
      price: "2.5 ETH",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      likes: 42,
      verified: true,
      category: "art"
    },
    {
      id: 2,
      title: "Digital Abstract",
      creator: "CryptoArtist",
      price: "1.8 ETH",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      likes: 28,
      verified: false,
      category: "art"
    },
    {
      id: 3,
      title: "Gaming Legend",
      creator: "GameMaster",
      price: "3.2 ETH",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop",
      likes: 67,
      verified: true,
      category: "gaming"
    },
    {
      id: 4,
      title: "Music Waves",
      creator: "SoundArtist",
      price: "1.5 ETH",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      likes: 35,
      verified: true,
      category: "music"
    },
  ];

  const filteredNFTs = nfts.filter(nft => {
    const matchesSearch = nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nft.creator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || nft.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Link to="/explore" className="text-purple-400 font-medium">Explore</Link>
              <Link to="/collections" className="text-gray-300 hover:text-white transition-colors">Collections</Link>
              <Link to="/creators" className="text-gray-300 hover:text-white transition-colors">Creators</Link>
              <Link to="/profile" className="text-gray-300 hover:text-white transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search NFTs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-black/30 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 bg-black/30 border-gray-600 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="recent">Recently Added</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <List size={16} />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-4 py-2 cursor-pointer transition-all duration-200 ${
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

        {/* NFT Grid */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
          {filteredNFTs.map((nft) => (
            <Card key={nft.id} className="bg-black/40 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-0">
                <Link to={`/nft/${nft.id}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={nft.image}
                      alt={nft.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-black/70 text-white">
                        <Heart size={12} className="mr-1" />
                        {nft.likes}
                      </Badge>
                      {nft.verified && (
                        <Badge className="bg-blue-500/70 text-white">✓</Badge>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">{nft.title}</h4>
                    <p className="text-gray-400 mb-3">by {nft.creator}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Price</p>
                        <p className="text-xl font-bold text-white">{nft.price}</p>
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Load More NFTs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
