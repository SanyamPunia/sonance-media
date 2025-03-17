import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Sonance Media",
  description:
    "Terms of Service for Sonance Media, outlining the terms and conditions for using our services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10 md:pt-40 md:pb-16 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground">
              Last Updated: March 15, 2025
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-12">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto prose prose-sm dark:prose-invert">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the services, including our website, provided by
              Sonance Media (&quot;Company,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;). Please read these Terms
              carefully before using our services.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing or using our services, you agree to be bound by these
              Terms and our Privacy Policy. If you do not agree to these Terms,
              you may not access or use our services.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Services Description
            </h2>
            <p className="mb-4">
              Sonance Media provides digital marketing services, including but
              not limited to brand strategy, web development, digital marketing,
              OTT advertising, DOOH marketing, social media marketing, content
              creation, SEO services, and PPC management. The specific services
              to be provided will be outlined in a separate agreement or
              statement of work between you and Sonance Media.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Client Responsibilities
            </h2>
            <p className="mb-4">As a client of Sonance Media, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Provide accurate, complete, and timely information necessary for
                us to perform our services
              </li>
              <li>
                Review and provide feedback on deliverables within agreed-upon
                timeframes
              </li>
              <li>Pay all fees as outlined in our agreement</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>
                Obtain all necessary rights, permissions, and consents for
                materials provided to us
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Intellectual Property Rights
            </h2>

            <h3 className="mt-4 mb-2 text-lg font-medium">Your Content</h3>
            <p className="mb-4">
              You retain ownership of all intellectual property rights in the
              content, materials, and information you provide to us
              (&quot;Client Content&quot;). You grant us a non-exclusive,
              worldwide, royalty-free license to use, reproduce, modify, and
              display Client Content solely for the purpose of providing our
              services to you.
            </p>

            <h3 className="mt-4 mb-2 text-lg font-medium">Our Content</h3>
            <p className="mb-4">
              Unless otherwise specified in a written agreement, we retain
              ownership of all intellectual property rights in our services,
              methodologies, processes, techniques, ideas, concepts, trade
              secrets, and know-how that we may develop in connection with
              providing services to you.
            </p>

            <h3 className="mt-4 mb-2 text-lg font-medium">Deliverables</h3>
            <p className="mb-4">
              Upon full payment of all applicable fees, we will assign to you
              all rights, title, and interest in the final deliverables
              specifically created for you, except for any third-party materials
              and our proprietary materials, for which we grant you a
              non-exclusive license to use in connection with the deliverables.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">Payment Terms</h2>
            <p className="mb-4">
              You agree to pay all fees specified in our agreement. Unless
              otherwise specified:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Payment terms are net 30 days from the date of invoice</li>
              <li>
                All fees are non-refundable unless otherwise stated in our
                agreement
              </li>
              <li>
                Late payments may incur interest charges at the rate of 1.5% per
                month
              </li>
              <li>
                You are responsible for all taxes applicable to our services
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Term and Termination
            </h2>
            <p className="mb-4">
              The term of our services will be as specified in our agreement.
              Either party may terminate the services:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>As provided in our agreement</li>
              <li>
                If the other party materially breaches these Terms and fails to
                cure such breach within 30 days after receiving written notice
              </li>
              <li>
                If the other party becomes insolvent or files for bankruptcy
              </li>
            </ul>
            <p className="mb-4">
              Upon termination, you will pay us for all services performed up to
              the termination date.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">Confidentiality</h2>
            <p className="mb-4">
              Each party agrees to keep confidential any non-public information
              disclosed by the other party in connection with the services,
              including business plans, customer data, technology, and marketing
              strategies. This obligation continues for 3 years after the
              termination of our services.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Limitation of Liability
            </h2>
            <p className="mb-4">
              To the maximum extent permitted by law, in no event will Sonance
              Media be liable for any indirect, incidental, special,
              consequential, or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses,
              resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use or inability to use our services</li>
              <li>Any conduct or content of any third party on our services</li>
              <li>Any content obtained from our services</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content
              </li>
            </ul>
            <p className="mb-4">
              Our total liability for all claims related to these Terms will not
              exceed the amount paid by you to us for the services during the 12
              months preceding the claim.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless Sonance Media
              and its officers, directors, employees, agents, and affiliates
              from and against any claims, liabilities, damages, losses, and
              expenses, including reasonable attorneys&apos; fees, arising out
              of or in any way connected with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your access to or use of our services</li>
              <li>Your violation of these Terms</li>
              <li>
                Your violation of any third-party right, including without
                limitation any intellectual property right or privacy right
              </li>
              <li>
                Any claim that your Client Content caused damage to a third
                party
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Governing Law and Dispute Resolution
            </h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to its conflict of law
              provisions. Any dispute arising from or relating to these Terms
              shall be subject to the exclusive jurisdiction of the courts in
              Chandigarh, India.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Changes to Terms
            </h2>
            <p className="mb-4">
              We may modify these Terms at any time by posting the revised Terms
              on our website. Your continued use of our services after any such
              changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is held to be unenforceable or
              invalid, such provision will be changed and interpreted to
              accomplish the objectives of such provision to the greatest extent
              possible under applicable law, and the remaining provisions will
              continue in full force and effect.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email: Business@sonancemedia.in</li>
              <li>Address: 2987, Sector 42C, Chandigarh, 160036</li>
            </ul>

            <div className="mt-8 flex space-x-4">
              <Link
                href="/privacy-policy"
                className="text-[#049CE3] hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="text-[#049CE3] hover:underline"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <Footer />
    </main>
  );
}
