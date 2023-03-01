import styles from "./Home.module.scss";
import Circles from "../../ui/cicrles/Circles";
import MetaTitle from "../../ui/MetaTitle";
import AboutMe from "./aboutMe/AboutMe";
import Grid from "./grid/Grid";
import ResentVideos from "./resent-videos/ResentVideos";

const Home = ({ links, me }) => {
  return (
    <section className={styles.section}>
      <MetaTitle title="Red Links | Все полезные ссылки тут" />
      <div className={styles.container}>
        <AboutMe me={me} />
        <ResentVideos />
        <Grid links={links} />
      </div>
      <Circles />
    </section>
  );
};

export default Home;
