import {create} from "zustand";
import axios from "axios";

type dataType = {
    array: string[];
    genre: string;
};

type Props = {
    movieData: dataType[] | null;
    getData: () => Promise<void>,
}

export const useGetMovie = create<Props>(() => ({
    movieData: [],
    getData: async () => {
        try{
           const response = await axios.get('/api/data.json') // add server api, where u can get data
               .then(response => response.data)
            return response;
        }
        catch(err){
            console.log(err)
            return [];
        }
    }
}))
