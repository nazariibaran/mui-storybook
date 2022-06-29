import React from 'react';
import {
  Avatar,
  BasicInfo,
  ContactInfo,
  Container,
  Grid,
  Header,
  Personal,
  Skills,
  Stack,
} from '../components';
import { faker } from '@faker-js/faker';

const navLinks = [
  {
    label: 'Home',
    href: '#'
  },
  {
    label: 'About',
    href: '#'
  },
  {
    label: 'Contact',
    href: '#'
  }
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'NodeJS',
  'Express',
  'MongoDB',
  'Mongoose',
  'NextJS',
  'Storybook',
  'MaterialUI',
]

const personalInfo = {
  firstName: 'Nazarii',
  lastName: 'Baran',
  location: 'Lviv, Ukraine',
  position: 'Frontend Developer',
}

const basicInfo = [
  { birthday: '31.07.1999' },
  { gender: 'Male' },
]

const contactInfo = [
  { phone: faker.phone.number() },
  { address: faker.address.streetAddress() },
  { email: faker.internet.email() },
]

const Profile: React.FC = () => {
  return (
    <Stack height='100vh' direction='column'>
      <Header pageTitle='Profile Page' navLinks={navLinks} />
      <Grid container sx={{
        flex: 1,
        px: 4,
        py: 4
      }}>
        <Grid item xs={4}>
          <Stack>
            <Container>
              <Avatar
                src='https://www.kindpng.com/picc/m/137-1370698_avatar-people-person-business-user-man-character-vector.png'
                variant='square'
                sx={{
                  width: '1',
                  height: '1',
                }}
              />
            </Container>
            <Skills sx={{ mt: 2 }} skillList={skills} />
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Stack>
            <Personal personalInfo={personalInfo} />
            <BasicInfo sx={{ mt: 2 }} basicInfo={basicInfo} />
            <ContactInfo sx={{ mt: 4 }} contactInfo={contactInfo} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Profile;