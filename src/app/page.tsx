"use client";

import { useState } from "react";
import LandingHeader from "@/components/elements/LandingHeader";
import Footer from "@/components/elements/Footer";
import { HeroSection } from "@/components/elements/HeroSection";
import { Section } from "@/components/elements/Section";
import Title from "@/components/typography/Title";
import Subtitle from "@/components/typography/Subtitle";
import Paragraph from "@/components/typography/Paragraph";
import Phrase from "@/components/typography/Phrase";
import Button from "@/components/buttons/Button";
import BrandMarquee from "@/components/marketing/BrandMarquee";
import InfoCard from "@/components/cards/InfoCard";
import MetricsCard from "@/components/cards/MetricsCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import TabSelector from "@/components/miscellaneous/TabSelector";
import NewsletterForm from "@/components/forms/forms/NewsletterForm";
import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import {
  ArrowRightIcon,
  ChartLineUpIcon,
  CheckIcon,
  CodeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  LightningIcon,
  PlayCircleIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UsersThreeIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

import {
  devoxBrandLogos,
  devoxFooterColumns,
  devoxHeroBadges,
  devoxMetrics,
  devoxNavItems,
  devoxProcessTabs,
  devoxShowcaseCards,
  devoxSocialLinks,
  devoxSprintFlowSteps,
  devoxTestimonials,
  devoxToolingBullets,
} from "@/mocks/devoxLanding";

const showcaseIconMap = {
  rocket: RocketLaunchIcon,
  code: CodeIcon,
  shield: ShieldCheckIcon,
  lightning: LightningIcon,
};

const metricsIconMap = {
  chart: ChartLineUpIcon,
  users: UsersThreeIcon,
  rocket: RocketLaunchIcon,
};

const socialIconMap = {
  linkedin: LinkedinLogoIcon,
  github: GithubLogoIcon,
  x: XLogoIcon,
};

type ShowcaseIconKey = keyof typeof showcaseIconMap;
type MetricsIconKey = keyof typeof metricsIconMap;
type SocialIconKey = keyof typeof socialIconMap;

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(
    devoxProcessTabs[0]?.label ?? ""
  );
  const currentYear = new Date().getFullYear();

  const handleMobileToggle = (open: boolean) => setMobileMenuOpen(open);
  const handleTabChange = (tab: string) => setActiveTab(tab);

  const tabLabels = devoxProcessTabs.map((tab) => tab.label);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <LandingHeader.Root bordered sticky className="relative">
        <LandingHeader.Left>
          <LandingHeader.Logo src="/brand/devox-logo.svg" alt="Devox" />
        </LandingHeader.Left>
        <LandingHeader.Center>
          <LandingHeader.Nav>
            {devoxNavItems.map((item) => (
              <LandingHeader.Nav.Item key={item.label} href={item.href}>
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.Nav>
        </LandingHeader.Center>
        <LandingHeader.Right>
          <LandingHeader.MobileMenuToggle
            open={mobileMenuOpen}
            onToggle={handleMobileToggle as never}
          />
          <LandingHeader.MobileMenuPanel
            open={mobileMenuOpen}
            cta={<LandingHeader.CTA label="Agendar diagnóstico" />}
          >
            {devoxNavItems.map((item) => (
              <LandingHeader.Nav.Item key={item.label} href={item.href}>
                {item.label}
              </LandingHeader.Nav.Item>
            ))}
          </LandingHeader.MobileMenuPanel>
          <LandingHeader.CTA label="Agendar diagnóstico" />
        </LandingHeader.Right>
      </LandingHeader.Root>

      <main className="flex flex-col gap-16 pb-16">
        <HeroSection
          size="middle"
          sectionClassName="relative items-start gap-12 overflow-hidden lg:flex-row lg:items-center"
        >
          <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-primary-100/70 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-secondary-100/70 blur-3xl" />

          <FadeContainer once className="relative z-10 w-full max-w-xl">
            <div className="flex flex-col gap-6">
              <Phrase
                content="Agência Devox para produtos digitais"
                weight="medium"
                className="text-xs uppercase tracking-[0.25em] text-primary-600"
              />
              <Title
                content="Projetos de software feitos com precisão e velocidade"
                className="text-3xl sm:text-4xl md:text-5xl leading-tight"
              />
              <Paragraph
                content="A Devox combina engenharia, produto e design para acelerar squads e garantir entregas confiáveis em todas as fases do ciclo digital."
                className="text-foreground/70 text-base sm:text-lg"
              />
              <NewsletterForm.Root className="gap-4">
                <NewsletterForm.Input
                  label="E-mail de trabalho"
                  placeholder="nome@empresa.com"
                  type="email"
                  inputClassName="bg-white"
                />
                <NewsletterForm.Button buttonTitle="Agendar diagnóstico" />
              </NewsletterForm.Root>
              <div className="flex flex-wrap gap-3">
                {devoxHeroBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1"
                  >
                    <CheckIcon className="h-4 w-4 text-primary-600" />
                    <Phrase
                      content={badge.label}
                      weight="medium"
                      className="text-xs text-primary-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeContainer>

          <ZoomContainer once className="relative z-10 w-full lg:max-w-lg">
            <div className="relative">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-200/60 blur-2xl" />
              <div className="absolute -left-10 bottom-6 h-20 w-20 rounded-3xl bg-secondary-200/70 blur-2xl" />
              <div className="relative rounded-3xl border border-border-card bg-white p-5 shadow-[0_32px_80px_-48px_rgba(15,26,61,0.6)]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                  <Phrase
                    content="painel.devox"
                    className="text-xs text-foreground/60"
                  />
                </div>
                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-4">
                    <div className="flex items-center justify-between">
                      <Phrase
                        content="Squad Plataforma"
                        className="text-xs text-foreground/70"
                      />
                      <span className="text-xs font-medium text-primary-600">
                        Sprint 08
                      </span>
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-primary-100">
                      <div className="h-2 w-2/3 rounded-full bg-primary-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border-card bg-background p-3">
                      <LightningIcon className="h-5 w-5 text-primary-600" />
                      <Phrase
                        content="Entrega contínua"
                        className="mt-2 text-xs text-foreground/70"
                      />
                    </div>
                    <div className="rounded-xl border border-border-card bg-background p-3">
                      <ShieldCheckIcon className="h-5 w-5 text-primary-600" />
                      <Phrase
                        content="Qualidade contínua"
                        className="mt-2 text-xs text-foreground/70"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/80 p-2 shadow">
                    <PlayCircleIcon
                      className="h-12 w-12 text-primary-500"
                      weight="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ZoomContainer>
        </HeroSection>

        <Section size="middle" sectionClassName="py-6">
          <FadeContainer once className="w-full">
            <BrandMarquee
              logos={devoxBrandLogos}
              itemsGap="normal"
              maxLogoHeightPx={36}
              showEdgeFade
            />
          </FadeContainer>
        </Section>

        <Section size="middle" sectionClassName="items-start">
          <div id="servicos" className="w-full grid lg:grid-cols-2 gap-12">
            <RevealContainer className="w-full">
              <div className="grid sm:grid-cols-2 gap-4">
                {devoxShowcaseCards.map((card) => {
                  const Icon = showcaseIconMap[card.icon as ShowcaseIconKey];
                  return (
                    <InfoCard
                      key={card.title}
                      title={card.title}
                      text={card.text}
                      icon={<Icon className="h-6 w-6 text-primary-600" />}
                    />
                  );
                })}
              </div>
            </RevealContainer>
            <FadeContainer className="flex flex-col gap-4">
              <Subtitle
                content="Aproveite seu tempo criando produtos"
                className="text-2xl sm:text-3xl"
              />
              <Paragraph
                content="Da estratégia ao deploy, a Devox mantém o time focado no que realmente importa: resolver problemas reais com software sustentável."
                className="text-foreground/70"
              />
              <a
                href="#processo"
                className="flex items-center gap-2 text-sm font-semibold text-primary-600"
              >
                Ver nosso processo
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </FadeContainer>
          </div>
        </Section>

        <Section size="middle" sectionClassName="items-start">
          <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
            <FadeContainer className="flex flex-col gap-4">
              <Subtitle
                content="Tenha todas as ferramentas que seu time precisa"
                className="text-2xl sm:text-3xl"
              />
              <Paragraph
                content="Integramos práticas de engenharia modernas para garantir previsibilidade, segurança e escala desde a primeira sprint."
                className="text-foreground/70"
              />
              <div className="mt-2 grid gap-3">
                {devoxToolingBullets.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckIcon className="h-4 w-4 text-primary-600" />
                    <Phrase
                      content={item}
                      className="text-sm text-foreground/70"
                    />
                  </div>
                ))}
              </div>
              <Button
                label="Explorar nossa base técnica"
                variant="outlined"
                className="mt-4"
              />
            </FadeContainer>

            <ZoomContainer className="w-full flex justify-center">
              <div className="relative h-72 w-72 sm:h-80 sm:w-80">
                <div className="absolute inset-0 rounded-full border border-primary-200/70 bg-white/80" />
                <div className="absolute inset-8 rounded-full border border-primary-200/70" />
                <div className="absolute inset-16 rounded-full border border-primary-200/70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full border border-primary-200/70 bg-primary-100/60" />
                </div>
                <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-white p-2 shadow">
                  <CodeIcon className="h-5 w-5 text-primary-600" />
                </div>
                <div className="absolute right-4 top-20 rounded-full bg-white p-2 shadow">
                  <ShieldCheckIcon className="h-5 w-5 text-primary-600" />
                </div>
                <div className="absolute right-10 bottom-12 rounded-full bg-white p-2 shadow">
                  <RocketLaunchIcon className="h-5 w-5 text-primary-600" />
                </div>
                <div className="absolute left-8 bottom-10 rounded-full bg-white p-2 shadow">
                  <ChartLineUpIcon className="h-5 w-5 text-primary-600" />
                </div>
                <div className="absolute left-4 top-24 rounded-full bg-white p-2 shadow">
                  <UsersThreeIcon className="h-5 w-5 text-primary-600" />
                </div>
              </div>
            </ZoomContainer>
          </div>
        </Section>

        <Section size="middle" sectionClassName="items-start">
          <div className="w-full rounded-3xl bg-gradient-to-br from-secondary-600 via-secondary-500 to-tertiary-500 px-8 py-10 text-white shadow-xl">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div className="flex flex-col gap-4">
                <Subtitle
                  content="Problemas complexos resolvidos com leveza"
                  className="text-white text-2xl sm:text-3xl"
                />
                <Paragraph
                  content="A Devox organiza o fluxo de trabalho, elimina gargalos e garante que cada sprint entregue valor real para o negócio."
                  className="text-white/80"
                />
                <Button
                  label="Quero melhorar meu fluxo"
                  className="bg-white text-secondary-700 hover:bg-white/90"
                />
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <Phrase
                  content="Roadmaps claros, engenharia sólida e times alinhados para acelerar seus lançamentos."
                  className="text-white/80"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section size="middle" sectionClassName="items-start">
          <div id="processo" className="w-full grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <Subtitle
                content="Processo que dá visibilidade do início ao fim"
                className="text-2xl sm:text-3xl"
              />
              <Paragraph
                content="Trabalhamos com transparência total, dashboards claros e comunicação diária com seu time."
                className="text-foreground/70"
              />
              <TabSelector
                tabs={tabLabels}
                selectedTab={activeTab}
                onTabChange={handleTabChange}
                activeTabContent={(tabLabel) => {
                  const tab = devoxProcessTabs.find(
                    (item) => item.label === tabLabel
                  );
                  if (!tab) return null;
                  return (
                    <div className="flex flex-col gap-3">
                      <Subtitle
                        content={tab.title}
                        className="text-lg sm:text-xl"
                      />
                      <Paragraph
                        content={tab.description}
                        className="text-foreground/70"
                      />
                      <div className="grid gap-2">
                        {tab.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-center gap-2">
                            <CheckIcon className="h-4 w-4 text-primary-600" />
                            <Phrase
                              content={bullet}
                              className="text-sm text-foreground/70"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }}
              />
            </div>

            <RevealContainer once className="w-full">
              <div className="relative rounded-3xl border border-border-card bg-white p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <Phrase
                    content="Fluxo da Sprint"
                    className="text-xs text-foreground/60"
                  />
                  <span className="text-xs font-semibold text-primary-600">
                    Semana 3
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {devoxSprintFlowSteps.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-border-card bg-background p-3"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-700">
                        {index + 1}
                      </span>
                      <Phrase content={item} className="text-sm" />
                    </div>
                  ))}
                </div>
              </div>
            </RevealContainer>
          </div>
        </Section>

        <Section size="middle" sectionClassName="items-start">
          <div id="equipe" className="w-full flex flex-col gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <Subtitle
                content="Equipe Devox em números"
                className="text-2xl sm:text-3xl"
              />
              <Paragraph
                content="Resultados construídos com disciplina, proximidade e squads que evoluem junto com seu time."
                className="text-foreground/70"
              />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {devoxMetrics.map((metric) => {
                const Icon = metricsIconMap[metric.icon as MetricsIconKey];
                return (
                  <MetricsCard
                    key={metric.title}
                    title={metric.title}
                    value={metric.value}
                    preTitle={metric.preTitle}
                    countDuration={3}
                    icon={<Icon className="h-6 w-6 text-primary-600" />}
                  />
                );
              })}
            </div>
          </div>
        </Section>

        <Section size="middle" sectionClassName="items-start">
          <div id="casos" className="w-full flex flex-col gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <Subtitle
                content="Cases que inspiram confiança"
                className="text-2xl sm:text-3xl"
              />
              <Paragraph
                content="Times de produto confiam na Devox para acelerar lançamentos sem abrir mão de qualidade."
                className="text-foreground/70"
              />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {devoxTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  avatarUrl={testimonial.avatar}
                  userName={testimonial.name}
                  userRole={testimonial.role}
                  rating={testimonial.rating}
                  testimonial={testimonial.quote}
                />
              ))}
            </div>
          </div>
        </Section>

        <Section size="middle" sectionClassName="items-start">
          <div
            id="contato"
            className="w-full rounded-3xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-8 py-10 text-center text-white"
          >
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
              <Title
                content="Junte-se à comunidade Devox"
                className="text-white text-2xl sm:text-3xl"
              />
              <Paragraph
                content="Vamos tirar seu próximo produto do papel com clareza, qualidade e velocidade."
                className="text-white/80"
              />
              <Button
                label="Agendar uma conversa"
                className="bg-white text-primary-700 hover:bg-white/90"
              />
            </div>
          </div>
        </Section>
      </main>

      <Footer.Root>
        <Footer.Top columns={5}>
          <Footer.Column>
            <LandingHeader.Logo src="/brand/devox-logo.svg" alt="Devox" />
            <Paragraph
              content="Agência de software especializada em produtos digitais de alto impacto."
              className="text-foreground/70 mt-3 text-center sm:text-left"
            />
          </Footer.Column>
          {devoxFooterColumns.map((column) => (
            <Footer.Column
              key={column.title}
              title={column.title}
              items={column.items}
            />
          ))}
        </Footer.Top>
        <Footer.SocialRow
          title="Siga a Devox"
          iconsClassName="text-foreground/70"
          items={devoxSocialLinks.map((item) => {
            const Icon = socialIconMap[item.icon as SocialIconKey];
            if (item.icon === "x") {
              return { iconName: "x", href: item.href };
            }
            return {
              iconName: "custom",
              href: item.href,
              icon: (
                <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-foreground/70" />
              ),
            };
          })}
        />
        <Footer.Bottom>
          <Phrase
            content={`Devox © ${currentYear}. Todos os direitos reservados.`}
            className="text-foreground/60"
          />
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
