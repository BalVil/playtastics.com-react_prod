import { useEffect } from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import DeliveryContent from 'components/InfoPagesContent/DeliveryContent';

function Delivery() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <DeliveryContent />
        </Container>
      </Section>
    </main>
  );
}

export default Delivery;
