import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../../AuthProvider/AuthProvider';

const ViewBiodata = () => {

    const { user } = useAuth();
    console.log(user.email)

    return (
        <section>
            <Helmet>
                <title>Matrimony || View Biodata</title>
            </Helmet>
            
        </section>
    );
};

export default ViewBiodata;