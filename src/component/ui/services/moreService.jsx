import { useState, useEffect } from "react"
import styled from "styled-components"
import data from "../../../services.json"

const MoreServices = () => {
    const [active, setActive] = useState();

    const [searchTerm, setSearchTerm] = useState('AI/ML');
    const [filteredData, setFilteredData] = useState(data.data);

    useEffect(() => {
        const filteredResults = data.data.filter(item =>
            item.id.includes(searchTerm)
        );
        setFilteredData(filteredResults);
    })






    return (
        <Section>
            <Wrapper>
                <Title className='text-cyan-700'>Services</Title>
                <Holder>
                    <Text>
                        <H1>More Services</H1>
                    </Text>
                    <Cards>
                        <Hold>
                            <Li className="cursor-pointer 2xl:active:text-black  xl:active:text-black active:hover:text-black md:active:text-black xl:hover:text-black lg:hover:text-black md:hover:text-black active:text-black  " onClick={() => {
                                setSearchTerm('AI/ML')
                            }} >AI/ML</Li>
                            <Li className="cursor-pointer 2xl:active:text-black  xl:active:text-black active:hover:text-black md:active:text-black xl:hover:text-black lg:hover:text-black md:hover:text-black active:text-black  " onClick={() => {
                                setSearchTerm("Data Engineering")
                            }}>Data Engineering</Li>
                            <Li className="cursor-pointer 2xl:active:text-black  xl:active:text-black active:hover:text-black md:active:text-black xl:hover:text-black lg:hover:text-black md:hover:text-black active:text-black  " onClick={() => {
                                setSearchTerm("Cloud Service")
                            }}>Cloud Services</Li>
                            <Li className="cursor-pointer 2xl:active:text-black  xl:active:text-black active:hover:text-black md:active:text-black xl:hover:text-black lg:hover:text-black md:hover:text-black active:text-black  " onClick={() => {
                                setSearchTerm("Development")
                            }}>Web Development</Li>
                            <Li className="cursor-pointer 2xl:active:text-black  xl:active:text-black active:hover:text-black md:active:text-black xl:hover:text-black lg:hover:text-black md:hover:text-black active:text-black  " onClick={() => {
                                setSearchTerm("Api")
                            }}>API</Li>
                            <Li className="cursor-pointer 2xl:active:text-black  xl:active:text-black active:hover:text-black md:active:text-black xl:hover:text-black lg:hover:text-black md:hover:text-black active:text-black  " onClick={() => {
                                setSearchTerm("MVC")
                            }}>MVC</Li>
                            <Li className="cursor-pointer 2xl:active:text-black  xl:active:text-black active:hover:text-black md:active:text-black xl:hover:text-black lg:hover:text-black md:hover:text-black active:text-black  " onClick={() => {
                                setSearchTerm("UI/UX")
                            }}>UI/UX</Li>
                            <Li className="cursor-pointer 2xl:active:text-black  xl:active:text-black active:hover:text-black md:active:text-black xl:hover:text-black lg:hover:text-black md:hover:text-black active:text-black  " onClick={() => {
                                setSearchTerm("App")
                            }}>APP</Li>
                        </Hold>
                        <HoldCard className="md:mt-20">
                            {
                                filteredData?.map((props) => (
                                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                                        <Card key={props.name}>
                                            <img src={props.image} />
                                            <p>{props.name}</p>
                                        </Card>
                                    </a>
                                ))
                            }
                        </HoldCard>
                    </Cards>
                </Holder>
            </Wrapper>
        </Section>
    )
}

export default MoreServices;

const HoldCard = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;

     @media (max-width:780px){
        margin-top:50px;
    }
`

const Card = styled.div`
    width:200px;
    height:200px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 10px;

    img{
        width:100px;
        height:100px;
      
        object-fit:contain;
    }

    p{
        text-decoration:none;
    }
`

const Li = styled.div`
    padding: 10px 15px;
    font-weight: bold;
    margin-left:20px;
    font-size: 15px;
    // border-radius: 50px;
    border-bottom:3px solid lightblue;
 
`

const Hold = styled.div`
    width:100%;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap:wrap;
    curser:pointer;
`

const Cards = styled.div`
    width:100%;
    min-height:calc(50vh - 80px);
    height: 100%;
    display:flex;
    flex-direction: column;
    padding:60px 0px 0px;
    align-self:center;
    
`

const H1 = styled.h1`
    margin:0;
    font-size:17px;

    @media (min-width:1024px){
        font-size:35px;
    }
`

const Text = styled.div``

const Holder = styled.div`
    width:100%;
    align-self:center;

    @media (min-width:1024px){
        width:95%;
    }
`

const Title = styled.h1`
    font-size:40px;
    margin:0;
    
    /* opacity:20%; */
   
    @media (min-width:1024px){
        font-size:65px;
    }
`

const Wrapper = styled.div`
    width:95%;
    display:flex;
    flex-direction:column;
`

const Section = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px 0px;
    color:#006400;
`