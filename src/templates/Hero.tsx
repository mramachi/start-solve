import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Startpunt van heel veel doekoe\n'}
            <span className="text-primary-500">en plezier</span>
          </>
        }
        description="The easiest way to get rich quick."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <Button xl>
              If You Want to Go Fast, Go Alone. If You Want to Go Far, Go
              Together
            </Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
