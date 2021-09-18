import React, {useEffect, useState} from 'react';
import {Card, CardBody, Grommet, Image, Box, Heading, Paragraph, CardFooter, Anchor, Button} from 'grommet';
import {Chat} from 'grommet-icons';
import { grommet } from 'grommet/themes';

const theme = {
    card:{
        elevation: 'none'
    },
    background: 'light-2',
    footer: {
      pad: 'medium',
    },
}


const ProfileCard = (props) => {

    const [data, setData] = useState({
        name: props.name,
        year: props.year,
        program: props.program,
        interests: props.interests,
        hobbies: props.hobbies,
        introduction: props.introduction, 
        profilePicture: props.picture,
    });
    
    return (
        <Grommet theme = {theme}>
            <Box pad="medium" align="start">
            <Card elevation = "large" width = "medium">
                <CardBody>
                    <Box height="medium" width="medium">
                        <Image fill
                        fit="cover"
                        src={data.profilePicture}
                        a11yTitle={data.name}
                        />
                    </Box>
                </CardBody>
                <Box pad={{ horizontal: 'medium' }} responsive={false}>
                    <Heading level="3" margin={{ vertical: 'medium' }}>
                    {data.name}
                    </Heading>

                    <Heading level="4" margin={{ vertical: 'medium' }}>
                    Year: {data.year}
                    </Heading>
                    <Heading level="4" margin={{ vertical: 'medium' }}>
                    Program: {data.program}
                    </Heading>

                    <Heading level="4" margin={{ vertical: 'medium' }}>
                    Interests: {data.interests}
                    </Heading>

                    <Heading level="4" margin={{ vertical: 'medium' }}>
                    Hobbies: {data.hobbies}
                    </Heading>

                    <Paragraph margin={{ top: 'none' }}>
                    {data.introduction}
                    </Paragraph>
                </Box>
                <CardFooter>
                    <Box direction="row" align="center" gap="small">
                    <Button>
                        <Chat/>
                    </Button>
                    </Box>
                </CardFooter>
            </Card>
            </Box>
        </Grommet>
    );
};

export default ProfileCard;

