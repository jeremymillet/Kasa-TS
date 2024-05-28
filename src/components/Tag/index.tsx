import './Tag.scss';

type TagsPropsType={
    tags: Array<string>
}

const Tag: React.FC<TagsPropsType> = ({ tags}) => {
    return (
        <div>
            <ul className='tag-container'>
                {tags.map((tag,index) => (
                    <li className='tag' key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tag