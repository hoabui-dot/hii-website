import Image from 'next/image'
import { Inter } from 'next/font/google'
import '../../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className='text-red-500'>hello</h1>
  )
}
