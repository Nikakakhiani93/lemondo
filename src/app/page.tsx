import styles from './page.module.css';
import Header from '../components/header/Header';
import StaticNavMenu from '@/components/navmenu/Navmenu';
import Banner from '@/components/bainbanner/Banner';
import DomainItems from '@/containers/domainItems/DomainItems';

export default function Home() {
  const container1Items = [
    { label: 'დომენი' },
    { label: 'ტრანსფერი' },
    { label: 'ჰოსტინგი' },
    { label: 'Gmail' },
    { label: 'ვებგვერდი' },
    { label: 'დომენის მარკეტი' },
  ];

  const container2Items = [
    { label: 'ჩვენს შესახებ' },
    { label: 'ფასები' },
    { label: 'ბლოგი' },
    { label: 'დახმარება' },
  ];

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.navContainer}>
          <div className={styles.navMenus}>
            <StaticNavMenu items={container1Items} />
            <StaticNavMenu items={container2Items} />
          </div>
        </div>
        <Banner />
        <DomainItems />
      </main>
    </>
  );
}
