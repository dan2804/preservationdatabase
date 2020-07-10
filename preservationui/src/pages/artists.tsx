import React from 'react';
import { Card, CardBody } from '@paljs/ui/Card';
import { ButtonLink } from '@paljs/ui/Button';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const Artists = () => {
  return (
    <>
      <Card>
        <SEO title="Artists" keywords={['OAH', 'application', 'react']} />
        <header>Artists</header>
        <CardBody>
            <h1>This needs to pull the artists in the database</h1>
        </CardBody>
      </Card>
    </>
  );
};
export default Artists;
