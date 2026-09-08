import { useEffect, useState } from "react";


export default function useFatch<T>(url: string){
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        setError("")

        const fatchData = async () => {
            try {

                const res = await fetch(url)
                if(!res.ok) throw new Error("falid to fatch")
                const data = await res.json()
                setData((data))
                
            } catch (err) {
                setError((err as Error).message)
            }
            finally{
                setLoading(false)
            }
        }

        fatchData()
    },
    
    [url])
    return {data, loading, error}
}