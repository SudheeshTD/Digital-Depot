import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Digital Depot',
  description: 'We sell the best products for affordable Price',
  keywords: 'Sell electronics, buy electronics, cheap electroincs',
};

export default Meta;