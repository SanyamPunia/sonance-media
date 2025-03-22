import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text, Row, Column } from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface ContactFormEmailProps {
    name: string
    email: string
    subject: string
    message: string
    company: string
    phone: string
}

export function ContactFormEmail({ name, email, subject, message, company, phone }: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New contact form submission from {name}</Preview>
            <Tailwind>
                <Body className="bg-white font-sans">
                    <Container className="mx-auto p-4 max-w-[600px]">
                        <Section className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                            <Heading className="text-xl font-bold text-blue-800 mb-2">New Contact Form Submission</Heading>
                            <Text className="text-gray-700 mb-4">
                                You have received a new message from Sonance Media contact form.
                            </Text>
                        </Section>

                        <Section className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
                            <Heading className="text-lg font-semibold text-gray-800 mb-4">Contact Details</Heading>

                            <Row className="mb-4">
                                <Column className="w-1/3">
                                    <Text className="text-gray-500 font-medium m-0">Name:</Text>
                                </Column>
                                <Column className="w-2/3">
                                    <Text className="text-gray-800 m-0">{name}</Text>
                                </Column>
                            </Row>

                            <Row className="mb-4">
                                <Column className="w-1/3">
                                    <Text className="text-gray-500 font-medium m-0">Email:</Text>
                                </Column>
                                <Column className="w-2/3">
                                    <Text className="text-gray-800 m-0">{email}</Text>
                                </Column>
                            </Row>

                            <Row className="mb-4">
                                <Column className="w-1/3">
                                    <Text className="text-gray-500 font-medium m-0">Company:</Text>
                                </Column>
                                <Column className="w-2/3">
                                    <Text className="text-gray-800 m-0">{company}</Text>
                                </Column>
                            </Row>

                            <Row className="mb-4">
                                <Column className="w-1/3">
                                    <Text className="text-gray-500 font-medium m-0">Phone:</Text>
                                </Column>
                                <Column className="w-2/3">
                                    <Text className="text-gray-800 m-0">{phone}</Text>
                                </Column>
                            </Row>

                            <Hr className="my-6 border-gray-200" />

                            <Heading className="text-lg font-semibold text-gray-800 mb-4">Message</Heading>

                            <Row className="mb-4">
                                <Column className="w-1/3">
                                    <Text className="text-gray-500 font-medium m-0">Subject:</Text>
                                </Column>
                                <Column className="w-2/3">
                                    <Text className="text-gray-800 m-0">{subject}</Text>
                                </Column>
                            </Row>

                            <Text className="text-gray-800 bg-gray-50 p-4 rounded border border-gray-100 whitespace-pre-wrap">
                                {message}
                            </Text>
                        </Section>

                        <Section className="mt-6">
                            <Text className="text-sm text-gray-500 text-center">
                                This email was sent from the contact form on Sonance Media website.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

