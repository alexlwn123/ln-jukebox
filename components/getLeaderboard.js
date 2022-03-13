import useSWR from 'swr'


export default function getLeaderboard() {
  const fetcher = async (input) => {
    await fetch(input);
    return res.json();
  }
  const {data} = useSWR('/api/spotify/querySongs/top-tracks', fetcher)
  

  return (
    data
  )
}