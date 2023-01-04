import styles from '../styles/Home.module.css'
import Meta from "../components/Header/Meta";
import UnderlinedHeader from "../components/Design/UnderlinedHeader";
import { Text } from "@nextui-org/react";
import Section from "../components/Design/Section";
import LanguageItemGroup from "../components/Programming/LanguageItemGroup";

import programmingSkills from "../config/programming.json";
import IntroductionHero from "../components/Design/IntroductionHero";
import ThemeSwitcher from "../components/Theme/ThemeSwitcher";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta title="Home" />
      <main className={styles.main}>
        <ThemeSwitcher />
        <Section
        >
          <IntroductionHero/>
        </Section>
        <Section
          name="About Me"
        >
          <UnderlinedHeader anchor={"who"}>
            Who am I?
          </UnderlinedHeader>
          <Text
            p
            class={"text"}
          >
            Music production is the process of creating and recording music. It involves a range of tasks, including composing, arranging, recording, editing, and mixing. The goal of music production is to bring the music to life, creating a final product that captures the intended vision and emotion of the artist.

            There are many different approaches to music production, and the process can vary greatly depending on the type of music being produced and the resources available. Some music producers work in professional studios with a team of engineers and musicians, while others prefer to work independently in home studios.

            Regardless of the setup, music production requires a combination of technical skills and creative vision. Producers must have a strong understanding of music theory, as well as the ability to use a variety of software and hardware tools to record, edit, and mix audio. They must also have a keen ear for detail and be able to bring out the best in the music and the artist.

            As the music industry continues to evolve, the role of the music producer has become increasingly important. In addition to traditional production tasks, producers now often play a key role in shaping the direction and sound of a project, collaborating with artists to bring their vision to life and help them stand out in a crowded marketplace.
          </Text>
        </Section>
        <Section
          name="Projects"
        >
          <UnderlinedHeader anchor={"what"}>
            What do I do?
          </UnderlinedHeader>
          <Text
            p
            class={"text"}
          >
            Artificial intelligence (AI) has the potential to revolutionize every industry and aspect of our lives. It is a rapidly growing field that encompasses a wide range of technologies, from machine learning algorithms that can analyze vast amounts of data to natural language processing systems that can understand and respond to human language. AI has already made significant strides in areas such as image and speech recognition, and it has the potential to transform industries such as healthcare, finance, and transportation. The possibilities are nearly endless, and as AI continues to advance, it will undoubtedly change the way we live and work.
          </Text>
          <LanguageItemGroup
            title="Languages"
            languages={programmingSkills.languages}
          />
          <LanguageItemGroup
            title="Frameworks"
            languages={programmingSkills.frameworks}
          />
          <LanguageItemGroup
            title="Tools"
            languages={programmingSkills.tools}
          />
        </Section>
        <Section
          name="Contact"
        >
          <UnderlinedHeader anchor={"where"}>
            Where can you reach me?
          </UnderlinedHeader>
          <Text
            p
            class={"text"}
          >
            Discord is a communication platform designed for gamers, communities, and other groups. With Discord, users can connect via voice, video, or text and share media and files with each other. The app is available on a variety of platforms including desktop, web, and mobile, making it easy to stay connected with your community no matter where you are. Discord also features a wide range of customization options, including the ability to create and join servers, create and join channels, and customize your user profile. With its robust set of features and user-friendly interface, Discord has become a popular choice for gamers and communities looking for a way to stay connected and communicate online.
          </Text>
        </Section>
      </main>
    </div>
  )
}
