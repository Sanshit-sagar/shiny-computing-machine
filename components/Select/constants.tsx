import {
  DribbleIcon,
  MetaIcon, 
  GoogleIcon, 
  PlaystationIcon,
  TikTokIcon,
  YouTubeIcon,
  LinkedInIcon,
  NotionIcon,
  FigmaIcon,
  GitHubIcon,
  SpotifyIcon,
  SnapchatIcon,
  BehanceIcon,
  RedditIcon
} from '@/components/Icons'
import React from 'react' 

export const people = [
    {
      id: 1,
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Gilberto Miguel",
      username: "@gilberto_miguel",
      isDisabled: false
    },
    {
      id: 2,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Maia Pettegree",
      username: "@mpettegree",
      isDisabled: false
    },
    {
      id: 3,
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Wade Redington",
      username: "@redington",
      isDisabled: false
    },
    {
      id: 4,
      avatar:
        "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Kurtis Gurrado",
      username: "@kurtis",
      isDisabled: false
    },
    {
      id: 5,
      avatar:
        "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Sonja Balmann",
      username: "@sbalmann",
      isDisabled: false
  }, {
      id: 6,
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Brent Mickey",
      username: "@brent_m",
      isDisabled: false
  }
]

export interface SocialMedium {
  id: number;
  icon: React.ReactNode;
  name: string;
  link: `${string}.com`; 
  isDisabled: boolean;
}

export const socials: SocialMedium[] = [{
    id: 0,
    icon: <MetaIcon />,
    name: 'Meta',
    link: 'meta.com',
    isDisabled: false,
  }, {
    id: 1,
    icon: <GoogleIcon />,
    name: 'Google',
    link: 'google.com',
    isDisabled: false
  }, {
    id: 2,
    icon: <NotionIcon />,
    name: 'Notion',
    link: 'notion.com',
    isDisabled: false,
  }, {
    id: 3,
    icon: <FigmaIcon />,
    name: 'Figma',
    link: 'figma.com',
    isDisabled: false,
  }, {
    id: 4,
    icon: <LinkedInIcon />,
    name: 'LinkedIn',
    link: 'linkedin.com',
    isDisabled: false,
  }, {
    id: 5,
    icon: <GitHubIcon />,
    name: 'Github',
    link: 'github.com',
    isDisabled: false,
  }, {
    id: 6,
    icon: <PlaystationIcon />,
    name: 'Playstation',
    link: 'playstation.com',
    isDisabled: false,
  }, {
    id: 7,
    icon: <TikTokIcon />,
    name: 'TikTok',
    link: 'tiktok.com',
    isDisabled: false
  }, {
    id: 8,
    icon: <YouTubeIcon />,
    name: 'YouTube',
    link: 'youtube.com',
    isDisabled: false
  }, {
    id: 9,
    icon: <SpotifyIcon />,
    name: 'Spotify',
    link: 'spotify.com',
    isDisabled: false
  }, {
    id: 10,
    icon: <SnapchatIcon />,
    name: 'Snapchat',
    link: 'snapchat.com',
    isDisabled: false
  }, {
    id: 11,
    icon: <RedditIcon />,
    name: 'Reddit',
    link: 'reddit.com',
    isDisabled: false
  }, {
    id: 12,
    icon: <BehanceIcon />,
    name: 'Behance',
    link: 'behance.com',
    isDisabled: false
}, ]