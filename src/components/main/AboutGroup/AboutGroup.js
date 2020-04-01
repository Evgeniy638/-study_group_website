import React from 'react';
import PeopleInGroupContainer from './componentsAboutGroup/PeopleInGroup/PeopleInGroupContainer';
import TitlePageContainer from './componentsAboutGroup/TitlePage/TitlePageContainer';
import FormPersonContainer from './componentsAboutGroup/FormPerson/FormPersonContainer';

const AboutGroup = (props) => (
    <div>
        {props.adminMode
            ?<FormPersonContainer/>
            :<TitlePageContainer/>
        }
        <PeopleInGroupContainer/>
    </div>
)

export default AboutGroup