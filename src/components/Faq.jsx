import { useEffect, useState } from 'preact/hooks';
import { getQuestionPath } from '@src/utilities/getQuestionPath';
import { getQuestionDescription } from '@utilities/getPageDescription';
import { uiStrings } from "@i18n/uiStrings";
import Tags from './Tags.jsx';

const Faq = (props) => {
    const { locale, questions, tags } = props;


    const [selectedTags, setSelectedTags] = useState([]);
    const [query, setQuery] = useState('');

    const [filterUiActive, setFilterUiActive] = useState(false);
    const filterUiArrowClasses = "interact arrow dark:!border-t-black !border-t-white absolute md:right-2 right-5 top-2 transition transition-discrete duration-200 ";
    const filterUiContainerClasses = "absolute bg-black text-white dark:bg-white dark:!text-black lg:top-14 lg:left-100 md:left-10 md:top-29 md:z-30 bg-black filter-ui w-full md:w-[68%] lg:w-[42%] xl:w-[42%] border-black dark:border-white border-4 pb-4 md:px-1 px-6 overflow-hidden h-11 !transition-[height] duration-500 ease-in-out ";

    const handleTagClick = (tag) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    // useEffect(() => {
    //     if (selectedTags.length === 0) {
    //         setFilterUiActive(false);
    //         return;
    //     }
    //     setFilterUiActive(true);
    // }, selectedTags);

    const filteredQuestions =
        selectedTags.length === 0 && !query
            ? questions
            : questions.filter(q => {
                // must match current locale
                const locOk =
                    q.slug.includes(locale);

                if (!locOk) return false;

                // must match all selected tags (or no tags selected)
                const tagsOk =
                    selectedTags.length === 0 ||
                    selectedTags.every(tag => q.data.tags?.includes(tag.name));

                if (!tagsOk) return false;

                // must match query in title (or no query)
                if (!query) return true;

                const title = (q.data.title || '').toLowerCase();

                return title.includes(query.trim().toLocaleLowerCase());
            });


    return (
        <section class="flex flex-col lg:mt-0 sm:relative md:static">
            <div className={filterUiActive ? filterUiContainerClasses + `!h-fit drop-shadow-2xl drop-shadow-black dark:drop-shadow-white` : filterUiContainerClasses}>
                <h3 onClick={() => { setFilterUiActive(!filterUiActive) }} class="hover:underline dark:text-black text-white pb-2 italic mt-0">{`Filter ${selectedTags.length > 0 || query !== `` ? `(${selectedTags.length + (query !== `` ? 1 : 0)})` : ``}`}</h3>
                <span onClick={() => { setFilterUiActive(!filterUiActive) }} className={!filterUiActive ? filterUiArrowClasses + `rotate-0` : filterUiArrowClasses + `rotate-180`}></span>
                <Tags locale={locale} tags={tags} selectedTags={selectedTags} onTagClick={handleTagClick} />
                <input class="w-full rounded-md border-white border-2 placeholder:text-white dark:placeholder:text-black dark:border-black border px-2 h-12 mt-6" value={query} onInput={e => setQuery(e.target.value)} placeholder={uiStrings.searchPlaceHolder[locale]} />
            </div>
            <ul class="faq flex flex-col bg-black dark:bg-white gap-0.5 !py-1 !pt-10 md:!pt-0">
                {filteredQuestions.sort((q_a, q_b) => (q_a.data.position - q_b.data.position)).map((question, index) => (
                    <li class="group faq md:min-w-128 pb-4 px-6 md:px-10 flex flex-col p-2 bg-white dark:bg-black dark:text-white w-full lg:flex-1 " key={question.slug}>
                        <a href={getQuestionPath(locale, 'faq', question.slug)}>
                            <h2 class="text-balance lg:max-w-[70%]">{question.data.title}</h2>
                            <p class="description lg:max-w-[50%]">{getQuestionDescription(question)}</p>
                        </a>
                        <div class="flex gap-2 mt-auto pt-4 max-w-full flex-wrap">
                            {question.data.tags.map(tag => {
                                const isSelected = selectedTags.some(t => t.name === tag);
                                const tag_struct = tags.filter((t) => (t.name == tag))[0];
                                return (
                                    <span
                                        key={tag}
                                        onClick={() => handleTagClick(tag_struct)}
                                        class={`pill tag ${isSelected ? 'selected' : ''}`}
                                    >
                                        <h5>{tag}</h5>
                                    </span>
                                );
                            })}
                        </div>
                    </li>
                ))}
            </ul>
            <div class="fallback w-full text-5xl justify-center align-center p-2 hidden">...</div>
        </section>
    );
    /*
     <blockquote cite={getQuestionPath(locale, 'faq', question.slug)}>
        {getQuestionDescription(question)}
     </blockquote>
    */
}

export default Faq;