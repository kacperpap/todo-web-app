import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';

export function GreetingPage() {
    return (
        <div style={{
            position: 'relative',
            boxSizing: 'border-box',
            backgroundColor: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-8))',
        }}>
            <Container size={700} style={{
                position: 'relative',
                paddingTop: 'rem(200px)',
                paddingBottom: 'rem(120px)',
                '@media (max-width: $mantine-breakpoint-sm)': {
                    paddingBottom: 'rem(80px)',
                    paddingTop: 'rem(80px)',
                },
            }}>
                <h1 style={{
                    fontFamily: 'Greycliff CF, var(--mantine-font-family)',
                    fontSize: 'rem(62px)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    margin: 0,
                    padding: 0,
                    color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
                    // '@media (max-width: $mantine-breakpoint-sm)'
                    //     : {
                    //     fontSize: 'rem(42px)',
                    //     lineHeight: 1.2,
                    // },
                }}>
                    A{' '}
                    <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                        fully featured
                    </Text>{' '}
                    React components and hooks library
                </h1>

                <Text style={{
                    marginTop: 'var(--mantine-spacing-xl)',
                    fontSize: 'rem(24px)',
                    color: 'dimmed',
                    '@media (max-width: $mantine-breakpoint-sm)': {
                        fontSize: 'rem(18px)',
                    },
                }}>
                    Build fully functional accessible web applications with ease – Mantine includes more than
                    100 customizable components and hooks to cover you in any situation
                </Text>

                <Group style={{
                    marginTop: 'calc(var(--mantine-spacing-xl) * 2)',
                    '@media (max-width: $mantine-breakpoint-sm)': {
                        marginTop: 'var(--mantine-spacing-xl)',
                    },
                }}>
                    <Button
                        size="xl"
                        style={{
                            height: 'rem(54px)',
                            paddingLeft: 'rem(38px)',
                            paddingRight: 'rem(38px)',
                            '@media (max-width: $mantine-breakpoint-sm)': {
                                height: 'rem(54px)',
                                paddingLeft: 'rem(18px)',
                                paddingRight: 'rem(18px)',
                                flex: 1,
                            },
                        }}
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan' }}
                    >
                        Get started
                    </Button>

                    <Button
                        component="a"
                        href="https://github.com/mantinedev/mantine"
                        size="xl"
                        variant="default"
                        style={{
                            height: 'rem(54px)',
                            paddingLeft: 'rem(38px)',
                            paddingRight: 'rem(38px)',
                            '@media (max-width: $mantine-breakpoint-sm)': {
                                height: 'rem(54px)',
                                paddingLeft: 'rem(18px)',
                                paddingRight: 'rem(18px)',
                                flex: 1,
                            },
                        }}
                        leftSection={<GithubIcon size={20} />}
                    >
                        GitHub
                    </Button>
                </Group>
            </Container>
        </div>
    );
}
