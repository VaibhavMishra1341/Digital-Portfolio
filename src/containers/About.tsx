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
            Hi, my name is Vaibhav Mishra, A 4th year CSE student with a passion for
            {' '}
            <ul className='my-3'>
              <li>- <strong>🔬 Data Science</strong></li>
              <li>- <strong>🤖 Artificial Intelligence</strong></li>
            </ul>{' '}
            Proficient in <strong>C++ and core development</strong>, My love for development started from <strong>Web Development</strong>. An avid open-source advocate and
            contributor. Learned a lot from the
            open-source community and love how collaboration and knowledge
            sharing happened through open-source. 
          </p>
          <p>I am open for Internships as well as Full-Time position.</p>

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
