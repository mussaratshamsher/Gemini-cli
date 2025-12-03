import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  imageSrc?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About the Book',
    imageSrc: '/img/about-book.jpg',
    description: (
      <>
        A hands-on guide to designing, building, and publishing simple AI agents using modern tools like Gemini and Docusaurus. Learn the fundamentals of AI agents and build your own project.
      </>
    ),
  },
  {
    title: 'Who Is This For?',
    imageSrc: '/img/users.jpg',
    description: (
      <>
        This book is for developers, AI learners, technical writers, and hobbyists interested in Agentic AI, Docusaurus, and practical AI applications. Basic web knowledge is helpful but not required.
      </>
    ),
  },
  {
    title: 'About the Author',
    imageSrc: '/img/author.jpg',
    description: (
      <>
        Mussarat Shamsher is a Full-Stack Developer and Co-Founder of <a href="https://www.innolyze.com/" target="_blank" rel="noopener noreferrer">Innolyze</a>. She specializes in building clean, scalable web applications and is currently exploring Agentic AI.
      </>
    ),
  },
];

function Feature({title, Svg, imageSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : imageSrc ? (
          <img src={imageSrc} className={styles.featureImage} alt={title} />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
