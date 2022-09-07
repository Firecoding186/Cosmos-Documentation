import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    img: require('@site/static/img/Cosmoscmd.png').default,
    description: (
      <>
        Cosmos was designed to be powerful offering a wide range of commands, but still easy to understand and Use
      </>
    ),
  },
  {
    title: 'Powered by Astro Solutions',
    img: require('@site/static/img/astro.png').default,
    description: (
      <>
        Cosmos is powered by Astro Solutions. You use our bot, we handle all the work.
      </>
    ),
  },
  {
    title: 'Powered by React',
    img: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img src={img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
