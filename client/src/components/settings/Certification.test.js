/* global expect */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import { CertificationSettings } from './Certification';

describe('<certification />', () => {
  // shallow rendering does not render children component
  // form buttons are not included in shallow render
  it('Should render show cert button for calimed legacy cert', () => {
    const { container } = render(
      <CertificationSettings {...defaultTestProps} />
    );

    expect(
      container.querySelector('#button-legacy-data-visualization')
    ).toHaveTextContent('Show Certification');
  });

  it('Should link show cert button to the calimed legacy cert', () => {
    const { container } = render(
      <CertificationSettings {...defaultTestProps} />
    );

    expect(
      container.querySelector('#button-legacy-data-visualization')
    ).toHaveAttribute(
      'href',
      '/certification/developementuser/legacy-data-visualization'
    );
  });

  // full forms with unclaimed certs should should not shallow render button
  it('Should not render show cert button for unclaimed full form', () => {
    const { container } = render(
      <CertificationSettings {...defaultTestProps} />
    );

    expect(
      container.querySelector('#button-legacy-back-end')
    ).not.toBeInTheDocument();
  });

  // empty forms with unclaimed certs should should not shallow render button
  it('Should not render show cert button for empty form', () => {
    const { container } = render(
      <CertificationSettings {...defaultTestProps} />
    );

    expect(
      container.querySelector('#button-legacy-front-end')
    ).not.toBeInTheDocument();
  });
});

const defaultTestProps = {
  completedChallenges: [
    {
      id: 'bd7156d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7155d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7154d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7153d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7168d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7178d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7188d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7198d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7108d8c242eddfaeb5bd13',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443edefaeb5bdef',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443edefaeb5bdff',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443edefaeb5bd0e',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443edefaeb5bdee',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443edefaeb5bd0f',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443eddfaeb5bdef',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443eddfaeb5bdff',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443eddfaeb5bd0e',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443eddfaeb5bd0f',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7158d8c443eddfaeb5bdee',
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    },
    {
      id: 'bd7157d8c242eddfaeb5bd13',
      completedDate: 1554272923799,
      solution: 'https://github.com/freeCodeCamp/freeCodeCamp'
    }
  ],
  createFlashMessage: () => {},
  is2018DataVisCert: false,
  isApisMicroservicesCert: false,
  isBackEndCert: false,
  isDataVisCert: true,
  isFrontEndCert: false,
  isFrontEndLibsCert: false,
  isFullStackCert: false,
  isHonest: false,
  isInfosecQaCert: false,
  isJsAlgoDataStructCert: false,
  isRespWebDesignCert: false,
  updateLegacyCert: () => {},
  username: 'developementuser',
  verifyCert: () => {},
  errors: {},
  submit: () => {}
};
