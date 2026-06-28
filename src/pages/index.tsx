import type {ReactNode} from 'react';
import Layout from '@theme/Layout';

import HeroSection from '@site/src/components/HeroSection';
import ProjectOverview from '@site/src/components/ProjectOverview';
import PipelineSection from '@site/src/components/PipelineSection';
import VideoShowcase from '@site/src/components/VideoShowcase';
import TechBadges from '@site/src/components/TechBadges';
import DemoResults from '@site/src/components/DemoResults';
import FutureWork from '@site/src/components/FutureWork';
import TeamSection from '@site/src/components/TeamSection';
import DocsPreview from '@site/src/components/DocsPreview';

export default function Home(): ReactNode {
  return (
    <Layout
      description="An educational capstone prototype connecting live RTSP video, ML-assisted target detection, homography coordinate mapping, and Arduino-controlled servo actuation into one end-to-end demonstration pipeline."
    >
      <HeroSection />
      <main>
        <ProjectOverview />
        <PipelineSection />
        <VideoShowcase />
        <TechBadges />
        <DemoResults />
        <FutureWork />
        <TeamSection />
        <DocsPreview />
      </main>
    </Layout>
  );
}
