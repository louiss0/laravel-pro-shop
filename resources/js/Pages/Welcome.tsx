import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props:PageProps) {

    console.log(props)

    return (
        <>
            <Head title="Welcome" />
            This is a react app  I can't believe this works like this
            <Link href='/dashboard'>Dashboard</Link>
        </>
    );
}
