import DevIcon from '../../assets/development.svg';
import ConsultingIcon from '../../assets/consulting.svg';
import DesignIcon from '../../assets/design.svg';
import RedesignIcon from '../../assets/redesign.svg';
import SeoIcon from '../../assets/seo.svg';


import { Container, CardsWrapper, H1, Card, Image, H2, P } from './card-portfolio.styles';

const CardPortfolio = () => {
    return (
        <Container>
            <H1>Our Services</H1>
                <CardsWrapper>
                    <Card>
                        <Image src={DevIcon} alt='Development' />
                        <H2>Web Development</H2>
                        <P>mollis nunc sed id semper risus in hendrerit gravida rutrum</P>
                    </Card>
                    <Card>
                        <Image src={ConsultingIcon} alt='Consulting' />
                        <H2>Consulting</H2>
                        <P>mollis nunc sed id semper risus in hendrerit gravida rutrum</P>
                    </Card>
                    <Card>
                        <Image src={DesignIcon} alt='Design' />
                        <H2>Page Design</H2>
                        <P>mollis nunc sed id semper risus in hendrerit gravida rutrum</P>
                    </Card>
                    <Card>
                        <Image src={RedesignIcon} alt='Redesign' />
                        <H2>Page Redesign</H2>
                        <P>mollis nunc sed id semper risus in hendrerit gravida rutrum</P>
                    </Card>
                    <Card>
                        <Image src={SeoIcon} alt='SEO Optimization' />
                        <H2>SEO Optimization</H2>
                        <P>mollis nunc sed id semper risus in hendrerit gravida rutrum</P>
                    </Card>
                </CardsWrapper>            
        </Container>
    )
}

export default CardPortfolio;