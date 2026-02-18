"use client";

import React, { useState } from "react";
import { 
  Plus,
  MoreVertical,
  Check,
  ChevronLeft,
  User,
  MessageSquare,
  Repeat,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

export default function AppsHomeRightContent() {
  // RIGHT PANEL COMPONENT
  // Composant ProfileDetails
  interface ProfileDetailsProps {
    name: string;
    username: string;
    bio: string;
    location: string;
    website: string;
    joinDate: string;
    following: string;
    followers: string;
    avatar: string;
    coverImage: string;
    onBack: () => void;
  }

  const ProfileDetails: React.FC<ProfileDetailsProps> = ({
    name,
    username,
    bio,
    location,
    website,
    joinDate,
    following,
    followers,
    avatar,
    coverImage,
    onBack,
  }) => (
    <div className="h-full overflow-y-auto scrollbar-hide">
      {/* Cover Image */}
      <div className="relative h-24 bg-gradient-to-br from-green-900 to-green-700">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-2 left-2 w-7 h-7 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm z-10"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Profile Info */}
      <div className="px-3 pb-3">
        {/* Avatar & Edit Button */}
        <div className="flex items-start justify-between -mt-8 mb-2">
          <div className="w-16 h-16 rounded-full border-3 border-[#1a1a1a] bg-gradient-to-br from-purple-500 to-pink-500" />
          <button className="mt-10 px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-white text-xs font-semibold transition-colors">
            Edit
          </button>
        </div>

        {/* Name & Username */}
        <div className="mb-2">
          <div className="flex items-center gap-1">
            <h2 className="text-sm font-bold text-white">{name}</h2>
            <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[8px]">✓</span>
            </div>
          </div>
          <p className="text-xs text-gray-400">{username}</p>
        </div>

        {/* Bio */}
        <p className="text-xs text-white mb-2">{bio}</p>

        {/* Info */}
        <div className="space-y-1 mb-2">
          <div className="flex items-center gap-1 text-gray-400">
            <User className="w-3 h-3" />
            <span className="text-xs">{location}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span className="text-xs">🔗</span>
            <span className="text-xs text-blue-400">{website}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span className="text-xs">📅</span>
            <span className="text-xs">{joinDate}</span>
          </div>
        </div>

        {/* Following/Followers */}
        <div className="flex items-center gap-3 mb-3">
          <div>
            <span className="text-xs font-bold text-white">{following}</span>
            <span className="text-xs text-gray-400"> Following</span>
          </div>
          <div>
            <span className="text-xs font-bold text-white">{followers}</span>
            <span className="text-xs text-gray-400"> Followers</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-3">
          <button className="flex-1 py-2 text-xs font-semibold text-white border-b-2 border-blue-500">
            Tweets
          </button>
          <button className="flex-1 py-2 text-xs font-semibold text-gray-400 hover:bg-white/5">
            Replies
          </button>
          <button className="flex-1 py-2 text-xs font-semibold text-gray-400 hover:bg-white/5">
            Media
          </button>
          <button className="flex-1 py-2 text-xs font-semibold text-gray-400 hover:bg-white/5">
            Likes
          </button>
        </div>

        {/* Tweet Example */}
        <div className="space-y-3">
          <div className="border-b border-white/10 pb-3">
            <div className="flex items-start gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xs font-bold text-white">Twitter</span>
                  <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px]">✓</span>
                  </div>
                  <span className="text-xs text-gray-400">@Twitter • 9h</span>
                </div>
                <p className="text-xs text-white mb-2">
                  Say goodbye to prying eyes and hello to secure conversations.
                  We're giving early access to Encrypted Direct Messages v1 to
                  our verified users.
                </p>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    <span className="text-xs">268</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Repeat className="w-3 h-3" />
                    <span className="text-xs">839</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs">6,707</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">📊 1.7M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10 pb-3">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xs font-bold text-white">Max FMZ</span>
                  <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px]">✓</span>
                  </div>
                  <span className="text-xs text-gray-400">@Bymaxfmz • 10h</span>
                </div>
                <p className="text-xs text-white mb-2">
                  What the future of Twitter could look like. Spatial Design is
                  so much fun fr.
                </p>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    <span className="text-xs">1</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Repeat className="w-3 h-3" />
                    <span className="text-xs">2</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs">10</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">📊 2,908</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Mise à jour du ProfileItem pour gérer le clic
  interface ProfileItemProps {
    name: string;
    songTitle: string;
    artist: string;
    avatar: string;
    timeAgo?: string;
    onClick: () => void;
  }

  const ProfileItem: React.FC<ProfileItemProps> = ({
    name,
    songTitle,
    artist,
    avatar,
    timeAgo,
    onClick,
  }) => (
    <div
      onClick={onClick}
      className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white text-sm truncate">{name}</p>
        <p className="text-xs text-gray-300 truncate">{songTitle}</p>
        <p className="text-xs text-gray-500 truncate">🎵 {artist}</p>
      </div>
      {timeAgo && (
        <span className="text-xs text-gray-500 flex-shrink-0">{timeAgo}</span>
      )}
    </div>
  );

  // Composant principal avec carousel
  const RightPanelWithCarousel = () => {
    const [selectedProfile, setSelectedProfile] = React.useState<string | null>(
      null
    );

    const friendsActivity = [
      {
        id: "1",
        name: "Cody Fisher",
        songTitle: "When You Die",
        artist: "Shawn Mendes",
        avatar: "",
        timeAgo: "",
      },
      {
        id: "2",
        name: "Jane Cooper",
        songTitle: "Freak In Me",
        artist: "Tones and I",
        avatar: "",
        timeAgo: "",
      },
      {
        id: "3",
        name: "Bessie Cooper",
        songTitle: "Losing My Religion",
        artist: "Nicky Jam",
        avatar: "",
        timeAgo: "",
      },
      {
        id: "4",
        name: "Theresa Webb",
        songTitle: "Can I Call You Tonight?",
        artist: "Lizzo",
        avatar: "",
        timeAgo: "",
      },
      {
        id: "5",
        name: "Floyd Miles",
        songTitle: "Mine",
        artist: "Lauv",
        avatar: "",
        timeAgo: "",
      },
      {
        id: "6",
        name: "Arlene McCoy",
        songTitle: "Lucky Girl",
        artist: "Lady Gaga",
        avatar: "",
        timeAgo: "",
      },
      {
        id: "7",
        name: "Ralph Edwards",
        songTitle: "Lemon Tree",
        artist: "Sech",
        avatar: "",
        timeAgo: "1 hr",
      },
      {
        id: "8",
        name: "Albert Flores",
        songTitle: "Lover Boy",
        artist: "Marshmello",
        avatar: "",
        timeAgo: "4 hr",
      },
      {
        id: "9",
        name: "Wade Warren",
        songTitle: "Baby One More Time",
        artist: "The Chainsmokers",
        avatar: "",
        timeAgo: "4 hr",
      },
      {
        id: "10",
        name: "Robert Fox",
        songTitle: "Show Me How",
        artist: "Daddy Yankee",
        avatar: "",
        timeAgo: "1 d",
      },
      {
        id: "11",
        name: "Kathryn Murphy",
        songTitle: "You & Me",
        artist: "J Balvin",
        avatar: "",
        timeAgo: "2 d",
      },
      {
        id: "12",
        name: "Kristin Watson",
        songTitle: "Wonderful Tonight",
        artist: "Ed Sheeran",
        avatar: "",
        timeAgo: "2 d",
      },
      {
        id: "13",
        name: "Darrell Steward",
        songTitle: "Some Feeling",
        artist: "Ed Sheeran",
        avatar: "",
        timeAgo: "2 d",
      },
      {
        id: "14",
        name: "Annette Black",
        songTitle: "My Life",
        artist: "Lil Nas X",
        avatar: "",
        timeAgo: "2 d",
      },
      {
        id: "15",
        name: "Brooklyn Simmons",
        songTitle: "Bad Ideas",
        artist: "MEDUZA",
        avatar: "",
        timeAgo: "2 d",
      },
    ];

    const mockProfileData = {
      name: "Max Fmz",
      username: "@bymxfmz",
      bio: "UX/UI Designer. Outdoor enthusiast. Coffee lover.",
      location: "Switzerland",
      website: "mfz.framer.website",
      joinDate: "Joined June 2023",
      following: "1.6M",
      followers: "99",
      avatar: "",
      coverImage: "",
    };

    return (
      <div className="h-full overflow-hidden relative">
        {/* Liste des amis */}
        <motion.div
          initial={false}
          animate={{ x: selectedProfile ? "-100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 overflow-y-auto scrollbar-hide"
        >
          <div className="p-4 space-y-1">
            <h2 className="text-lg font-bold text-white mb-4">
              Friends Activity
            </h2>
            {friendsActivity.map((friend) => (
              <ProfileItem
                key={friend.id}
                name={friend.name}
                songTitle={friend.songTitle}
                artist={friend.artist}
                avatar={friend.avatar}
                timeAgo={friend.timeAgo}
                onClick={() => setSelectedProfile(friend.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* Détails du profil */}
        <motion.div
          initial={false}
          animate={{ x: selectedProfile ? "0%" : "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#1a1a1a]"
        >
          {selectedProfile && (
            <ProfileDetails
              {...mockProfileData}
              onBack={() => setSelectedProfile(null)}
            />
          )}
        </motion.div>
      </div>
    );
  };

  return (
    <RightPanelWithCarousel />
  );
}