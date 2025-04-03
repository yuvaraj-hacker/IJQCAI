import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
    return (
        <Helmet>
        <title>{title}</title>
        <meta name="keywords" content="Quantum Computing Journal, AI Research Journal, IJQCAI, Peer-Reviewed AI Publications, Open Access Quantum Computing, Quantum Machine Learning, Quantum Algorithms, AI and Quantum Computing Research, Robotics and AI Studies, Future of AI and Quantum Computing" />
        <meta name="description" content="The International Journal of Quantum Computing and AI (IJQCAI) is a peer-reviewed, open-access journal publishing groundbreaking research in quantum computing, artificial intelligence, and advanced automation." />
        <meta name="author" content="IJQCAI Editorial Team" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="International Journal of Quantum Computing and AI (IJQCAI)" />
        <meta property="og:description" content="Discover cutting-edge research in Quantum Computing and AI with IJQCAI, a leading peer-reviewed, open-access journal exploring the future of technology." />
        <meta property="og:url" content="https://ijqcai.com/" />
        <meta property="og:image" content="https://ijqcai.com/assets/Images/IJQCAIlog.png" />
        <link rel="canonical" href="https://ijqcai.com/" />
        <link rel="icon" type="image/png" href="https://ijqcai.com/assets/Images/Fav.png" />
    </Helmet>

    );
};

export default HelmetComponent;
