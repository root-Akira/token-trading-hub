
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Share2, Flag, TrendingUp, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NFTDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  // Mock NFT data - in real app this would come from API
  const nft = {
    id: 1,
    title: "Cosmic Dreams #001",
    description: "A stunning piece of digital art that captures the essence of cosmic beauty and otherworldly landscapes. This unique NFT represents hours of meticulous digital craftsmanship.",
    creator: {
      name: "ArtistName",
      username: "@artistname",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      verified: true
    },
    owner: {
      name: "CollectorName",
      username: "@collector",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    price: "2.5 ETH",
    usdPrice: "$4,250",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop",
    likes: 42,
    views: 1250,
    category: "Digital Art",
    blockchain: "Ethereum",
    tokenId: "#7841",
    contractAddress: "0x1234...5678",
    royalties: "10%",
    created: "2024-01-15"
  };

  const priceHistory = [
    { date: "2024-01-15", price: "1.8 ETH", buyer: "0x1234...5678" },
    { date: "2024-01-20", price: "2.2 ETH", buyer: "0x8765...4321" },
    { date: "2024-01-25", price: "2.5 ETH", buyer: "0x9876...1234" },
  ];

  const attributes = [
    { trait: "Background", value: "Cosmic Purple", rarity: "15%" },
    { trait: "Style", value: "Abstract", rarity: "25%" },
    { trait: "Mood", value: "Ethereal", rarity: "8%" },
    { trait: "Elements", value: "Stars", rarity: "30%" },
  ];

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
              <Link to="/creators" className="text-gray-300 hover:text-white transition-colors">Creators</Link>
              <Link to="/profile" className="text-gray-300 hover:text-white transition-colors">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* NFT Image */}
          <div className="space-y-6">
            <Card className="bg-black/40 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full aspect-square object-cover"
                />
              </CardContent>
            </Card>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={`border-gray-600 ${isLiked ? 'text-red-400 border-red-400' : 'text-gray-400'}`}
              >
                <Heart size={16} className={isLiked ? 'fill-current' : ''} />
                {nft.likes + (isLiked ? 1 : 0)}
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400">
                <Share2 size={16} />
                Share
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400">
                <Flag size={16} />
                Report
              </Button>
            </div>
          </div>

          {/* NFT Details */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <Badge className="mb-4 bg-purple-500/20 text-purple-400">{nft.category}</Badge>
              <h1 className="text-4xl font-bold text-white mb-4">{nft.title}</h1>
              
              {/* Creator & Owner */}
              <div className="flex flex-col space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400">Created by</span>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={nft.creator.avatar} />
                    <AvatarFallback>{nft.creator.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Link to={`/creator/${nft.creator.username}`} className="text-purple-400 hover:text-purple-300">
                    {nft.creator.name}
                  </Link>
                  {nft.creator.verified && <span className="text-blue-400">✓</span>}
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400">Owned by</span>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={nft.owner.avatar} />
                    <AvatarFallback>{nft.owner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Link to={`/profile/${nft.owner.username}`} className="text-purple-400 hover:text-purple-300">
                    {nft.owner.name}
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 mb-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Eye size={16} />
                  <span>{nft.views} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart size={16} />
                  <span>{nft.likes} likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>Created {nft.created}</span>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <Card className="bg-black/40 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-400 mb-1">Current Price</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-white">{nft.price}</span>
                      <span className="text-gray-400">{nft.usdPrice}</span>
                    </div>
                  </div>
                  <TrendingUp className="text-green-400" size={24} />
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Buy Now
                  </Button>
                  <Button variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700">
                    Make Offer
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="bg-black/40 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed">{nft.description}</p>
              </CardContent>
            </Card>

            {/* Details */}
            <Card className="bg-black/40 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Contract Address</span>
                    <span className="text-purple-400">{nft.contractAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Token ID</span>
                    <span className="text-white">{nft.tokenId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Blockchain</span>
                    <span className="text-white">{nft.blockchain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Creator Royalties</span>
                    <span className="text-white">{nft.royalties}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <Tabs defaultValue="attributes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black/40">
              <TabsTrigger value="attributes">Attributes</TabsTrigger>
              <TabsTrigger value="history">Price History</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="attributes" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {attributes.map((attr, index) => (
                  <Card key={index} className="bg-black/40 border-gray-700">
                    <CardContent className="p-4 text-center">
                      <p className="text-purple-400 text-sm mb-1">{attr.trait}</p>
                      <p className="text-white font-semibold mb-2">{attr.value}</p>
                      <Badge variant="outline" className="border-gray-600 text-gray-400">
                        {attr.rarity} rare
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="history" className="mt-6">
              <Card className="bg-black/40 border-gray-700">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {priceHistory.map((entry, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
                        <div>
                          <p className="text-white font-semibold">{entry.price}</p>
                          <p className="text-gray-400 text-sm">{entry.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-400 text-sm">Bought by</p>
                          <p className="text-purple-400">{entry.buyer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity" className="mt-6">
              <Card className="bg-black/40 border-gray-700">
                <CardContent className="p-6">
                  <p className="text-gray-400 text-center">Activity feed coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
