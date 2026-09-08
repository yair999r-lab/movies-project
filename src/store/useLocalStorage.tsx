import {create} from "zustand"
import { persist } from "zustand/middleware"

export type FavIds = {
    listOfFav: number[],
    toggelFev: (id: number) => void
}

export const useLocalStorge = create<FavIds>()(
    persist((set) => ({
        listOfFav: [],
        toggelFev: (id) => set((state) => {
            if(state.listOfFav.includes(id)){
                 return {listOfFav :state.listOfFav.filter((movieId) => movieId !== id)}}
            else {
                return {listOfFav: [...state.listOfFav, id]}
            }
        })
    }),
 {name: "avorit-movies-storage"}
)
)




