import Image from 'next/image';

type MovieRows = {
  sectionTitle: string;
};
type MovieCardProps = {
  index: number;
};

const MovieCard = (index: MovieCardProps) => {
  return (
    <div
      className='group relative h-28 min-w-[200px] 
          transform bg-gradient-to-t from-transparent to-black  transition duration-200 ease-in hover:z-50 hover:scale-110 md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px] '
    >
      <Image src={`/item_${index.index}.png`} fill={true} alt={`img_${index.index}` } />
    </div>
  );
};

export function MovieRows({ sectionTitle }: MovieRows) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='fond-bold text-2xl'>{sectionTitle}</h2>
      </div>
      <div className='group relative -ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide '>
        {[1, 2, 3, 4, 5].map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
