
const Tags = (props) => {
    const { locale, tags, selectedTags = [], onTagClick } = props;
    return (
        <div class="tag-list flex gap-2 flex-wrap">
            {tags.map(tag => {
                const isSelected = selectedTags.includes(tag);
                return (
                    <span
                        key={tag.slugified}
                        onClick={() => onTagClick?.(tag)}
                        class={`pill tag-button ${isSelected ? 'selected' : ''}`}
                    >
                        <h5>{tag.name}</h5>
                    </span>
                );
            })}
        </div>
    );
}

export default Tags;