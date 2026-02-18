"use client";
import React from "react";
import { Section } from "@/components/layouts/dynamic/Section";
import { MessageSquare, ThumbsUp, Eye, ChevronRight } from "lucide-react";

interface NewsItemProps {
  image: string;
  title: string;
  description: string;
  date: string;
  likes: number;
  comments: number;
  views: number;
  featured?: boolean;
}

const NewsCard: React.FC<NewsItemProps> = ({
  image,
  title,
  description,
  date,
  likes,
  comments,
  views,
  featured = false,
}) => {
  return (
    <div className="group cursor-pointer h-full w-full flex flex-col">
      {/* Image */}
      <div className={`relative ${featured ? 'h-32' : 'h-24'} w-full flex-shrink-0 overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="bg-white/5 backdrop-blur-sm p-3 border border-white/10 border-t-0 flex-1 flex flex-col min-h-0">
        <h3 className={`text-white font-semibold ${featured ? 'text-sm' : 'text-xs'} mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors`}>
          {title}
        </h3>
        <p className={`text-white/60 ${featured ? 'text-xs' : 'text-[10px]'} mb-2 line-clamp-${featured ? '2' : '1'} flex-1 min-h-0`}>{description}</p>
        <div className="text-white/40 text-[10px] mb-2">{date}</div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-white/50 text-[10px] flex-shrink-0">
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsCardCompact: React.FC<NewsItemProps> = ({
  image,
  title,
  date,
  likes,
  comments,
  views,
}) => {
  return (
    <div className="group cursor-pointer flex gap-2 p-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all w-full">
      {/* Image */}
      <div className="relative h-12 w-16 flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div className="flex-1 min-h-0">
          <h4 className="text-white font-medium text-[10px] mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h4>
          <div className="text-white/40 text-[8px] mb-1">{date}</div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2 text-white/50 text-[8px] flex-shrink-0">
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-2 h-2" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-2 h-2" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-2 h-2" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Données factices pour la démo
const establishedMarketsNews = [
  {
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400",
    title: "Suspendisse hendrerit nisi sit amet maximus tincidunt",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    date: "01/11/2024",
    likes: 6,
    comments: 4,
    views: 17,
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400",
    title: "Curabitur molestie tristique felis sed varius",
    description: "Integer vel lorem ac nisi accumsan malesuada",
    date: "28/10/2024",
    likes: 6,
    comments: 6,
    views: 12,
  },
  {
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400",
    title: "Maecenas et mi id nisi accumsan malesuada",
    description: "Praesent efficitur nulla eu scelerisque",
    date: "29/10/2024",
    likes: 2,
    comments: 3,
    views: 11,
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
    title: "Quisque aliquam auctor nulla eu scelerisque",
    description: "Pellentesque ut tellus dictum ornare",
    date: "08/10/2024",
    likes: 10,
    comments: 8,
    views: 10,
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
    title: "Morbi malesuada at tellus sagittis porta",
    description: "Donec consectetur diam consequat",
    date: "22/10/2024",
    likes: 11,
    comments: 5,
    views: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
    title: "Facilisis scelerisque diam consequat tincidunt",
    description: "Sed posuere est et varius elementum",
    date: "16/10/2024",
    likes: 11,
    comments: 5,
    views: 17,
  },
  {
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
    title: "Sed posuere est et varius elementum tortor molestie",
    description: "Nunc et consectetur diam",
    date: "08/10/2024",
    likes: 12,
    comments: 3,
    views: 8,
  },
    {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
    title: "Facilisis scelerisque diam consequat tincidunt",
    description: "Sed posuere est et varius elementum",
    date: "16/10/2024",
    likes: 11,
    comments: 5,
    views: 17,
  },
  {
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400",
    title: "Sed posuere est et varius elementum tortor molestie",
    description: "Nunc et consectetur diam",
    date: "08/10/2024",
    likes: 12,
    comments: 3,
    views: 8,
  },
];

const londonNews = [
  {
    image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=400",
    title: "Aenean sodales augue vitae sagittis aliquet",
    date: "01/11/2024",
    likes: 11,
    comments: 5,
    views: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400",
    title: "Nam vel est non mauris finibus tincidunt",
    date: "22/10/2024",
    likes: 10,
    comments: 2,
    views: 11,
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
    title: "Donec sit amet quam id justo pellentesque",
    date: "17/10/2024",
    likes: 9,
    comments: 7,
    views: 17,
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
    title: "Facilisis scelerisque diam consequat tincidunt",
    date: "10/10/2024",
    likes: 11,
    comments: 5,
    views: 17,
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400",
    title: "Nam vel est non mauris finibus tincidunt",
    date: "22/10/2024",
    likes: 10,
    comments: 2,
    views: 11,
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
    title: "Donec sit amet quam id justo pellentesque",
    date: "17/10/2024",
    likes: 9,
    comments: 7,
    views: 17,
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
    title: "Facilisis scelerisque diam consequat tincidunt",
    date: "10/10/2024",
    likes: 11,
    comments: 5,
    views: 17,
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
    title: "Facilisis scelerisque diam consequat tincidunt",
    date: "10/10/2024",
    likes: 11,
    comments: 5,
    views: 17,
  },
];

export default function NewsSection() {
  return (
    <div className="w-full py-6 px-6 mt-4">
      {/* Container principal avec flexbox row */}
      <div className="max-w-full mx-auto flex flex-row gap-3">
        {/* Partie gauche - Established Markets news (Grid 4 colonnes) */}
        <div className="w-[70%] min-w-[60%] max-w-[70%]">
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 text-sm">📰</span>
              </div>
              <h2 className="text-xl font-semibold text-white">
                Established Markets news
              </h2>
            </div>
            <button className="flex items-center gap-1 text-blue-400 text-sm hover:text-blue-300 transition-colors">
              View all
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-1 pt-1 auto-rows-auto">
            {establishedMarketsNews.map((news, index) => (
              <div key={index} className={index === 0 ? 'col-span-2 row-span-2' : ''}>
                <NewsCard {...news} featured={index === 0} />
              </div>
            ))}
          </div>
        </div>

        {/* Partie droite - London news (Grid 1 colonne) */}
        <div className="w-[30%] min-w-[30%] max-w-[30%]">
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-500/20 flex items-center justify-center">
                <span className="text-gray-400 text-sm">📍</span>
              </div>
              <h2 className="text-xl font-semibold text-white">
                London news
              </h2>
            </div>
            <button className="flex items-center gap-1 text-blue-400 text-sm hover:text-blue-300 transition-colors">
              View all
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 pt-1">
            {londonNews.map((news, index) => (
              <NewsCardCompact key={index} {...news} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}