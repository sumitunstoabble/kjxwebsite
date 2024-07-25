import styled from "styled-components";

import Dot from "../../../assets/dot-prtrn.png"

const WorkEnvironment = () => {

    return (
        <Section className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <Wrapper>
                <Image src={Dot} alt="dot-prtrn" />
                <Holder>
                    <Text>
                        <H1 className="text-white">Work Environment</H1>
                    </Text>

                    <div>
                        <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                            <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                                <img src="https://img.etimg.com/thumb/msid-56804218,width-480,height-360,imgsize-299885,resizemode-75/open-door-policy.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center" />
                            </div>
                            <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                    <img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04081556/1554240570.jpeg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center" />
                                </div>
                                <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                    <img src="https://www.lexington.es/app/uploads/2019/07/buen-ambiente-de-trabajo.jpg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center" />
                                </div>
                            </div>
                            <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                <img src="https://www.thenewworldreport.com/wp-content/uploads/2022/10/Encora.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center" />
                            </div>
                        </div>

                    </div>

                </Holder>

            </Wrapper>
            <Image src={Dot} alt="dot-prtrn" />
        </Section>
    )
}

export default WorkEnvironment;

const Load = styled.div`
width:100%;
height:50vh;
display: flex;
justify-content:center;
align-items: center;
`

const Over = styled.div`
width:300px;
height:300px;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
position: absolute;
background-color: rgb(36, 137, 225,50%);
top:0;
bottom: 0;
visibility:hidden;
opacity: 0;

`
const Image = styled.img`
    width:400px;
    height:400px;
    position: absolute;
    object-fit: cover;
    opacity:10%;

    left: 20px;
    transform: rotate(45deg);
`

const Div = styled.div`
width:300px;
height:300px;
border-radius: 10px;
position: relative;
margin: 20px;
overflow: hidden;
&:hover
    ${Over}{
transition: all 560ms;
    opacity: 1;
    visibility: visible;
}
`

const HoldCard = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items: center;
flex-wrap: wrap;
`

const Card = styled.img`
width: 100%;
height: 100%;
object-fit: contain;


`

const Li = styled.div`
padding: 10px 15px;
font-weight: bold;
margin-left:20px;
font-size: 15px;
border-radius: 50px;
border:1px solid lightgrey;
`

const Hold = styled.div`
width:100%;
height:100px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap:wrap;
`

const Cards = styled.div`
width:100%;
min-height:calc(100vh - 80px);
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
color:#fff;
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



