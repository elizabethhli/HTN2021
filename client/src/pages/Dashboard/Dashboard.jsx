import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Grid} from 'grommet';

import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Dashboard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5001/api/users')
        .then(response => {
            const responseData = response.data;
            setData(responseData);
        })
        .catch( err => {
            console.log(err);   
        })
    },[])

    const profiles = []
    data.forEach(profile => {
        
        let hobbies = "";

        if (profile.hobbies) {
            hobbies = profile.hobbies.join();
        }

        let interests = "";

        if (profile.interests) {
            interests = profile.interests.join();
        }
        

        profiles.push(<ProfileCard name = {profile.name} year = {profile.year} program = {profile.program} interests = {interests}
                        hobbies = {hobbies} introduction = {profile.introduction} picture = {profile.picture} />)
    })

    return (
        <div>
            <Grid gap="large"
                   rows={['auto', 'flex']}
                   columns={['auto', 'flex']}
                  columns={{ count: 'fit', size: ['small', 'medium'] }}>
                {profiles}
            </ Grid>
            
        </div>
    )
}

export default Dashboard;