import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Img,
  Link,
  Row,
  Column,
  Hr,
  Tailwind,
  Font,
} from "@react-email/components";
import * as React from "react";

interface WaitlistEmailProps {
  firstName: string;
}

const baseUrl = "https://res.cloudinary.com/dwuaixu4c/image/upload/matchchayn-emails";

export default function WaitlistEmail({ firstName = "Alex" }: WaitlistEmailProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            fontFamily: {
              sans: ["Manrope", "sans-serif"],
              serif: ['"Instrument Serif"', "Georgia", "serif"],
            },
          },
        },
      }}
    >
      <Html>
        <Head>
          <Font
            fontFamily="Manrope"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRqAuZvw1dCPw.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Font
            fontFamily="Manrope"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/manrope/v15/xn7gYHE41ni1AdIRqAuZvw1dCPw.woff2",
              format: "woff2",
            }}
            fontWeight={800}
            fontStyle="normal"
          />
          <Font
            fontFamily="Instrument Serif"
            fallbackFontFamily="serif"
            webFont={{
              url: "https://fonts.gstatic.com/s/instrumentserif/v1/2s2kgZRW1M3-zG4_NnED3xUq-9mF03zH92o.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>You're officially on the MatchChayn waitlist! 🎉</Preview>
        <Body className="bg-[#09090b] font-sans m-0 px-2 py-4">
          <Container className="bg-[#18181b] mx-auto rounded-2xl shadow-lg overflow-hidden max-w-[600px] border border-solid border-[#27272a]">
            <Section className="px-6 sm:px-10 pt-6 pb-2 text-center bg-[#09090b]" align="center">
              <Img
                src={`${baseUrl}/logo-purple.png`}
                width="180"
                alt="MatchChayn Logo"
                className="mx-auto block"
                style={{ margin: "0 auto" }}
              />
            </Section>

            <Section className="w-full bg-[#09090b] pt-2 pb-0 text-center border-b border-solid border-[#27272a]" align="center">
              <Img
                src={`${baseUrl}/couple-intro.png`}
                width="280"
                alt="Happy Couple"
                className="mx-auto block rounded-t-lg object-contain"
                style={{ margin: "0 auto" }}
              />
            </Section>

            <Section className="px-6 sm:px-10 py-10">
              <Heading className="text-[#7c3aed] text-2xl sm:text-3xl font-serif p-0 m-0 mb-6 leading-tight">
                Welcome to MatchChayn, {firstName}! 💜
              </Heading>
              <Text className="text-white text-base leading-7 m-0 mb-4">
                You're officially on the waitlist! 🎉
              </Text>
              <Text className="text-white text-base leading-7 m-0 mb-4">
                We'll keep you updated with all the latest news, updates, and everything happening on MatchChayn. We're building something special, and we're so glad you're a part of this journey.
              </Text>
              <Text className="text-white text-base leading-7 m-0 mb-6">
                We're excited to have you with us!
              </Text>

              <Text className="text-white text-base font-semibold mt-8 m-0">
                — Team MatchChayn
              </Text>
            </Section>

            <Hr className="border-[#27272a] m-0" />

            <Section className="px-6 sm:px-10 py-8 bg-[#09090b] text-center">
              <Text className="text-[#a1a1aa] text-sm m-0 mb-5">
                Follow us on our socials to stay updated!
              </Text>

              <Section align="center" className="w-full max-w-[280px] mx-auto mb-5">
                <Row>
                  <Column align="center" className="px-2">
                    <Link href="https://x.com/MatchChayn">
                      <Img src={`${baseUrl}/twitter.png`} width="24" height="24" alt="X (Twitter)" />
                    </Link>
                  </Column>
                  <Column align="center" className="px-2">
                    <Link href="https://www.instagram.com/matchchayn/">
                      <Img src={`${baseUrl}/instagram.png`} width="24" height="24" alt="Instagram" />
                    </Link>
                  </Column>
                  <Column align="center" className="px-2">
                    <Link href="https://www.linkedin.com/company/matchchayn">
                      <Img src={`${baseUrl}/linkedin.png`} width="24" height="24" alt="LinkedIn" />
                    </Link>
                  </Column>
                  <Column align="center" className="px-2">
                    <Link href="https://t.me/matchchayn">
                      <Img src={`${baseUrl}/telegram.png`} width="24" height="24" alt="Telegram" />
                    </Link>
                  </Column>
                  <Column align="center" className="px-2">
                    <Link href="https://tiktok.com/@matchchayn">
                      <Img src={`${baseUrl}/tiktok.png`} width="24" height="24" alt="TikTok" />
                    </Link>
                  </Column>
                  <Column align="center" className="px-2">
                    <Link href="https://www.youtube.com/@MatchChayn">
                      <Img src={`${baseUrl}/youtube.png`} width="24" height="24" alt="YouTube" />
                    </Link>
                  </Column>
                  <Column align="center" className="px-2">
                    <Link href="https://www.facebook.com/share/1Ae6wtP7em">
                      <Img src={`${baseUrl}/facebook.png`} width="24" height="24" alt="Facebook" />
                    </Link>
                  </Column>
                </Row>
              </Section>

              <Text className="text-[#52525b] text-xs m-0">
                © {new Date().getFullYear()} MatchChayn. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
