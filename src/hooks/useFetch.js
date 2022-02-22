import {useEffect, useState} from "react";
export const useFetch = (client) => {

  const [data, setData] = useState(null)
  const [meta, setMeta] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetch = async (filters,page) => {

    setLoading(true)
    try {
      const {data:responseData,meta:responseMeta} = await client({...filters,page});
      setData(responseData)
      setMeta(responseMeta)
    } catch (e) {
      setError(e)
      setData(null)
    }
    setLoading(false)

  };
  useEffect(() => {
    fetch()
  }, [])

  return {data, setData, loading, error,setError,meta, fetch}
}
