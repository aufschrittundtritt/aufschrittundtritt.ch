export default ({ href, className, pathname, label }) => {
    const ariaCurrent =
        href === pathname || href === pathname.replace(/\/$/, "") ? "page" : "";

    return (
        <li class="bg-black dark:bg-white p-1 px-2 hover:underline">
            <a
                class="page-link"
                href={href}
                className={"page-link " + [className]}
                aria-current={ariaCurrent ? ariaCurrent : undefined}
            >
                <h3>{label}</h3>
            </a>
        </li>
    );
};