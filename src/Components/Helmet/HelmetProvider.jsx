import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="International Journal of Quantum Computing and AI, IJQCAI, Robotics research journals, Automation research journal, Advanced robotics journal, Robotics and automation studies" />
            <meta name="description" content="The International Journal of Quantum Computing and AI (IJQCAI) publishes high-quality research in robotics, automation, AI, and advanced engineering fields." />
            <meta name="author" content="IJQCAI Editorial Team" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Journal of Quantum Computing and AI (IJQCAI)" />
            <meta property="og:description" content="The International Journal of Quantum Computing and AI (IJQCAI) publishes high-quality research in robotics, automation, AI, and advanced engineering fields." />
            <meta property="og:url" content="https://www.IJQCAI.com/" />
            <meta property="og:image" content="https://www.IJQCAI.com/assets/Images/IJQCAI.png" />
            <link rel="canonical" href="https://www.IJQCAI.com/" />
            <link rel="icon" type="image/png" href="https://www.IJQCAI.com/assets/Images/Favicon.png" />
        </Helmet>
    );
};

export default HelmetComponent;
