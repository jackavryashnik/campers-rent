import Card from '../../components/Card/Card';

const obj = {
  _id: '5',
  name: 'El Monte Class C Small [C]',
  price: 11000,
  rating: 4.4,
  location: 'Ukraine, Odesa',
  adults: 4,
  children: 0,
  engine: 'petrol',
  transmission: 'automatic',
  form: 'alcove',
  length: '6.4m',
  width: '2.54m',
  height: '3.4m',
  tank: '208l',
  consumption: '25l/100km',
  description:
    "Experience the perfect blend of compact design and functionality with the El Monte Class C Small [C]. Tailored for small families or groups of four, this motorhome provides a cozy and efficient way to explore the open roads and create lasting memories. Whether you're planning a weekend getaway or an extended road trip, the El Monte Class C Small [C] offers a hassle-free and comfortable travel experience.",
  details: {
    airConditioner: 1,
    bathroom: 1,
    kitchen: 1,
    beds: 3,
    TV: 1,
    CD: 1,
    radio: 1,
    shower: 1,
    toilet: 1,
    freezer: 1,
    hob: 3,
    microwave: 1,
    gas: '27kg',
    water: '151l',
  },
  gallery: [
    'https://ftp.goit.study/img/campers-test-task/5-1.webp',
    'https://ftp.goit.study/img/campers-test-task/5-2.webp',
    'https://ftp.goit.study/img/campers-test-task/5-3.webp',
  ],
  reviews: [
    {
      reviewer_name: 'Alice',
      reviewer_rating: 5,
      comment:
        'The El Monte Class C Small [C] was the perfect choice for our family of four. Compact yet surprisingly spacious, it provided all the amenities we needed. The kitchen facilities were excellent, and the overall experience was delightful.',
    },
    {
      reviewer_name: 'Bob',
      reviewer_rating: 3,
      comment:
        'A decent motorhome for a small family. The El Monte Class C Small [C] offered convenience, but the bed setup was a bit cramped. Good for short trips but might need more space for an extended journey.',
    },
  ],
};

const HomePage = () => {
  return (
    <div>
      <Card obj={obj} />
    </div>
  );
};

export default HomePage;
