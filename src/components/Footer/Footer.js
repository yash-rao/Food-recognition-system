import SimpleReactFooter from 'simple-react-footer';

const Footer = () => {
  const description =
    'The website was designed using ReactJS as the front end. The food recognition model used in this application was provided by Clarifai, and there website is linked below.';
  const title = 'About this application';
  const columns = [
    {
      title: 'Resources',
      resources: [
        {
          name: 'Clarifai',
          link: 'https://www.clarifai.com/',
        }
      ],
    },
  ];
  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      backgroundColor="#f7797d"
      fontColor="#00449e"
    />
  );
};

export default Footer;
