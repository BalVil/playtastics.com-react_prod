import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import Image from 'assets/images/text-block.webp';
import Image2x from 'assets/images/text-block_2x.webp';
import styles from './TextBlock.module.scss';

function TextBlock({ title }) {
  return (
    <Section variant="text">
      <Container>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.contentWrap}>
          <div className={styles.imageWrap}>
            <img
              src={Image}
              alt="why choose us"
              srcSet={`${Image} 1x, ${Image2x} 2x`}
            />
          </div>
          <div className={styles.textWrap}>
            <p>At Playtastics, we're your creative partner, offering:</p>
            <ul>
              <li>Trusted quality for confident creativity.</li>
              <li>Tools for artists at every level.</li>
              <li>Our team of artists is here to assist you.</li>
              <li>Top value for your artistic investment.</li>
              <li>Easy online shopping, anytime.</li>
              <li>Prompt and reliable shipping.</li>
              <li>Join a vibrant artist network.</li>
              <li>Our commitment to your happiness.</li>
              <li>Your data is safeguarded with us.</li>
            </ul>
            <p>
              Choose Playtastics and start your colorful, imaginative journey
              today.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default TextBlock;
