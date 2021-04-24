import { createContext } from 'react'

type Episode = {
    title: string;
    thumbnail: string;
    members: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    play: (Episode: Episode) => void;
}

export const PlayerContext = createContext({} as PlayerContextData)