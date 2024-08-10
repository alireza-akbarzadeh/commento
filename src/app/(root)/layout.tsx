import { PropsWithChildren } from 'react';

function Layout(props: PropsWithChildren) {
    const { children } = props;
    return (
        <div
            id="root"
            data-testid="root"
            className="container relative  max-w-lg bg-content-inverse p-0"
        >
            <main className='h-dvh min-h-dvh'>{children}</main>
        </div>
    );
}

export default Layout;
