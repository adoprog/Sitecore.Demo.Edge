import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from '../../components/Navigation/Header';
import HeaderCdpMessageBar from '../../components/HeaderCdpMessageBar';
import HeroSection, { HeroProps } from '../../components/Page Content/HeroSection';
import ThreeColumnsSection, {
  ThreeColumnsSectionProps,
} from '../../components/Page Content/ThreeColumnsSection';
import SponsorsGrid, { SponsorsProps } from '../../components/Sponsors/SponsorsGrid';
import Footer from '../../components/Navigation/Footer';
import { Sponsor } from 'src/types/sponsor';
import { SitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { mockComponentFactory, mockFooterProps, mockHeaderProps } from './PageStoriesCommon';
import { UserProvider } from '@auth0/nextjs-auth0';

export default {
  title: 'Pages/Home Page',
} as ComponentMeta<typeof HeroSection>;

const heroProps = {
  fields: {
    Hero: {
      value: {
        src: 'https://demoedge.sitecoresandbox.cloud/api/public/content/95619f8c034947a2aa2ce5b39146ccf5?v=c63ff08e',
      },
    },
    Slogan: {
      value: 'READY | STEADY | PLAY!',
    },
    Eyebrow: {
      value: 'Sports and Recreation Expo',
    },
    Title: {
      value: 'RAISE YOUR GAME',
    },
    Body: {
      value: 'Join us in person or online for the fifth annual PLAY! Summit.',
    },
  },
  rendering: {
    placeholders: {
      'jss-hero-section-content': [
        {
          uid: '04d6b23e-6ce3-51a1-9c9c-4cd56b29b6aa',
          componentName: 'HeroSectionCta',
          dataSource: '',
          params: {},
          fields: {
            Link: {
              value: {
                href: '/tickets',
                text: 'Book Tickets',
              },
            },
          },
        },
      ],
    },
    dataSource: '/sitecore',
  },
} as unknown as HeroProps;

const sponsor1 = {
  Name: 'Item Name',
  fields: {
    Name: {
      value: '',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
      },
    },
  },
} as Sponsor;

const sponsor2 = {
  Name: 'Item Name',
  fields: {
    Name: {
      value: '',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-sports.svg',
      },
    },
  },
} as Sponsor;

const sponsor3 = {
  Name: 'Item Name',
  fields: {
    Name: {
      value: '',
    },
    Logo: {
      value: {
        src: '/assets/img/sponsors/sponsors-fitbit.svg',
      },
    },
  },
} as Sponsor;

const sponsorProps = {
  fields: {
    Title: {
      value: '',
    },
    Subtitle: {
      value: '',
    },
    Sponsors: [sponsor1, sponsor2, sponsor3],
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/sitecore',
  },
} as SponsorsProps;

const threeColProps = {
  fields: {
    Title: {
      value: 'GO THE DISTANCE',
    },
    Subtitle: {
      value:
        'Whether you’re joining us in person or online, this year’s PLAY! Summit is set to be our biggest and best event yet. Look forward to an action-packed line-up featuring keynotes, Q&As, demos, and workshops across a mix of live and virtual stages.',
    },
    LeftLogo: {
      value: {
        src: '/assets/img/headline-icon-schedule.svg',
      },
    },
    LeftTitle: {
      value: '48 Talks and Workshops',
    },
    LeftLink: {
      value: {
        href: '/sessions',
        text: 'View Sessions',
      },
    },
    MiddleLogo: {
      value: {
        src: '/assets/img/headline-icon-speakers.svg',
      },
    },
    MiddleTitle: {
      value: '32 Speakers and Guest Speakers',
    },
    MiddleLink: {
      value: {
        href: '/speakers',
        text: 'View Speakers',
      },
    },
    RightLogo: {
      value: {
        src: '/assets/img/headline-icon-vendors.svg',
      },
    },
    RightTitle: {
      value: '60 Vendors with VIP Products',
    },
    RightLink: {
      value: {
        href: '/vendors',
        text: 'View Vendors',
      },
    },
  },
  rendering: {
    componentName: 'Rendering',
    dataSource: '/sitecore',
  },
} as ThreeColumnsSectionProps;

const Template: ComponentStory<typeof HeroSection> = () => {
  return (
    <UserProvider>
      <SitecoreContext componentFactory={mockComponentFactory}>
        <header>
          <Header {...mockHeaderProps} />
        </header>
        <main>
          <HeaderCdpMessageBar />
          <HeroSection {...heroProps} />
          <ThreeColumnsSection {...threeColProps} />
          <SponsorsGrid {...sponsorProps} />
        </main>
        <footer>
          <Footer {...mockFooterProps} />
        </footer>
      </SitecoreContext>
    </UserProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
