import styles from './page.module.css';
import Header from '../components/Header/Header';
import StaticNavMenu from '@/components/Navmenu/navmenu';
import Banner from '@/components/Mainbanner/Banner';

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
      </main>
    </>
  );
}
