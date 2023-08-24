import { getSectionAnimation } from '../animations';
import { HeroImage, ListItem, Wrapper } from '../components';
import { getId } from '../utils/helper';
import { aboutSection, author } from '../utils/portfolio';
import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hello, I'm Vaibhav Mishra, currently in my fourth year of Computer
            Science Engineering. My interests lie in:{' '}
            <ul className="my-3">
              <li>
                - <strong>🔬 Data Science</strong>
              </li>
              <li>
                - <strong>🤖 Artificial Intelligence</strong>
              </li>
            </ul>{' '}
            I have a strong command over <strong>C++ and core development</strong>. My journey in
            development commenced with <strong>Web Development</strong>, which I am very
            passionate about. I am also enthusiastic about open-source
            initiatives, actively participating and contributing. The
            open-source community has taught me valuable lessons and I
            appreciate how it fosters collaboration and the sharing of
            knowledge.  {' '}
          </p>
          <p>I am actively seeking opportunities for both internships
            and full-time positions</p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
