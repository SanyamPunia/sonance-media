import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Sonance Media",
  description:
    "Privacy Policy for Sonance Media, detailing how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10 md:pt-40 md:pb-16 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Privacy Policy
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
            <p className="mb-4">
              At Sonance Media (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;), we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website or engage with our services.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways,
              including:
            </p>

            <h3 className="mt-6 mb-2 text-lg font-medium">Personal Data</h3>
            <p className="mb-4">
              When you engage with our services, we may collect personal
              information, such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Name, email address, phone number, and business information
              </li>
              <li>Billing information and payment details</li>
              <li>
                Information provided in forms, surveys, or other interactive
                features
              </li>
              <li>Communication preferences and marketing opt-ins</li>
              <li>Records of your interactions with our team</li>
            </ul>

            <h3 className="mt-6 mb-2 text-lg font-medium">Usage Data</h3>
            <p className="mb-4">
              We automatically collect certain information when you visit, use,
              or navigate our website, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referring website addresses</li>
              <li>Operating system and platform</li>
            </ul>

            <h3 className="mt-6 mb-2 text-lg font-medium">
              Marketing Campaign Data
            </h3>
            <p className="mb-4">
              When providing our marketing services, we may collect and process
              data related to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Campaign performance metrics</li>
              <li>Audience demographics and behavior</li>
              <li>Conversion and engagement data</li>
              <li>Analytics from various marketing platforms</li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We may use the information we collect for various purposes,
              including to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you about our services, updates, and other
                information
              </li>
              <li>Process transactions and send related information</li>
              <li>Find and prevent fraud</li>
              <li>
                For compliance, legal process, and law enforcement purposes
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Disclosure of Your Information
            </h2>
            <p className="mb-4">
              We may share information in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Service Providers:</strong> We may share your
                information with third-party vendors, service providers,
                contractors, or agents who perform services for us.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer
                your information in connection with, or during negotiations of,
                any merger, sale of company assets, financing, or acquisition.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your
                information for any other purpose with your consent.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information where required to do so by law or in response to
                valid requests by public authorities.
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Your Data Protection Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                The right to access the personal information we have about you
              </li>
              <li>
                The right to request correction of inaccurate personal
                information
              </li>
              <li>
                The right to request deletion of your personal information
              </li>
              <li>
                The right to object to processing of your personal information
              </li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-semibold">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to
              protect the security of your personal information. However, please
              be aware that no method of transmission over the Internet or
              electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Third-Party Websites
            </h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We have no
              control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Children&apos;s Privacy
            </h2>
            <p className="mb-4">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you are a parent or guardian and believe your child has provided
              us with personal information, please contact us.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email: Business@sonancemedia.in</li>
              <li>Address: 2987, Sector 42C, Chandigarh, 160036</li>
            </ul>

            <div className="mt-8 flex space-x-4">
              <Link
                href="/terms-of-service"
                className="text-[#049CE3] hover:underline"
              >
                Terms of Service
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
