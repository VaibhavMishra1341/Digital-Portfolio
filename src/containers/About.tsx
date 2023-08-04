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
            Hi, my name is Vaibhav Mishra, A 4th year CSE student with interests in <ul>
              <li>- 🔬 Data Science</li> 
              <li>- 🤖 Artificial Intelligence</li>
            </ul> Interested in doing Core Development using
            C++ and similar tech. I like to sprinkle some Web Development here
            and there. I am also an open-source enthusiast and maintainer. Learned a lot from the open-source community and love how
            collaboration and knowledge sharing happened through open-source.
          </p>
          <p>
            I am open for Internships as well as Full-Time position.
          </p>

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
