import Image from 'next/image';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';
import Header from './components/Header';
import { MovieRows } from './components/MovieRows';

const Banner = () => {
  return(
  <div className="mb-10">
  <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
              src='/witcher.jpg'
              className='h-[65vh] object-cover object-top lg:h-[95vh]'
              fill={true}
              alt='The Witcher'
            />
          </div>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            The Witcher
          </h1>
          <p className='max-w-xs text-xs drop-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl '>
            Geralf of Rivia, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beasts.
          </p>
        </div>

        <div className='-ml-2 flex space-x-3'>
          <button className='flex items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
            <PlayIcon className='h-6' />
            Play
          </button>
          <button className='flex items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5 md:text-xl'>
            <InformationCircleIcon className='h-6' />
            More Info
          </button>
        </div>
  </div>
  )
}

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner/>
        <MovieRows sectionTitle='Trending now'/>
        <MovieRows sectionTitle='Top Rated'/>
        <MovieRows sectionTitle='Action Movies'/>
      </main>
    </div>
  );
}
