import Hero from '../_hero/Hero';
import { HomePage } from '@/components/HomePage';
import { JsonLd } from '@/components/JsonLd';

export default function Page(){ 
  return (
    <main id="main">
      <Hero locale="de" />
      <JsonLd locale="de" />
      <HomePage />
    </main>
  ); 
}