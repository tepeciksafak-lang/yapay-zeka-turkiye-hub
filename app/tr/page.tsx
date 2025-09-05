import Hero from '../_hero/Hero';
import { HomePage } from '@/components/HomePage';
import { JsonLd } from '@/components/JsonLd';

export default function Page(){ 
  return (
    <main id="main">
      <Hero locale="tr" />
      <JsonLd locale="tr" />
      <HomePage />
    </main>
  ); 
}