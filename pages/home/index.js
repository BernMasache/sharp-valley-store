
import styles from '../../styles/Home.module.css'
import HomeComponent from '../../components/home'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage(props) {
  
  return (
   <div className={styles.main}>
   
    <HomeComponent/>
   </div>
  )
}
