import BookSpread from '@/components/book/BookSpread';
import ServiceCategoriesMenu from '@/components/pages/ServiceCategoriesMenu';
import PersonasPage from '@/components/pages/PersonasPage';

export default function Home() {
  return (
    <BookSpread
      leftPage={<ServiceCategoriesMenu />}
      rightPage={<PersonasPage />}
    />
  );
}
