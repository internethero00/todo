import MyInput from "./UI/input/MyInput.tsx";
import MySelect from "./UI/select/MySelect.tsx";

type PostFilterProps = {
    filter: {sort: string, query: string},
    setFilter: (filter: {sort: string, query: string}) => void
}

const PostFilter = ({filter, setFilter}: PostFilterProps) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(event) => setFilter({...filter, query: event.target.value})}
                placeholder={"Search"}
            />
            <MySelect defaultValue={"Sorting by"}
                      value={filter.sort}
                      onChange={selectedSort => {
                          setFilter({...filter, sort: selectedSort});
                      }}
                      options={[{value: 'title', name: 'Name'},
                          {value: 'body', name: 'Description'}]}/>
        </div>
    );
};

export default PostFilter;