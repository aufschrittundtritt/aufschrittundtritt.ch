import { useEffect, useState } from 'preact/hooks';
import HeaderLink from './HeaderLink';
export default ({ initial = false, headerMenuItems, pathname }) => {
    const [active, setActive] = useState(initial);
    const [dark, setDark] = useState(true);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    }, [dark, setDark]);

    const navClass = `px-6 md:px-10 md:py-2 md:h-fit w-full flex justify-start items-center bg-white dark:bg-black py-0 md:pt-2 h-0 overflow-hidden transition duration-100 transition-[height] transition-[padding] transition-discrete ease-in-out`;

    return (
        <nav className={active ? `${navClass} !py-2 !h-fit` : `${navClass}`}>
            <slot />
            <ul class="header__list flex gap-2 h-fit md:flex-row md:gap-4 flex-col w-full">
                {
                    headerMenuItems.map((item) => (
                        <HeaderLink href={item.path} pathname={pathname} label={item.label} className={dark ? "" : "dark"}></HeaderLink>
                    ))
                }
                <li onClick={() => { setDark(!dark) }} class="dark:bg-white bg-black h-8 w-8 md:self-center rounded-full cursor-pointer"></li>
                <li onClick={() => { setActive(!active) }} class="md:hidden absolute bg-black dark:bg-white h-8 w-8 right-6 top-4 cursor-pointer flex flex-col p-1 gap-1 cursor-pointer">
                    <span class="bg-white dark:bg-black w-full h-2"></span>
                    <span class="bg-white dark:bg-black w-full h-2"></span>
                    <span class="bg-white dark:bg-black w-full h-2"></span>
                </li>
            </ul>
        </nav>
    );
};