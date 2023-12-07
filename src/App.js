import Navbar from './Components/Navbar';
import Hero from './Sections/Hero';
import PopularProducts from './Sections/PolularProducts';
import SuperQuality from './Sections/SuperQuality';
import Services from './Sections/Services';
import SpecialOffers from './Sections/SpecialOffers';
import CustomerReviews from './Sections/CustomerReviews';
import Subscribe from './Sections/Subscribe';
import Footer from './Sections/Footer';

const App = () => (
  <main className='relative'>
    <Navbar />
    <section className='lg:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='bg-pale-blue padding'>
      <PopularProducts />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='bg-pale-blue padding-x py-10'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffers />
    </section>
    <section className='bg-pale-blue padding'>
      <CustomerReviews />
    </section>
    <section className='padding-x sm:py32 py-16 w-full'>
      <Subscribe />
    </section>
    <section className='bg-black padding-x padding-t pb-8'>
      <Footer />
    </section>
  </main>
);

export default App;