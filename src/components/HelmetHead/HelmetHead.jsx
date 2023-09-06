import { Helmet } from 'react-helmet-async';

const TITLE = 'Playtastics.com';

function HelmetHead() {
  return (
    <Helmet>
      <title>{TITLE}</title>
      {/* <meta name="description" content={CONTENT} /> */}
    </Helmet>
  );
}

export default HelmetHead;
