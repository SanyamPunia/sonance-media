import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Sonance Media",
  description:
    "Cookie Policy for Sonance Media, explaining how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10 md:pt-40 md:pb-16 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Cookie Policy
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
              This Cookie Policy explains how Sonance Media (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) uses cookies and similar
              technologies on our website. By using our website, you consent to
              the use of cookies as described in this policy.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              What Are Cookies?
            </h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile) when you visit a website. They are
              widely used to make websites work more efficiently, provide a
              better user experience, and give website owners information about
              how their site is being used.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Types of Cookies We Use
            </h2>
            <p className="mb-4">
              We use the following types of cookies on our website:
            </p>

            <h3 className="mt-6 mb-2 text-lg font-medium">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly.
              They enable core functionality such as security, network
              management, and account access. You may disable these by changing
              your browser settings, but this may affect how the website
              functions.
            </p>

            <h3 className="mt-6 mb-2 text-lg font-medium">
              Performance and Analytics Cookies
            </h3>
            <p className="mb-4">
              These cookies collect information about how visitors use our
              website, such as which pages visitors go to most often and if they
              receive error messages. All information these cookies collect is
              aggregated and anonymous. They help us improve how our website
              works.
            </p>
            <p className="mb-4">
              We use Google Analytics to analyze the use of our website. Google
              Analytics gathers information about website use by means of
              cookies. The information gathered is used to create reports about
              the use of our website. Google&apos;s privacy policy is available at:{" "}
              <a
                href="https://www.google.com/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#049CE3] hover:underline"
              >
                https://www.google.com/policies/privacy/
              </a>
            </p>

            <h3 className="mt-6 mb-2 text-lg font-medium">
              Functionality Cookies
            </h3>
            <p className="mb-4">
              These cookies allow our website to remember choices you make (such
              as your username, language, or the region you are in) and provide
              enhanced, more personal features. They may also be used to provide
              services you have asked for, such as watching a video or
              commenting on a blog.
            </p>

            <h3 className="mt-6 mb-2 text-lg font-medium">
              Marketing and Advertising Cookies
            </h3>
            <p className="mb-4">
              These cookies are used to track visitors across websites. They are
              used to display ads that are relevant and engaging for the
              individual user and thereby more valuable for publishers and
              third-party advertisers.
            </p>
            <p className="mb-4">
              We may use cookies from the following third-party advertising
              services:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Ads</li>
              <li>Facebook Pixel</li>
              <li>LinkedIn Insight Tag</li>
              <li>Twitter Advertising</li>
            </ul>

            <h3 className="mt-6 mb-2 text-lg font-medium">
              Social Media Cookies
            </h3>
            <p className="mb-4">
              These cookies are set by social media services that we have added
              to the site to enable you to share our content with your friends
              and networks. They are capable of tracking your browser across
              other sites and building up a profile of your interests. This may
              impact the content and messages you see on other websites you
              visit.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              How to Manage Cookies
            </h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their
              settings preferences. However, if you limit the ability of
              websites to set cookies, you may worsen your overall user
              experience, since it will no longer be personalized to you.
            </p>
            <p className="mb-4">
              To manage cookies through your browser settings, follow the
              instructions below:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Chrome:</strong>{" "}
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#049CE3] hover:underline"
                >
                  https://support.google.com/chrome/answer/95647
                </a>
              </li>
              <li>
                <strong>Firefox:</strong>{" "}
                <a
                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#049CE3] hover:underline"
                >
                  https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
                </a>
              </li>
              <li>
                <strong>Safari:</strong>{" "}
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#049CE3] hover:underline"
                >
                  https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </a>
              </li>
              <li>
                <strong>Edge:</strong>{" "}
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#049CE3] hover:underline"
                >
                  https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09
                </a>
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-xl font-semibold">Cookie Consent</h2>
            <p className="mb-4">
              When you first visit our website, you will be shown a cookie
              banner requesting your consent to set cookies. You can choose to
              accept all cookies, only essential cookies, or customize your
              preferences. You can change your cookie preferences at any time by
              clicking on the &apos;Cookie Settings&apos; link in the footer of our
              website.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Do Not Track Signals
            </h2>
            <p className="mb-4">
              Some browsers have a &apos;Do Not Track&apos; feature that lets you tell
              websites that you do not want to have your online activities
              tracked. At this time, we do not respond to browser &apos;Do Not Track&apos;
              signals.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Cookies Used in Our Marketing Campaigns
            </h2>
            <p className="mb-4">
              As a digital marketing agency, we use cookies and similar
              technologies in the marketing campaigns we manage for our clients.
              These cookies help us measure the effectiveness of advertising
              campaigns and understand user behavior. The specific cookies used
              will depend on the platforms and strategies employed for each
              campaign.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">
              Changes to This Cookie Policy
            </h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time. We will notify
              you of any changes by posting the new Cookie Policy on this page
              and updating the &apos;Last Updated&apos; date.
            </p>

            <h2 className="mt-8 mb-4 text-xl font-semibold">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Cookie Policy, please contact
              us at:
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
                href="/terms-of-service"
                className="text-[#049CE3] hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <Footer />
    </main>
  );
}
