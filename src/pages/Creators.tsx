
import { useState } from "react";
import { Search, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Creators = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const creators = [
    {
      id: 1,
      name: "ArtistName",
      username: "@artistname",
      bio: "Digital artist creating surreal cosmic landscapes and abstract compositions",
      verified: true,
      followers: 12500,
      items: 45,
      volume: "234 ETH",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      banner: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=200&fit=crop"
    },
    {
      id: 2,
      name: "CryptoArtist",
      username: "@cryptoartist",
      bio: "Exploring the intersection of technology and creativity through digital art",
      verified: false,
      followers: 8200,
      items: 32,
      volume: "156 ETH",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=200&fit=crop"
    },
    {
      id: 3,
      name: "DigitalMaster",
      username: "@digitalmaster",
      bio: "Master of abstract digital compositions and generative art",
      verified: true,
      followers: 15800,
      items: 67,
      volume: "445 ETH",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=200&fit=crop"
    },
  ];

  const filteredCreators = creators.filter(creator =>
    creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    creator.username.toLowerCase().includes(searchTerm.toLowerCase())
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
              <Link to="/collections" className="text-gray-300 hover:text-white transition-colors">Collections</Link>
              <Link to="/creators" className="text-purple-400 font-medium">Creators</Link>
              <Link to="/profile" className="text-gray-300 hover:text-white transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Top Creators
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover talented artists and creators in the NFT space
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search creators..."
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
              <Users className="mx-auto mb-3 text-purple-400" size={32} />
              <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-400">Active Creators</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-gray-700">
            <CardContent className="p-6 text-center">
              <Award className="mx-auto mb-3 text-yellow-400" size={32} />
              <h3 className="text-2xl font-bold text-white mb-2">150+</h3>
              <p className="text-gray-400">Verified Artists</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="mx-auto mb-3 text-green-400" size={32} />
              <h3 className="text-2xl font-bold text-white mb-2">1.2K ETH</h3>
              <p className="text-gray-400">Total Creator Volume</p>
            </CardContent>
          </Card>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreators.map((creator) => (
            <Card key={creator.id} className="bg-black/40 border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer group overflow-hidden">
              <CardContent className="p-0">
                <Link to={`/creator/${creator.id}`}>
                  {/* Banner */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={creator.banner}
                      alt={`${creator.name} banner`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      {creator.verified && (
                        <Badge className="bg-blue-500/70 text-white">✓ Verified</Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Creator Info */}
                  <div className="relative px-6 pb-6">
                    <div className="absolute -top-8 left-6">
                      <Avatar className="w-16 h-16 border-4 border-gray-800">
                        <AvatarImage src={creator.avatar} />
                        <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="pt-12">
                      <h3 className="text-xl font-bold text-white mb-1">{creator.name}</h3>
                      <p className="text-purple-400 mb-3">{creator.username}</p>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{creator.bio}</p>
                      
                      <div className="grid grid-cols-3 gap-4 text-center mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Followers</p>
                          <p className="text-white font-semibold">{creator.followers.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Items</p>
                          <p className="text-white font-semibold">{creator.items}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Volume</p>
                          <p className="text-white font-semibold">{creator.volume}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                          Follow
                        </Button>
                        <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                          View Profile
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

export default Creators;
