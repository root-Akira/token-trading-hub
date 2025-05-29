
import { useState } from "react";
import { Settings, Share2, Edit, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Profile = () => {
  const [viewMode, setViewMode] = useState("grid");

  const user = {
    name: "Your Name",
    username: "@yourname",
    bio: "Digital artist and NFT collector passionate about creating unique digital experiences",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    banner: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=300&fit=crop",
    verified: true,
    joined: "January 2024",
    followers: 1250,
    following: 340,
    website: "yourwebsite.com"
  };

  const stats = {
    created: 24,
    collected: 67,
    favorited: 89,
    sales: 15
  };

  const ownedNFTs = [
    {
      id: 1,
      title: "Cosmic Dreams #001",
      price: "2.5 ETH",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
      collection: "Cosmic Collection"
    },
    {
      id: 2,
      title: "Digital Abstract",
      price: "1.8 ETH",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
      collection: "Abstract Series"
    },
    {
      id: 3,
      title: "Neon Genesis",
      price: "3.2 ETH",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop",
      collection: "Neon Collection"
    },
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
              <Link to="/profile" className="text-purple-400 font-medium">Profile</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="relative mb-8">
          {/* Banner */}
          <div className="h-48 md:h-64 rounded-lg overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600">
            <img
              src={user.banner}
              alt="Profile banner"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="w-32 h-32 border-4 border-gray-800 -mt-16 bg-gray-800">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                    <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                    {user.verified && <Badge className="bg-blue-500">✓</Badge>}
                  </div>
                  <p className="text-purple-400 mb-2">{user.username}</p>
                  <p className="text-gray-300 max-w-md mb-4">{user.bio}</p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
                    <span>Joined {user.joined}</span>
                    <span>•</span>
                    <span>{user.followers} followers</span>
                    <span>•</span>
                    <span>{user.following} following</span>
                    <span>•</span>
                    <span>{user.website}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                  <Edit size={16} className="mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                  <Settings size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-black/40 border-gray-700">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-1">{stats.created}</h3>
              <p className="text-gray-400">Created</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-gray-700">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-1">{stats.collected}</h3>
              <p className="text-gray-400">Collected</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-gray-700">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-1">{stats.favorited}</h3>
              <p className="text-gray-400">Favorited</p>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-gray-700">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-1">{stats.sales}</h3>
              <p className="text-gray-400">Sales</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="collected" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="bg-black/40">
              <TabsTrigger value="collected">Collected</TabsTrigger>
              <TabsTrigger value="created">Created</TabsTrigger>
              <TabsTrigger value="favorited">Favorited</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            
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
          
          <TabsContent value="collected">
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
              {ownedNFTs.map((nft) => (
                <Card key={nft.id} className="bg-black/40 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-0">
                    <Link to={`/nft/${nft.id}`}>
                      <img
                        src={nft.image}
                        alt={nft.title}
                        className="w-full h-64 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-white mb-1">{nft.title}</h4>
                        <p className="text-gray-400 text-sm mb-3">{nft.collection}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-white">{nft.price}</span>
                          <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                            View
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="created">
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No created NFTs yet</p>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Create Your First NFT
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="favorited">
            <div className="text-center py-12">
              <p className="text-gray-400">No favorited items yet</p>
            </div>
          </TabsContent>
          
          <TabsContent value="activity">
            <div className="text-center py-12">
              <p className="text-gray-400">Activity feed coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
